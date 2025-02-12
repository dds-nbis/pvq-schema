import schema from "../schema-generation/schema-generator/ns-schema.json" with { type: "json" }
import type { EditGridComponent, FormioComponent } from "./formTypes"
import fs from 'node:fs'

type JsonObj = {
  type: "object" | "string" | "number" | 'boolean',
  properties: Record<string, any>
  additionalProperties: boolean
  required: string[]
  description?: string
  title?: string
}

function isLeafNode(obj: any): boolean {
  return typeof obj !== 'undefined' &&
    obj.type === 'object' &&
    Array.isArray(obj.required) &&
    (obj.required as string[]).includes('value')
}

function isString(obj: JsonObj): boolean {
  return obj?.properties?.value?.type === 'string'
}

function isArray(obj: JsonObj): boolean {
  return obj?.properties?.value?.type === 'array'
}

function getLabel(node: JsonObj) {
  if (node.description) {
    const questionText = node.description.split('\n')?.[0]
    if (!questionText.includes('Question text: ')) {
      console.error("No question text", node)
    } else {
      return questionText.substring('Question text:'.length)
    }
  }
  if (node.title) {
    return node.title
  }
  return 'unknown'
}

function capitalize(s: string): string {
  return s[0].toUpperCase() + s.substring(1)
}

function unCamelCase(s: string): string {
  const segments: string[] = []
  let last = 0
  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i].toUpperCase()) {
      segments.push(capitalize(s.substring(last, i)))
      last = i
    }
  }
  segments.push(capitalize(s.substring(last)))
  return segments.join(" ")
}

function valueRef(node: JsonObj) {
  return node.properties?.value?.$ref as string | undefined
}


function unhandledNode(name: string, node: JsonObj) {
  return new Error(`unhandled node: ${name}: ` + JSON.stringify(node, null, 2))
}

function handleString(name: string, node: JsonObj): FormioComponent {
  const key = node.properties._qid
  const label = getLabel(node)
  return {
    label,
    applyMaskOn: 'change',
    tableView: true,
    validateWhenHidden: false,
    key,
    type: "textfield",
    input: true
  }
}

function handleRefValue(name: string, node: JsonObj): FormioComponent {
  const ref = valueRef(node)
  if (ref?.startsWith('#/$defs/dropdown_')) {
    return {
      label: getLabel(node),
      applyMaskOn: 'change',
      tableView: true,
      key: node.title!,
      type: "select",
      validateWhenHidden: false,
      input: true,
      dataSrc: 'values',
      data: {
        values: schema.$defs[ref.substring('#/$defs/'.length)].enum.map((s: string) => ({ label: s, value: s }))
      }
    }
  } else {
    throw unhandledNode(node)
  }
}

function getId(node: JsonObj): string {
  if (typeof node?.properties?._qid === 'string') {
    return node.properties._qid
  }
  return node.title as string
}

function handleArray(name: string, node: JsonObj): FormioComponent {
  const items = node.properties.value.items
  if (items.$ref) {
    const components = schemaToComponents(name, schema.$defs[items.$ref.substring('#/$defs/'.length)])
    return {
      type: 'editgrid',
      label: getLabel(node),
      tableView: false,
      rowDrafts: false,
      input: true,
      key: getId(node),
      applyMaskOn: 'change',
      validateWhenHidden: false,
      components
    }
  } else {
    throw unhandledNode('', node)
  }
}

function isRawString(node: JsonObj) {
  return node.type === 'string'
}

function isBoolean(node: JsonObj) {
  return node.type === 'boolean'
}

function handleRawString(name: string, node: JsonObj): FormioComponent {
  return {
    'type': 'textfield',
    key: name,
    label: unCamelCase(name),
    input: true,
    applyMaskOn: 'change',
    validateWhenHidden: false,
  }
}

function nodeToComponent(name: string, node: JsonObj): FormioComponent | undefined {
  if (isString(node)) {
    return handleString(name, node)
  } else if (!!valueRef(node)) {
    return handleRefValue(name, node)
  } else if (isArray(node)) {
    return handleArray(name, node)
  } else if (isRawString(node)) {
    return handleRawString(name, node)
  } else {
    throw unhandledNode(name, node)
  }
}

function schemaToComponents(name: string, obj: JsonObj): FormioComponent[] {
  const fields = obj.required
  const components: FormioComponent[] = []
  for (const field of fields) {
    const comp = nodeToComponent(field, obj.properties[field])
    if (comp) {
      components.push(comp)
    } else {
      throw unhandledNode(field, obj)
    }
  }
  return components
}

const form = {
  display: 'form',
  components: [] as FormioComponent[]
}

const sectionNames = schema.required
outer: for (const sectionName of sectionNames) {
  const section = schema.properties[sectionName]
  if (section.type === 'object') {
    console.log(unCamelCase(sectionName))
    const sectionFields = section.required as string[]
    for (const sectionField of sectionFields) {
      const field = section.properties[sectionField]
      if (isLeafNode(field)) {
        try {
          const component = nodeToComponent(sectionField, field)
          if (component) {
            form.components.push(component)
          }
        } catch (e) {
          console.error(e)
          break outer;
        }
      } else {
        throw unhandledNode(sectionField, field)
      }
    }
  }
}

fs.writeFileSync(
  'viewer/out/formio.json',
  JSON.stringify(form, null, 2),
  { flag: 'w+' }
)
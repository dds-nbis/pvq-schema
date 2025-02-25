import schema from "../schema-generation/schema-generator/ns-schema.json" with { type: "json" }
import type { FormioComponent } from "./formTypes"
import fs from 'node:fs'

type JsonObj = {
  type: "object" | "string" | "number" | 'boolean' | 'array',
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

function isArrayValue(obj: JsonObj): boolean {
  return obj?.properties?.value?.type === 'array'
}

function isArray(obj: JsonObj): boolean {
  return obj?.type === 'array'
}

function getLabel(node: JsonObj) {
  if (node.description) {
    const questionText = node.description.split('\n')?.[0]
    if (!questionText.includes('Question text: ')) {
      console.error("No question text", node)
    } else {
      return questionText.substring('Question text: '.length)
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
    return nodeToComponent(name, node)
  }
}

function getId(node: JsonObj): string {
  if (typeof node?.properties?._qid === 'string') {
    return node.properties._qid
  }
  return node.title as string
}

function handleArray(name: string, node: JsonObj): FormioComponent {
  return _handleArray(name, node, node.items)
}

function _handleArray(name: string, node: JsonObj, items: any): FormioComponent {
  let components: FormioComponent[]
  if (items.$ref) {
    components = schemaToComponents(name, schema.$defs[items.$ref.substring('#/$defs/'.length)])
  } else {
    components = schemaToComponents(name, items)
  }
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
}

function handleArrayValue(name: string, node: JsonObj): FormioComponent {
  const items = node.properties.value.items
  return _handleArray(name, node, items)
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

function handleBoolean(name: string, node: JsonObj): FormioComponent {
  return {
    type: "checkbox",
    key: name,
    label: unCamelCase(name),
    input: true,
    applyMaskOn: 'change',
    validateWhenHidden: false
  }
}

function nodeToComponent(name: string, node: JsonObj): FormioComponent {
  if (isString(node)) {
    return handleString(name, node)
  }
  if (!!valueRef(node)) {
    return handleRefValue(name, node)
  }
  if (isArrayValue(node)) {
    return handleArrayValue(name, node)
  }
  if (isArray(node)) {
    return handleArray(name, node)
  }
  if (isRawString(node)) {
    return handleRawString(name, node)
  }
  if (isBoolean(node)) {
    return handleBoolean(name, node)
  }
  throw unhandledNode(name, node)
}

function schemaToComponents(name: string, obj: JsonObj): FormioComponent[] {
  if (!obj.properties) {
    return [nodeToComponent(name, obj)]
  }
  const fields = Object.keys(obj.properties)
  const components: FormioComponent[] = []
  if (fields) {
    for (const field of fields) {
      components.push(nodeToComponent(field, obj.properties[field]))
    }
    // if (fields.length !== Object.keys(obj.properties).length) {
    //   throw unhandledNode(name + "(unhandled fields)", obj)
    // }
    return components
  } else if (obj.properties) {
    throw unhandledNode(name, obj)
  } else {
    return [nodeToComponent(name, obj)]
  }
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
    if ([
      'Employment',
      'People Who Know You Well',
      "Relationship Status",
      "Financial Record",
      "Foreign Contacts",
      "Foreign Financial Interests",
      "Mental Health",
    ].includes(unCamelCase(sectionName))) {
      continue
    }
    const sectionFields = Object.keys(section.properties)
    for (const sectionField of sectionFields) {
      const field = section.properties[sectionField]
      if (isLeafNode(field)) {
        try {
          form.components.push(nodeToComponent(sectionField, field))
        } catch (e) {
          console.error(e)
          break outer;
        }
      } else {
        try {
          form.components.push(nodeToComponent(sectionField, field))
        } catch (e) {
          throw unhandledNode(sectionField, field)
        }
      }
    }
    if (sectionFields.length !== Object.keys(section.properties).length) {
      throw new Error('top level (unhandled fields)')
    }
  }
}

fs.writeFileSync(
  'viewer/out/formio.json',
  JSON.stringify(form, null, 2),
  { flag: 'w+' }
)
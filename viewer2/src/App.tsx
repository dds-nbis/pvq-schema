import Form from '@rjsf/core';
import validator from '@rjsf/validator-ajv8';
import schema from "../../schema-generation/schema-generator/ns-schema.json" with { type: "json" }
import sample from "../../schema-generation/schema-generator/ns-sample.json" with { type: "json" }
import { schemaWalk } from "@cloudflare/json-schema-walker"
import { Section } from './Section.tsx'
import { useMemo, useState } from 'react';

const log = (type: string) => console.log.bind(console, type);

const sections: string[] = []

schemaWalk(schema, (obj) => {
  const desc = obj.description as string | undefined
  if (desc?.includes("Data type:")) {
    obj.description = desc.substring(desc.indexOf('Question text:') >= 0 ? 'Question text: '.length : 0, desc.indexOf('Data type:'))
  }
}, (obj) => {
  if (obj.title === 'PVQ Response') {
    for (const prop of Object.keys(obj.properties)) {
      sections.push(prop)
    }
  }
})

export const FormComponent = () => <Form
  schema={schema}
  formData={sample}
  validator={validator}
  disabled={true}
  onChange={log('changed')}
  onSubmit={log('submitted')}
  onError={log('errors')}
/>

const capitalize = (s: string) => {
  return s[0]
    .toUpperCase()
    .concat(s.substring(1))
    .replaceAll(/[a-z][A-Z]/g, (g) => g[0] + ' ' + g[1])
}

export const Sections = () => {
  const [showingSection, setShowingSection] = useState(sections[0])

  return useMemo(() => <div style={{ display: 'flex', 'flexDirection': "row", height: '100vh', gap: '2rem', padding: '2rem' }}>
    <div className="btn-group-vertical" style={{ overflowY: 'scroll', flexGrow: 1, flexShrink: 0 }}>{sections.map(s => {
      return <button className={`btn ${showingSection === s ? 'btn-primary' : 'btn-defaul'}`} onClick={() => setShowingSection(s)}>{capitalize(s)}</button>
    })}</div>
    {
      sections.map(s => {
        return <Section showing={showingSection === s}><Form
          key={s}
          schema={{ ...schema.properties[s], '$defs': schema.$defs }}
          formData={sample[s]}
          disabled={true}
          validator={validator}
        /></Section>
      })
    }
  </div >, [showingSection])

}


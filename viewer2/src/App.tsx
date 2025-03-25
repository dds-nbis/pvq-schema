import Form from '@rjsf/core';
import validator from '@rjsf/validator-ajv8';
import schema from "../../schema-generation/schema-generator/ns-schema.json" with { type: "json" }
import sample from "../../schema-generation/schema-generator/ns-sample.json" with { type: "json" }
import { schemaWalk } from "@cloudflare/json-schema-walker"
const log = (type: string) => console.log.bind(console, type);

schemaWalk(schema, (obj) => {
  const desc = obj.description as string | undefined
  if (desc?.includes("Data type:")) {
    obj.description = desc.substring(desc.indexOf('Question text:') >= 0 ? 'Question text: '.length : 0, desc.indexOf('Data type:'))
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


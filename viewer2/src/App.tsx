import Form from '@rjsf/core';
import validator from '@rjsf/validator-ajv8';
import schema from "../../schema-generation/schema-generator/ns-schema.json" with { type: "json" }
import sample from "../../schema-generation/schema-generator/ns-sample.json" with { type: "json" }

const log = (type: string) => console.log.bind(console, type);



export const FormComponent = () => <Form
  schema={schema}
  formData={sample}
  validator={validator}
  onChange={log('changed')}
  onSubmit={log('submitted')}
  onError={log('errors')}
/>


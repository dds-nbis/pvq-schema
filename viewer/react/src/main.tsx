import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.scss'
import { Form, FormioProvider } from "@formio/react"
import { Formio } from '@formio/js'
import uswds from "@formio/uswds"
import json from "../../out/formio.json" with { type: 'json' };

const root = createRoot(document.getElementById('root')!)
Formio.use(uswds)
root.render(
  <FormioProvider Formio={Formio}>
    <StrictMode>
      <Form src={json}></Form>
    </StrictMode>
  </FormioProvider>,
)

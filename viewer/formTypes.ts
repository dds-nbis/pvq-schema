// Utility types for validation and conditional logic
export interface ValidationSchema {
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: string;
  custom?: string | object;
}

export interface ConditionalSchema {
  show?: boolean;
  when?: string;
  eq?: string | number | boolean;
  json?: object;
}

export interface LogicSchema {
  // TODO: Implement Field Logic Schema
}

export interface ErrorMessages {
  required?: string;
  min?: string;
  max?: string;
  minLength?: string;
  maxLength?: string;
  invalid_email?: string;
  invalid_date?: string;
  pattern?: string;
  custom?: string;
}

// Base component interface that all Form.io components extend
export interface BaseComponent {
  type: string;
  key: string;
  applyMaskOn: "blur" | "change";
  validateWhenHidden: boolean;
  label?: string;
  placeholder?: string;
  input: boolean;
  tableView?: boolean;
  multiple?: boolean;
  protected?: boolean;
  prefix?: string;
  suffix?: string;
  defaultValue?: any;
  clearOnHide?: boolean;
  unique?: boolean;
  persistent?: boolean;
  hidden?: boolean;
  validate?: ValidationSchema;
  conditional?: ConditionalSchema;
  errors?: ErrorMessages;
  logic?: LogicSchema[];
}

// Component-specific interfaces
export interface AddressComponent extends BaseComponent {
  type: 'address';
  map?: {
    region?: string;
    key?: string;
  };
}

export interface ButtonComponent extends BaseComponent {
  type: 'button';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  leftIcon?: string;
  rightIcon?: string;
  block?: boolean;
  action: 'submit' | 'reset' | 'event' | 'oauth';
  disableOnInvalid?: boolean;
  theme?: 'primary' | 'success' | 'info' | 'warning' | 'danger' | 'default';
}

export interface CheckboxComponent extends BaseComponent {
  type: 'checkbox';
  defaultValue?: boolean;
}

export interface ColumnsComponent extends BaseComponent {
  type: 'columns';
  columns: BaseComponent[][];
}

export interface ContainerComponent extends BaseComponent {
  type: 'container';
  components: BaseComponent[];
}

export interface ContentComponent extends BaseComponent {
  type: 'content';
  html: string;
}

export interface CurrencyComponent extends BaseComponent {
  type: 'currency';
  delimiter?: boolean;
  decimalLimit?: number;
}

export interface DataGridComponent extends BaseComponent {
  type: 'datagrid';
  components: BaseComponent[];
}

export interface DateTimeComponent extends BaseComponent {
  type: 'datetime';
  format?: string;
  enableDate?: boolean;
  enableTime?: boolean;
}

export interface DayComponent extends BaseComponent {
  type: 'day';
  dayFirst?: boolean;
  fields?: {
    day?: { required?: boolean };
    month?: { required?: boolean };
    year?: { required?: boolean };
  };
}

export interface EmailComponent extends BaseComponent {
  type: 'email';
  kickbox?: {
    enabled?: boolean;
  };
}

export interface FieldSetComponent extends BaseComponent {
  type: 'fieldset';
  components: BaseComponent[];
  legend?: string;
}

export interface FileComponent extends BaseComponent {
  type: 'file';
  storage?: string;
  url?: string;
  filePattern?: string;
  fileMinSize?: number;
  fileMaxSize?: number;
}

export interface FormComponent extends BaseComponent {
  type: 'form';
  form?: string;
  reference?: boolean;
}

export interface HiddenComponent extends BaseComponent {
  type: 'hidden';
}

export interface HtmlElementComponent extends BaseComponent {
  type: 'htmlelement';
  tag: string;
  content?: string;
  className?: string;
}

export interface NumberComponent extends BaseComponent {
  type: 'number';
  delimiter?: boolean;
  decimalLimit?: number;
  requireDecimal?: boolean;
}

export interface PanelComponent extends BaseComponent {
  type: 'panel';
  components: BaseComponent[];
  title?: string;
}

export interface PasswordComponent extends BaseComponent {
  type: 'password';
  protected?: boolean;
}

export interface PhoneNumberComponent extends BaseComponent {
  type: 'phoneNumber';
  inputMask?: string;
}

export interface RadioComponent extends BaseComponent {
  type: 'radio';
  values: Array<{ label: string; value: string }>;
  inline?: boolean;
}

export interface ResourceComponent extends BaseComponent {
  type: 'resource';
  resource?: string;
  project?: string;
}

export interface SelectComponent extends BaseComponent {
  type: 'select';
  dataSrc?: 'values' | 'url' | 'resource' | 'custom';
  data?: {
    values?: Array<{ label: string; value: string }>;
    url?: string;
    resource?: string;
    custom?: string;
  };
}

export interface SelectBoxesComponent extends BaseComponent {
  type: 'selectboxes';
  values: Array<{ label: string; value: string }>;
  inline?: boolean;
}

export interface SignatureComponent extends BaseComponent {
  type: 'signature';
  width?: number;
  height?: number;
  backgroundColor?: string;
  penColor?: string;
}

export interface SurveyComponent extends BaseComponent {
  type: 'survey';
  questions: Array<{ value: string; label: string }>;
  values: Array<{ value: string; label: string }>;
}

export interface TableComponent extends BaseComponent {
  type: 'table';
  numRows?: number;
  numCols?: number;
  rows: BaseComponent[][][];
}

export interface TextAreaComponent extends BaseComponent {
  type: 'textarea';
  rows?: number;
  wysiwyg?: boolean;
  editor?: string;
}

export interface TextFieldComponent extends BaseComponent {
  type: 'textfield';
  inputMask?: string;
  allowMultipleMasks?: boolean;
  showWordCount?: boolean;
  showCharCount?: boolean;
  inputFormat?: 'plain' | 'html';
}

export interface TimeComponent extends BaseComponent {
  type: 'time';
  format?: '24HR' | '12HR';
}

export interface WellComponent extends BaseComponent {
  type: 'well';
  components: BaseComponent[];
}

export interface EditGridComponent extends BaseComponent {
  type: 'editgrid',
  rowDrafts: boolean
  components: BaseComponent[]
}

// Union type of all possible component types
export type FormioComponent =
  | AddressComponent
  | ButtonComponent
  | CheckboxComponent
  | ColumnsComponent
  | ContainerComponent
  | ContentComponent
  | CurrencyComponent
  | DataGridComponent
  | DateTimeComponent
  | DayComponent
  | EditGridComponent
  | EmailComponent
  | FieldSetComponent
  | FileComponent
  | FormComponent
  | HiddenComponent
  | HtmlElementComponent
  | NumberComponent
  | PanelComponent
  | PasswordComponent
  | PhoneNumberComponent
  | RadioComponent
  | ResourceComponent
  | SelectComponent
  | SelectBoxesComponent
  | SignatureComponent
  | SurveyComponent
  | TableComponent
  | TextAreaComponent
  | TextFieldComponent
  | TimeComponent
  | WellComponent;

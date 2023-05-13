export interface TYPE_FIELD_PROPS {
   name: RegExp;
   phone: RegExp;
   message: RegExp;
   product: RegExp;
   email: RegExp;
   captcha: RegExp;
}

// Expresiones regulares para validaciones de formulario

export const TYPE_FIELD: TYPE_FIELD_PROPS = {
   name: /[a-z]{3,30}[\s]{0,1}[a-z]{0,30}[\s]{0,1}[a-z]{0,30}/i,
   message: /[\w]+/i,
   product: /[\w]+/i,
   captcha: /[\w]+/i,
   email: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
   phone: /((\(\d{3}\) ?)|(\d{3}-))?\d{3}-\d{4}/i,
};

export interface InitialFormState {
   name: string;
   phone: string;
   email: string;
   message: string;
   product: string;
   captcha: string;
}

export interface InitialFormErrors {
   name: string;
   phone: string;
   email: string;
   captcha: string;
   product: string;
}

// Estado inicial del formulario

export const initialFormState: InitialFormState = {
   name: "",
   phone: "",
   message: "",
   email: "",
   product: "",
   captcha: "",
};

// Campos del formulario que no pueden estar vacios

export const initialFormErrors: InitialFormErrors = {
   name: "",
   phone: "",
   captcha: "",
   email: "",
   product: "",
};

import "./Login.scss";

import * as React from "react";
import { TextField } from "src/page/components/TextField/TextField";
import { MaterialButton } from "src/page/components/buttons/CommonButton";
import { AuthFields } from "src/store/auth";
import { RouteLink } from "src/page/components/CommonLink";

type AuthFieldsAction = {
  state: string;
  type: "EMAIL_CHANGE" | "PASSWORD_CHANGE";
};

const initialRegistrationFields: AuthFields = {
  email: "",
  password: ""
};

function fieldsReducer(state: AuthFields, action: AuthFieldsAction): AuthFields {
  switch (action.type) {
    case "EMAIL_CHANGE":
      return { ...state, email: action.state };
    case "PASSWORD_CHANGE":
      return { ...state, password: action.state };
  }
}

export function Login() {
  const [fields, dispatchField] = React.useReducer(fieldsReducer, initialRegistrationFields);
  return (
    <form className="login">
      <h1 className="login__title">Login to your account</h1>
      <p className="login__text">
        Do you have not account yet?
        <RouteLink to="/registration/" extraClass="login__link">
          Sign up
        </RouteLink>
      </p>
      <TextField
        value={fields.email}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          dispatchField({ type: "EMAIL_CHANGE", state: e.target.value })
        }
        placeholder="Enter email"
        extraClass="login__text-field login__email"
        required
      />
      <TextField
        value={fields.password}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          dispatchField({ type: "PASSWORD_CHANGE", state: e.target.value })
        }
        placeholder="Enter password"
        extraClass="login__text-field login__password"
        required
      />
      <MaterialButton
        type="submit"
        disabled={Object.values(fields).some((f: string) => f.length === 0)}
        extraClass="login__submit-btn"
      >
        Login
      </MaterialButton>
    </form>
  );
}

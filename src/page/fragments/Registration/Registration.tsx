import "./Registration.scss";

import * as React from "react";
import { TextField } from "src/page/components/TextField/TextField";
import { MaterialButton } from "src/page/components/buttons/CommonButton";
import { useSelector, useDispatch } from "react-redux";
import { AuthAction, AuthState, debouncedSignUp, RegistrationFields } from "src/store/auth";
import { Dispatch } from "redux";
import { RootState } from "src/store/root";
import { Redirect } from "react-router";

type RegistrationFieldsAction = {
  state: string;
  type: "FIRST_NAME_CHANGE" | "LAST_NAME_CHANGE" | "EMAIL_CHANGE" | "PASSWORD_CHANGE" | "REPEAT_PASSWORD_CHANGE";
};

const initialRegistrationFields: RegistrationFields = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  repeatPassword: ""
};

function fieldsReducer(state: RegistrationFields, action: RegistrationFieldsAction): RegistrationFields {
  switch (action.type) {
    case "FIRST_NAME_CHANGE":
      return { ...state, firstName: action.state };
    case "LAST_NAME_CHANGE":
      return { ...state, lastName: action.state };
    case "EMAIL_CHANGE":
      return { ...state, email: action.state };
    case "PASSWORD_CHANGE":
      return { ...state, password: action.state };
    case "REPEAT_PASSWORD_CHANGE":
      return { ...state, repeatPassword: action.state };
  }
}

export function Registration() {
  const [fields, dispatchField] = React.useReducer(fieldsReducer, initialRegistrationFields);

  const authData = useSelector<RootState, AuthState>(state => state.authReducer);
  const dispatch = useDispatch<Dispatch<AuthAction>>();

  const onSubmit = React.useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const user = debouncedSignUp(fields);
      // logIn();

      dispatch({ type: "SUCCESS_REGISTRATION", state: { ...authData, user, isAuthenticated: true } });
    },
    [fields]
  );

  if (authData.isAuthenticated) {
    return <Redirect to="/home/" />;
  }

  return (
    <form onSubmit={onSubmit} className="registration">
      <h1 className="registration__title">Sign up</h1>
      <div className="registration__full-name">
        <TextField
          value={fields.firstName}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            dispatchField({ type: "FIRST_NAME_CHANGE", state: e.target.value })
          }
          placeholder="First name"
          extraClass="registration__text-field registration__first-name"
          required
        />
        <TextField
          value={fields.lastName}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            dispatchField({ type: "LAST_NAME_CHANGE", state: e.target.value })
          }
          placeholder="Last name"
          extraClass="registration__text-field registration__last-name"
          required
        />
      </div>
      <TextField
        value={fields.email}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          dispatchField({ type: "EMAIL_CHANGE", state: e.target.value })
        }
        placeholder="Enter email"
        extraClass="registration__text-field registration__email"
        required
      />
      <TextField
        value={fields.password}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          dispatchField({ type: "PASSWORD_CHANGE", state: e.target.value })
        }
        placeholder="Enter password"
        extraClass="registration__text-field registration__password"
        required
      />
      <TextField
        value={fields.repeatPassword}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          dispatchField({ type: "REPEAT_PASSWORD_CHANGE", state: e.target.value })
        }
        placeholder="Repeat password"
        extraClass="registration__text-field registration__repeat-password"
        required
      />
      <MaterialButton
        type="submit"
        disabled={Object.values(fields).some((f: string) => f.length === 0)}
        extraClass="registration__submit-btn"
      >
        Sign up
      </MaterialButton>
    </form>
  );
}

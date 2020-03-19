import { createStore, Action, Store, Reducer } from "redux";
import { CommonErrors } from "src/types/t_redux";
import { LocaleStorage } from "src/utils/locale-storage";
import { debounce } from "lodash";

export type UserInfo = {
  email: string;
  firstName: string;
  lastName: string;
  age?: number;
};

export interface UserAuthData {
  token: string | null;
  password: string;
}

export type UserData = UserInfo & UserAuthData;

export type AuthState = {
  isAuthenticated: boolean | null;
  isLoading: boolean;
  user: UserData | null;
  errors: {};
  error?: CommonErrors;
};

export interface AuthAction extends Action {
  state: AuthState;
  type: "SUCCESS_REGISTRATION" | "REGISTRATION_ERROR" | "AUTH_SUCCESS" | "AUTH_ERROR" | "LOGOUT";
}

const initAuthState: AuthState = {
  isAuthenticated: null,
  isLoading: true,
  user: null,
  errors: {}
};

export const authReducer: Reducer<AuthState, AuthAction> = (state = initAuthState, action: AuthAction) => {
  switch (action.type) {
    case "SUCCESS_REGISTRATION":
      return { ...action.state, isLoading: false };

    case "AUTH_SUCCESS":
      return { ...action.state, isLoading: false };

    case "LOGOUT":
      return { ...state, token: null, isLoading: false };
  }
  return state;
};

export const authStore = createStore(authReducer);

export interface RegistrationFields {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  repeatPassword: string;
}

// methods
/**
 * авторизация, если в кеше есть токен
 */
export function logIn() {
  return new LocaleStorage<UserData>("user").value;
}

export interface AuthFields {
  email: string;
  password: string;
}

/**
 * Получение токена
 * @param user
 */
export const debouncedAuth = debounce(function auth(user: AuthFields) {
  const lsUser = new LocaleStorage<UserData>("user");

  const { email, password } = lsUser.value;

  if ((email === user.email, password === user.password)) {
    return lsUser.value;
  } else {
    throw new Error("Incorrect password or login");
  }
});

// export async function refreshToken(token: string) {
//   const request = await fetch("/api/refresh-token/", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify({ refresh: token })
//   });
//   const answer: UserResult = await request.json();

//   localStorage.setItem("token", answer.token);

//   return answer;
// }

export const debouncedSignUp = debounce(function signUp(user: RegistrationFields): UserData {
  // TODO Проверки пароля
  const lsUser = new LocaleStorage<UserData>("user");

  lsUser.newValue = {
    email: user.email,
    firstName: user.firstName,
    lastName: user.lastName,
    password: user.password,
    token: "sdasdasdasd"
  };

  return lsUser.value;
}, 500);

export function logout() {
  LocaleStorage.clearValue("user");
}

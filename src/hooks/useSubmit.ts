import * as React from "react";

/**
 * Хук на обработку колбэка формы, состояния ответа и ошибки запроса
 * @param onSubmit callback формы
 * @param ref ссылка на ноду формы,
 * если есть вероятность, что компонент формы не будет существовать на момент окончания запроса
 * @return [onSubmit, usLoading, formRef]
 */
export function useSubmit<E>(
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void | Promise<unknown>,
  onError?: (reason: E) => void
): [(e: React.FormEvent<HTMLFormElement>) => void, boolean, React.RefObject<HTMLFormElement>] {
  const [isLoading, setLoading] = React.useState(false);
  // есть вероятность, что компонент формы не будет существовать на момент окончания запроса
  const formRef = React.useRef<HTMLFormElement>(null);

  const _onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      setLoading(true);
      await onSubmit(e);
    } catch (e) {
      formRef.current && onError && onError(e);
    } finally {
      formRef.current && setLoading(false);
    }
  };

  return [_onSubmit, isLoading, formRef];
}

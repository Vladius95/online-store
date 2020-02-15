import * as React from "react";
import { CommonButton } from "src/page/components/buttons/CommonButton";
import { TextField } from "src/page/components/TextField/TextField";
import { useSubmit } from "src/hooks/useSubmit";

export function SubscriptionForm() {
  const onSubmitEmail = React.useCallback(() => {
    console.log("submit");
  }, []);
  const [_onSubmit, isLoading, formRef] = useSubmit(onSubmitEmail);
  return (
    <form onSubmit={_onSubmit} ref={formRef} className="subscription-form">
      <p className="subscription-form__text">Receive all our news and updates</p>
      <TextField type="email" />
      <CommonButton />
    </form>
  );
}

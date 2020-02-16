import "./SubscriptionForm.scss";

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
      <TextField type="email" placeholder="Email Address" />
      <CommonButton extraClass="subscription-form__subscribe-btn">
        <p className="subscription-form__btn-text">Subscribe Now</p>
      </CommonButton>
    </form>
  );
}

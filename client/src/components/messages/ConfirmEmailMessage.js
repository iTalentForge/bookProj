import React from "react";
import { FormattedMessage } from "react-intl";

const ConfirmEmailMessage = () => (
  <div className="alert alert-warning">
    <FormattedMessage id="verify.message"  defaultMessage="Please, verify your email" />
  </div>
);

export default ConfirmEmailMessage;

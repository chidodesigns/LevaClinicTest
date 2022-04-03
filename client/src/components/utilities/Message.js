import React from "react";

function Message({ variant, children }) {
  return (
    <div className={`alert alert-${variant}`} role="alert">
      <p>{children}</p>
    </div>
  );
}

Message.defaultProps = {
  variant: "warning",
};

export default Message;

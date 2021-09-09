import React from "react";

const AlertNotice = () => {
  return (
    <div
      className="alert alert-warning alert-dismissible fade show"
      id="alert-notice"
      role="alert"
    >
      Free Delivery over $100. Gift with Purchase over $150
      <button
        type="button"
        className="btn-close"
        id="to-close"
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>
  );
};

export default AlertNotice;

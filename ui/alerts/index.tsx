import React, { CSSProperties } from "react";
const style: CSSProperties = { display: "block", textAlign: "center" };

const AlertWait = ({ message }: Alert) => {
  return <span style={{ ...style, color: "var(--mist-blue)" }}>{message}</span>;
};

const AlertError = ({ message }: Alert) => {
  return (
    <span style={{ ...style, color: "var(--amaranth)", fontStyle: "italic", fontWeight: 600 }}>
      {message}
    </span>
  );
};

const AlertSuccess = ({ message }: Alert) => {
  return <span style={{ ...style, color: "var(--paris-green)" }}>{message}</span>;
};

export { AlertWait, AlertError, AlertSuccess };

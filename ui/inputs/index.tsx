import React from "react";
import styled from "styled-components";

const Input = styled.input`
  color: var(--dark-cerulean);
  border: solid 1px var(--light-gray);
  width: 100%;
  padding: 0 1rem;
  outline: none;
  border-radius: 5px;
  font-size: 1rem;
  transition: all 0.2s;
  height: 2.8rem;

  &:focus {
    border-color: var(--dark-cerulean);
    box-shadow: inset 0 0 2px rgb(0 0 0 / 40%);
  }
`;

const Span = styled.span`
  display: block;
  margin-bottom: 5px;
  color: var(--ebony-clay);
`;
type InputProps = {
  type?: string;
  placeholder?: string;
  label?: string;
  props?: object;
};

const TextField = ({ label, placeholder, props, type = "text" }: InputProps) => {
  return (
    <label>
      {label && <Span>{label}</Span>}
      <Input type={type} placeholder={placeholder} {...props} />
    </label>
  );
};

export { TextField, Input };

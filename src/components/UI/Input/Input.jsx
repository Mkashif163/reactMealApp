/* eslint-disable react/display-name */
import classes from "./Input.module.css";
import { useImperativeHandle, useRef, forwardRef } from "react";

const Input = forwardRef((props, ref) => {
  const inputRef = useRef();

  const createRef = () => {
    return {
      focus: () => {
        inputRef.current.focus();
      },
    };
  };

  useImperativeHandle(ref, createRef);

  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={inputRef} {...props.input} />
    </div>
  );
});

export default Input;

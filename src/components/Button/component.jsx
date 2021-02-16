import { forwardRef } from "react";
import "./style.css";

export default forwardRef(function Button(props, ref) {
  if (props.type === "button") {
    return (
      <button
        ref={ref}
        type="button"
        onClick={props.onClick}
        className={`Button ${props.selected ? 'Button__Selected' : ''} ${props.className}`}
      >
        <span>{props.children}</span>
      </button>
    );
  }

  return (
    <a ref={ref} {...props} className={`Button ${props.className}`}>
      <span>{props.children}</span>
    </a>
  );
});

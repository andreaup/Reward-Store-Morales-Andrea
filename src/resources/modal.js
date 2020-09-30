import React, { useEffect } from "react";
import { createPortal } from "react-dom";

const modal = document.getElementById("modal");

const Modal = (props) => {
  const element = document.createElement("div");

  useEffect(() => {
    modal.appendChild(element);
    return () => {
      modal.removeChild(element);
    };
  }, [element]);

  return createPortal(<div>{props.children}</div>, element);
};

export default Modal;

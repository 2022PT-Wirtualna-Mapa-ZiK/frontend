import React from "react";

type button = {
  class: string;
  label: string;
};

export default function SubmitButton(props: button) {
  return (
    <div className={`${props.class}`}>
      <button type="submit">{`${props.label}`}</button>
    </div>
  );
}

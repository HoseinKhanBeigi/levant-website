import React, { useMemo, useState } from "react";
import DemoRequest from "../demoRequest/DemoRequest";

interface ContactFormConfiguration {
  subject?: string;
  title?: string;
}

function useContactForm(
  { subject, title }: ContactFormConfiguration,
  defaultState
) {
  let [show, setShow] = useState(defaultState);

  return {
    form: (
      <DemoRequest
        isOpen={show}
        onClose={() => setShow(false)}
        subject={subject}
        title={title}
      />
    ),
    toggle: setShow,
  };
}

export default useContactForm;

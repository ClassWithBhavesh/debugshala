import axios from "axios";
import { useState } from "react";

const useSubmitForm = (BACKEND_API_URL) => {
  const [errorMsg, setErrorMsg] = useState(null);
  const [successMsg, setSuccessMsg] = useState(null);

  const submitForm = async (formData) => {
    setErrorMsg(null);
    setSuccessMsg(null);

    try {
      const response = await fetch(BACKEND_API_URL, {
        method: "post",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });
      const data = await response.json()
      setSuccessMsg(
        "Form Submitted Successfully! Our Team Will Connect With You Soon"
      );
      console.log("Form data sent successfully:", data);
    } catch (err) {
      setErrorMsg("There was an error submitting the form.");
      console.error("Error submitting form:", err);
    }
  };
  return { submitForm, errorMsg, successMsg };
};

export default useSubmitForm;

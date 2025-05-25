import { useState } from "react";
import { validateRegister } from "../utils/validateRegister";
import { validateLogin } from "../utils/validateLogin";

export function useLogin() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    termsAccepted: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = ({ target }) => {
    const { name, value, type, checked } = target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmitUp = (e) => {
    e.preventDefault();

    const newErrors = validateRegister(formData);
    setErrors(newErrors);
    const validate = Object.keys(newErrors).length === 0;
    if (validate) {
      console.log("Formulário válido:", formData);
      // enviar para backend...
    }
  };

  const handleSubmitIn = (e) => {
    e.preventDefault();

    const newErrors = validateLogin(formData);
    setErrors(newErrors);
    const validate = Object.keys(newErrors).length === 0;
    if (validate) {
      console.log("Formulário válido:", formData);
      // enviar para backend...
    }
  };

  return {
    formData,
    setFormData,
    errors,
    setErrors,
    handleChange,
    handleSubmitUp,
    handleSubmitIn
  };
}

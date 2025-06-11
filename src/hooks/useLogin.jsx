import { useState } from "react";
import { validateRegister } from "../utils/validateRegister";
import { validateLogin } from "../utils/validateLogin";
import { getAllUsers } from "../services/fetchUsers";
import { useNavigate } from "react-router";

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

  const navigate = useNavigate();

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

  const handleSubmitIn = async (e) => {
    e.preventDefault();

    const newErrors = validateLogin(formData);
    setErrors(newErrors);
    const validate = Object.keys(newErrors).length === 0;
    if (validate) {
      console.log("Formulário válido:", formData);
      const data = await getAllUsers();

      if (
        data.find(
          (e) => e.email === formData.email && e.password === formData.password
        )
      ) {
        console.log("certo");
        navigate("/");
      } else {
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          password: "",
          confirmPassword: "",
          termsAccepted: false,
        });
      }
    }
  };

  return {
    formData,
    setFormData,
    errors,
    setErrors,
    handleChange,
    handleSubmitUp,
    handleSubmitIn,
  };
}

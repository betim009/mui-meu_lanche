export function validateLogin(formData) {
  const newErrors = {};

  if (!formData.email.includes("@")) newErrors.email = "Email inválido";

  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
  if (!passwordRegex.test(formData.password)) {
    newErrors.password =
      "Mínimo 6 caracteres, incluindo 1 letra maiúscula, 1 minúscula e 1 número";
  }

  return newErrors;
}

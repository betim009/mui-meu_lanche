export function validateRegister(formData) {
  const newErrors = {};

  if (!formData.fullName.trim()) newErrors.fullName = "Nome é obrigatório";
  if (!formData.email.includes("@")) newErrors.email = "Email inválido";
  if (formData.phone.length < 10) newErrors.phone = "Telefone inválido";

  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
  if (!passwordRegex.test(formData.password)) {
    newErrors.password =
      "Mínimo 6 caracteres, incluindo 1 letra maiúscula, 1 minúscula e 1 número";
  }

  if (formData.password !== formData.confirmPassword) {
    newErrors.confirmPassword = "As senhas não coincidem";
  }

  if (!formData.termsAccepted) {
    newErrors.termsAccepted = "Você deve aceitar os termos";
  }

  // Aqui está a correção: retornar o objeto de erros, não booleano
  return newErrors;
}

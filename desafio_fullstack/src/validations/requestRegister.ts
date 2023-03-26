import * as yup from "yup";
// import "react-toastify/dist/ReactToastify.css";

const schema = yup.object().shape({
  fullName: yup.string().required("Nome completo de usuário é obrigatório"),
  email: yup.string().required("Deve ser um email válido"),
  secondEmail: yup.string(),
  password: yup
    .string()
    .matches(/.{6,}/, "Deve ter no minimo 6 digitos")
    .required("Você precisa cadastrar uma senha"),
  confirmPassword: yup
    .string()
    .oneOf(
      [yup.ref("password")],
      "Confirmação de senha deve ser igual a senha"
    ),
  phoneNumber: yup
    .string()
    .matches(/.{11,}/, "Deve ter 11 digitos")
    .required("Esse espaço não pode ficar em branco"),
  secondPhoneNumber: yup.string(),
});

export default schema;

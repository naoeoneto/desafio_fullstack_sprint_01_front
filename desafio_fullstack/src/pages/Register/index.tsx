import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useUserContext } from "../../contexts/userContext";
import schema from "../../validations/requestRegister";
import Register from "./styles";

export interface iUserRegister {
  fullName: string;
  email: string;
  secondEmail?: string;
  password: string;
  confirmPassword: string;
  phoneNumber: string;
  secondPhoneNumber?: string;
}

const RegisterPage = () => {
  const { onSubmit } = useUserContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iUserRegister>({
    resolver: yupResolver(schema),
  });

  return (
    <Register>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h3>Crie sua conta</h3>
        <div>
          <label>
            Nome
            <input
              type="name"
              placeholder="Digite aqui seu nome"
              {...register("fullName")}
            />
            <span>{errors.fullName?.message}</span>
          </label>
          <label>
            Email
            <input
              type="email"
              placeholder="Digite aqui seu email"
              {...register("email")}
            />
            <span>{errors.email?.message}</span>
          </label>
          <label>
            Email alternativo
            <input
              type="email"
              placeholder="Digite aqui seu email alternativo"
              {...register("secondEmail")}
            />
            <span>{errors.secondEmail?.message}</span>
          </label>
          <label>
            Senha
            <input
              type="password"
              placeholder="Digite aqui sua senha"
              {...register("password")}
            />
            <span>{errors.password?.message}</span>
          </label>
          <label>
            Confirmar Senha
            <input
              type="password"
              placeholder="Confirme sua senha"
              {...register("confirmPassword")}
            />
            <span>{errors.confirmPassword?.message}</span>
          </label>
          <label>
            Telefone
            <input
              type="text"
              placeholder="Informe seu número de telefone"
              {...register("phoneNumber")}
            />
            <span>{errors.phoneNumber?.message}</span>
          </label>
          <label>
            Outro Telefone
            <input
              type="text"
              placeholder="Informe seu número de telefone alternativo"
              {...register("secondPhoneNumber")}
            />
            <span>{errors.phoneNumber?.message}</span>
          </label>
        </div>
        <button type="submit">Cadastrar</button>
        <Link to="/">Voltar</Link>
      </form>
    </Register>
  );
};

export default RegisterPage;

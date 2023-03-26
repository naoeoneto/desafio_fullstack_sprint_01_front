import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useUserContext } from "../../contexts/userContext";
import schema from "../../validations/requestLogin";
import Login from "./styles";

export interface iUserLogin {
  email: string;
  password: string;
}

const LoginPage = () => {
  const { exportData } = useUserContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iUserLogin>({
    resolver: yupResolver(schema),
  });

  return (
    <Login>
      <h1>Bem-vinde a Minha Agenda</h1>
      <form onSubmit={handleSubmit(exportData)}>
        <h3>Faça seu login</h3>
        <div>
          <label>Email:
            <input placeholder="Digite seu email aqui" type='email' {...register('email')}/>
            <span>{errors.email?.message}</span>
          </label>
          <label>Senha:
            <input placeholder="Digite sua senha aqui" type='password' {...register('password')}/>
            <span>{errors.password?.message}</span>
          </label>
        </div>
        <button type="submit">Entrar</button>
        <p>Ainda não possui uma agenda?</p>
        <Link to="/register">Crie uma agora mesmo!</Link>
      </form>
    </Login>
  );
};

export default LoginPage;

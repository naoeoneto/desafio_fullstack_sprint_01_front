import { Link } from "react-router-dom";
import { useUserContext } from "../../../contexts/userContext";
import Header from "./styles";

const DashboardHeader = () => {
  const { setLoading } = useUserContext();

  function logout() {
    window.localStorage.clear();
    setLoading(true);
  }

  return (
    <Header>
      <h1>Minha Agenda</h1>
      <Link to="/" onClick={logout}>
        Sair
      </Link>
    </Header>
  );
};

export default DashboardHeader;

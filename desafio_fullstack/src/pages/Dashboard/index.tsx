import { useUserContext } from "../../contexts/userContext";
import DashboardHeader from "./Header";

const DashboardPage = () => {
  const {user, loading} = useUserContext()

  return (
    <div>
      <DashboardHeader />
    </div>
  );
};

export default DashboardPage;

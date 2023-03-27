import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import { iUserLogin } from "../pages/Login";
import { iUserRegister } from "../pages/Register";
import { instance } from "../services/instance";
import { AxiosError } from "axios";

export interface iUser {
  id: string;
  fullName: string;
  email: string;
  secondEmail?: string;
  phoneNumber: string;
  secondPhoneNumber?: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  deletedAt?: string;
}

export interface iUserProviderProps {
  children: ReactNode;
}

interface iUserContext {
  user: iUser | null;
  exportData(data: iUserLogin): Promise<void>;
  onSubmit(data: iUserRegister): Promise<void>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  loading: boolean;
  setUser: React.Dispatch<React.SetStateAction<iUser | null>>;
}

export interface iApiError {
  status: string;
  message: string;
}

interface iLoginResponse {
  user: iUser;
  token: string;
}

export const UserContext = createContext<iUserContext>({} as iUserContext);

const UserProvider = ({ children }: iUserProviderProps) => {
  const [user, setUser] = useState<iUser | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    async function loadInfoUser() {
      const token = localStorage.getItem("@authToken");
      const id = localStorage.getItem("@id");

      if (token) {
        try {
          instance.defaults.headers.common.authorization = `Bearer ${id}`;
          const { data } = await instance.get<iUser>(`/users/${id}`);
          setUser(data);
        } catch (error) {
          localStorage.clear();
          console.error(error);
        }
      }
      setLoading(false);
    }
    loadInfoUser();
  }, []);

  async function exportData(data: iUserLogin): Promise<void> {
    try {
      const userInfo = await instance.post<iLoginResponse>("/login", data);
      const { user, token } = userInfo.data;

      instance.defaults.headers.common.authorization = `Bearer ${token}`;
      localStorage.setItem("@authToken", token);
      localStorage.setItem("@id", user.id);

      setUser(user);
      setLoading(false);

      navigate(`/dashboard`, { replace: true });
    } catch (error) {
      const loginError = error as AxiosError<iApiError>;
      console.error(loginError?.message);
    }
  }

  async function onSubmit(data: iUserRegister): Promise<void> {
    try {
      const newUser = await instance.post<iUser>("/users", data);
      console.log(newUser);
      navigate("/");
    } catch (error) {
      const registerError = error as AxiosError<iApiError>;
      console.error(registerError?.message);
    }
  }

  return (
    <UserContext.Provider
      value={{ user, 
        exportData, 
        onSubmit, 
        setLoading, 
        loading, 
        setUser 
      }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;


export function useUserContext(): iUserContext {
  const myContext = useContext(UserContext);

  return myContext;
}

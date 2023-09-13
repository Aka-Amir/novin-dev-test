import { useNavigate } from "react-router-dom";
import { TokenData } from "../../@types";
import { LoginBox } from "../../features";
import { setUser } from "../../state/users/users.signals";

export default function AuthenticationPage() {
  const navigate = useNavigate();
  const onAuthenticated = (token: TokenData) => {
    setUser(token);
    navigate("/users");
  };

  return (
    <section className="grid grid-cols-3 h-screen">
      <div className="bg-gradient-to-br from-theme-primary shadow-right rounded-e-3xl to-theme-primary-lighten w-full h-full p-10 flex justify-start items-center">
        <div className="flex flex-col gap-y-10">
          <h1 className="text-theme-black font-bold text-4xl">
            Welcome to aka-amir's test application
          </h1>
          <p className="text-theme-black">
            This application is a user management application
          </p>
        </div>
      </div>
      <div className="col-span-2 flex justify-center items-center">
        <div className="w-3/4">
          <LoginBox onAuthenticated={onAuthenticated} />
        </div>
      </div>
    </section>
  );
}

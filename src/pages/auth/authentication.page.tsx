import { useNavigate } from "react-router-dom";
import { TokenData } from "../../@types";
import { LoginBox } from "../../features";
import { setUser } from "../../state/users/users.signals";
import FadeUp from "../../animated/fade/fadeUp.compoent";

export default function AuthenticationPage() {
  const navigate = useNavigate();
  const onAuthenticated = (token: TokenData) => {
    setUser(token);
    navigate("/users");
  };

  return (
    <section className="grid grid-cols-3 h-screen max-md:flex max-md:flex-col ">
      <FadeUp delay={0.15}>
        <div className="bg-gradient-to-br from-theme-primary shadow-right max-md:flex-[0.1] max-md:bg-none max-md:shadow-none rounded-e-3xl to-theme-primary-lighten w-full h-full p-10 flex justify-start items-center">
          <div className="flex flex-col gap-y-10 max-md:w-full">
            <FadeUp delay={0.25}>
              <h1 className="text-theme-black font-bold max-lg:text-center lg:text-4xl md:text-3xl text-xl">
                Welcome to aka-amir's test application
              </h1>
            </FadeUp>
            <FadeUp delay={0.45}>
              <p className="text-theme-black max-lg:text-center max-md:text-sm">
                This application is a user management application
              </p>
            </FadeUp>
          </div>
        </div>
      </FadeUp>
      <div className="col-span-2 flex justify-center items-center max-md:flex-1">
        <div className="w-3/4">
          <FadeUp delay={0.5}>
            <LoginBox onAuthenticated={onAuthenticated} />
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

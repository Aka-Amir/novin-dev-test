import { useState } from "react";
import { map } from "rxjs";
import { TokenData } from "../../@types";
import Loading from "../../animated/loading/loading.animated";
import EmailAtIcon from "../../assets/icons/emailAt.icon";
import LockIcon from "../../assets/icons/lock.icon";
import OpenLock from "../../assets/icons/openLock.icon";
import { InfoBox } from "../../components/box";
import { FilledButton } from "../../components/button";
import IconedTextField from "../../components/textField/IconedTextField.component";
import { urlConf } from "../../config/urlConf";
import useRequest from "../../hooks/useRequest";
import { LoginBoxProps } from "./@types/loginBox.propsType";

export default function LoginBox(props: LoginBoxProps) {
  const [viewPassword, setViewPassword] = useState(false);
  const { loading: loadingLoginRequest, send: login } = useRequest<TokenData>(
    urlConf.login,
    "post"
  );

  const onLogin = (email: string, password: string) => {
    login({
      email,
      password,
    })
      .pipe(map(({ data }) => data))
      .subscribe({
        next: (value) => {
          props.onAuthenticated(value);
        },
        error: (e) => {
          console.log(e);
        },
      });
  };

  return (
    <InfoBox className="flex flex-col shadow-xl border-theme-primary-lighten gap-y-10">
      <div>
        <h2 className="text-2xl text-center font-black text-theme-black/80">
          Login
        </h2>
      </div>
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onLogin(
              e.currentTarget.email.value,
              e.currentTarget.password.value
            );
          }}
          action="#"
          method="post"
          className="flex flex-col gap-y-6 mt-10"
        >
          <IconedTextField
            disabledIcon
            placeholder="Email"
            name="email"
            icon={<EmailAtIcon />}
          />
          <IconedTextField
            placeholder="Password"
            icon={viewPassword ? <OpenLock /> : <LockIcon />}
            name="password"
            onIconClicked={() => {
              setViewPassword(!viewPassword);
            }}
            type={viewPassword ? "text" : "password"}
          />

          <div className="flex justify-center py-10">
            <FilledButton
              type="submit"
              className="font-bold shadow-xl uppercase py-3 px-24"
            >
              {loadingLoginRequest ? (
                <Loading className="w-10 h-10 bg-theme-black" />
              ) : (
                <>Login</>
              )}
            </FilledButton>
          </div>
        </form>
      </div>
    </InfoBox>
  );
}

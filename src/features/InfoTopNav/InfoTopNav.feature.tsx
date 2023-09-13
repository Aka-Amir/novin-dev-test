import { useNavigate } from "react-router-dom";
import useSWR from "swr";
import LogoutIcon from "../../assets/icons/logout.icon";
import { OutlinedButton } from "../../components/button";
import { urlConf } from "../../config/urlConf";
import { fetchSwrData } from "../../helpers/swrFetcherFactory.helper";
import { deleteUser } from "../../state/users/users.signals";
import Loading from "../../animated/loading/loading.animated";

export default function InfoTopNav() {
  const { data, isLoading } = useSWR(urlConf.users + "/2", fetchSwrData);
  const navigate = useNavigate();
  const logout = () => {
    deleteUser(null);
    navigate("/");
  };
  return (
    <div className="fixed top-5 left-[2vw] w-[96vw] items-center bg-theme-light p-3 rounded-xl s justify-between flex flex-row-reverse">
      <div className="flex flex-row-reverse items-center border  gap-x-5 px-5 py-2 rounded-lg bg-gradient-to-br bg-theme-light border-theme-primary shadow-lg">
        {!isLoading ? (
          <>
            <img
              src={data.avatar}
              alt="avatar"
              width={50}
              className="rounded-full border-2 border-theme-primary shadow-lg"
              height={50}
            />
            <div className="flex flex-col">
              <span className="font-semibold">
                {data.first_name} {data.last_name}
              </span>
              <span className="text-xs">{data.email}</span>
            </div>
          </>
        ) : (
          <>
            <Loading className="w-10 h-10" />
          </>
        )}
      </div>
      <div className="flex flex-row items-center">
        {isLoading ? (
          <>
            <Loading className="w-10 h-10" />
          </>
        ) : (
          <OutlinedButton
            onClick={logout}
            className="px-2 py-2 shadow-lg rounded-full"
          >
            <LogoutIcon />
          </OutlinedButton>
        )}
      </div>
    </div>
  );
}

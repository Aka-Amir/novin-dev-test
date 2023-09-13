import { useNavigate } from "react-router-dom";
import { UserDataType } from "../../@types/data/user.data-type";
import { Box } from "../../components/box";

export default function UsersCard(props: UserDataType) {
  const navigate = useNavigate();
  return (
    <Box>
      <div
        className="p-5 w-full h-full gap-y-5 cursor-pointer flex flex-col items-center gap-x-5 px-5 py-2 rounded-lg bg-gradient-to-br bg-theme-light border-theme-primary"
        onClick={() => {
          navigate(`./${props.id}`);
        }}
      >
        <img
          src={props.avatar}
          alt="avatar"
          width={100}
          className="rounded-full border-2 border-theme-primary shadow-lg"
          height={100}
        />
        <div className="flex flex-col text-center">
          <span className="font-semibold">
            {props.first_name} {props.last_name}
          </span>
          <span className="text-xs">{props.email}</span>
        </div>
      </div>
    </Box>
  );
}

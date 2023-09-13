import { useParams } from "react-router-dom";
import useSWR from "swr";
import { urlConf } from "../../config/urlConf";
import Loading from "../../animated/loading/loading.animated";
import { fetchSwrData } from "../../helpers/swrFetcherFactory.helper";
import FadeUp from "../../animated/fade/fadeUp.compoent";
import FadeLeft from "../../animated/fade/fadeLeft.component";
import FadeRight from "../../animated/fade/fadeRight.component";

export default function UsersDetailsPage() {
  const { id } = useParams();
  const { data, isLoading } = useSWR(urlConf.users + "/" + id, fetchSwrData);
  return (
    <div>
      {isLoading ? (
        <>
          <Loading />
        </>
      ) : (
        <>
          <div className="flex flex-col">
            <div className="flex justify-center">
              <FadeUp>
                <img
                  src={data?.avatar}
                  alt="user-avatar"
                  width={100}
                  height={100}
                  className="rounded-full shadow-xl"
                />
              </FadeUp>
            </div>

            <div className="flex justify-center flex-col items-center mt-10 gap-y-2">
              <FadeLeft delay={0.25}>
                <h2 className="text-2xl font-bold">
                  {data.first_name} {data.last_name}
                </h2>
              </FadeLeft>
              <FadeRight delay={0.5}>
                <p className="text-sm">{data.email}</p>
              </FadeRight>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

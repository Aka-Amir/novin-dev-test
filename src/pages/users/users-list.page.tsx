import useSWR from "swr";
import { urlConf } from "../../config/urlConf";
import { useEffect, useState } from "react";
import Loading from "../../animated/loading/loading.animated";
import { UserDataType } from "../../@types/data/user.data-type";
import { UsersCard } from "../../features";
import { fetchSwrData } from "../../helpers/swrFetcherFactory.helper";
import { FilledButton } from "../../components/button";
import FadeUp from "../../animated/fade/fadeUp.compoent";

export default function UsersListPage() {
  const [page, setPage] = useState(1);
  const { data, isLoading, error } = useSWR(
    urlConf.users + "?page=" + page,
    fetchSwrData
  );
  useEffect(() => {
    console.log(error);
  }, [error]);
  return (
    <div className="">
      {isLoading ? (
        <Loading className="w-20 h-20" />
      ) : (
        <div className="md:grid-cols-3 sm:grid-cols-2 grid-cols-1 grid">
          {data.map((item: UserDataType, index: number) => (
            <FadeUp key={`user-${index}`} delay={(index + 1) / 10}>
              <div className="p-10">
                <UsersCard {...item} />
              </div>
            </FadeUp>
          ))}
        </div>
      )}

      <div className="flex flex-row-reverse items-center justify-center gap-x-10">
        <div>
          <FilledButton
            onClick={() => {
              setPage(page + 1);
            }}
            disabled={page === 2}
          >
            Next
          </FilledButton>
        </div>
        <div>
          <FilledButton
            onClick={() => {
              setPage(page - 1);
            }}
            disabled={page === 1}
          >
            Back
          </FilledButton>
        </div>
      </div>
    </div>
  );
}

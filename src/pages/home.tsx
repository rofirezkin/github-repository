import { useEffect, useState } from "react";
import { useGetSearchUser } from "../hooks/useGetSearchUser";
import Accordion from "../components/accordion/accordion";
import { useGetUserRepos } from "../hooks/useGetUserRepos";
import Card from "../components/card/card";
import { UserReposResponse } from "../apis/user/get.user-repos";
import Button from "../components/button/button";
import Input from "../components/input/input";

export default function Home() {
  const [query, setQuery] = useState("");
  const [username, setUsername] = useState("");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [currentRepos, setCurrentRepos] = useState<UserReposResponse>([]);

  const {
    data: users,
    mutate: getSearchUser,
    isPending: isLoading,
    isSuccess,
    isError,
    error,
  } = useGetSearchUser();

  const {
    data: repos,
    isLoading: isLoadingRepos,
    isError: isErrorRepos,
    error: errorRepos,
  } = useGetUserRepos({
    params: {
      username,
    },
    options: { enabled: !!username },
  });

  const handleAccordionClick = (index: number, login: string) => {
    if (activeIndex === index) {
      setActiveIndex(null);
      setUsername("");
    } else {
      setActiveIndex(index);
      setUsername(login);
    }
  };

  useEffect(() => {
    setCurrentRepos([]);
  }, [username]);

  useEffect(() => {
    if (!isLoadingRepos) {
      setCurrentRepos(repos);
    }
  }, [repos, isLoadingRepos]);

  return (
    <div className=" h-dvh w-full shadow-2xl md:w-md  max-w-md overflow-auto ">
      <div className="top-0 sticky bg-white dark:bg-white dark:text-black p-4">
        <Input value={query} onChange={(e) => setQuery(e.target.value)} />
        <Button
          isLoading={isLoading}
          onClick={() => {
            setCurrentRepos([]);
            getSearchUser({ query });
            setActiveIndex(null);
          }}
          title="Search"
        />
        {isSuccess && users.data.items.length > 0 && (
          <p className="mt-2">Showing user for "{query}"</p>
        )}
        {users?.data?.items?.length === 0 && (
          <p className="mt-4 text-center">Data not found</p>
        )}
      </div>

      <div className="px-4 dark:bg-white">
        {isError && (
          <p className="text-red-500">
            {error?.response?.data?.message || "Internal Server Error"}
          </p>
        )}
        <ul>
          {users?.data.items.map((user, index) => (
            <div className="flex flex-col space-y-3">
              <Accordion
                isOpen={activeIndex === index}
                onClick={() => handleAccordionClick(index, user.login)}
                renderTitle={user.login}
                renderContent={
                  <div>
                    {isLoadingRepos && (
                      <div className="flex items-center justify-center">
                        <div className="loader"></div>
                        <p className="text-center m-4">Loading..</p>
                      </div>
                    )}
                    {currentRepos.length === 0 && !isLoadingRepos && (
                      <p className="text-center m-4">No Data found</p>
                    )}

                    {isErrorRepos && (
                      <p className="text-red-500">
                        {errorRepos?.response?.data?.message ||
                          "Internal Server Error"}
                      </p>
                    )}
                    {currentRepos.map((repo, i) => (
                      <Card
                        count={repo.stargazers_count}
                        key={`list-${i}`}
                        description={repo.description}
                        title={repo.name}
                      />
                    ))}
                  </div>
                }
              />
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}

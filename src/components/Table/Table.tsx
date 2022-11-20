import { useQuery } from "@apollo/client";
import { REPOSITORIES_QUERY } from "../../queries/repositoriesQuery";

const Table = () => {
  const { data } = useQuery(REPOSITORIES_QUERY);
  console.log(data);

  return <div></div>;
};

export default Table;

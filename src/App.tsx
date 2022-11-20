import { useQuery } from "@apollo/client";
import Table from "./components/Table/Table";
import { REPOSITORIES_QUERY } from "./queries/repositoriesQuery";

const App = () => {
  const { data } = useQuery(REPOSITORIES_QUERY);
  return (
    <>
      <Table data={data?.viewer.repositories.nodes} />
    </>
  );
};

export default App;

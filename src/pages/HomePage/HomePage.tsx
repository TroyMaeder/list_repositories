import { useQuery } from "@apollo/client";
import { Row } from "../../helpers/createRow";
import { REPOSITORIES_QUERY } from "../../queries/repositoriesQuery";
import Table from "../../components/Table/Table";

export interface RepositoriesQueryResponse {
  viewer: {
    login: string;
    repositories: {
      nodes: Row[];
    };
  };
}

const HomePage = () => {
  const { data, loading } =
    useQuery<RepositoriesQueryResponse>(REPOSITORIES_QUERY);

  return (
    <Table
      loading={loading}
      user={data?.viewer?.login}
      tableData={data?.viewer.repositories.nodes}
    />
  );
};

export default HomePage;

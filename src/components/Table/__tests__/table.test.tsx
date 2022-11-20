import { render } from "@testing-library/react";
import Table from "../Table";

const tableDataMock = {
  name: "readmes-for-founders-and-coders",
  starIcon: "",
  stargazerCount: 100,
  forkIcon: "",
  forkCount: 200,
};

describe("Table", () => {
  const TableComponent = <Table loading={false} tableData={[tableDataMock]} />;
  render(TableComponent);

  it("should render correct markup", () => {
    const { container } = render(TableComponent);
    expect(container).toMatchSnapshot();
  });
});

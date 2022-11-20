export interface Row {
  name: string;
  starIcon: string;
  stargazerCount: number;
  forkIcon: string;
  forkCount: number;
}

export const createRow = (row: Row) => {
  return {
    name: `${row?.name}`,
    starIcon: "🌟",
    stargazerCount: row?.stargazerCount,
    forkIcon: "🍴",
    forkCount: row?.forkCount,
  };
};

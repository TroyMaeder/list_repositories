import { createRow } from "../createRow"

export interface Row {
    name: string;
    starIcon: string;
    stargazerCount: number;
    forkIcon: string;
    forkCount: number;
  }

const row = {
    name: "Mock repository",
    starIcon: "🌟",
    stargazerCount: 3,
    forkIcon: "🍴",
    forkCount: 2,
} as Row


it('creates row', () => {
    expect(createRow()).toEqual(row);
});

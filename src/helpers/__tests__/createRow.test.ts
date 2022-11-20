import { createRow, Row } from "../createRow"

const row = {
    name: "Mock repository",
    starIcon: "🌟",
    stargazerCount: 3,
    forkIcon: "🍴",
    forkCount: 2,
} as Row

const rowData = {
    name: "Mock repository",
    stargazerCount: 3,
    forkCount: 2,
} as Row


describe("builds table rows", () => {
    it('creates row', () => {
        expect(createRow(rowData)).toEqual(row);
    });
})

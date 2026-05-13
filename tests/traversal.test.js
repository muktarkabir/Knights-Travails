import { possibleMovesFromAPosition } from "../traversal.js";
describe("Knight Moves from given position", () => {
  test("Should give correct coordinates", () => {
    const myTest = possibleMovesFromAPosition([5, 3]);
    const answer = [
      [7, 4],
      [7, 2],
      [3, 4],
      [3, 2],
      [6, 5],
      [4, 5],
      [6, 1],
      [4, 1],
    ];

    expect(myTest).toEqual(answer);
    expect(possibleMovesFromAPosition([0, 6])).toEqual([
      [2, 7],
      [2, 5],
      [1, 4],
    ]);
  });
});

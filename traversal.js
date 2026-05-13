function kinghtMoves(start, destination) {
  //Check if provided paramenters are valid coordinates
  if (!Array.isArray(start) || !Array.isArray(destination))
    throw new Error("Provide arrays of coordinates for start and destination");
  if (start.length !== 2 || destination.length !== 2)
    throw new Error("Each coordinate should have two numbers between 0 and 7");
  [...start, ...destination].forEach((coord) => {
    if (typeof coord !== "number") {
      throw new Error("Coordinate points must be numbers");
    } else if (coord < 0 || coord > 7) {
      throw new Error("Point must be between 0 and 7");
    }
  });
  //So now that my coordinates are valid, what next??
  //First record every position i can visit from the start position
  //Then explore each one until the destination is reached.
  //The shortest of these positionsis my answer.
}

export const possibleMovesFromAPosition = (position) => {
  const moves = [
    [2, 1],
    [2, -1],
    [-2, 1],
    [-2, -1],
    [1, 2],
    [-1, 2],
    [1, -2],
    [-1, -2],
  ];

  return moves
    .map(([dx, dy]) => [position[0] + dx, position[1] + dy])
    .filter(([x, y]) => x >= 0 && x <= 7 && y >= 0 && y <= 7);
}

const graph = [
  // 0  1  2  3  4  5  6  7
  [0, 0, 0, 0, 0, 0, 0, 0], //0
  [0, 0, 0, 0, 0, 0, 0, 0], //1
  [0, 0, 0, 0, 0, 0, 0, 0], //2
  [0, 0, 0, 0, 0, 0, 0, 0], //3
  [0, 0, 0, 0, 0, 0, 0, 0], //4
  [0, 0, 0, 0, 1, 0, 0, 0], //5
  [0, 0, 0, 0, 0, 0, 0, 0], //6
  [0, 0, 0, 0, 0, 0, 0, 0], //7
];
//[7, 4],[7, 2],[3, 4],[3, 2],[6, 5],[4, 5],[6, 1],[4, 1]

//Use a queue
//Something like queue = [],
//
//Track visited positions
//Something like visitedPositions = [],
//  when traversing check if position is  not in visitedPosition to proceed,
//  otherwise skip and move to next position.
possibleMovesFromAPosition([5, 3]);

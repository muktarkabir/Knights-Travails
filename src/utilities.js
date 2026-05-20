export const validateCoordinates = (start,destination)=>{
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
function kinghtMoves(start, destination) {
  //Check if provided paramenters are valid coordinates
  if (!Array.isArray(start) || !Array.isArray(destination))
    throw new Error("Provide arrays of coordinates for start and destination");
  if (start.length !== 2 || destination.length !== 2)
    throw new Error("Each coordinate should have two numbers between 0 and 7");
  start.forEach((coord) => {
    if (typeof coord !== "number") {
      throw new Error("Coordinate points must be numbers");
    } else if (coord < 0 || coord > 7) {
      throw new Error("Point must be between 0 and 7");
    }
  });
  destination.forEach((coord) => {
    if (typeof coord !== "number") {
      throw new Error("Coordinate points must be numbers");
    } else if (coord < 0 || coord > 7) {
      throw new Error("Point must be between 0 and 7");
    }
  });
}

const graph = [
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
];

//Use a queue
//Something like queue = [],
//
//Track visited positions
//Something like visitedPositions = [],
//  when traversing check if position is  not in visitedPosition to proceed,
//  otherwise skip and move to next position.
kinghtMoves([8, 3], [4, 2]);

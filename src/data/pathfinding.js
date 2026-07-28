// Precomputed pathfinding demo state for the 9x9 warehouse grid.
// Cell keys are "row-col" (0-indexed, top-left origin). Start = 8-0, Goal = 0-8.
export const WALLS = new Set([
  '1-3', '2-3', '3-3', '4-3', '4-4', '4-5', '4-6', '2-7', '3-7',
  '4-7', '5-7', '6-7', '7-2', '7-3', '7-4', '7-5',
]);

// Order in which cells are examined by an uninformed (blind) search.
export const BLIND_VISITED = ['8-0', '7-0', '8-1', '6-0', '7-1', '8-2', '5-0', '6-1', '7-2', '8-3', '4-0', '5-1', '6-2', '8-4', '3-0', '4-1', '5-2', '6-3', '8-5', '2-0', '3-1', '4-2', '5-3', '6-4', '7-4', '8-6', '1-0', '2-1', '3-2', '5-4', '6-5', '7-5', '8-7', '0-0', '1-1', '2-2', '3-3', '5-5', '6-6', '7-6', '8-8', '0-1', '1-2', '2-3', '3-4', '5-6', '6-7', '7-7', '7-8', '6-8', '5-8', '4-8', '3-8', '2-8', '1-8', '0-8'];

// Order in which cells are examined by a heuristic-guided (A*-style) search.
export const HEURISTIC_VISITED = ['8-0', '7-0', '8-1', '6-0', '7-1', '8-2', '6-1', '6-2', '6-3', '6-4', '6-5', '6-6', '5-6', '5-5', '4-5', '3-5', '2-5', '1-5', '1-6', '1-7', '1-8', '0-8'];

// Final path revealed once the search completes.
export const PATH = new Set(['8-0', '7-0', '6-0', '6-1', '6-2', '6-3', '6-4', '6-5', '6-6', '5-6', '5-5', '4-5', '3-5', '2-5', '1-5', '1-6', '1-7', '1-8', '0-8']);

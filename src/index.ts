export enum RotationDirection {
  CLOCKWISE = 'CLOCKWISE',
  COUNTER_CLOCKWISE = 'COUNTER_CLOCKWISE'
}

/**
 * Rotate 2-dimensional matrix
 * @param {T[][]} matrix Matrix to rotate
 * @param {RotationDirection} rotationDirection Rotation direction
 * @returns {T[][]} Rotated matrix
 */
export function rotate2d <T extends {}> (
  matrix: T[][],
  rotationDirection: RotationDirection = RotationDirection.CLOCKWISE
): T[][] {
  const columns: T[][] = []
  for (let x = 0; x < matrix.length; x++) {
    columns.push(
      getColumn(matrix, x, rotationDirection)
    )
  }
  return rotationDirection === RotationDirection.CLOCKWISE ? columns : columns.reverse()
}

/**
 * Rotate matrix column by index
 * @param {T[][]} matrix Matrix in which we rotate a column
 * @param {number} columnIndex Column index
 * @param {RotationDirection} rotationDirection Rotation direction
 * @returns {T[]} Rotated matrix column
 */
function getColumn <T extends {}> (
  matrix: T[][],
  columnIndex: number,
  rotationDirection: RotationDirection
): T[] {
  const column: T[] = []
  for (let i = 0; i < matrix.length; i++) {
    column.push(matrix[i][columnIndex])
  }
  return rotationDirection === RotationDirection.CLOCKWISE ? column.reverse() : column
}

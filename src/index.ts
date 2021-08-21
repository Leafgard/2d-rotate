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
  const rows: T[][] = []
  for (let x = 0; x < matrix[0].length; x++) {
    const columns: T[] = []
    for (let y = 0; y < matrix.length; y++) {
      columns.push(matrix[y][x])
    }
    rows.push(rotationDirection === RotationDirection.CLOCKWISE ? columns.reverse() : columns)
  }
  return rotationDirection === RotationDirection.CLOCKWISE ? rows : rows.reverse()
}

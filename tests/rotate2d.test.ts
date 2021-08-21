import { rotate2d, RotationDirection } from '../src'

describe('2-dimensional matrix rotation', () => {
  test('square, clockwise', () => {
    const initial = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ]
    const rotated = [
      [7, 4, 1],
      [8, 5, 2],
      [9, 6, 3]
    ]
    expect(rotate2d(initial)).toEqual(rotated)
  })

  test('square, counter-clockwise', () => {
    const initial = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ]
    const rotated = [
      [3, 6, 9],
      [2, 5, 8],
      [1, 4, 7]
    ]
    expect(rotate2d(initial, RotationDirection.COUNTER_CLOCKWISE)).toEqual(rotated)
  })

  test('non-square 3 rows / 2 columns, clockwise', () => {
    const initial = [
      [1, 2],
      [3, 4],
      [5, 6]
    ]
    const rotated = [
      [5, 3, 1],
      [6, 4, 2]
    ]
    expect(rotate2d(initial)).toEqual(rotated)
  })

  test('non-square 3 rows / 2 columns, counter-clockwise', () => {
    const initial = [
      [1, 2],
      [3, 4],
      [5, 6]
    ]
    const rotated = [
      [2, 4, 6],
      [1, 3, 5]
    ]
    expect(rotate2d(initial, RotationDirection.COUNTER_CLOCKWISE)).toEqual(rotated)
  })

  test('non-square 2 rows / 3 columns, clockwise', () => {
    const initial = [
      [1, 2, 3],
      [4, 5, 6]
    ]
    const rotated = [
      [4, 1],
      [5, 2],
      [6, 3]
    ]
    expect(rotate2d(initial)).toEqual(rotated)
  })

  test('non-square 2 rows / 3 columns, counter-clockwise', () => {
    const initial = [
      [1, 2, 3],
      [4, 5, 6]
    ]
    const rotated = [
      [3, 6],
      [2, 5],
      [1, 4]
    ]
    expect(rotate2d(initial, RotationDirection.COUNTER_CLOCKWISE)).toEqual(rotated)
  })
})

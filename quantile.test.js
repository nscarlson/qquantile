const {quantile, quantileGroups} = require('./quantile')

describe('quintile', () => {
    const arr = [
        8,
        1,
        10,
        2,
        6,
        3,
        4,
        5,
        7,
        9,
    ]

    it('returns the correct quintile', () => {
        quantileType = 5

        expect(quantile(arr, 1, quantileType)).toEqual([1, 2])
        expect(quantile(arr, 2, quantileType)).toEqual([3, 4])
        expect(quantile(arr, 3, quantileType)).toEqual([5, 6])
        expect(quantile(arr, 4, quantileType)).toEqual([7, 8])
        expect(quantile(arr, 5, quantileType)).toEqual([9, 10])
    })

    it('returns correct quantile groups', () => {
        expect(quantileGroups(arr, 5)).toEqual([
            [1, 2],
            [3, 4],
            [5, 6],
            [7, 8],
            [9, 10]
        ])
    })

    it('returns all the quartile groups', () => {
        expect(quantileGroups(arr, 4)).toEqual([
            [1, 2, 3],
            [4, 5, 6],
            [7, 8],
            [9, 10],
        ])
    })
})

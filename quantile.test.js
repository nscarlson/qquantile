const {quantiles, quantileGroups} = require('./quantile')

describe('quintile', () => {
    const arr10 = [3, 6, 7, 8, 8, 10, 13, 15, 16, 20]
    const arr11 = [3, 6, 7, 8, 8, 9, 10, 13, 15, 16, 20]

    it('returns the correct quintile', () => {
        expect(quantiles(arr10, 5)[1 - 1]).toEqual(6)
        expect(quantiles(arr10, 5)[2 - 1]).toEqual(8)
        expect(quantiles(arr10, 5)[3 - 1]).toEqual(10)
        expect(quantiles(arr10, 5)[4 - 1]).toEqual(15)
        expect(quantiles(arr10, 5)[5 - 1]).toEqual(20)
        expect(quantiles(arr10, 5)).toEqual([6, 8, 10, 15, 20])
    })

    it('returns correct quintile groups', () => {
        expect(quantileGroups(arr10, 5)).toEqual([
            [3, 6],
            [7, 8],
            [8, 10],
            [13, 15],
            [16, 20]
        ])
    })

    it('returns the correct quartile groups for even-numbered sets', () => {
        expect(quantileGroups(arr10, 4)).toEqual([
            [ 3, 6, 7 ],
            [ 8, 8 ],
            [ 10, 13, 15 ],
            [ 16, 20 ]
        ])
    })

    it('returns the correct quartile groups for odd-numbered sets', () => {
        expect(quantileGroups(arr11, 4)).toEqual([
            [ 3, 6, 7 ],
            [ 8, 8, 9],
            [ 10, 13, 15 ],
            [ 16, 20 ]
        ])
    })

    it('returns the correct quantiles for even-numbered sets with even q-quantile', () => {
        expect(quantiles(arr10, 2)[1 - 1]).toEqual(9)
        expect(quantiles(arr10, 2)[2 - 1]).toEqual(20)
        expect(quantiles(arr10, 2)).toEqual([9, 20])
    })
})

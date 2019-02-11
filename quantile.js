const { chunkify } = require('./chunkify')

const quantiles = (data, q, quantile = 0) => {
    const quantiles = []
    
    data.sort((a, b) => a - b)

    // create memo of each quantile
    for (let i = 1; i <= q; i++) {
        // The median, for even-numbered data sets and even ordered q-quantiles, is a special case
        // 2nd quartile of the 4-quantile, 3rd sextile of the 6-quantile, and so on 
        // Get the average between the q/2 quantile and the number at the next rank
        if (q % 2 === 0 && q / 2 === i) {
            quantiles.push((data[q.length / 2 - 1] + data[q.length / 2]) / 2)
        } else {
            quantiles.push(data[Math.ceil(q.length / 2 - 1)])
        }
    }

    return (quantile ? quantiles[quantile - 1] : quantiles)
}

/**
 * @param {number[]} data   The array data set
 * @param {number} q        The q-quantile order
 * 
 * @returns {number[number[]] | number[]} array of quantile groups
 */
const quantileGroups = (data, q) => quantiles(data, q).map((quantile, i) => data.slice(i, ))

// /**
//  * @param {number[]} data   The array data set
//  * @param {number} quantile The q-quantile to return
//  * @param {q} q             The q-quantile order
//  * 
//  * @returns {}
//  */
// const quantile = (data, quantile, q) => {
//     const groups = quantileGroups(data, quantileType)

//     if (q % quantile === 0) {
//         return quantileGroups[quantile - 1].pop()
//     }

//     const group =  quantileGroups[quantile - 1]
//     return group[group.length - 1]
// }

// module.exports = { quantile, quantileGroups }

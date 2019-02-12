/**
 * @param {number[]} data   The array data set
 * @param {number} q        The q-quantile order
 * 
 * @returns {number[number[]]}  Array of q-quantile groups (partitions)
 */
const quantileGroups = (data, q) => {
    const groupIndexes = []
    const groups = []

    // create memo of the last index of each quantile group
    for (let i = 0; i <= q; i++) {
        // special 0th quantile case
        if (i === 0) {
            groupIndexes.push(0)
        } else {
            groupIndexes.push(Math.ceil(data.length * (i / q)) - 1)
        }
    }

    // iterate over memo and slice accordingly
    for (let i = 0; i < groupIndexes.length - 1; i++) {
        if (i === 0) {
            groups.push(data.slice(0, groupIndexes[i + 1] + 1))
        } else {
            groups.push(data.slice(groupIndexes[i] + 1, groupIndexes[i + 1] + 1))
        }
    }
    
    return groups
}

/**
 * @param {number[]} data   The array data set
 * @param {q} q             The q-quantile order
 * 
 * @returns {number[]}      The array of all quantiles
 */
const quantiles = (data, q) => {
    data.sort((a, b) => a - b)

    const groups = quantileGroups(data, q)
    const quantiles = []
    
    for (let i = 1; i <= q; i++) {
        const lastOfGroup = groups[i - 1][groups[i - 1].length - 1]

        // The median, for even-numbered data sets and even ordered q-quantiles, is a special case
        // 2nd quartile of the 4-quantile, 3rd sextile of the 6-quantile, and so on 
        // Get the average between the two numbers straddling the median line
        if (groups.length % 2 === 0 && groups.length / 2 === i) {
            quantiles.push((lastOfGroup + groups[i][0]) / 2)
        } else {
            quantiles.push(lastOfGroup)
        }
    }

    return quantiles
}

module.exports = { quantiles, quantileGroups }

/**
 * Provided an array, splits into n chunks whose size are as balanced as possible
 * 
 * @param {number[]}    arr     An array of numbers
 * @param {number}      n       Integer number of chunks
 * 
 * @returns {number[number[]]}  An array of chunks from original array
 */
const chunkify = (arr, n) => {
    try {   
        const length = arr.length
        const chunks = []
        let chunkSize = 0

        // An index to track the remaining # of chunks.  Could just mutate the n argument,
        // but I don't like doing it that way.
        let remainingChunks = n

        // If the array to be chunkified has only one (or zero) elements, or the # of chunks
        // is one or less, just return the array.
        if (length <= 1 || n <= 1) {
            return arr
        }
        
        for (let i = 0; i < length; i += chunkSize, n--) {
            chunkSize = Math.ceil((length - i) / n)

            chunks.push(arr.slice(i, i + chunkSize))
        }

        return chunks
    } catch (err) {
        throw err
    }
}

module.exports = { chunkify }

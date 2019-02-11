const { quantile, quantileGroups } = require('./quantile')
const data = []

for (let i = 0; i < 101; i++) {
    data.push(Math.random() * 100)
}

console.log('data:', data)

console.log('the 3rd quartile group:', quantile(data, 3, 4))
console.log('all quintile groups', quantileGroups(data, 5))
console.log('all percentile groups:', quantileGroups(data, 100))

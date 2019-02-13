[![Maintainability](https://api.codeclimate.com/v1/badges/e2a2afcf3c697aac3f1a/maintainability)](https://codeclimate.com/github/nscarlson/qquantile/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/e2a2afcf3c697aac3f1a/test_coverage)](https://codeclimate.com/github/nscarlson/qquantile/test_coverage)

# qquantile
Calculate arbitrary q-quantiles

## Setup
- Run `yarn` to bootstrap dependencies

## Development
Require and run like so: 

```js
const { quantiles, quantileGroups } = require('qquantile')

const data = [3, 6, 7, 8, 8, 10, 13, 15, 16, 20]

quantiles(data, 4)      // returns the q-quantiles, in this case, quartiles
// =>   [7, 9, 15, 20]


quantileGroups(data, 4) // returns the q-quantile groups, in this case, all quartile groups
// =>   [
//          [ 3, 6, 7 ],
//          [ 8, 8 ],
//          [ 10, 13, 15 ],
//          [ 16, 20 ]
//      ]
```

## Testing
- Run `yarn test` to run the Jest suite tests

ramda-fantasy (RF)
==================

[Fantasy Land][1] compatible types for easy integration with [Ramda][2].

## Project status
While the development on [*ramda-fantasy*][0] is frozen, this fork maintains a version of *ramda-fantasy* which 
 - is compatible with current [Ramda][2] versions,
 - allows for small backwards-compatible enhancements and additions to the ADTs
 - maintains the [excellent documentation](./docs) of the original project.

However the [RF.Future][10] type will *not be maintained*, because 
- capable compatible alternatives like [Fluture][18] exist, and
- for most practical purposes and with some wrapping ([here][20] and [here][19]) JavaScript's native `Promise` behaves  similar enough.

## Enhancements over [original ramda-fantasy][0]

| ADT               |   `.tap`  |
|:-----------------:|:---------:|
|[Maybe][13]        | *✔︎*      |
| [Identity][11]    |    **✔︎** | 

## Available types

| Name            | [Setoid][3]  | [Semigroup][4] | [Functor][5] | [Applicative][6] | [Monad][7] | [Foldable][8] | [ChainRec][16] |
| --------------- | :----------: | :------------: | :----------: | :--------------: | :--------: | :-----------: | :------------: |
| [Either][9]     |    **✔︎**     |                |     **✔︎**    |      **✔︎**       |   **✔︎**    |               |     **✔︎**      |
| [~~Future~~][10]    |              |                |     **✔︎**    |      **✔︎**       |   **✔︎**    |               |     **✔︎**      |
| [Identity][11]  |    **✔︎**     |                |     **✔︎**    |      **✔︎**       |   **✔︎**    |               |     **✔︎**      |
| [IO][12]        |              |                |     **✔︎**    |      **✔︎**       |   **✔︎**    |               |     **✔︎**      |
| [Maybe][13]     |    **✔︎**     |     **✔︎**      |     **✔︎**    |      **✔︎**       |   **✔︎**    |     **✔︎**     |     **✔︎**      |
| [Reader][14]    |              |                |     **✔︎**    |      **✔︎**       |   **✔︎**    |               |                |
| [Tuple][15]     |    **✔︎**     |     **✔︎**      |     **✔︎**    |                  |            |               |                |
| [State][17]     |               |               |       **✔︎**   |    **✔︎**        |   **✔︎**    |               |       **✔︎**        |


Access like so:
```javascript
// Node.js
var Either = require('ramda-fantasy').Either;
   
// ES6: import namespace
import RF from './node_modules/ramda-fantasy/dist/ramda-fantasy.mjs'
const Either = RF.Either;

// ES6: import named export
import {Either} from './node_modules/ramda-fantasy/dist/ramda-fantasy.mjs'
```
## available translations
[Spanish](https://github.com/idcmardelplata/ramda-fantasy)

[0]: https://github.com/ramda/ramda-fantasy
[1]: https://github.com/fantasyland/fantasy-land
[2]: https://github.com/ramda/ramda
[3]: https://github.com/fantasyland/fantasy-land#setoid
[4]: https://github.com/fantasyland/fantasy-land#semigroup
[5]: https://github.com/fantasyland/fantasy-land#functor
[6]: https://github.com/fantasyland/fantasy-land#applicative
[7]: https://github.com/fantasyland/fantasy-land#monad
[8]: https://github.com/fantasyland/fantasy-land#foldable
[9]: docs/Either.md
[10]: docs/Future.md
[11]: docs/Identity.md
[12]: docs/IO.md
[13]: docs/Maybe.md
[14]: docs/Reader.md
[15]: docs/Tuple.md
[16]: https://github.com/fantasyland/fantasy-land#chainrec
[17]: docs/State.md
[18]: https://github.com/fluture-js/Fluture
[19]: https://github.com/semmel/ramda/tree/consider-static-land
[20]: https://medium.com/javascript-scene/javascript-monads-made-simple-7856be57bfe8

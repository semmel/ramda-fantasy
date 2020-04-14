Opinionated Ramda-Fantasy Fork (RF)
==================

Collection of JavaScript container data types which implement some [*Fantasy Land*][1] algebras. 
Together with some essential [*Ramda*][2] functions, these types form the basis
for creating functional *data pipelines* which abstract away e.g. code branching, optional behaviour, errors or even asynchronoucity.

## Motivation
The topic of functional programming in JavaScript is covered in many textbooks. Being quite comprehensive and at the same time an approachable introduction,
 [Prof. Frisby's Mostly Adequate Guide][most_adequate_guide] has most impact in the JS community. Many of the functions developed in the book
 are maintained as nearly identical versions in the well-known [Ramda][2] library. 
 
 However the simple [Algebraic Data Types (ADT) of the Mostly Adequate Guide][adequate_types] cannot be found in a form close to their textbook implementation in a single place and actively maintained.
 
 - [*ramda-fantasy*][0] contains many of the structures which still test OK. But since the development on that project has been frozen,
 it lacks the interfaces for later [*Fantasy Land*][1] algebras.
 - [sanctuary-js][sanct] contains many types in sync with the latest [*Fantasy Land*][1] specification. It is much recommended for having
 best support for the [*Fantasy Land*][1] specification.
 Nevertheless it's [Maybes][sanct_mb], [Eithers][sanct_ei] and so on
    - are designed to work best with [*Sanctuary*][sanct_sanct] and not [*Ramda*][2],
    - do not support method chaining,
    - have an implementation which is not easily understood,
    - are documented in a pretty formal way.
 - [*Folktale*][folk] covers some algebraic data types too. Furthermore it is excellently documented. However it
    - has it's own support functions, so that *Ramda* would feel out of place as well,
    - has completely morphed it's API from version 1 to 2, so that just `Maybe` remains from the list of simple ADTs.
 
While the development on [*ramda-fantasy*][0] is frozen, this fork maintains a version of *ramda-fantasy* which 
 - remains compatible with current [Ramda][2] versions,
 - adds support for more categories (algebras),
 - adds common methods not included in a Fantasy Land algebra,
 - maintains the [documentation](./docs) of the original project.

## Quirks
- [RF.Future][10] is *deprecated* and will *not be maintained*, because 
    - capable compatible alternatives like [Fluture][18] exist, and
    - for most practical purposes and with some wrapping ([here][20] and [here][19]) JavaScript's native `Promise` behaves  similar enough.
- Methods are named as in the [literature][most_adequate_guide] using english verbs and not their technical Fantasy Land names to support method chaining. 
E.g. `.filter` instead of `['fantasy-land/filter']`.

## Changes wrt. [original ramda-fantasy][0]

| Data Type \ Algebra   |   `.tap`  |   [Filterable][22]    | `.mjoin`     |
|:-----------------:|:---------:|:-------------:|:--------------------|
|[Maybe][13]        | *✔︎*      |  *✔︎*     | mention in docu `R.unnest = R.chain(R.identity)` ([motivation][21])      |
| [Identity][11]    |    **✔︎** |            | dito      |

## Available types

| Data Type \ Algebra  | [Setoid][3]  | [Semigroup][4] | [Functor][5] | [Applicative][6] | [Monad][7] | [Foldable][8] | [ChainRec][16] |
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
[21]: https://mostly-adequate.gitbooks.io/mostly-adequate-guide/content/ch09.html#mixing-metaphors
[22]: https://github.com/fantasyland/fantasy-land/tree/master#filterable
[most_adequate_guide]: https://mostly-adequate.gitbooks.io/mostly-adequate-guide/
[adequate_types]: https://mostly-adequate.gitbooks.io/mostly-adequate-guide/content/appendix_b.html
[sanct]: https://github.com/sanctuary-js
[sanct_mb]: https://github.com/sanctuary-js/sanctuary-maybe
[sanct_ei]: https://github.com/sanctuary-js/sanctuary-either
[sanct_sanct]: https://github.com/sanctuary-js/sanctuary
[folk]: https://folktale.origamitower.com
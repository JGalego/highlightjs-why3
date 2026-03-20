# highlightjs-why3

A [highlight.js](https://highlightjs.org/) language grammar for WhyML, the intermediate verification language used by the [Why3](https://why3.org) deductive verification platform.

## Usage

### Static HTML

```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/default.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js"></script>
<script src="path/to/why3.min.js"></script>
<script>hljs.highlightAll();</script>
```

### UNPKG CDN

```html
<script src="https://unpkg.com/highlightjs-why3/dist/why3.min.js"></script>
```

### Node.js / npm

```bash
npm install highlightjs-why3
```

```javascript
const hljs = require('highlight.js');
const why3 = require('highlightjs-why3');

hljs.registerLanguage('why3', why3);
hljs.highlightAll();
```

### ES Module

```javascript
import hljs from 'highlight.js';
import why3 from 'highlightjs-why3/dist/why3.es.min.js';

hljs.registerLanguage('why3', why3);
hljs.highlightAll();
```

## Highlighted Elements

| CSS class         | Language element                                      |
|-------------------|-------------------------------------------------------|
| `hljs-keyword`    | Keywords (`theory`, `module`, `let`, `match`, ...)    |
| `hljs-built_in`   | Built-in types and tactics (`int`, `forall`, `requires`, ...) |
| `hljs-literal`    | Literals (`true`, `false`)                            |
| `hljs-title`      | Theory and module names                               |
| `hljs-symbol`     | Type variables (`'a`, `'b`, ...)                      |
| `hljs-number`     | Numeric literals                                      |
| `hljs-string`     | String and character literals                         |
| `hljs-doctag`     | Documentation comments (`(** ... *)`)                 |
| `hljs-comment`    | Block comments (`(* ... *)`)                          |

## Contributing

### Building `dist` files

The `dist/` minified files are built using the highlight.js build tool. Follow the [3rd party quick start guide](https://github.com/highlightjs/highlight.js/blob/main/extra/3RD_PARTY_QUICK_START.md):

```bash
git clone https://github.com/highlightjs/highlight.js
cd highlight.js
cp -r /path/to/highlightjs-why3 extra/highlightjs-why3
npm install
node ./tools/build.js -t cdn
```

The built `why3.min.js` will appear in `extra/highlightjs-why3/dist/`.

### Running tests

```bash
npm install
npm test
```

## License

BSD 3-Clause License. See [LICENSE](LICENSE).

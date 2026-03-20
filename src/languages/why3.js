/*
Language: Why3
Author: João Galego
Category: scientific
Description: Language definition for WhyML / Why3 verification platform
Website: https://why3.org
*/

module.exports = function(hljs) {
  const WHY3_KEYWORDS = {
    $pattern: /[a-zA-Z_]\w*/,
    keyword:
      'theory end use import export clone ' +
      'type constant function predicate inductive coinductive ' +
      'axiom lemma goal ' +
      'module scope ' +
      'val exception ' +
      'let rec in if then else ' +
      'match with ' +
      'while do done for to downto ' +
      'begin end ' +
      'try raise return break continue ' +
      'by so ' +
      'any at old',
    built_in:
      'int real bool unit ' +
      'list option map set ' +
      'abs divmod min max ' +
      'div mod ' +
      'requires ensures returns raises ' +
      'reads writes ' +
      'invariant variant ' +
      'diverges ' +
      'assert assume check ' +
      'ghost abstract mutable model private ' +
      'forall exists lambda ' +
      'result',
    literal:
      'true false'
  };

  const BLOCK_COMMENT = hljs.COMMENT(/\(\*/, /\*\)/,  { contains: ['self'] });

  const DOC_COMMENT = hljs.COMMENT(/\(\*\*/, /\*\)/, {
    className: 'doctag',
    contains: ['self']
  });

  const STRING = hljs.inherit(hljs.QUOTE_STRING_MODE, { illegal: null });

  const CHARACTER = {
    className: 'string',
    begin: /'[^\\']'/
  };

  const NUMBER = {
    className: 'number',
    variants: [
      { begin: /0x[0-9a-fA-F]+/ },
      { begin: /\d+\.\d*([eE][+-]?\d+)?/ },
      { begin: /\d+/ }
    ],
    relevance: 0
  };

  const TYPE_VARIABLE = {
    className: 'symbol',
    begin: /'\w+/,
    relevance: 0
  };

  const THEORY_MODULE_DEF = {
    beginKeywords: 'theory module scope',
    end: /$/,
    returnEnd: true,
    contains: [
      hljs.inherit(hljs.TITLE_MODE, {
        begin: /[A-Z]\w*/,
        endsParent: true
      })
    ]
  };

  return {
    name: 'Why3',
    aliases: ['why3'],
    keywords: WHY3_KEYWORDS,
    illegal: /\/\//,
    contains: [
      DOC_COMMENT,
      BLOCK_COMMENT,
      STRING,
      CHARACTER,
      NUMBER,
      TYPE_VARIABLE,
      THEORY_MODULE_DEF
    ]
  };
};

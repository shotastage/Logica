let lexer = Parsect.makeTokenParser({
    commentStart:       '/*',
    commsentEnd:         '*/',
    commentInLine:        '//',
    nestedComments:     true,
    identStart:         /[_$a-zA-Z]/,
    identLetter:        /[_$a-zA-Z0-9]/,
    opStart:            /[+\-*\/=!$%&\^~@?_><:|\\.]/,
    opLetter:           /[+\-*\/=!$%&\^~@?_><:|\\.]/,
    reservedNames: [ // Reserved words
        "def",
        "return",
        "if",
        "switch",
        "for",
        "while",
        "when",
        "class",
        "struct",
        "enum",
        "let",
        "var"
    ],
    reservedOpNames: [ // Reserved operators
        "+",
        "-",
        "++",
        "--",
        "+@prefix"
    ],
    caseSensitive:      true
});

# AST Object Model Examples



# Variables

```
var test = 123
```

```:json
[
    {
        "type": "Keyword",
        "value": "var"
    },
    {
        "type": "Identifier",
        "value": "test"
    },
    {
        "type": "Punctuator",
        "value": "="
    },
    {
        "type": "Numeric",
        "value": "123"
    },
    {
        "type": "Punctuator",
        "value": ";"
    }
]
```
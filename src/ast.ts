module CSSScriptAst {

    export interface LanguageDefinition {
        reservedNames: [
            "def", "return",                // For function
            "if", "elif", "else",           // For if
            "switch", "case",               // For switch
            "for", "in",                    // For for
            "while", "do",                  // For while
            "try", "catch",                 // For error handling
            "when", "break",                // For when
            "class", "struct", "enum",      // For object oriented programming
            "let", "var",                   // For varibales and constnats
            "import", "as", "from",         // For import styles or modules
            "export", "module", "package"   // For export styles or modules
        ];

        AccessModifiers: [
            "public", "private", "fileprivate"
        ];

        Operetors: [
            "+", "-", "*", "/", 
            "++", "--",
            "+=", "-=", "=+", "=-",
            ">", "<", "<=", ">=", "=>", "=<"
        ];

        Types: [
            "int", "double", "number", "bool", "string", // Basic Types
            "pixle", "color", "selector", "url"          // CSSScript Types
        ];

        Symbols: [
            ":",                // Define type
            "->", "<-",         // For define return types
            "!", "?",           // Optional Types
            "&", "|",           // If syntax
            "@"                 // CSS Object
        ];

        SuperFuncs: [
            "exec"
        ];
    }
}

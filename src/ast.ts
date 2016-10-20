module CSSScriptAst {

    export interface LanguageDefinition {
        ReservedNames: [
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
            "export", "module", "package",  // For export styles or modules
            "declare", "insert", "list"     // Temporary words 
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
            "exec", "boot", "launch"
        ];
    }


    export interface ASTObject {
        ObjectType: string;
        Keyword: string;
        Identifier: string;
        Value: any;
        Model: any;
    }

    function createObjectModel(): void{
        
    }
}

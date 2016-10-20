module Logica {

    export interface LanguageDefinition {
        ReservedNames: [
            "def", "return",                // For function (Level 1)
            "if", "elif", "else",           // For if
            "switch", "case",               // For switch
            "for", "in",                    // For for
            "while", "do",                  // For while
            "try", "catch",                 // For error handling
            "when", "break",                // For when
            "class", "struct", "enum",      // For object oriented programming
            "let", "var",                   // For varibales and constnats (Level 0)
            "import", "as", "from",         // For import styles or modules
            "export", "module",             // For export styles or modules
            "typealias", "declaretype",     // For definining original type

            // ---------------------------------------------------------------//
            "package",                                                        //
            "declare", "insert", "list",                                      //
            "interface"                                                       //
            // ---------------------------------------------------------------//
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

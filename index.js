'use strict';

module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "jest": true
    },
    "extends": "eslint:recommended",
    "globals": {
        "angular": true,
        "inject": true,
        "expectJest": true,
	"process": true
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
	"sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "settings": {
        "react": {
            "createClass": "createReactClass", // Regex for Component Factory to use, default to "createReactClass"
            "pragma": "React",  // Pragma to use, default to "React"
            "version": "15.0" // React version, default to the latest React stable release
        }
    },
    // Any rule not explicitly defined here was, at the time of writing,
    // a default of the eslint recommended ruleset.
    "rules": {
        // Possible Errors
        "no-await-in-loop": "error",
        "no-console": ["error", { allow: ["warn", "error"] }],
        "no-prototype-builtins": "off",
        "no-template-curly-in-string": "error",
        "no-unsafe-negation": "error",
        "valid-jsdoc": "off",

        // Best Practices
        "accessor-pairs": "off",
        "array-callback-return": "warn",
        "block-scoped-var": "warn",
        "class-methods-use-this": "warn",
        "complexity": ["warn", { "max": 20 }],
        "consistent-return": "off",
        "curly": "error",
        // to fix: add a default with a console.warn
        "default-case": "warn",
        "dot-location": ["error", "property"],
        "dot-notation": "off",
        "guard-for-in": "error",
        "no-alert": "error",
        "no-caller": "error",
        "no-div-regex": "error",
        "no-else-return": "error",
        "no-empty-function": "warn",
        "no-empty-pattern": "error",
        "no-eq-null": "off",
        "no-eval": "error",
        "no-extend-native": "error",
        "no-extra-bind": "error",
        "no-extra-label": "error",
        "no-fallthrough": "off",
        "no-floating-decimal": "error",
        "no-global-assign": "error",
        "no-implicit-coercion": ["error", { "allow": ["!!"] } ],
        "no-implied-eval": "error",
        "no-invalid-this": "warn",
        "no-iterator": "error",
        "no-labels": "error",
        "no-lone-blocks": "error",
        "no-loop-func": "error",
        "no-magic-numbers": "off",
        // "no-magic-numbers": ["warn", {
        //     "ignoreArrayIndexes": true,
        //     "ignore": [-1, 0, 1, 100],
        // }],
        "no-multi-spaces": "error",
        "no-multi-str": "error",
        "no-new-func": "error",
        "no-new-wrappers": "error",
        "no-new": "error",
        "no-octal-escape": "error",
        // use arg defaults instead
        "no-param-reassign": "warn",
        "no-proto": "error",
        "no-return-assign": "error",
        "no-return-await": "error",
        "no-script-url": "error",
        "no-self-assign": "error",
        "no-self-compare": "error",
        "no-sequences": "error",
        "no-throw-literal": "warn",
        "no-unmodified-loop-condition": "warn",
        "no-unused-expressions": "warn",
        "no-useless-call": "error",
        "no-useless-concat": "error",
        "no-useless-escape": "error",
        "no-useless-return": "error",
        "no-void": "error",
        "no-warning-comments": "off",
        "no-with": "error",
        "prefer-promise-reject-errors": "warn",
        "radix": "error",
        "require-await": "error",
        "vars-on-top": "warn",
        "wrap-iife": "error",
        "yoda": "error",

        // Stict mode
        "strict": "error",

        // Variables
        "init-declarations": "off",
        "no-catch-shadow": "error",
        "no-delete-var": "error",
        "no-label-var": "error",
        "no-restricted-globals": "error",
        "no-shadow-restricted-names": "error",
        "no-shadow": "warn",
        "no-undef-init": "error",
        "no-undef": "error",
        //"no-use-before-define": "warn",
        "no-use-before-define": "off", // decided to switch off b/c of module definition pattern in whaam

        // Node & CommonJS
        "no-mixed-requires": "warn",
        "no-new-require": "error",
        "no-path-concat": "error",
        "no-process-env": "off",
        "no-process-exit": "error",
        "no-sync": "warn",

        // Stylistic Issues
        "array-bracket-spacing": ["error", "never"],
        "block-spacing": ["error", "always"],
        "brace-style": ["error", "1tbs"],
        "camelcase": "off",
        "capitalized-comments": "off",
        "comma-dangle": "off",
        "comma-spacing": ["error", { "before": false, "after": true }],
        "comma-style": ["error", "last"],
        "computed-property-spacing": ["error", "never"],
        "consistent-this": "off",
        "eol-last": ["error", "always"],
        "func-call-spacing": ["error", "never"],
        "func-name-matching": "off",
        "func-names": ["error", "as-needed"],
        "func-style": ["error", "declaration", { "allowArrowFunctions": false }],

        "indent": ["error", 4, {
            "SwitchCase": 1
        }],
        "jsx-quotes": ["error", "prefer-double"],
        "key-spacing": ["error", {
            "beforeColon": false,
            "afterColon": true,
            "mode": "strict"
        }],
        "keyword-spacing": ["error", {
            "before": true,
            "after": true
        }],
        "linebreak-style": ["error", process.platform === "win32" ? "windows": "unix"],
        "lines-around-directive": ["error", "always"],
        "max-len": ["warn", 100, {
            "ignoreComments": true,
            "ignoreUrls": true,
            "ignoreRegExpLiterals": true,
            "ignoreStrings": false,
            "ignoreTemplateLiterals": true
        }],
        "new-cap": "warn",
        "new-parens": "error",
        "newline-after-var": ["error", "always"],
        "newline-before-return": "error",
        "newline-per-chained-call": ["error", {
            "ignoreChainWithDepth": 5
        }],
        "no-array-constructor": "error",
        "no-bitwise": "error",
        "no-continue": "error",
        "no-lonely-if": "error",
        "no-mixed-operators": ["error", {
            "groups": [
                ["&", "|", "^", "~", "<<", ">>", ">>>"],
                ["==", "!=", "===", "!==", ">", ">=", "<", "<="],
                ["&&", "||"],
                ["in", "instanceof"]
            ]
        }],
        "no-multi-assign": "off",
        "no-multiple-empty-lines": ["error", { "max": 1 }],
        "no-negated-condition": "error",
        "no-nested-ternary": "off",
        "no-new-object": "error",
        "no-plusplus": "off",
        "no-tabs": "error",
        "no-ternary": "off",
        "no-trailing-spaces": "error",
        "no-underscore-dangle": "off",
        "no-unneeded-ternary": "error",
        "no-whitespace-before-property": "error",
        "object-curly-newline": ["error", { "multiline": true }],
        "object-curly-spacing": ["error", "always"],
        "object-property-newline": ["error", {
            "allowMultiplePropertiesPerLine": true
        }],
        "one-var": ["error", { "initialized": "never" }],
        "operator-assignment": "off",
        "operator-linebreak": "off",
        //"padded-blocks": ["error", "never"],
        "padded-blocks": "off",
        "quotes": [
            "error",
            "single"
        ],
        "quote-props": ["error", "consistent-as-needed"],
        "semi": [
            "error",
            "never"
        ],
        "semi-spacing": "error",
        "space-before-blocks": ["error", "always"],
        "space-before-function-paren": ["error", "never"],
        "space-in-parens": ["error", "never"],
        "space-infix-ops": "error",
        "space-unary-ops": "error",
        "spaced-comment": ["error", "always"],
        "wrap-regex": "off",

        // ES2015
        "arrow-body-style": ["error", "as-needed"],
        "arrow-parens": "error",
        "arrow-spacing": "error",
        "generator-star-spacing": "error",
        "no-class-assign": "error",
        "no-confusing-arrow": "off",
        "no-duplicate-imports": "error",
        "no-useless-computed-key": "error",
        "no-useless-constructor": "error",
        "no-useless-rename": "error",
        "no-var": "error",
        "object-shorthand": "error",
        "prefer-arrow-callback": "error",
        "prefer-const": "error",
        "prefer-destructuring": "off",
        // "prefer-destructuring": ["error", {
        //     "array": true,
        //     "object": true
        // }, {
        //     "enforceForRenamedProperties": false
        // }],
        "prefer-rest-params": "error",
        "prefer-spread": "error",
        "prefer-template": "error",
        "rest-spread-spacing": ["error", "never"],
        "symbol-description": "error",
        "template-curly-spacing": "error",
        "yield-star-spacing": ["error", "before"]
    }
};

import js from "@eslint/js";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import jsxA11y from "eslint-plugin-jsx-a11y";
import babelParser from "@babel/eslint-parser";

export default [
    {
        files: ["**/*.js", "**/*.jsx"],
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "module",
            parser: babelParser,
            parserOptions: {
                requireConfigFile: false,
                babelOptions: {
                    presets: ["@babel/preset-react"]
                }
            },
            globals: {
                document: "readonly",
                window: "readonly",
                console: "readonly"
            }
        },
        plugins: {
            react,
            "react-hooks": reactHooks,
            "jsx-a11y": jsxA11y
        },
        settings: {
            react: { version: "detect" }
        },
        rules: {
            ...js.configs.recommended.rules,
            ...react.configs.recommended.rules,
            ...reactHooks.configs.recommended.rules,
            ...jsxA11y.configs.recommended.rules,
            "react/jsx-no-target-blank": "off",
            "react/react-in-jsx-scope": "off"
        }
    }
];

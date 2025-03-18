const globals = require("globals");
const pluginJs = require("@eslint/js");
const pluginReact = require("eslint-plugin-react");
const pluginJest = require("eslint-plugin-jest");

/** @type {import('eslint').Linter.FlatConfig[]} */
module.exports = [
  {
    languageOptions: { 
      globals: {
        ...globals.browser,
        ...globals.node,  
        ...globals.jest    
      },
      ecmaVersion: "latest",
      sourceType: "module"
    }
  },
  pluginJs.configs.recommended,
  {
    plugins: {
      react: pluginReact, 
      jest: pluginJest    
    }
  },
  {
    rules: {
      "react/react-in-jsx-scope": "off",
      "no-redeclare": "warn",  
      "no-undef": "error",
      "no-prototype-builtins": "off"
    }
  }
];

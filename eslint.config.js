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
        ...globals.node,   // Supporte Node.js (`require`, `module`, `__dirname`)
        ...globals.jest    // Supporte Jest (`test`, `expect`)
      },
      ecmaVersion: "latest",
      sourceType: "module"
    }
  },
  pluginJs.configs.recommended,
  {
    plugins: {
      react: pluginReact,  // Utilisation correcte du plugin React
      jest: pluginJest     // Utilisation correcte du plugin Jest
    }
  },
  {
    rules: {
      "react/react-in-jsx-scope": "off", // Corrige JSX `<App />`
      "no-redeclare": "warn",  // Réduit la sévérité des variables redéclarées
      "no-undef": "error",
      "no-prototype-builtins": "off"
    }
  }
];

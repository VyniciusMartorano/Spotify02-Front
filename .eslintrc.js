module.exports = {
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": "plugin:react/recommended",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": [
    "react"
  ],
  "rules": {
    "react/display-name": 0,
    "react/prop-types": 0
  }
}

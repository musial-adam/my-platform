// module.exports = {
//   globals: {
//     __PATH_PREFIX__: true,
//   },
//   extends: `react-app`,
// }

module.exports = {
  globals: {
    __PATH_PREFIX__: true,
	},
	
	
	// extends: `react-app`,
	"env": {
		"browser": true,
	},
	"extends": [
		"airbnb",
		"prettier",
    "prettier/react",
    "react-app"
	],
	"rules": {
    "react/jsx-filename-extension": 0,
    // DISABLED ONLY TEMP, TURN IT ON!!!
    "react/prop-types": 0,
		"prettier/prettier": [
			"error",
			{
				"trailingComma": "es5",
				"singleQuote": true,
				"printWidth": 80,
        "useTabs": false,
        "semi": false,
        "tabWidth": 2
			}
    ],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn"
	},
	"parser": "babel-eslint",
	"plugins": [
    "prettier",
    "react-hooks"
	]
}

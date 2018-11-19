const path = require("path");

module.exports = {
	css: {
		loaderOptions: {
			sass: {
				data: '@import "src/styles/variables.scss";'
			}
		}
	}
}
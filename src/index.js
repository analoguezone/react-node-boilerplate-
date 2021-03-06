import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import { AppContainer } from "react-hot-loader";

ReactDOM.render(
	<AppContainer>
		<App />
	</AppContainer>,
	document.getElementById("root")
);

if (module.hot) {
	module.hot.accept("./App.jsx", function() {
		const NextApp = require("./App.jsx").default;
		render(NextApp);
	});
}

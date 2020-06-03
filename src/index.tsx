import React from "react";
import ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";
import App from "./app";

const renderApp = (Component: any) =>
    ReactDOM.render(
        <AppContainer>
            <Component />
        </AppContainer>,
        document.getElementById("root")
    );

renderApp(App);

if (module.hot) {
    module.hot.accept("./app.tsx", function () {
        renderApp(require("./app.tsx").default);
    });
}
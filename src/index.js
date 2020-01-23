import "./application.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { render } from "react-dom";
import { PersistGate } from "redux-persist/integration/react";
import storage from "redux-persist/lib/storage";
import ApplicationContainer from "./state/container/application";
import ApplicationComponent from "./display/application";
import { Provider } from "react-redux";
import { getStorage } from "./state/store";

const persistConfig = {
  key: "daily-harvest-web-persist-store",
  storage,
  whitelist: ["products"]
};
const { persistor, store } = getStorage(persistConfig);
const rootElement = document.getElementById("root");

render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ApplicationContainer component={ApplicationComponent} />
    </PersistGate>
  </Provider>,
  rootElement
);

import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import "./index.css";
import { Auth0Provider } from "@auth0/auth0-react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store from "./Movie-store/StoreMovie.jsx";
import { persistStore } from "redux-persist";
import { I18nextProvider } from "react-i18next";
import i18 from "./lib/language/i18.jsx"
import { GoogleOAuthProvider } from '@react-oauth/google';  


let persistor = persistStore(store);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-yi3812znbuexo2vk.us.auth0.com"
      clientId="KuvVKBucw8qCGC2qUcUEskjYA7C1PmvK"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <I18nextProvider i18n={i18}>
          <GoogleOAuthProvider clientId="301435388222-8solr6k5bge75lsc361m5a3gdadcmel8.apps.googleusercontent.com">
            <App />
            </GoogleOAuthProvider>
          </I18nextProvider>
        </PersistGate>
      </Provider>
    </Auth0Provider>
  </React.StrictMode>
);

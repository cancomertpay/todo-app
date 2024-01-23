import React from "react";
import ReactDOM from "react-dom/client";

// redux
import { Provider } from "react-redux";
import store from "./store/index.js";

// root component
import App from "./App.jsx";

// global-styles
import GlobalStyles from "./styles/GlobalStyles.js";

// styled-components-theme-provider
import ThemeWrapper from "./providers/ThemeProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* redux-provider */}
    <Provider store={store}>
      {/* styled-components-theme-provider */}
      <ThemeWrapper>
        <GlobalStyles />
        <App />
      </ThemeWrapper>
    </Provider>
  </React.StrictMode>
);

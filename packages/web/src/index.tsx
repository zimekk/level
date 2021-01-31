import React, { Suspense, lazy } from "react";
import { render } from "react-dom";

const App = lazy(() => import("@zimekk/web-2"));

const Spinner = () => <span>Loading...</span>;

const Provider = ({ children }) => children;

render(
  <Provider>
    <Suspense fallback={<Spinner />}>
      <App />
    </Suspense>
  </Provider>,
  document.body.appendChild(document.createElement("div"))
);

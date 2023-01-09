import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./index.css";
import App from "./App";
import { store } from "./app/store";
import { extendedApiSlice } from "./features/posts/postsSlice";
import { userSlice } from "./features/users/usersSlice";

store.dispatch(userSlice.endpoints.getAllUsers.initiate());
store.dispatch(extendedApiSlice.endpoints.getPosts.initiate());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

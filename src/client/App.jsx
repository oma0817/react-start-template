import React from "react";
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { Root } from "../pages";
import { api } from "../utils/api";
import { SWRConfig } from "swr";

const App = () => {
  const swrConfig = {
    fetcher(url, params) {
      return api.get(url, { params }).then((res) => {
        return res.data?.data || res.data;
      });
    },
  };

  return (
    <SWRConfig value={swrConfig}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Root} />
        </Switch>
      </BrowserRouter>
    </SWRConfig>
  );
};

export default App;

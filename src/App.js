import React, { lazy, Suspense } from "react";
// import SnackbarProvider from "react-simple-snackbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Loading } from "./components";

// page imports
const Home = lazy(() => import("./pages/Home"));
const Contact = lazy(() => import("./pages/Contact"));

function App() {
  return (
    <>
      {/* <SnackbarProvider> */}
      <BrowserRouter>
        <Suspense fallback={<Loading />}>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
          </Switch>
        </Suspense>
      </BrowserRouter>
      {/* </SnackbarProvider> */}
    </>
  );
}

export default App;

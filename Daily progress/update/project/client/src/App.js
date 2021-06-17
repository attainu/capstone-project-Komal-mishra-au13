import React, { useState, Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Auth from "./hoc/auth";
// pages for this product
import LandingPage from "./components/views/LandingPage/LandingPage";
import LoginPage from "./components/views/LoginPage/LoginPage";
import RegisterPage from "./components/views/RegisterPage/RegisterPage";
import NavBar from "./components/views/NavBar/NavBar";
import Footer from "./components/views/Footer/Footer";
import MovieDetail from "./components/views/MovieDetail/MovieDetail";
import FavoritePage from "./components/views/FavoritePage/FavoritePage";
import "./App.css";
import Header from "./components/Header/Header";
import SimpleBottomNavigation from "./components/MainNav";
import Movies from "./Pages/Movies/Movies";
import Series from "./Pages/Series/Series";
import Trending from "./Pages/Trending/Trending";
import Search from "./Pages/Search/Search";
import { Container } from "@material-ui/core";

function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Header />
        <div className="app">
          <Container>
            <Switch>
              <Route path="/" component={Trending} exact />
              <Route path="/movies" component={Movies} />
              <Route path="/series" component={Series} />
              <Route path="/search" component={Search} />
              <Suspense fallback={<div>Loading...</div>}>
                <NavBar />
                <div
                  style={{
                    paddingTop: "69px",
                    minHeight: "calc(100vh - 80px)",
                  }}
                >
                  <Switch>
                    <Route exact path="/" component={Auth(LandingPage, null)} />
                    <Route
                      exact
                      path="/login"
                      component={Auth(LoginPage, false)}
                    />
                    <Route
                      exact
                      path="/register"
                      component={Auth(RegisterPage, false)}
                    />
                    <Route
                      exact
                      path="/movie/:movieId"
                      component={Auth(MovieDetail, null)}
                    />
                    <Route
                      exact
                      path="/favorite"
                      component={Auth(FavoritePage, null)}
                    />
                  </Switch>
                </div>
                <Footer />
              </Suspense>
            </Switch>
          </Container>
        </div>
        <SimpleBottomNavigation />
      </BrowserRouter>
    </div>
  );
}
export default App;

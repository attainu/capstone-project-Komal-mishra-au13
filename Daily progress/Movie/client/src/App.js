import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import SimpleBottomNavigation from "./components/MainNav";
import Movies from "./Pages/Movies/Movies";
import Series from "./Pages/Series/Series";
import Trending from "./Pages/Trending/Trending";
import Search from "./Pages/Search/Search";
import { Container } from "@material-ui/core";
import { useEffect, useState } from "react";
import Homepage from "./Pages/Authentication/Homepage";
import { Text } from "@chakra-ui/react";

function App() {
  const [user, setUser] = useState()

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    setUser(userInfo)
  }, [])
  
  return (
    <BrowserRouter>
      <Header/>
      <div className="app">
        <Container>
       {user && <Text mt='1'>Logged in as: {user?.name}</Text>}
          <Switch>
            <Route path="/" exact>
              <Trending/>
            </Route>
            <Route path="/movies" component={Movies} />
            <Route path="/series" component={Series} />
            <Route path="/search" component={Search} />
            <Route path="/auth">
              <Homepage setUser={setUser}/>
            </Route>
          </Switch>
        </Container>
      </div>
    {user && <SimpleBottomNavigation setUser={setUser} />}
    </BrowserRouter>
  );
}

export default App;

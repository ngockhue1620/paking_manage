import './App.css';
import React from 'react';
import Header from './components/Header'
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import MuonXe from './mudules/MuonXe';
import BaiXe from './mudules/BaiXe';
import TraXe from './mudules/TraXEe';
function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route path="/baixe">
            <BaiXe />
          </Route>
          <Route path="/traxe">
            <TraXe />
          </Route>
          <Route path="/">
            <MuonXe />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

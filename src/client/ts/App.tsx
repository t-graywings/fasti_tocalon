import * as React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import Header from "./common/Header";
import Footer from "./common/Footer";
import HostList from "./HostList";

const App = () => (
  <BrowserRouter>
    <Route exact path='/' component={Home} />
    <Route path ='/about' component={About} />
  </BrowserRouter>
)

const Home = () => (
  <>
    <Header />
    <HostList />
    <Footer />
  </>
)

const About = () => (
  <>
    <Header />
    <Footer />
  </>
)

export default App;
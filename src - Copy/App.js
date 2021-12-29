import React, { useEffect, useState, useRef } from 'react';
import { Route, Switch } from "react-router-dom";
import Home from './views/Home';
import SearchImage from "./views/SearchImage";
import Sections from "./views/pages";
import Header from "./components/navs/Header";
import Footer from "./components/navs/Footer"
import { Box } from '@mui/material';
import LoadingBar from 'react-top-loading-bar'


const App = () => {

  const [inputValue, setInputValue] = useState('');
  // const [progress, setProgress] = useState(0);
  const [Loader, setLoader] = useState(false);
  const ref = useRef(null)

  useEffect(() => {
    return () => {
      clearTimeout(ref.current);
    };
  }, []);

  const onLoader = () => {
    setLoader(true);

  }


  return (
    <>
      <Box sx={{ width: '100%' }}>
        {Loader ? <LoadingBar
          color='#FFFFFF'
          progress={100}
        /> : null}
      </Box>

      <Header inputValue={inputValue} setInputValue={setInputValue} onLoader={onLoader} />
      <Switch>
        <Route exact path="/"
          children={
            () => <Home
              inputValue={inputValue}
              Loader={Loader}
              progress={100}
            />
          }
        />
        <Route path="/search" onLoader={onLoader}
          children={
            () => <SearchImage
              Loader={Loader}
              progress={100}
            />
          }
        />
        <Route path="/active"
          children={
            () =>
              <Sections
              />
          }
        />
      </Switch>
      <Footer />
    </>
  );
}

export default App;

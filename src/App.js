import React from 'react';
import {Controller} from "react-scrollmagic";
import TopMenu from "./components/TopMenu";
import Home from './components/Home';

export default function App() {
  return (
    <Controller>
      <TopMenu />
      <Home />
    </Controller>
  );
}

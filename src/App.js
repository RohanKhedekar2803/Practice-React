
import React, { useEffect, useState,useRef , useCallback  } from "react";
import Tailwind from "./Components/Tailwind";
import Header from "./Components/Header";
import PasswordGeneratorComponent from "./Components/PasswordGeneratorComponent";
function App() {


  return (
    <div>

      <h1>heyy</h1>
      <Header title="rohan" name="name" age={18} />
      <Tailwind />

    <PasswordGeneratorComponent />



     
    </div>
  );
}

export default App;
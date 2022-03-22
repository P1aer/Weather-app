import React from 'react';
import Main from "./components/main";
import SideBar from "./components/sidebar";
import theme from "./components/themes";
import {ThemeProvider} from "@mui/material";
import {useData} from "./hooks/getData.hook";

function App() {
    const [loading, data] = useData()
  return (
      <ThemeProvider theme={theme}>
    <div className="App" style={{display: "flex"}}>
        <SideBar/>
        <Main/>
    </div>
      </ThemeProvider>
  );
}

export default App;

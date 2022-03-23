import React from 'react';
import Main from "./components/main";
import SideBar from "./components/sidebar";
import theme from "./components/themes";
import {ThemeProvider} from "@mui/material";
import {useData} from "./hooks/getData.hook";
import Loader from "./components/Loader";

function App() {
    const { loading } = useData()
  return (
      <ThemeProvider theme={theme}>
    <div className="App" style={{display: "flex"}}>
        {
            loading ? <Loader/>
            :   <>
                    <SideBar/>
                    <Main/>
                </>
        }
    </div>
      </ThemeProvider>
  );
}

export default App;

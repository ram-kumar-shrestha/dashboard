import { Box, CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import React, { useMemo } from "react";
import { themeSettings } from "./theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "@/ui/navbar";
import Dashboard from "@/pages/dashboard";

const App: React.FC = () => {
  const theme = useMemo(() => createTheme(themeSettings), []);

  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Box width="100%" height="100%" padding="1rem 2rem 4rem 2rem">
            <Navbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route
                path="/predictions"
                element={<div>Predictions Page</div>}
              />
            </Routes>
          </Box>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;

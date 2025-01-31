import React from "react";
import DataTransfer from "./components/DataTransfer";
import { Container, CssBaseline } from "@mui/material";

const App: React.FC = () => {
  return (
    <Container maxWidth="md">
      <CssBaseline />
      <DataTransfer />
    </Container>
  );
};

export default App;

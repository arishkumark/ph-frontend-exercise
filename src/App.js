import React, { useState } from 'react';
import { Container, Box } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import CustomAppBar from './common/CustomAppBar';
import './App.css';
import theme from './theme';
import CustomDrawer from './common/CustomDrawer';

function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerClick = () => {
    setDrawerOpen(!drawerOpen);
  }

  const handleNodeToggle = () => {
    setDrawerOpen(true)
  }

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth={false} disableGutters data-testid="container">
        <Box>
          <CustomAppBar drawerOpen={drawerOpen} />
          <CustomDrawer
            open={drawerOpen}
            onDrawerClick={handleDrawerClick}
            onNodeToggle={handleNodeToggle}
          />
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;

// src/components/Layout.tsx
import { Box, Fab } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { Navbar } from '../NavBar/NavBar';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { getGradient } from '../../util/gradients';

export const Layout = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>

      <Navbar />

      <Box component="main" sx={{ flexGrow: 1 }}>
        <Outlet />
      </Box>
      <Fab
        href="https://wa.me/"
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          position: 'fixed',
          bottom: 24,
          right: 24,
          zIndex: 1300,
          background: getGradient('texto-banner'),
          color: '#fff',
        }}
      >
        <WhatsAppIcon fontSize='large' />
      </Fab>
    </Box>
  );
};

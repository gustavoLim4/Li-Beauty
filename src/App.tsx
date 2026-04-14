
import { ThemeProvider, CssBaseline } from '@mui/material';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import theme from './theme';
import { Layout } from './components/Layout/Layout';
import { Home } from './pages/Home/Home';

const Sobre = () => <div>Página Sobre</div>;

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="sobre" element={<Sobre />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

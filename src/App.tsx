import { BrowserRouter, useRoutes } from 'react-router-dom';

import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';

import { CssBaseline } from '@mui/material';
import { HelmetProvider } from 'react-helmet-async';
import { SidebarProvider } from './contexts/SidebarContext';
import router from './router/router';
import ThemeProvider from './theme/ThemeProvider';


const Root = () => {
  const content = useRoutes(router);


  return (
    <ThemeProvider>
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <CssBaseline />
      {content}
    </LocalizationProvider>
  </ThemeProvider>

  )
}


function App() {

  return (

    <HelmetProvider>
    <SidebarProvider>
      <BrowserRouter>
<Root/>



      </BrowserRouter>
    </SidebarProvider>
  </HelmetProvider>

  );
}
export default App;

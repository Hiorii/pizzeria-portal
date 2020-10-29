import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import MainLayout from './components/layout/MainLayout/MainLayout';
import Tables from './components/views/Tables/Tables';
import Login from './components/views/Login/Login';
import Waiter from './components/views/Waiter/Waiter';
import Kitchen from './components/views/Kitchen/Kitchen';
import Booking from './components/views/Booking/Booking';
import Dashboard from './components/views/Dashboard/Dashboard';
import { StylesProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Events from './components/views/Events/Events';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#2B4C6F',
    },
  },
});

function App() {
  return (
    <BrowserRouter basename={'/panel'}>
      <StylesProvider injectFirst>
        <ThemeProvider theme={theme}>
          <MainLayout>
            <Switch>
              <Route exact path={`${process.env.PUBLIC_URL}/`} component={Dashboard} />
              <Route exact path={`${process.env.PUBLIC_URL}/login`} component={Login} />
              <Route exact path={`${process.env.PUBLIC_URL}/tables/`} component={Tables} />
              <Route exact path={`${process.env.PUBLIC_URL}/tables/booking/:id`} component={Booking} />
              <Route exact path={`${process.env.PUBLIC_URL}/waiter`} component={Waiter} />
              <Route exact path={`${process.env.PUBLIC_URL}/kitchen`} component={Kitchen} />
              <Route exact path={`${process.env.PUBLIC_URL}/tables/events/:id`} component = {Events}/>
            </Switch>
          </MainLayout>
        </ThemeProvider>
      </StylesProvider>
    </BrowserRouter>
  );
}

export default App;

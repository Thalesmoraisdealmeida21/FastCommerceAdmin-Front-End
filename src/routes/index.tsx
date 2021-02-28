import React, { Suspense, lazy } from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Switch } from 'react-router-dom';

import { Route } from 'react-router-dom';

const Dashboard = lazy(() => import('../pages/Dashboard'));
const Collections = lazy(() => import('../pages/Colections'));
const ListProducts = lazy(() => import('../pages/Products/ListProducts'));
const NewProduct = lazy(() => import('../pages/Products/NewProduct'));

const LoadingBackground: React.FC = () => (
  <Backdrop
    open
    style={{
      zIndex: 0,
      display: 'flex',
      flexDirection: 'column',
      color: 'white',
    }}
  >
    <CircularProgress color="inherit" />
    <span color="white">Carregando Aguarde ...</span>
  </Backdrop>
);

const Routes: React.FC = () => (
  <Switch>
    <Suspense fallback={<LoadingBackground />}>
      <Route path="/" component={() => <Dashboard />} exact />
      <Route path="/collections" component={() => <Collections />} />
      <Route path="/products" component={() => <ListProducts />} exact />
      <Route path="/products/new" component={() => <NewProduct />} />
    </Suspense>
  </Switch>
);

export default Routes;
import {Route, Routes} from 'react-router-dom';
import {ClientRouter, History} from '@shopify/app-bridge-react';
import Home from '../pages/Home';
import Settings from '../pages/Settings';
import QuoteOrder from '../pages/QuoteOrder';
import NotFound from '../pages/NotFound';
import route from '../lib/Helpers/Route';
import {useNavigate} from 'react-router-dom';

const history: History = {
  replace(path: string) {
    const navigate = useNavigate();

    navigate(path);
  },
};

const Router = (): JSX.Element => {
  const current = route().current() || 'home';
  const indexPath = new URL(route('home')).pathname;
  const settingsPath = new URL(route('settings')).pathname;
  const ordersQuotePath = new URL(route('orders.quote')).pathname;

  return (
    <>
      <Routes>
        <Route path={indexPath}>
          <Home />
        </Route>
        <Route path={settingsPath}>
          <Settings />
        </Route>
        <Route path={ordersQuotePath}>
          <Route path=":id">
            <QuoteOrder />
          </Route>
        </Route>
        <Route path="*">
          <NotFound current={current} />
        </Route>
      </Routes>
      <ClientRouter history={history} />
    </>
  );
};

export default Router;

import { lazy, Suspense } from 'react';
import { RouteObject } from 'react-router';
import SuspenseLoader from 'src/components/SuspenseLoader';

import SidebarLayout from 'src/layouts/SidebarLayout';

const Loader = (Component) => (props) =>
  (
    <Suspense fallback={<SuspenseLoader />}>
      <Component {...props} />
    </Suspense>
  );

// Pages

const Overview = Loader(lazy(() => import('src/content/overview')));

// Dashboards

const Crypto = Loader(lazy(() => import('src/content/dashboards/Crypto')));

// Applications

const Transactions = Loader(
  lazy(() => import('src/content/applications/Transactions'))
);
const UserProfile = Loader(
  lazy(() => import('src/content/applications/Users/profile'))
);
const UserSettings = Loader(
  lazy(() => import('src/content/applications/Users/settings'))
);

// Components

const Modals = Loader(
  lazy(() => import('src/content/pages/Components/Modals'))
);
const Accordions = Loader(
  lazy(() => import('src/content/pages/Components/Accordions'))
);
const Tabs = Loader(lazy(() => import('src/content/pages/Components/Tabs')));
const Avatars = Loader(
  lazy(() => import('src/content/pages/Components/Avatars'))
);
const Forms = Loader(lazy(() => import('src/content/pages/Components/Forms')));

// Status

const StatusMaintenance = Loader(
  lazy(() => import('src/content/pages/Status/Maintenance'))
);

const routes: RouteObject[] = [
  {
    path: 'portal/*',
    element: <SidebarLayout />,
  },
];

export default routes;

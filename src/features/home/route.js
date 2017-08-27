import {
  HomePage,
} from './';

export default {
  path: '/',
  name: 'Home',
  childRoutes: [
    { path: 'home-page',
      name: 'Home page',
      component: HomePage,
      isIndex: true,
    },
  ],
};

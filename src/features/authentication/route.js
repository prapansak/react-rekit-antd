import {
  SigninModal,
} from './';

export default {
  path: 'authentication',
  name: 'Authentication',
  childRoutes: [
    { path: 'signin-modal', name: 'Signin modal', component: SigninModal, isIndex: true },
  ],
};

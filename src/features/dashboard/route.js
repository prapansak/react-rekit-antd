import {
  Documents,
  Settings,
} from './';

export default {
  path: '/dashboard',
  name: 'Dashboard',
  childRoutes: [
    { path: 'documents', icon: 'file', name: 'Documents', component: Documents, isIndex: true },
    { path: 'settings', icon: 'setting', name: 'Settings', component: Settings },
  ],
};

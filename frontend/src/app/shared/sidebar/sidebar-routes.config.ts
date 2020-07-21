import { RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [
  {
    path: '/home',
    title: 'Home',
    icon: 'ft-home',
    class: '',
    badge: '',
    badgeClass: '',
    isExternalLink: false,
    submenu: []
  }
];

export const ADMIN_ROUTES: RouteInfo[] = [
  // {
  //   path: '/home',
  //   title: 'Home',
  //   icon: 'ft-home',
  //   class: '',
  //   badge: '',
  //   badgeClass: '',
  //   isExternalLink: false,
  //   submenu: []
  // },
  {
    path: '/admin/',
    title: 'Admin',
    icon: 'ft-settings',
    isExternalLink: false,
    class: 'has-sub',
    badge: '',
    badgeClass: '',
    submenu: [
      {
        path: '/users/',
        title: 'Usuarios',
        icon: 'ft-user',
        isExternalLink: false,
        class: 'has-sub',
        badge: '',
        badgeClass: '',
        submenu: [
          {
            path: '/admin/users/list',
            title: 'Lista',
            icon: 'ft-list',
            isExternalLink: false,
            class: '',
            badge: '',
            badgeClass: '',
            submenu: []
          },
          {
            path: '/admin/users/add',
            title: 'Agregar',
            icon: 'ft-user-plus',
            isExternalLink: false,
            class: '',
            badge: '',
            badgeClass: '',
            submenu: []
          }
        ]
      },
    ]
  },
  // {
  //   path: '/home/cursos',
  //   title: 'Cursos',
  //   icon: 'ft-home',
  //   class: '',
  //   badge: '',
  //   badgeClass: '',
  //   isExternalLink: false,
  //   submenu: []
  // },
  {
    path: '/Listas/',
    title: 'Listas',
    icon: 'ft-user',
    isExternalLink: false,
    class: 'has-sub',
    badge: '',
    badgeClass: '',
    submenu: [
      {
        path: '/home/accion/list',
        title: 'Listado',
        icon: 'ft-list',
        isExternalLink: false,
        class: '',
        badge: '',
        badgeClass: '',
        submenu: []
      },
      {
        path: '/home/accion/add',
        title: 'Crear',
        icon: 'ft-user-plus',
        isExternalLink: false,
        class: '',
        badge: '',
        badgeClass: '',
        submenu: []
      }
    ]
  },
  // {
  //   path: '/home/historico',
  //   title: 'Historico de pago',
  //   icon: 'ft-list',
  //   isExternalLink: false,
  //   class: '',
  //   badge: '',
  //   badgeClass: '',
  //   submenu: []
  // }

];

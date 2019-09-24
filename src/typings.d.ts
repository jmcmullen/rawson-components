declare module '*.png';

type Icon = { name: string; src: string };
type ButtonType = 'primary' | 'secondary';
type MenuItem = { uid: string, label: string, subtext?: string, icon: Icon };

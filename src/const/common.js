export const tabBarArr = [
  { title: '首页', icon: 'home', url: '/home' },
  { title: '找房', icon: 'find', url: '/find' },
  { title: '租房', icon: 'add', url: '/add' },
  { title: '业主', icon: 'about', url: '/about' },
  { title: '我的', icon: 'personal', url: '/personal' },
].map(a => {
  return {
    title: a.title,
    icon: `./assets/images/tabBar/${a.icon}.png`,
    activeIcon: `./assets/images/tabBar/${a.icon}Active.png`,
    url: a.url,
  };
});

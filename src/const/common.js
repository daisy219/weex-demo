export const tabBarArr = [
  { title: '首页', icon: 'home' },
  { title: '找房', icon: 'find' },
  { title: '租房', icon: 'add' },
  { title: '业主', icon: 'about' },
  { title: '我的', icon: 'personal' },
].map(a => {
  return {
    title: a.title,
    key: a.icon,
    icon: `./assets/images/tabBar/${a.icon}.png`,
    activeIcon: `./assets/images/tabBar/${a.icon}Active.png`,
  };
});

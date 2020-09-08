export const positionList = [
  {
    value: '区域',
    children: [
      {
        value: '不限',
      },
      {
        value: '嘉定区',
        children: [
          {
            value: '不限',
          },
          {
            value: '安亭',
          },
          {
            value: '丰庄',
          },
          {
            value: '华亭',
          },
        ],
      },
      {
        value: '杨浦区',
        children: [
          {
            value: '不限',
          },
          {
            value: '鞍山',
          },
          {
            value: '东外滩',
          },
          {
            value: '黄兴工员',
          },
        ],
      },
    ],
  },
  {
    value: '地铁',
    children: [
      {
        value: '不限',
      },
      {
        value: '1号线',
        children: [
          {
            value: '不限',
          },
          {
            value: '莘庄',
          },
          {
            value: '外环路',
          },
          {
            value: '莲花路',
          },
        ],
      },
      {
        value: '2号线',
        children: [
          {
            value: '不限',
          },
          {
            value: '南京东路',
          },
          {
            value: '人民广场',
          },
          {
            value: '陆家嘴',
          },
        ],
      },
    ],
  },
];
export const typeList = [
  {
    title: '整租',
    key: 'whole',
    list: [
      { label: '全部', key: 'whole-all' },
      { label: '一室', key: 'whole-one' },
      { label: '两室', key: 'whole-two' },
      { label: '三室', key: 'whole-three' },
    ],
  },
  {
    title: '合租',
    key: 'join',
    list: [
      { label: '全部', key: 'join-all' },
      { label: '一室', key: 'join-one' },
      { label: '两室', key: 'join-two' },
      { label: '三室', key: 'join-three' },
    ],
  },
];

export const moreList = [
  {
    title: '朝向',
    key: 'orientation',
    list: [
      { label: '东南', key: 'east-south' },
      { label: '西南', key: 'weast-south' },
      { label: '东北', key: 'east-nouth' },
      { label: '西北', key: 'weast-nouth' },
    ],
  },
  {
    title: '面积',
    key: 'area',
    list: [
      { label: '60-90', key: '60-90' },
      { label: '90以上', key: '90' },
    ],
  },
  {
    title: '租约',
    key: 'lease',
    list: [
      { label: '半年', key: 'half-year' },
      { label: '一年', key: 'whole-year' },
      { label: '两年', key: 'two-year' },
    ],
  },
  {
    title: '最早入住日',
    key: 'date',
    list: [
      { label: '9/12', key: '9/12' },
      { label: '9/13', key: '9/13' },
      { label: '9/14', key: '9/14' },
      { label: '9/15', key: '9/15' },
    ],
  },
  {
    title: '房源特色',
    key: 'special',
    list: [
      { label: 'VR看房', key: 'VR' },
      { label: '电梯房', key: 'elevator' },
      { label: '集中供暖', key: 'heating' },
      { label: '中央空调', key: 'center' },
    ],
  },
];

export const priceList = ['不限', '1500元以下', '1500-2500元', '2500-4000元', '4000元-5500元', '5500-7000元', '7000元以上'];

export const sortList = ['默认排序', '租金从大到小', '租金从小到大', '面积从大到小', '面积从小到大'];

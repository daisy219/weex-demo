const Utils = {
  env: {
    isTaobao() {
      const { appName } = weex.config.env;
      return /(tb|taobao|淘宝)/i.test(appName);
    },
    isTrip() {
      const { appName } = weex.config.env;
      return appName === 'LX';
    },
    isBoat() {
      const { appName } = weex.config.env;
      return appName === 'Boat' || appName === 'BoatPlayground';
    },
    isWeb() {
      const { platform } = weex.config.env;
      return typeof window === 'object' && platform.toLowerCase() === 'web';
    },
    isIOS() {
      const { platform } = weex.config.env;
      return platform.toLowerCase() === 'ios';
    },
    /**
     * 是否为 iPhone X or iPhoneXS or iPhoneXR or iPhoneXS Max
     * @returns {boolean}
     */
    isIPhoneX() {
      const { deviceHeight } = weex.config.env;
      if (Utils.env.isWeb()) {
        return (
        /* eslint-disable */
          typeof window !== undefined &&
        /* eslint-enable */
          window.screen &&
          window.screen.width &&
          window.screen.height &&
          ((parseInt(window.screen.width, 10) === 375 && parseInt(window.screen.height, 10) === 812) ||
            (parseInt(window.screen.width, 10) === 414 && parseInt(window.screen.height, 10) === 896))
        );
      }
      return (
        Utils.env.isIOS() &&
        (deviceHeight === 2436 || deviceHeight === 2688 || deviceHeight === 1792 || deviceHeight === 1624)
      );
    },
    isAndroid() {
      const { platform } = weex.config.env;
      return platform.toLowerCase() === 'android';
    },
    isTmall() {
      const { appName } = weex.config.env;
      return /(tm|tmall|天猫)/i.test(appName);
    },
    isAliWeex() {
      return Utils.env.isTmall() || Utils.env.isTrip() || Utils.env.isTaobao();
    },
    /**
     * 获取weex屏幕真实的设置高度，需要减去导航栏高度
     * @returns {Number}
     */
    getPageHeight() {
      const { env } = weex.config;
      const navHeight = Utils.env.isWeb() ? 0 : Utils.env.isIPhoneX() ? 176 : 132;
      return (env.deviceHeight / env.deviceWidth) * 750 - navHeight;
    },
    /**
     * 获取weex屏幕真实的设置高度
     * @returns {Number}
     */
    getScreenHeight() {
      const { env } = weex.config;
      return (env.deviceHeight / env.deviceWidth) * 750;
    },
  },
  uiStyle: {
    /**
     * 返回定义页面转场动画起初的位置
     * @param animationType 页面转场动画的类型 push，model
     * @param size 分割数组的长度
     * @returns {}
     */
    pageTransitionAnimationStyle(animationType) {
      if (animationType === 'push') {
        return {
          left: '750px',
          top: '0px',
          height: (weex.config.env.deviceHeight / weex.config.env.deviceWidth) * 750 + 'px',
        };
      } else if (animationType === 'model') {
        return {
          top: (weex.config.env.deviceHeight / weex.config.env.deviceWidth) * 750 + 'px',
          left: '0px',
          height: (weex.config.env.deviceHeight / weex.config.env.deviceWidth) * 750 + 'px',
        };
      };
      return {};
    },
    /** 页面高度
     * @param {number} height 需要减去的高度
     */
    pageHeight(height = 0) {
      return {
        height: (weex.config.env.deviceHeight / weex.config.env.deviceWidth) * 750 - height + 'px',
      };
    },
  },
  animation: {
    /**
     * 执行动画
     * @param ref
     * @param transform 运动类型
     * @param status
     * @param callback 回调函数
     */
    pageTransitionAnimation(ref, transform, status, callback) {
      const animation = weex.requireModule('animation');
      animation.transition(
        ref,
        {
          styles: {
            transform: transform,
          },
          duration: status ? 250 : 300, // ms
          timingFunction: status ? 'ease-in' : 'ease-out',
          delay: 0, // ms
        },
        function () {
          callback && callback();
        }
      );
    },
  },
};
export default Utils;

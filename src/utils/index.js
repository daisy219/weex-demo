export default {
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

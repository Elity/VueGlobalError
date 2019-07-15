const install = (Vue, { handler = () => {} }) => {
  Vue.mixin({
    beforeCreate() {
      const options = this.$options;
      const { methods = {}, catchAsyncError } = options;
      if (!catchAsyncError) return;
      Object.keys(methods).forEach(key => {
        const fn = methods[key];
        options.methods[key] = function(...args) {
          const ret = fn.apply(this, args);
          if (ret && typeof ret.catch === "function") {
            return ret.catch(handler);
          }
          return ret;
        };
      });
    }
  });
};

export default {
  install
};

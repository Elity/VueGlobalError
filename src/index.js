export default function VueGlobalError(handle) {
  if (typeof handle !== "function")
    throw new TypeError(handle + " is not a function");
  let VueGlobalErrorHandlePlugin = {};
  VueGlobalErrorHandlePlugin.install = (Vue, options) => {
    Vue.mixin({
      beforeCreate() {
        const methods = this.$options.methods || {};
        Object.keys(methods).forEach(key => {
          let fn = methods[key];
          this.$options.methods[key] = function(...args) {
            let ret = fn.apply(this, args);
            if (ret && typeof ret.catch === "function") {
              return ret.catch(handle);
            } else {
              return ret;
            }
          };
        });
      }
    });
  };
  return VueGlobalErrorHandlePlugin;
}

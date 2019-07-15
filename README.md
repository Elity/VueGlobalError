# VueGlobalError
Vue全局错误处理插件，可catch住method里面同步错误与异步错误

## Usage

```javascript
// in main.js

Vue.use(asyncErrorCatch, {
  handler(err) {
    console.log("catch async error:", err.message);
  }
});

```

```javascript

// in component
export default{
  name: "MyPage",
  catchAsyncError: true,
  methods: {
    async fn() {
      // Will catch by plugin
      throw new Error("this is an async error")
    },
    test() {
      // Will catch by Vue.config.errorHandler
      throw new Error('sync error')
    }
  }
}

```

## 为什么需要把Vue错误处理流程改成这样？
[Vue中异步错误处理](http://www.ccc5.cc/2213.html "Vue中异步错误处理")


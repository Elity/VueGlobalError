# VueGlobalError
Vue全局错误处理插件，可catch住method里面同步错误与异步错误

## Usage

```javascript
// in main.js

Vue.use(VueGlobalError(err=>{
	// handle global error
}))

```

```javascript

function maybeAsyncError() {
  return new Promise((resolve, reject) => {
    setTimeout(() => Math.random() > 0.5 ? resolve() : reject('async throw error'), 100)
  })
}

// in component
export default {

	method:{
		async fn() {
		  throw 'sync throw error'
		},
		async fn1(){
			await maybeAsyncError()
		}
	}

}

```

##为什么需要把Vue错误处理流程改成这样？
[Vue中异步错误处理](http://www.ccc5.cc/2213.html "Vue中异步错误处理")


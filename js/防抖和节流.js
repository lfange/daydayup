/**
 * 节流: n 秒内只运行一次，若在 n 秒内重复触发，只有一次生效
 * 
 
 * 滚动加载，加载更多或滚到底部监听
 * 搜索框，搜索联想功能
 */

// 简单版节流
function throttle(fn, delay) {
	let oldtime = Date.now()
	
	return function(...args) {
		let newtime = Date.now()
		if (newtime - oldtime >= delay) {
			fn.apply(null, args)
			oldtime = Date.now()
		}
	}
}

function throttled(fn, delay) {
	let timer = null
	let starttime = Date.now()
	return function() {
		let curTime = Date.now() // 当前时间
		let remaining = delay - (curTime - starttime) // 从上一次到现在，还剩下多少多余时间
		let context = this
		let args = arguments
		clearTimeout(timer)
		if (remaining <= 0) {
			fn.apply(context, args)
			starttime = Date.now()
		} else {
			timer = setTimeout(fn, remaining);
		}
	}
}

/**
 * 防抖: n 秒后在执行该事件，若在 n 秒内被重复触发，则重新计时
 * 
 * 搜索框搜索输入。只需用户最后一次输入完，再发送请求
 * 手机号、邮箱验证输入检测
 * 窗口大小resize。只需窗口调整完成后，计算窗口大小。防止重复渲染。
 */

// 简单版防抖
function fangdou(fns, delay) {
	let timer
	return function() {
		if (timer) clearTimeout(timer)
		timer = setTimeout(() => {
			fns()
		}, delay)
	}
	
	// return function() {
	// 	const context = this
	// 	const arg = arguments
		
	// 	if (timer) clearTimeout(timer)
	// 	timer = setTimeout(function(){
	// 		fns.apply(context, arg)
	// 	},delay)
	// }
}


function debounce(func, wait, immediate) {

	let timeout;

	return function() {
		let context = this;
		let args = arguments;

		if (timeout) clearTimeout(timeout); // timeout 不为null
		if (immediate) {
			let callNow = !timeout; // 第一次会立即执行，以后只有事件执行后才会再次触发
			timeout = setTimeout(function() {
				timeout = null;
			}, wait)
			if (callNow) {
				func.apply(context, args)
			}
		} else {
			timeout = setTimeout(function() {
				func.apply(context, args)
			}, wait);
		}
	}
}

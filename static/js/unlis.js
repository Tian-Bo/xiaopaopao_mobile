/* route ===================================================================================================================================================== */
/* 这个是封装路由的函数()
 *  $pageRoute(url,state，func)
 *	@url:跳转的路径
 *  @func:在跳转中执行的函数
 *	@state:跳转的状态
 * 	属性值：
 * 		navigateTo：保留当前页面，跳转到应用内的某个页面
 * ·	redirectTo：关闭当前页面，跳转到应用内的某个页面
 *  	reLaunch：关闭所有页面，打开到应用内的某个页面
 * 		switchTab：跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面
 * 		navigateBack:关闭当前页面，返回上一页面或多级页面 
 * 提示： 添加事件，必填填写跳转状态，默认可填写‘default’，与‘navigateTo’状态相同
 */
export const $uniRoute = function $pageRoute(url, state = 'navigateTo', func = 'func') {
	
	let error = function() {
		uni.navigateTo({
			url: '/pages/error/404'
		})
	}
	
	switch (state) {
			/*保留当前页面，跳转到应用内的某个页面*/
		case 'navigateTo':
			uni.navigateTo({
				url: url,
				success: func,
				fail: error
			});
			break;
			/*关闭当前页面，跳转到应用内的某个页面*/
		case 'redirectTo':
			uni.redirectTo({
				url: url,
				success: func,
				fail: error
			});
			break;
			/*关闭所有页面，打开到应用内的某个页面*/
		case 'reLaunch':
			uni.reLaunch({
				url: url,
				success: func,
				fail: error
			});
			break;
			/*跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面*/
		case 'switchTab':
			uni.switchTab({
				url: url,
				success: func,
				fail: error
			});
			break;
		default:
			console.log(`${url}跳转出错`);
	}
}

/* ajax ===================================================================================================================================================== */
/**
 * ajax异步封装
 * @param {url} url 开发者服务器接口地址
 * @param {object} pram 请求的参数
 * @param {function} callback 回调函数
 * @return {Function}
 */
export const $uniRequest = async function uniRequest(url, pram, callback) {
	let [error, res] = await uni.request({
		url: 'http://localhost:3000' + url,
		method: pram.method || 'GET',
		header: pram.header || {'content-type': 'application/json'},
		data: pram.data
	})
	
	callback(res.data, error);
}

// $showTips  封装提示函数
export const $showTips = function(title = "默认标题", duration = 1000, icon = "loading", pram = {}) {
	// 参数判断
	// title判断
	if (title.length > 7) console.warn('title:字符长度 <= 7');
	// duration
	if (duration > 3000) console.warn('duration:超过3秒会造成交互迟钝的错觉');
	// 封装函数
	uni.showToast({
		title: title,
		duration: duration,
		icon: icon,
		image: pram.image || null,
		mask: pram.mask || true,
		success: pram.success || null,
		fail: pram.error || null
	});
}

// alert 提示框封装
export const $showAlert = async function(title = "未注明标题", content = "未注明内容",callback) {
	let [error, res] = await uni.showModal({
		title: title,
		content: content,
	});
	callback(res, error);
}

// 所有//开始的url前缀
export const $httpImg = 'http:'
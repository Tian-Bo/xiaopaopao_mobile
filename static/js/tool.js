/**
 * 手机号格式化
 * @param {String} phone
 */
export const formatPhone = (phone) => {
    phone = phone.toString();
    return phone.substr(0, 3) + '****' + phone.substr(7, 11);
};

/**
 * 获取字符串字节长度
 * @param {String}
 * @returns {Boolean}
 */
export const checkLength = (v) => {
    let realLength = 0;
    let len = v.length;
    for (let i = 0; i < len; i++) {
        let charCode = v.charCodeAt(i);
        if (charCode >= 0 && charCode <= 128) realLength += 1;
        else realLength += 2;
    }
    return realLength;
};

/**
 * 生成随机颜色值
 */
export const getRandomColor = () => {
    const rgb = [];
    for (let i = 0; i < 3; ++i) {
        let color = Math.floor(Math.random() * 256).toString(16);
        color = color.length === 1 ? '0' + color : color;
        rgb.push(color)
    }
    return '#' + rgb.join('')
};

/**
 * 将数据存储在本地缓存中
 * @param key '定义变量'
 * @param data 设置数据
 * @returns {boolean}
 */
export const setStorage = (key, data) => {
    uni.setStorage({
    	key: key,
    	data: data
    })
};

/**
 * 从本地缓存中异步获取数据
 * @param key '定义变量'
 * @param callback 回调函数
 * @returns {boolean}
 */
export const getStorage = (key, callback) => {
	uni.getStorage({
    	key: key,
    	success: function (res) {
    		callback(res.data)
    	}
    });
};

/**
 * 从本地缓存中异步移除置顶key的缓存数据
 * @param key '定义变量'
 * @param callback 回调函数
 * @returns {boolean}
 */
export const removeStorage = (key, callback) => {
	uni.removeStorage({
    	key: key,
    	success: function (res) {
    		callback(key + '移除成功')
    	}
    });
};

/**
 * 过滤非法字符串 并且长度由2到12位组成
 * @param str 任何类型
 * @returns {boolean}
 */
export const illegalFilter = (str) => {
    let regEn = /[`~!@#$%^&*()_+<>?:"{},.\/;'[\]]/im;
    let regCn = /[·！#￥（——）：；“”‘、，|《。》？、【】[\]]/im;
	if (str.length < 2 || str.length > 12) return true;
    if (regEn.test(str) || regCn.test(str)) return true;
    return false;
};

/**
 * 验证身份证号
 * @param str 身份证输入input
 * @returns {boolean}
 */
export const checkCardNo = (str) => {
	let reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
	if (reg.test(str)) return false;
	return true;
};

/**
 * 验证昵称由4到16位（字母，数字，下划线，减号）
 * @param str 昵称输入input
 * @returns {boolean}
 */
export const checkUserName = (str) => {
	let reg = /^[a-zA-Z0-9_-]{4,16}$/;
	if (reg.test(str)) return false;
	return true;
};

/**
 * 验证手机号
 * @param str 号码输入input
 * @returns {boolean}
 */
export const checkTel = (str) => {
    let reg = /^1[3456789][0-9]{9}$/;
	if (reg.test(str)) return false;
	return true;
};

/**
 * 验证4位验证码
 * @param str 验证码输入input
 * @returns {boolean}
 */
export const checkVerification= (str) => {
    let reg = /^[0-9]{4}$/;
	if (reg.test(str)) return false;
	return true;
};

/**
 * 验证密码必须且只含有数字和字母，可以拥有英文符号，8-16位。
 * @param str 密码输入input
 * @returns {boolean}
 */
export const checkPassword= (str) => {
    let reg = /(?=.{6,16})(?=.*\d)(?=.*[a-z])[\x20-\x7f]*/i;
	if (reg.test(str)) return false;
	return true;
};

/**
 * 格式化时间戳（年|月|日）
 * @param {timestamp} value
 */
export const timeFilter = (value) => {
	let date = new Date(value * 1000)
	let year = date.getFullYear(); // 获取完整的年份(4位,1970)
	let month = date.getMonth() + 1; // 获取月份(0-11,0代表1月,用的时候记得加上1)
	let day = date.getDate(); // 获取日(1-31)
	let hour = date.getHours(); // 获取小时数(0-23)
	let minute = date.getMinutes(); // 获取分钟数(0-59)
	let second = date.getSeconds(); // 获取秒数(0-59)
	
	return year + '-' + month + '-' + day
}
// 本地缓存操作
const localStorage = {
    getStorage: function (name) {
        const exp = 60 * 60 * 24 * 10 * 1000; // 有效期10天
        if (window.localStorage.getItem(name)) {
            const vals = window.localStorage.getItem(name); // 获取本地存储的值
            if (vals.length < 50) {
                localStorage.delStorage('token');
                return null;
            } else {
                const dataObj = JSON.parse(vals); // 将字符串转换成JSON对象
                // 如果(当前时间 - 存储的元素在创建时候设置的时间) > 过期时间
                const isTimed = (new Date().getTime() - dataObj.timer) > exp;
                if (isTimed) {
                    console.log("存储已过期");
                    window.localStorage.removeItem(name);
                    return null;
                } else {
                    var newValue = dataObj.val;
                }
                return newValue;
            }
        } else {
            return null;
        }
    },

    setStorage: function (name, data) {
        const curtime = new Date().getTime(); // 获取当前时间 ，转换成JSON字符串序列
        const valueDate = JSON.stringify({
            val: data,
            timer: curtime
        });
        window.localStorage.setItem(name, valueDate);
    },

    delStorage: function (name) {
        window.localStorage.removeItem(name);
    },
}

export { localStorage }
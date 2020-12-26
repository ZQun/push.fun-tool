"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tool = void 0;
const decorator_1 = require("@midwayjs/decorator");
let Tool = class Tool {
    /**
     * 获取class类名称&转换为小写
     * @param entity Class实体
     */
    parseClassName(entity) {
        let className = entity.toString();
        className = className.substr('class '.length);
        className = className.replace(/\s+/g, "");
        return className.substr(0, className.indexOf('{')).toLowerCase();
    }
    /**
     * 打印函数名称
     * @param fn
     */
    parseFunctionName(fn) {
        return (console.debug(fn.name), fn);
    }
    /**
     * 获取URL上的参数
     * @param param 参数名
     */
    getUrlParam(param) {
        const result = window.location.href.match(new RegExp('(\\?|&)' + param + '(\\[\\])?=([^&#]*)'));
        return result ? result[3] : undefined;
    }
    /**
     * 保留两位小数 同时不四舍五入
     * @param number
     * @param num
     */
    toFixedNum(number, num) {
        const type = typeof (number);
        let number_arr = [];
        if (type === 'number') {
            const str = number.toString();
            number_arr = str.split('.');
        }
        else if (type === 'string') {
            number_arr = number.split('.');
        }
        if (number_arr.length > 1) {
            number = number_arr[0] + '.' + number_arr[1].substr(0, num);
        }
        return parseFloat(number);
    }
    /**
     * 判断是否为null或者undefined
     * @param data
     */
    isNullData(data) {
        if (data === '' || data === null || data === undefined || data === 'undefined') {
            return true;
        }
        else {
            return false;
        }
    }
    /**
     * 判断是否是 Float 浮点
     * @param num
     */
    isFloat(num) {
        return num !== parseInt(num);
    }
    /**
     * 判断是否为数字
     * @param n
     */
    isNumber(n) {
        return n === +n;
    }
    /**
     * 判断是否为数组
     * @param obj
     */
    isArray(obj) {
        return Array.isArray(obj);
    }
    /**
     * 移除数组中的假值
     * @param arr
     */
    compact(arr) {
        return arr.filter(Boolean);
    }
    /**
     * 将数字转为数字数组 (移除符号 - )
     * @param n
     */
    digitize(n) {
        return [...`${Math.abs(n)}`].map(i => parseInt(i));
    }
    /**
     * 检查是否给定的字符串中有空格
     * @param str
     */
    containsWhitespace(str) {
        return /\s/.test(str);
    }
    /**
     * 压缩字符串中的空白 (多个空格转换为单个空格)
     * @param str
     */
    compactWhitespace(str) {
        return str.replace(/\s{2,}/g, ' ');
    }
    /**
     * 如果提供的值不是数组 则将它转为数组
     * @param val
     */
    castArray(val) {
        return (Array.isArray(val) ? val : [val]);
    }
    /**
     * 对数组中的对象进行排序
     * @param key
     * @param desc
     * const arr = [{"id":2,"name":"2"},{"id":1,"name":"1"}]
     * arr.sort(keysort('name', 'desc'));
     */
    keysort(key, desc) {
        return function (a, b) {
            return desc ? (a[key] < b[key]) : (a[key] > b[key]);
        };
    }
    /**
     * 返回字节单位字符串长度
     * @param str
     */
    byteSize(str) {
        return new Blob([str]).size;
    }
    /**
     * 编码 base-64 的ASCII字符串
     * @param str
     */
    encryptBase64(str) {
        return Buffer.from(str, 'binary').toString('base64');
    }
    /**
     * 解码用 base-64 编码的字符串数据
     * @param str
     */
    decryptBase64(str) {
        return Buffer.from(str, 'base64').toString('binary');
    }
    /**
     * 半角转换为全角函数
     * @param str
     */
    ToDBC(str) {
        var result = '';
        for (var i = 0; i < str.length; i++) {
            let code = str.charCodeAt(i);
            if (code >= 33 && code <= 126) {
                result += String.fromCharCode(str.charCodeAt(i) + 65248);
            }
            else if (code == 32) {
                result += String.fromCharCode(str.charCodeAt(i) + 12288 - 32);
            }
            else {
                result += str.charAt(i);
            }
        }
        return result;
    }
    /**
     * 全角转换为半角函数
     * @param str
     */
    ToCDB(str) {
        var result = '';
        for (var i = 0; i < str.length; i++) {
            let code = str.charCodeAt(i);
            if (code >= 65281 && code <= 65374) {
                result += String.fromCharCode(str.charCodeAt(i) - 65248);
            }
            else if (code == 12288) {
                result += String.fromCharCode(str.charCodeAt(i) - 12288 + 32);
            }
            else {
                result += str.charAt(i);
            }
        }
        return result;
    }
};
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", Object)
], Tool.prototype, "ctx", void 0);
Tool = __decorate([
    decorator_1.Provide()
], Tool);
exports.Tool = Tool;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvUXVuL1VuY2x1dHRlci/kuZ3ms7Doja/kuJrpobnnm64vc2VydmVyL3NyYy9jb21wb25lbnRzL21pZHdheS10b29sL3NyYy8iLCJzb3VyY2VzIjpbInNlcnZpY2UvdG9vbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxtREFBbUU7QUFHbkUsSUFBYSxJQUFJLEdBQWpCLE1BQWEsSUFBSTtJQUtiOzs7T0FHRztJQUNJLGNBQWMsQ0FBQyxNQUFXO1FBQzdCLElBQUksU0FBUyxHQUFXLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQTtRQUN6QyxTQUFTLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDN0MsU0FBUyxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxDQUFBO1FBQ3pDLE9BQU8sU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFBO0lBQ3BFLENBQUM7SUFFRDs7O09BR0c7SUFDSSxpQkFBaUIsQ0FBQyxFQUFZO1FBQ2pDLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksV0FBVyxDQUFDLEtBQWE7UUFDNUIsTUFBTSxNQUFNLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksTUFBTSxDQUFDLFNBQVMsR0FBRyxLQUFLLEdBQUcsb0JBQW9CLENBQUMsQ0FBQyxDQUFBO1FBQy9GLE9BQU8sTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQTtJQUN6QyxDQUFDO0lB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
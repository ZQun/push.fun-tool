export declare class Tool {
    ctx: any;
    /**
     * 获取class类名称&转换为小写
     * @param entity Class实体
     */
    parseClassName(entity: any): string;
    /**
     * 打印函数名称
     * @param fn
     */
    parseFunctionName(fn: Function): Function;
    /**
     * 获取URL上的参数
     * @param param 参数名
     */
    getUrlParam(param: string): string;
    /**
     * 保留两位小数 同时不四舍五入
     * @param number
     * @param num
     */
    toFixedNum(number: any, num: any): number;
    /**
     * 判断是否为null或者undefined
     * @param data
     */
    isNullData(data: any): boolean;
    /**
     * 判断是否是 Float 浮点
     * @param num
     */
    isFloat(num: any): boolean;
    /**
     * 判断是否为数字
     * @param n
     */
    isNumber(n: any): boolean;
    /**
     * 判断是否为数组
     * @param obj
     */
    isArray(obj: any): boolean;
    /**
     * 移除数组中的假值
     * @param arr
     */
    compact(arr: Array<any>): any[];
    /**
     * 将数字转为数字数组 (移除符号 - )
     * @param n
     */
    digitize(n: number): number[];
    /**
     * 检查是否给定的字符串中有空格
     * @param str
     */
    containsWhitespace(str: string): boolean;
    /**
     * 压缩字符串中的空白 (多个空格转换为单个空格)
     * @param str
     */
    compactWhitespace(str: string): string;
    /**
     * 如果提供的值不是数组 则将它转为数组
     * @param val
     */
    castArray(val: any): any[];
    /**
     * 对数组中的对象进行排序
     * @param key
     * @param desc
     * const arr = [{"id":2,"name":"2"},{"id":1,"name":"1"}]
     * arr.sort(keysort('name', 'desc'));
     */
    keysort(key: any, desc: any): (a: any, b: any) => boolean;
    /**
     * 返回字节单位字符串长度
     * @param str
     */
    byteSize(str: string): number;
    /**
     * 编码 base-64 的ASCII字符串
     * @param str
     */
    encryptBase64(str: string): string;
    /**
     * 解码用 base-64 编码的字符串数据
     * @param str
     */
    decryptBase64(str: string): string;
    /**
     * 半角转换为全角函数
     * @param str
     */
    ToDBC(str: any): string;
    /**
     * 全角转换为半角函数
     * @param str
     */
    ToCDB(str: any): string;
}

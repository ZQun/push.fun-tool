export declare class Nanoid {
    ctx: any;
    /**
     * 生成随机唯一id
     * @param length 生成id长度 default[21]
     */
    id(length?: number): string;
    /**
     * 指定范围生成
     * @param length 生成id长度 default[21]
     * ```ts
     * this.tool.setId(6)
     * ```
     * @param alphabet 用于生成id的字符串
     * ```ts
     * this.tool.setId(6, '123456abcdef') // AB2edf
     * ```
     */
    setId(length?: number, alphabet?: string): string;
}

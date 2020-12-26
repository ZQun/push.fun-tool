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
exports.Nanoid = void 0;
const decorator_1 = require("@midwayjs/decorator");
const nanoid_1 = require("nanoid");
let Nanoid = class Nanoid {
    /**
     * 生成随机唯一id
     * @param length 生成id长度 default[21]
     */
    id(length) {
        if (!length)
            length = 21;
        let id = nanoid_1.nanoid(length);
        return id;
    }
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
    setId(length, alphabet) {
        if (!length)
            length = 21;
        if (!alphabet)
            alphabet = '1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const nanoid = nanoid_1.customAlphabet(alphabet, length);
        return nanoid();
    }
};
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", Object)
], Nanoid.prototype, "ctx", void 0);
Nanoid = __decorate([
    decorator_1.Provide()
], Nanoid);
exports.Nanoid = Nanoid;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmFub2lkLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9RdW4vVW5jbHV0dGVyL+S5neazsOiNr+S4mumhueebri9zZXJ2ZXIvc3JjL2NvbXBvbmVudHMvbWlkd2F5LXRvb2wvc3JjLyIsInNvdXJjZXMiOlsic2VydmljZS9uYW5vaWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsbURBQW1FO0FBQ25FLG1DQUErQztBQUcvQyxJQUFhLE1BQU0sR0FBbkIsTUFBYSxNQUFNO0lBS2Y7OztPQUdHO0lBQ0ksRUFBRSxDQUFDLE1BQWU7UUFDckIsSUFBRyxDQUFDLE1BQU07WUFBRSxNQUFNLEdBQUcsRUFBRSxDQUFBO1FBQ3ZCLElBQUksRUFBRSxHQUFXLGVBQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUMvQixPQUFPLEVBQUUsQ0FBQTtJQUNiLENBQUM7SUFFRDs7Ozs7Ozs7OztPQVVHO0lBQ0ksS0FBSyxDQUFDLE1BQWUsRUFBRSxRQUFpQjtRQUMzQyxJQUFHLENBQUMsTUFBTTtZQUFFLE1BQU0sR0FBRyxFQUFFLENBQUE7UUFDdkIsSUFBRyxDQUFDLFFBQVE7WUFBRSxRQUFRLEdBQUcsZ0VBQWdFLENBQUE7UUFDekYsTUFBTSxNQUFNLEdBQVEsdUJBQWMsQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUE7UUFDcEQsT0FBTyxNQUFNLEVBQUUsQ0FBQTtJQUNuQixDQUFDO0NBQ0osQ0FBQTtBQTdCRztJQURDLGtCQUFNLEVBQUU7O21DQUNEO0FBSEMsTUFBTTtJQURsQixtQkFBTyxFQUFFO0dBQ0csTUFBTSxDQWdDbEI7QUFoQ1ksd0JBQU0ifQ==
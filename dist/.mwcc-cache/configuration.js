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
exports.TOOLConfiguration = void 0;
const decorator_1 = require("@midwayjs/decorator");
const path_1 = require("path");
let TOOLConfiguration = class TOOLConfiguration {
    async onReady(content) {
    }
};
__decorate([
    decorator_1.App(),
    __metadata("design:type", Object)
], TOOLConfiguration.prototype, "app", void 0);
__decorate([
    decorator_1.Config(decorator_1.ALL),
    __metadata("design:type", Object)
], TOOLConfiguration.prototype, "config", void 0);
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", Object)
], TOOLConfiguration.prototype, "appDir", void 0);
TOOLConfiguration = __decorate([
    decorator_1.Configuration({
        namespace: 'TOOL',
        importConfigs: [
            path_1.join(__dirname, 'config')
        ],
        imports: []
    })
], TOOLConfiguration);
exports.TOOLConfiguration = TOOLConfiguration;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlndXJhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvUXVuL1VuY2x1dHRlci/kuZ3ms7Doja/kuJrpobnnm64vc2VydmVyL3NyYy9jb21wb25lbnRzL21pZHdheS10b29sL3NyYy8iLCJzb3VyY2VzIjpbImNvbmZpZ3VyYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQ0EsbURBQThFO0FBQzlFLCtCQUE0QjtBQVM1QixJQUFhLGlCQUFpQixHQUE5QixNQUFhLGlCQUFpQjtJQVcxQixLQUFLLENBQUMsT0FBTyxDQUFDLE9BQXlCO0lBRXZDLENBQUM7Q0FDSixDQUFBO0FBWEc7SUFEQyxlQUFHLEVBQUU7OzhDQUNpQjtBQUd2QjtJQURDLGtCQUFNLENBQUMsZUFBRyxDQUFDOztpREFDRDtBQUdYO0lBREMsa0JBQU0sRUFBRTs7aURBQ0U7QUFURixpQkFBaUI7SUFQN0IseUJBQWEsQ0FBQztRQUNYLFNBQVMsRUFBRSxNQUFNO1FBQ2pCLGFBQWEsRUFBRTtZQUNYLFdBQUksQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDO1NBQzVCO1FBQ0QsT0FBTyxFQUFFLEVBQUU7S0FDZCxDQUFDO0dBQ1csaUJBQWlCLENBYzdCO0FBZFksOENBQWlCIn0=
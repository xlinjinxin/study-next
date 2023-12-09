"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@nestjs/core");
var app_module_1 = require("./app.module");
var swagger_1 = require("./swagger");
function bootstrap() {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var app;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, core_1.NestFactory.create(app_module_1.AppModule)];
                case 1:
                    app = _a.sent();
                    // 设置全局路由前缀
                    app.setGlobalPrefix('api');
                    // 创建swagger文档
                    (0, swagger_1.generateDocument)(app);
                    return [4 /*yield*/, app.listen(3000, function () {
                            console.log("\u9879\u76EE\u8FD0\u884C\u5728http:localhost:3000/api");
                        })];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
bootstrap();

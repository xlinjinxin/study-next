"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
var tslib_1 = require("tslib");
var common_1 = require("@nestjs/common");
var app_controller_1 = require("./app.controller");
var app_service_1 = require("./app.service");
var user_module_1 = require("./user/user.module");
// app.module.ts
var typeorm_1 = require("@nestjs/typeorm");
// 环境配置相关
var config_1 = require("@nestjs/config");
var AppModule = function () {
    var _classDecorators = [(0, common_1.Module)({
            imports: [
                config_1.ConfigModule.forRoot({
                    isGlobal: true,
                }),
                typeorm_1.TypeOrmModule.forRootAsync({
                    useFactory: function () { return ({
                        type: 'mysql',
                        host: 'localhost',
                        port: +3306, // 来自process.env的每个值都是字符串，前面加+转数字
                        username: 'root',
                        password: '123456',
                        database: 'nest_mysql',
                        autoLoadEntities: true, // 自动加载模块 推荐
                        // entities: [path.join(__dirname, '/../**/*.entity{.ts,.js}')], // 不推荐
                        synchronize: true, // 开启同步，生产中要禁止
                        entities: ['src/enties/**.ts'],
                    }); },
                }),
                user_module_1.UserModule,
            ],
            controllers: [app_controller_1.AppController],
            providers: [app_service_1.AppService],
        })];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var AppModule = _classThis = /** @class */ (function () {
        function AppModule_1() {
        }
        return AppModule_1;
    }());
    tslib_1.__setFunctionName(_classThis, "AppModule");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        tslib_1.__esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        AppModule = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        tslib_1.__runInitializers(_classThis, _classExtraInitializers);
    })();
    return AppModule = _classThis;
}();
exports.AppModule = AppModule;

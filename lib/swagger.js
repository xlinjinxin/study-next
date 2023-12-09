"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateDocument = void 0;
var tslib_1 = require("tslib");
var swagger_1 = require("@nestjs/swagger");
var packageConfig = tslib_1.__importStar(require("../package.json"));
var generateDocument = function (app) {
    // 创建swagger接口文档
    var options = new swagger_1.DocumentBuilder()
        .setTitle(packageConfig.name) // 标题
        .setDescription(packageConfig.description) // 描述
        .setVersion(packageConfig.version) // 版本
        .addBearerAuth()
        .build();
    var document = swagger_1.SwaggerModule.createDocument(app, options);
    swagger_1.SwaggerModule.setup('/api/swagger', app, document); // 第一个参数是接口文档地址
};
exports.generateDocument = generateDocument;

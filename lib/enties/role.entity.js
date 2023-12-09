"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Role = void 0;
var tslib_1 = require("tslib");
// role.entity.ts
var typeorm_1 = require("typeorm");
var user_entity_1 = require("./user.entity");
var Role = function () {
    var _classDecorators = [(0, typeorm_1.Entity)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _instanceExtraInitializers = [];
    var _id_decorators;
    var _id_initializers = [];
    var _name_decorators;
    var _name_initializers = [];
    var _users_decorators;
    var _users_initializers = [];
    var _createAt_decorators;
    var _createAt_initializers = [];
    var _updateAt_decorators;
    var _updateAt_initializers = [];
    var Role = _classThis = /** @class */ (function () {
        function Role_1() {
            this.id = (tslib_1.__runInitializers(this, _instanceExtraInitializers), tslib_1.__runInitializers(this, _id_initializers, void 0));
            this.name = tslib_1.__runInitializers(this, _name_initializers, void 0);
            this.users = tslib_1.__runInitializers(this, _users_initializers, void 0);
            this.createAt = tslib_1.__runInitializers(this, _createAt_initializers, void 0);
            this.updateAt = tslib_1.__runInitializers(this, _updateAt_initializers, void 0);
        }
        return Role_1;
    }());
    tslib_1.__setFunctionName(_classThis, "Role");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _id_decorators = [(0, typeorm_1.PrimaryGeneratedColumn)()];
        _name_decorators = [(0, typeorm_1.Column)()];
        _users_decorators = [(0, typeorm_1.ManyToMany)(function (type) { return user_entity_1.User; }, function (user) { return user.roles; })];
        _createAt_decorators = [(0, typeorm_1.CreateDateColumn)()];
        _updateAt_decorators = [(0, typeorm_1.UpdateDateColumn)()];
        tslib_1.__esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: function (obj) { return "id" in obj; }, get: function (obj) { return obj.id; }, set: function (obj, value) { obj.id = value; } }, metadata: _metadata }, _id_initializers, _instanceExtraInitializers);
        tslib_1.__esDecorate(null, null, _name_decorators, { kind: "field", name: "name", static: false, private: false, access: { has: function (obj) { return "name" in obj; }, get: function (obj) { return obj.name; }, set: function (obj, value) { obj.name = value; } }, metadata: _metadata }, _name_initializers, _instanceExtraInitializers);
        tslib_1.__esDecorate(null, null, _users_decorators, { kind: "field", name: "users", static: false, private: false, access: { has: function (obj) { return "users" in obj; }, get: function (obj) { return obj.users; }, set: function (obj, value) { obj.users = value; } }, metadata: _metadata }, _users_initializers, _instanceExtraInitializers);
        tslib_1.__esDecorate(null, null, _createAt_decorators, { kind: "field", name: "createAt", static: false, private: false, access: { has: function (obj) { return "createAt" in obj; }, get: function (obj) { return obj.createAt; }, set: function (obj, value) { obj.createAt = value; } }, metadata: _metadata }, _createAt_initializers, _instanceExtraInitializers);
        tslib_1.__esDecorate(null, null, _updateAt_decorators, { kind: "field", name: "updateAt", static: false, private: false, access: { has: function (obj) { return "updateAt" in obj; }, get: function (obj) { return obj.updateAt; }, set: function (obj, value) { obj.updateAt = value; } }, metadata: _metadata }, _updateAt_initializers, _instanceExtraInitializers);
        tslib_1.__esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Role = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        tslib_1.__runInitializers(_classThis, _classExtraInitializers);
    })();
    return Role = _classThis;
}();
exports.Role = Role;

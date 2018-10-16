"use strict";
/**
 * Generate Release
 * Written by Kevin Gravier <kevin@mrkmg.com>
 * MIT License 2018
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var GitResetError = /** @class */ (function (_super) {
    __extends(GitResetError, _super);
    function GitResetError(originalError) {
        var _newTarget = this.constructor;
        var _this = _super.call(this, originalError ? originalError.message : "Unknown Error, Resetting.") || this;
        _this.originalError = originalError;
        var proto = _newTarget.prototype;
        if (Object.setPrototypeOf) {
            Object.setPrototypeOf(_this, proto);
        }
        else {
            _this.__proto__ = _newTarget.prototype;
        }
        return _this;
    }
    return GitResetError;
}(Error));
exports.GitResetError = GitResetError;

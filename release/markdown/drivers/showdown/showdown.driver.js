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
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
import * as showdown from 'showdown';
import { MarkdownDriver } from '../driver.class';
import { ExtensionTypeByName, isMatchingExtension, isFormattingExtension, isExtensionProvider, nameOfType } from 'kio-ng2-markdown-extension';
export function isTypeName(other) {
    return (other in ExtensionTypeByName);
}
export var typeName = function (type) {
    return isTypeName(name) ? name : undefined;
};
export var filterExtensionImplementation = function (extensions) {
    if (!Array.isArray(extensions)) {
        return filterExtensionImplementation([extensions]);
    }
    var providers = [];
    extensions.forEach(function (extension) {
        if (isExtensionProvider(extension)) {
            providers.push(extension);
        }
    });
    return providers;
};
export var filterExtensionKeys = function (extensions) {
    if (!Array.isArray(extensions)) {
        return filterExtensionKeys([extensions]);
    }
    var extImplementations = [];
    extensions.forEach(function (extension) {
        if ('string' === typeof extension) {
            extImplementations.push(extension);
        }
    });
    return extImplementations;
};
export function convertExtension(extension) {
    var type = extension.type, extensionImplementation = __rest(extension, ["type"]);
    var tName = nameOfType(type);
    return __assign({ type: tName }, extensionImplementation);
}
/**
 * markdown driver using showdown
 */
var ShowdownDriver = (function (_super) {
    __extends(ShowdownDriver, _super);
    function ShowdownDriver(options) {
        var _this = _super.call(this, options) || this;
        _this.options = options;
        return _this;
    }
    ShowdownDriver.prototype.applyExtension = function (extension) {
        var _this = this;
        if ('string' === typeof extension) {
            return this.converter.useExtension(extension);
        }
        if (isExtensionProvider(extension)) {
            var name_1 = extension.name;
            var extensionArgs = extension();
            extensionArgs.forEach(function (extensionArg) {
                if (isFormattingExtension(extensionArg)) {
                    _this.converter.addExtension(convertExtension(extensionArg), extension.name);
                }
                if (isMatchingExtension(extensionArg)) {
                    _this.converter.addExtension(convertExtension(extensionArg), extension.name);
                }
            });
        }
    };
    ShowdownDriver.prototype.setupConverter = function () {
        var _this = this;
        var keys = filterExtensionKeys(this.options.extensions);
        this.converter = new showdown.Converter({ extensions: keys });
        var providers = filterExtensionImplementation(this.options.extensions);
        providers.forEach(function (provider) {
            _this.applyExtension(provider);
        });
    };
    ShowdownDriver.prototype.renderHtml = function (source) {
        return this.converter.makeHtml(source);
    };
    return ShowdownDriver;
}(MarkdownDriver));
export { ShowdownDriver };
//# sourceMappingURL=showdown.driver.js.map
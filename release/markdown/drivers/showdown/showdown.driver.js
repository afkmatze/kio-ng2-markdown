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
import * as showdown from 'showdown';
import { MarkdownDriver } from '../driver.class';
/**
 * Markdown driver implementation for showdown
 *
 * @param      options  showdown config
 *
 * @return     markdown driver interface
 */
export function Driver(options) {
    if (!Array.isArray(options.extensions)) {
        options.extensions = [options.extensions];
    }
    var _converter = new showdown.Converter(options);
    return {
        renderHtml: function (source) {
            return _converter.makeHtml(source);
        }
    };
}
/**
 * maps options to be compatible with showdown converter options
 *
 * @param      options  The options
 *
 * @return     showdown converter options
 */
export var parseOptions = function (options) {
    if (!Array.isArray(options.extensions)) {
        options.extensions = [options.extensions];
    }
    return options;
};
/**
 * markdown driver using showdown
 */
var ShowdownDriver = (function (_super) {
    __extends(ShowdownDriver, _super);
    function ShowdownDriver(options) {
        var _this = _super.call(this) || this;
        _this.options = options;
        _this.converter = new showdown.Converter(_this.options);
        _this.options = parseOptions(options);
        return _this;
    }
    ShowdownDriver.prototype.renderHtml = function (source) {
        return this.converter.makeHtml(source);
    };
    return ShowdownDriver;
}(MarkdownDriver));
export { ShowdownDriver };
//# sourceMappingURL=showdown.driver.js.map
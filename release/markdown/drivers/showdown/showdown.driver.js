import * as showdown from 'showdown';
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
//# sourceMappingURL=showdown.driver.js.map
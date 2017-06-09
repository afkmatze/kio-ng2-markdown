import * as showdown from 'showdown';
export function ShowdownWrapper() {
    var converterOptions = {};
    var _converter = new showdown.Converter(converterOptions);
    return {
        parse: function (source) {
            return _converter.makeHtml(source);
        }
    };
}
//# sourceMappingURL=ShowdownWrapper.class.js.map
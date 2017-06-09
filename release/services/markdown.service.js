import { Injectable } from '@angular/core';
import { ShowdownWrapper } from '../showdown';
var KioNg2MarkdownService = (function () {
    function KioNg2MarkdownService() {
        this._wrapper = ShowdownWrapper();
    }
    KioNg2MarkdownService.prototype.renderHtml = function (source) {
        return this._wrapper.parse(source);
    };
    return KioNg2MarkdownService;
}());
export { KioNg2MarkdownService };
KioNg2MarkdownService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
KioNg2MarkdownService.ctorParameters = function () { return []; };
//# sourceMappingURL=markdown.service.js.map
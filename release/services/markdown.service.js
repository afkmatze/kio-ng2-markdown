import { Injectable } from '@angular/core';
import { drivers } from '../driver';
import { MarkdownConfig } from '../config/Config.class';
var KioNg2MarkdownService = (function () {
    function KioNg2MarkdownService(markdownConfig) {
        this.markdownConfig = markdownConfig;
        this._wrapper = drivers.showdown(this.markdownConfig.converter);
    }
    KioNg2MarkdownService.prototype.renderHtml = function (source) {
        return this._wrapper.renderHtml(source);
    };
    return KioNg2MarkdownService;
}());
export { KioNg2MarkdownService };
KioNg2MarkdownService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
KioNg2MarkdownService.ctorParameters = function () { return [
    { type: MarkdownConfig, },
]; };
//# sourceMappingURL=markdown.service.js.map
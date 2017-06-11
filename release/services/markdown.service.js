import { Injectable, Inject } from '@angular/core';
import { drivers } from '../markdown';
import { MARKDOWN_CONFIG } from '../config';
import { MarkdownRenderer, HTMLParser } from '../renderer';
var KioNg2MarkdownService = (function () {
    function KioNg2MarkdownService(markdownConfig, markdownRenderer) {
        this.markdownConfig = markdownConfig;
        this.markdownRenderer = markdownRenderer;
        this._wrapper = drivers.showdown(this.markdownConfig.converter);
    }
    KioNg2MarkdownService.prototype.parseToHtmlNode = function (source) {
        var parser = new HTMLParser(source);
        return parser.parse();
    };
    KioNg2MarkdownService.prototype.render = function (source) {
        return this.markdownToHtml(source);
    };
    KioNg2MarkdownService.prototype.renderHtml = function (source) {
        return this.parseToHtmlNode(this.render(source));
    };
    KioNg2MarkdownService.prototype.markdownToHtml = function (source) {
        return this._wrapper.renderHtml(source);
    };
    KioNg2MarkdownService.prototype.createDom = function (source) {
        var root = document.createElement('div');
        root.innerHTML = source;
        return root.childNodes;
    };
    KioNg2MarkdownService.prototype.renderToView = function (source, view) {
        if ('string' === typeof source) {
            return this.renderToView(this.renderHtml(source), view);
        }
        return this.markdownRenderer.render(source, view);
    };
    return KioNg2MarkdownService;
}());
export { KioNg2MarkdownService };
KioNg2MarkdownService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
KioNg2MarkdownService.ctorParameters = function () { return [
    { type: undefined, decorators: [{ type: Inject, args: [MARKDOWN_CONFIG,] },] },
    { type: MarkdownRenderer, },
]; };
//# sourceMappingURL=markdown.service.js.map
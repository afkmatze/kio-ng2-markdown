import { Injectable, Inject } from '@angular/core';
import { drivers } from '../markdown';
import { MARKDOWN_CONFIG } from '../config';
export function isViewContainerRef(other) {
    return ('element' in other && 'injector' in other);
}
export function isElementRef(other) {
    return ('nativeElement' in other);
}
/**
 * Kio Markdown service
 */
var KioNg2MarkdownService = (function () {
    function KioNg2MarkdownService(markdownConfig) {
        this.markdownConfig = markdownConfig;
        this._wrapper = new drivers.showdown(this.markdownConfig.converter);
    }
    /**
     * renders markdown to html
     *
     * @param      source  markdown
     *
     * @return     html source; processed by showdown
     */
    KioNg2MarkdownService.prototype.render = function (source) {
        return this._wrapper.renderHtml(source);
    };
    /**
     * renders markdown and injects it into a target view
     *
     * @param      source  markdown
     * @param      view    target view
     *
     * @return     root node element of injected html
     */
    KioNg2MarkdownService.prototype.renderToView = function (source, view) {
        /*if ( 'string' === typeof source )
        {
          return this.renderToView<T>(this.renderHtml(source), view)
        }*/
        if (isViewContainerRef(view)) {
            return this.renderToView(source, view.element.nativeElement);
        }
        if (isElementRef(view)) {
            return this.renderToView(source, view.nativeElement);
        }
        view.innerHTML = this.render(source);
        return view;
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
]; };
//# sourceMappingURL=markdown.service.js.map
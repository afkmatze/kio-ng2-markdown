import { Component, ComponentFactoryResolver, Input, ViewContainerRef, ViewChild, ElementRef, ContentChildren, ViewEncapsulation } from '@angular/core';
import { KioNg2MarkdownService } from '../../services/markdown.service';
var MarkdownComponent = (function () {
    function MarkdownComponent(markdown, componentFactoryResolver) {
        this.markdown = markdown;
        this.componentFactoryResolver = componentFactoryResolver;
    }
    Object.defineProperty(MarkdownComponent.prototype, "innerHTML", {
        get: function () {
            return this.contentView.element.nativeElement.innerHTML;
        },
        set: function (value) {
            this.renderHTML(value);
        },
        enumerable: true,
        configurable: true
    });
    MarkdownComponent.prototype.renderHTML = function (source) {
        var root = this.markdown.renderToView(source, this.contentView);
        if (!root) {
            console.log('no component used');
            this.contentView.element.nativeElement.innerHTML = source;
        }
    };
    MarkdownComponent.prototype.ngOnInit = function () {
    };
    MarkdownComponent.prototype.ngOnDestroy = function () {
    };
    MarkdownComponent.prototype.ngOnChanges = function (changes) {
        console.log('MarkdownComponent::changes::', Object.keys(changes));
        if ('source' in changes) {
            this.renderHTML(changes.source.currentValue);
        }
    };
    return MarkdownComponent;
}());
export { MarkdownComponent };
MarkdownComponent.decorators = [
    { type: Component, args: [{
                templateUrl: './markdown.component.html',
                styleUrls: ['./markdown.component.scss'],
                selector: 'kio-markdown',
                encapsulation: ViewEncapsulation.None
            },] },
];
/** @nocollapse */
MarkdownComponent.ctorParameters = function () { return [
    { type: KioNg2MarkdownService, },
    { type: ComponentFactoryResolver, },
]; };
MarkdownComponent.propDecorators = {
    'source': [{ type: Input, args: ['source',] },],
    'contentView': [{ type: ViewChild, args: ['contentView', { read: ViewContainerRef },] },],
    'footnoteAppendix': [{ type: ContentChildren, args: ['small', { read: ElementRef },] },],
};
//# sourceMappingURL=markdown.component.js.map
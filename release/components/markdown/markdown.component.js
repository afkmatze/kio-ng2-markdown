import { Component, ComponentFactoryResolver, Input, ViewContainerRef, ViewChild } from '@angular/core';
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
        if ('string' === typeof source) {
            return this.renderHTML(this.markdown.renderHtml(source));
        }
        var root = this.markdown.renderToView(source, this.contentView);
        if (!root) {
            console.log('no component used');
            this.contentView.element.nativeElement.appendChild(source.node);
            /*const component = this.createNodeComponent ( source )
            console.log('component',component)
      
            let i = 0
            let child
            while( child = source.children[i++] ) {
      
            }*/
        }
    };
    /*
      get defaultComponentFactory() {
        return this.componentFactoryResolver.resolveComponentFactory(MarkdownComponent)
      }
    
      createNodeComponent<T extends TargetViewComponent>(node:HTMLNode,componentFactory?:ComponentFactory<T>,idx?:number):ComponentRef<T|MarkdownComponent> {
        if ( componentFactory )
        {
          return this.contentView.createComponent(componentFactory,idx)
        }
        
        return this.createNodeComponent(node,this.defaultComponentFactory,idx)
      }
    
      renderChildNode ( node:HTMLNode, component:ComponentRef<TargetViewComponent> ) {
        const child = component.instance.createNodeComponent(node)
    
      }*/
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
                selector: 'kio-markdown'
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
};
//# sourceMappingURL=markdown.component.js.map
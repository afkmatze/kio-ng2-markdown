import { Injectable, Inject, ComponentFactoryResolver, ComponentFactory } from '@angular/core';
import { RENDERER_CONFIG } from './inject.token';
import { DEFAULT_COMPONENT_FACTORY } from '../factory/inject.token';
import { isHTMLNode, isTargetViewComponent, isViewContainerRef } from './types';
var mapChild = function (childNodes, callback) {
    var out = [];
    for (var idx = 0; idx < childNodes.length; idx++) {
        out.push(callback(childNodes[idx], idx));
    }
    return out;
};
var eachChild = function (childNodes, callback) {
    mapChild(childNodes, callback);
};
var MarkdownRenderer = (function () {
    function MarkdownRenderer(options, defaultComponentFactory, componentFactoryResolver) {
        this.options = options;
        this.defaultComponentFactory = defaultComponentFactory;
        this.componentFactoryResolver = componentFactoryResolver;
    }
    MarkdownRenderer.prototype.render = function (html, target) {
        return this.renderNode(html, target);
    };
    MarkdownRenderer.prototype.renderNodeHtml = function (node) {
        if (node instanceof HTMLElement) {
            return node.innerHTML;
        }
        return node.textContent;
    };
    MarkdownRenderer.prototype.renderNode = function (node, parent) {
        var factory = this.componentFactory(node, parent);
        return this.createComponentOnTarget(node, parent, factory);
    };
    MarkdownRenderer.prototype.componentFactory = function (node, parent) {
        return this.mapComponentFactory(node);
    };
    MarkdownRenderer.prototype.createComponentOnTarget = function (node, target, componentFactory) {
        if (isTargetViewComponent(target)) {
            return target.createNodeComponent(node, componentFactory);
        }
        if (isViewContainerRef(target)) {
            return target.createComponent(componentFactory);
        }
    };
    MarkdownRenderer.prototype.mapComponentFactory = function (componentMap) {
        if (!componentMap)
            return this.defaultComponentFactory;
        if (isHTMLNode(componentMap)) {
            return this.mapComponentFactory(this.componentMapForNode(componentMap));
        }
        if ('component' in componentMap) {
            return this.componentFactoryResolver.resolveComponentFactory(componentMap.component);
        }
        if ('factory' in componentMap) {
            return componentMap.factory;
        }
    };
    MarkdownRenderer.prototype.createComponentWithComponentMap = function (node, componentMap, target) {
        var _this = this;
        var factory = this.mapComponentFactory(componentMap);
        var instance = this.createComponentOnTarget(node, target, factory);
        if (instance) {
            return instance;
        }
        console.warn('no component created for node', node);
    };
    MarkdownRenderer.prototype.componentMapForNode = function (node) {
        return this.options.maps.find(function (factoryOpt) { return factoryOpt.matcher(node.node) === true; });
    };
    return MarkdownRenderer;
}());
export { MarkdownRenderer };
MarkdownRenderer.decorators = [
    { type: Injectable },
];
/** @nocollapse */
MarkdownRenderer.ctorParameters = function () { return [
    { type: undefined, decorators: [{ type: Inject, args: [RENDERER_CONFIG,] },] },
    { type: ComponentFactory, decorators: [{ type: Inject, args: [DEFAULT_COMPONENT_FACTORY,] },] },
    { type: ComponentFactoryResolver, },
]; };
//# sourceMappingURL=renderer.class.js.map
import { Component, ViewContainerRef, ElementRef } from '@angular/core';
import { KioNg2MarkdownConfig } from '../config';
export declare function isViewContainerRef(other: any): other is ViewContainerRef;
export declare function isElementRef(other: any): other is ElementRef;
/**
 * Kio Markdown service
 */
export declare class KioNg2MarkdownService {
    protected markdownConfig: KioNg2MarkdownConfig;
    constructor(markdownConfig: KioNg2MarkdownConfig);
    private _wrapper;
    /**
     * renders markdown to html
     *
     * @param      source  markdown
     *
     * @return     html source; processed by showdown
     */
    render(source: string): string;
    /**
     * renders markdown and injects it into a target view
     *
     * @param      source  markdown
     * @param      view    target view
     *
     * @return     root node element of injected html
     */
    renderToView<T extends Component>(source: string, view: ViewContainerRef | ElementRef | HTMLElement): Node;
}

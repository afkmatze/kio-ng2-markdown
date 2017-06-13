import { ComponentFactoryResolver, ViewContainerRef, EventEmitter, OnChanges, OnInit, OnDestroy, SimpleChanges } from '@angular/core';
import { KioNg2MarkdownService } from '../../services/markdown.service';
import { ComponentEvent } from './interfaces';
export declare class MarkdownComponent implements OnInit, OnDestroy, OnChanges {
    protected markdown: KioNg2MarkdownService;
    protected componentFactoryResolver: ComponentFactoryResolver;
    constructor(markdown: KioNg2MarkdownService, componentFactoryResolver: ComponentFactoryResolver);
    rendered: EventEmitter<ComponentEvent>;
    source: string | NodeList;
    contentView: ViewContainerRef;
    innerHTML: string;
    renderHTML(source: string): void;
    ngOnInit(): void;
    ngOnDestroy(): void;
    ngOnChanges(changes: SimpleChanges): void;
}

import { ComponentFactoryResolver, ViewContainerRef, ElementRef, QueryList, OnChanges, OnInit, OnDestroy, SimpleChanges } from '@angular/core';
import { KioNg2MarkdownService } from '../../services/markdown.service';
export declare class MarkdownComponent implements OnInit, OnDestroy, OnChanges {
    protected markdown: KioNg2MarkdownService;
    protected componentFactoryResolver: ComponentFactoryResolver;
    constructor(markdown: KioNg2MarkdownService, componentFactoryResolver: ComponentFactoryResolver);
    source: string | NodeList;
    contentView: ViewContainerRef;
    footnoteAppendix: QueryList<ElementRef>;
    innerHTML: string;
    renderHTML(source: string): void;
    ngOnInit(): void;
    ngOnDestroy(): void;
    ngOnChanges(changes: SimpleChanges): void;
}

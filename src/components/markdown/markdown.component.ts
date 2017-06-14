import { 
  Component, ComponentRef, ComponentFactory, ComponentFactoryResolver, 
  Input, ViewContainerRef, ViewChild, ViewChildren, ElementRef, 
  Output, EventEmitter,
  ContentChildren,
  Query, QueryList,
  OnChanges, OnInit, OnDestroy, SimpleChanges ,
  ViewEncapsulation
} from '@angular/core'
import { KioNg2MarkdownService } from '../../services/markdown.service'
import { ComponentEvent } from './interfaces'

@Component({
  template: '<div #contentView></div>',
  styles: [ '' ],
  selector: 'kio-markdown',
  encapsulation: ViewEncapsulation.None
})
export class MarkdownComponent implements OnInit, OnDestroy, OnChanges {

  constructor(protected markdown:KioNg2MarkdownService,protected componentFactoryResolver:ComponentFactoryResolver){}

  @Output() rendered:EventEmitter<ComponentEvent>=new EventEmitter<ComponentEvent>()

  @Input('source') source:string|NodeList

  @ViewChild('contentView',{read: ViewContainerRef}) contentView:ViewContainerRef
  
  get innerHTML():string {
    return this.contentView.element.nativeElement.innerHTML
  }

  set innerHTML(value:string) {
    this.renderHTML ( value )
  }

  renderHTML ( source:string ):void {
    const root = this.markdown.renderToView(source,this.contentView)
    if ( !root )
    {
      console.log('no component used')
      this.contentView.element.nativeElement.innerHTML = source
    }
    this.rendered.emit({
      targetElement: this.contentView.element,
      source 
    })
  }

  ngOnInit(){

  }

  ngOnDestroy(){

  }

  ngOnChanges(changes:SimpleChanges){
    //console.log('MarkdownComponent::changes::',Object.keys(changes))
    if ( 'source' in changes )
    {
      this.renderHTML ( changes.source.currentValue )
    }
  }

}
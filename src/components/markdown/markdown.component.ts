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
  styles: [ `a + .footnote {
  display: none;
  background: red;
  color: white;
  
  vertical-align: text-top;
  line-height: 16px;
  border: 2px solid red;
  
  a {
    color: white;
  }
}

a:focus + .footnote {  
  display: inline;
}` ],
  selector: 'kio-markdown',
  encapsulation: ViewEncapsulation.Native
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
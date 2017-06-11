import { 
  Component, ComponentRef, ComponentFactory, ComponentFactoryResolver, 
  Input, ViewContainerRef, ViewChild, ViewChildren, ElementRef, 
  ContentChildren,
  Query, QueryList,
  OnChanges, OnInit, OnDestroy, SimpleChanges ,
  ViewEncapsulation
} from '@angular/core'
import { KioNg2MarkdownService } from '../../services/markdown.service'

@Component({
  templateUrl: './markdown.component.html',
  styleUrls: [ './markdown.component.scss' ],
  selector: 'kio-markdown',
  encapsulation: ViewEncapsulation.None
})
export class MarkdownComponent implements OnInit, OnDestroy, OnChanges {

  constructor(protected markdown:KioNg2MarkdownService,protected componentFactoryResolver:ComponentFactoryResolver){}

  @Input('source') source:string|NodeList

  @ViewChild('contentView',{read: ViewContainerRef}) contentView:ViewContainerRef

  @ContentChildren('small',{read: ElementRef})  footnoteAppendix: QueryList<ElementRef>
  
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
  }

  ngOnInit(){

  }

  ngOnDestroy(){

  }

  ngOnChanges(changes:SimpleChanges){
    console.log('MarkdownComponent::changes::',Object.keys(changes))
    if ( 'source' in changes )
    {
      this.renderHTML ( changes.source.currentValue )
    }
  }

}
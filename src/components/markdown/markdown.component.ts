import { Component, ComponentRef, ComponentFactory, ComponentFactoryResolver, Input, ViewContainerRef, ViewChild, ElementRef, OnChanges, OnInit, OnDestroy, SimpleChanges } from '@angular/core'
import { KioNg2MarkdownService } from '../../services/markdown.service'
import { TargetView, HTMLNode, TargetViewComponent } from '../../renderer/interfaces'
import * as RendererTypes from '../../renderer/types'

@Component({
  templateUrl: './markdown.component.html',
  styleUrls: [ './markdown.component.scss' ],
  selector: 'kio-markdown'
})
export class MarkdownComponent implements OnInit, OnDestroy, OnChanges {

  constructor(protected markdown:KioNg2MarkdownService,protected componentFactoryResolver:ComponentFactoryResolver){}

  @Input('source') source:string|NodeList

  @ViewChild('contentView',{read: ViewContainerRef}) contentView:ViewContainerRef
  
  get innerHTML():string {
    return this.contentView.element.nativeElement.innerHTML
  }

  set innerHTML(value:string) {
    this.renderHTML ( value )
  }

  renderHTML ( source:string|HTMLNode ):void {
    if ( 'string' === typeof source )
    {
      return this.renderHTML(this.markdown.renderHtml(source))
    }
    
    const root = this.markdown.renderToView(source,this.contentView)
    if ( !root )
    {
      console.log('no component used')
      this.contentView.element.nativeElement.appendChild(source.node)
      /*const component = this.createNodeComponent ( source )
      console.log('component',component)

      let i = 0
      let child
      while( child = source.children[i++] ) {

      }*/
    }
  }
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
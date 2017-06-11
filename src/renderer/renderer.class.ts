import { 
  Injectable,
  Inject,
  Component, ComponentRef, Type, Input, ViewContainerRef,
  ReflectiveInjector, ComponentFactoryResolver, ComponentFactory
} from '@angular/core';
import { RendererOptions, TargetView, TargetViewHTML, TargetViewComponent, HTMLNode, ComponentMap } from './interfaces'
import { RENDERER_CONFIG } from './inject.token'
import { HTMLParser } from './html.parser'
import { DEFAULT_COMPONENT_FACTORY } from '../factory/inject.token'

import { isHTMLNode, isTargetViewHTML, isTargetViewComponent, isTargetView, isViewContainerRef } from './types'


const mapChild = <T>( childNodes:NodeList, callback:{(child:Node,idx:number):T} ) => {
  const out:T[] = []
  for(var idx=0;idx<childNodes.length; idx++) {
    out.push ( callback(childNodes[idx],idx) )
  }
  return out
}

const eachChild = ( childNodes:NodeList, callback:{(child:Node,idx:number):void} ) => {
  mapChild ( childNodes , callback )
}

@Injectable()
export class MarkdownRenderer {

  constructor(@Inject(RENDERER_CONFIG) protected options:RendererOptions, @Inject(DEFAULT_COMPONENT_FACTORY) protected defaultComponentFactory:ComponentFactory<TargetViewComponent>, private componentFactoryResolver:ComponentFactoryResolver){}

  render ( html:HTMLNode, target:ViewContainerRef ) {
    return this.renderNode(html, target)
  }

  renderNodeHtml ( node:Node|HTMLElement ) {
    if ( node instanceof HTMLElement )
    {
      return node.innerHTML
    }
    return node.textContent
  }


  renderNode<T extends Component> ( node:HTMLNode, parent:TargetView ):ComponentRef<T> {
    const factory:ComponentFactory<T> = <ComponentFactory<T>>this.componentFactory(node,parent)
    return this.createComponentOnTarget ( node, parent, factory )
  }

  protected componentFactory(node:HTMLNode, parent:TargetView){
    return this.mapComponentFactory ( node )
  }


  protected createComponentOnTarget <T extends Component>( node:HTMLNode, target:TargetView, componentFactory:ComponentFactory<T> ) {
    if ( isTargetViewComponent(target) )
    {
      return target.createNodeComponent(node,componentFactory)
    }
    if ( isViewContainerRef(target) )
    {
      return target.createComponent(componentFactory)
    }
  }

  protected mapComponentFactory( componentMap:ComponentMap|HTMLNode ):ComponentFactory<Component> {
    if ( !componentMap )
      return this.defaultComponentFactory

    if ( isHTMLNode(componentMap) )
    {
      return this.mapComponentFactory(this.componentMapForNode(componentMap))
    }
    if ( 'component' in componentMap )
    {
      return this.componentFactoryResolver.resolveComponentFactory(<Type<Component>>componentMap.component)
    }
    if ( 'factory' in componentMap )
    {
      return componentMap.factory
    }
  }

  protected createComponentWithComponentMap ( node:HTMLNode, componentMap:ComponentMap, target:TargetView ) {
    const _this = this
    const factory = this.mapComponentFactory (componentMap)
    const instance = this.createComponentOnTarget(node,target,factory)
    if ( instance )
    {
      return instance
    }
    console.warn ( 'no component created for node', node )
  }

  protected componentMapForNode ( node:HTMLNode ):ComponentMap {
    return this.options.maps.find ( factoryOpt => factoryOpt.matcher(node.node) === true )
  }


}
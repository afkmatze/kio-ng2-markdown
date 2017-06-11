import { Component, ComponentRef, ViewContainerRef, ComponentFactory, ComponentFactoryResolver } from '@angular/core'

export interface TargetViewHTML {
  innerHTML:string
}

export interface TargetViewComponent {
  createNodeComponent<T extends Component>(node:HTMLNode,componentFactory?:ComponentFactory<T>,index?:number):ComponentRef<T>
}

export type TargetView = TargetViewComponent|ViewContainerRef

export interface NodeMatcher {
  ( node:Node ):boolean
}

export interface ComponentMap {
  matcher:NodeMatcher
  factory?:ComponentFactory<Component>
  component?:Component
}

export interface ComponentMappingOptions  {
  [key:string]: ComponentMap
}

export interface HTMLNode {
  node: Node
  tag: string
  parent?: HTMLNode
  children: HTMLNode[]
}


export interface RendererOptions  {
  targetType: string
  maps: ComponentMap[]
}

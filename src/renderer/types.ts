import { ViewContainerRef, ElementRef } from '@angular/core'
import { RendererOptions, TargetView, TargetViewHTML, TargetViewComponent, HTMLNode, ComponentMap } from './interfaces'



export function isHTMLNode ( other:any ):other is HTMLNode {
  return ( 'node' in other && 'children' in other )
}

export function isTargetViewHTML ( other:any ):other is TargetViewHTML {
  return ( 'innerHTML' in other )
}

export function isViewContainerRef ( other:any ):other is ViewContainerRef {
  return ( 'element' in other && 'injector' in other )
}

export function isElementRef ( other:any ):other is ElementRef {
  return ( 'nativeElement' in other )
}

export function isTargetViewComponent ( other:any ):other is TargetViewComponent {
  return ( isViewContainerRef(other) && 'function' === typeof other['createNodeComponent'] )
}

export function isTargetView ( other:any ):other is TargetView {
  return isViewContainerRef(other) || isTargetViewComponent(other)
}
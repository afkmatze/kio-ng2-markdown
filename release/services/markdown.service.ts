import { Injectable, Component, ComponentRef, Inject, ViewContainerRef, ElementRef } from '@angular/core'

import { drivers } from '../markdown'
import { KioNg2MarkdownConfig, MARKDOWN_CONFIG, defaultConfig } from '../config'


export function isViewContainerRef ( other:any ):other is ViewContainerRef {
  return ( 'element' in other && 'injector' in other )
}

export function isElementRef ( other:any ):other is ElementRef {
  return ( 'nativeElement' in other )
}

/**
 * Kio Markdown service 
 */
@Injectable()
export class KioNg2MarkdownService {

  constructor(@Inject(MARKDOWN_CONFIG) protected markdownConfig:KioNg2MarkdownConfig){}

  private _wrapper=new drivers.showdown(this.markdownConfig.converter)

  /**
   * renders markdown to html
   *
   * @param      source  markdown
   *
   * @return     html source; processed by showdown
   */
  render ( source:string ):string {
    return this._wrapper.renderHtml (source)
  }

  /**
   * renders markdown and injects it into a target view
   *
   * @param      source  markdown
   * @param      view    target view
   *
   * @return     root node element of injected html
   */
  renderToView <T extends Component>( source:string, view:ViewContainerRef|ElementRef|HTMLElement ):Node {
    /*if ( 'string' === typeof source )
    {
      return this.renderToView<T>(this.renderHtml(source), view)
    }*/
    if ( isViewContainerRef(view) )
    {
      return this.renderToView ( source, view.element.nativeElement )
    }
    if ( isElementRef(view) )
    {
      return this.renderToView ( source, view.nativeElement )
    }
    view.innerHTML = this.render ( source )
    return view
  }

}
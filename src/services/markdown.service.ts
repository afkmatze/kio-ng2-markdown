import { Injectable, Component, ComponentRef, Inject, ViewContainerRef } from '@angular/core'

import { drivers } from '../markdown'
import { KioNg2MarkdownConfig, MARKDOWN_CONFIG, defaultConfig } from '../config'

import { MarkdownRenderer, HTMLParser, HTMLNode } from '../renderer'

@Injectable()
export class KioNg2MarkdownService {

  constructor(@Inject(MARKDOWN_CONFIG) protected markdownConfig:KioNg2MarkdownConfig, protected markdownRenderer:MarkdownRenderer){}

  private _wrapper=drivers.showdown(this.markdownConfig.converter)

  parseToHtmlNode ( source:string ):HTMLNode {
    const parser = new HTMLParser(source)
    return parser.parse()
  }

  render ( source:string ):string {
    return this.markdownToHtml (source)
  }

  renderHtml ( source:string ):HTMLNode {
    return this.parseToHtmlNode ( this.render ( source ) )
  }

  markdownToHtml ( source:string ):string {
    return this._wrapper.renderHtml (source)
  }

  protected createDom ( source:string ):NodeList {
    const root = document.createElement('div')
    root.innerHTML = source
    return root.childNodes
  }

  renderToView <T extends Component>( source:string|HTMLNode, view:ViewContainerRef ):ComponentRef<T> {
    if ( 'string' === typeof source )
    {
      return this.renderToView<T>(this.renderHtml(source), view)
    }
    return <ComponentRef<T>>this.markdownRenderer.render(source,view)
  }

}
import { Injectable } from '@angular/core'

import { drivers } from '../driver'
import { MarkdownConfig } from '../config/Config.class'
import { KioNg2MarkdownConfig } from '../config/interfaces'

@Injectable()
export class KioNg2MarkdownService {

  constructor(protected markdownConfig:MarkdownConfig){}

  private _wrapper=drivers.showdown(this.markdownConfig.converter)


  renderHtml ( source:string ) {
    return this._wrapper.renderHtml (source)
  }

}
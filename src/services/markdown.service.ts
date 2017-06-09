import { Injectable } from '@angular/core'

import { ShowdownWrapper } from '../showdown'


@Injectable()
export class KioNg2MarkdownService {

  private _wrapper=ShowdownWrapper()


  renderHtml ( source:string ) {
    return this._wrapper.parse (source)
  }

}
import { MarkdownDriverClass, MarkdownDriverInterface, MarkdownDriverOptions } from '../interfaces'
import { MarkdownDriverType } from '../types'

export abstract class MarkdownDriver implements MarkdownDriverInterface {

  constructor(readonly options?:MarkdownDriverOptions){}

  /**
   * reads markdown source and returns html source
   *
   * @param      source  markdown source
   *
   * @return     html source
   */
  abstract renderHtml ( source:string ):string
}
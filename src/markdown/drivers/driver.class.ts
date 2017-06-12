import { 
  MarkdownDriverClass, MarkdownDriverInterface, MarkdownDriverOptions,
  ConverterExtensionArg, ExtensionProvider
} from '../interfaces'
import { Extension, LangExtension, OutputExtension } from 'kio-ng2-markdown-extension'

import { MarkdownDriverType } from '../types'

export abstract class MarkdownDriver implements MarkdownDriverInterface<ExtensionProvider> {

  constructor(readonly options?:MarkdownDriverOptions){
    this.setupConverter ()
  }

  protected abstract applyExtension ( extension:ConverterExtensionArg ):void

  protected abstract setupConverter():void

  /**
   * reads markdown source and returns html source
   *
   * @param      source  markdown source
   *
   * @return     html source
   */
  abstract renderHtml ( source:string ):string
}
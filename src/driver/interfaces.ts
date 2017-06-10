import { MarkdownDriverType } from './types'

export interface MarkdownWrapper {
  renderHtml ( source:string ):string
}

export interface MarkdownDriverOptions {
  [key:string]: any
}

export interface MarkdownDriver {
  (options:MarkdownDriverOptions):MarkdownWrapper
}


export interface MarkdownDriverMap {
  [key:string]: MarkdownDriver
}
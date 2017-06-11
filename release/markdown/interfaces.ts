import { MarkdownDriverType, TypeMap } from './types'

export interface MarkdownDriverInterface {
  readonly options?:MarkdownDriverOptions
  renderHtml ( source:string ):string
}

export interface MarkdownDriverOptions {
  [key:string]: any
}

export interface MarkdownDriverClass {
  new (options?:MarkdownDriverOptions):MarkdownDriverInterface
}

export interface MarkdownDriverMap extends TypeMap<MarkdownDriverClass> {

}
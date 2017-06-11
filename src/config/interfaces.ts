import { RendererOptions } from '../renderer'
import * as showdown from 'showdown'


export interface ConverterConfig {
  extensions:string|string[]
}

export interface KioNg2MarkdownConfig {
  converter:ConverterConfig
  renderer:RendererOptions
}
import { KioNg2MarkdownConfig, ConverterConfig } from './interfaces'

export const defaultConfig:KioNg2MarkdownConfig = {
  converter: {
    extensions: []
  },
  renderer: {
    targetType: 'view',
    maps: []
  }
}
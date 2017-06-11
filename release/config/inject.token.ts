import { InjectionToken } from '@angular/core'
import { KioNg2MarkdownConfig } from './interfaces'

export let MARKDOWN_CONFIG = new InjectionToken<KioNg2MarkdownConfig>('markdown_config')

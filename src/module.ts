import { CommonModule } from '@angular/common'
import { NgModule, ModuleWithProviders } from '@angular/core'
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'

import { KioNg2MarkdownService } from './services/markdown.service'
export { KioNg2MarkdownService } from './services/markdown.service'

import { MarkdownConfig } from './config/Config.class'
import { KioNg2MarkdownConfig } from './config/interfaces'

import { MarkdownWrapper, drivers } from './driver'

@NgModule({
  providers: [ KioNg2MarkdownService, MarkdownConfig ]
})
export class KioNg2MarkdownModule {
  static forRoot( config:KioNg2MarkdownConfig ):ModuleWithProviders {
    return {
      ngModule: KioNg2MarkdownModule,
      providers: [
        { provide: MarkdownConfig, useValue: config }
      ]
    }
  }
}

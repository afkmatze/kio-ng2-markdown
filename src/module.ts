import { CommonModule } from '@angular/common'
import { NgModule, ModuleWithProviders } from '@angular/core'
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'

import { KioNg2MarkdownService } from './services/markdown.service'
export { KioNg2MarkdownService } from './services/markdown.service'

@NgModule({
  providers: [ KioNg2MarkdownService ]
})
export class KioNg2MarkdownModule {}

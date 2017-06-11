import { CommonModule } from '@angular/common'
import { NgModule, Component, ComponentFactory, ModuleWithProviders, ComponentFactoryResolver, Provider, ViewContainerRef } from '@angular/core'
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'
import { BrowserModule } from '@angular/platform-browser'

import { KioNg2MarkdownService } from './services/markdown.service'
export { KioNg2MarkdownService } from './services/markdown.service'

import { MarkdownComponent } from './components/markdown/markdown.component'

import { KioNg2MarkdownConfig, MARKDOWN_CONFIG, defaultConfig } from './config'

import { drivers } from './markdown'

/**
 * provider for module config
 */
export let ConfigProvider:Provider = {
  provide: MARKDOWN_CONFIG,
  useValue: defaultConfig  
}

/**
 * @brief      angular module for parsing markdown with showdown
 *
 * @return     angular module
 */
@NgModule({
  imports: [BrowserModule],
  declarations: [MarkdownComponent],
  providers: [ ConfigProvider, KioNg2MarkdownService ],
  entryComponents: [MarkdownComponent],
  exports: [MarkdownComponent]
})
export class KioNg2MarkdownModule {
  static forRoot( config:KioNg2MarkdownConfig ):ModuleWithProviders {
    return {
      ngModule: KioNg2MarkdownModule,
      providers: [ 
        {
          provide: MARKDOWN_CONFIG,
          useValue: config
        },
        KioNg2MarkdownService
      ]
    }
  }
}

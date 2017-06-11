import { CommonModule } from '@angular/common'
import { NgModule, Component, ComponentFactory, ModuleWithProviders, ComponentFactoryResolver, Provider, ViewContainerRef } from '@angular/core'
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'
import { BrowserModule } from '@angular/platform-browser'

import { KioNg2MarkdownService } from './services/markdown.service'
export { KioNg2MarkdownService } from './services/markdown.service'

import { MarkdownComponent } from './components/markdown/markdown.component'

import { DefaultComponentFactoryProvider, DefaultComponentFactoryProviderFactory, DEFAULT_COMPONENT_FACTORY } from './factory'
export { DefaultComponentFactoryProvider, DefaultComponentFactoryProviderFactory, DEFAULT_COMPONENT_FACTORY }

import { KioNg2MarkdownConfig, MARKDOWN_CONFIG, defaultConfig } from './config'

import { MarkdownWrapper, drivers } from './markdown'
import { 
  MarkdownRenderer, RendererOptions, 
  RENDERER_CONFIG ,
  ComponentMap
} from './renderer'



export let ConfigProvider:Provider = {
  provide: MARKDOWN_CONFIG,
  useValue: defaultConfig  
}

/*export function DefaultComponentFactoryProviderFactory ( resolver:ComponentFactoryResolver ):ComponentFactory<MarkdownComponent> {
  return resolver.resolveComponentFactory(MarkdownComponent)
}

export let DefaultComponentFactoryProvider:Provider = {
  provide: DEFAULT_COMPONENT_FACTORY,
  useFactory: DefaultComponentFactoryProviderFactory,
  deps: [ ComponentFactoryResolver ]
}

*/
export let RendererOptionsProvider:Provider = {
  provide: RENDERER_CONFIG,
  useValue: defaultConfig.renderer
}

@NgModule({
  imports: [BrowserModule],
  declarations: [MarkdownComponent],
  providers: [ ConfigProvider, RendererOptionsProvider, MarkdownRenderer, DefaultComponentFactoryProvider ],
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
        {
          provide: RENDERER_CONFIG,
          useValue: config.renderer || defaultConfig.renderer
        },
        {
          provide: DEFAULT_COMPONENT_FACTORY,
          useFactory: DefaultComponentFactoryProviderFactory,
          deps: [ ComponentFactoryResolver ]
        }
      ]
    }
  }
}

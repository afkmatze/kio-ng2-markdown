import { NgModule, ComponentFactoryResolver } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
export { KioNg2MarkdownService } from './services/markdown.service';
import { MarkdownComponent } from './components/markdown/markdown.component';
import { DefaultComponentFactoryProvider, DefaultComponentFactoryProviderFactory, DEFAULT_COMPONENT_FACTORY } from './factory';
export { DefaultComponentFactoryProvider, DefaultComponentFactoryProviderFactory, DEFAULT_COMPONENT_FACTORY };
import { MARKDOWN_CONFIG, defaultConfig } from './config';
import { MarkdownRenderer, RENDERER_CONFIG } from './renderer';
export var ConfigProvider = {
    provide: MARKDOWN_CONFIG,
    useValue: defaultConfig
};
/*export function DefaultComponentFactoryProviderFactory ( resolver:ComponentFactoryResolver ):ComponentFactory<MarkdownComponent> {
  return resolver.resolveComponentFactory(MarkdownComponent)
}

export let DefaultComponentFactoryProvider:Provider = {
  provide: DEFAULT_COMPONENT_FACTORY,
  useFactory: DefaultComponentFactoryProviderFactory,
  deps: [ ComponentFactoryResolver ]
}

*/
export var RendererOptionsProvider = {
    provide: RENDERER_CONFIG,
    useValue: defaultConfig.renderer
};
var KioNg2MarkdownModule = (function () {
    function KioNg2MarkdownModule() {
    }
    KioNg2MarkdownModule.forRoot = function (config) {
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
                    deps: [ComponentFactoryResolver]
                }
            ]
        };
    };
    return KioNg2MarkdownModule;
}());
export { KioNg2MarkdownModule };
KioNg2MarkdownModule.decorators = [
    { type: NgModule, args: [{
                imports: [BrowserModule],
                declarations: [MarkdownComponent],
                providers: [ConfigProvider, RendererOptionsProvider, MarkdownRenderer, DefaultComponentFactoryProvider],
                entryComponents: [MarkdownComponent],
                exports: [MarkdownComponent]
            },] },
];
/** @nocollapse */
KioNg2MarkdownModule.ctorParameters = function () { return []; };
//# sourceMappingURL=module.js.map
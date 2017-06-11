import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { KioNg2MarkdownService } from './services/markdown.service';
export { KioNg2MarkdownService } from './services/markdown.service';
import { MarkdownComponent } from './components/markdown/markdown.component';
import { MARKDOWN_CONFIG, defaultConfig } from './config';
/**
 * provider for module config
 */
export var ConfigProvider = {
    provide: MARKDOWN_CONFIG,
    useValue: defaultConfig
};
/**
 * @brief      angular module for parsing markdown with showdown
 *
 * @return     angular module
 */
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
                KioNg2MarkdownService
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
                providers: [ConfigProvider, KioNg2MarkdownService],
                entryComponents: [MarkdownComponent],
                exports: [MarkdownComponent]
            },] },
];
/** @nocollapse */
KioNg2MarkdownModule.ctorParameters = function () { return []; };
//# sourceMappingURL=module.js.map
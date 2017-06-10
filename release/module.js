import { NgModule } from '@angular/core';
import { KioNg2MarkdownService } from './services/markdown.service';
export { KioNg2MarkdownService } from './services/markdown.service';
import { MarkdownConfig } from './config/Config.class';
var KioNg2MarkdownModule = (function () {
    function KioNg2MarkdownModule() {
    }
    KioNg2MarkdownModule.forRoot = function (config) {
        return {
            ngModule: KioNg2MarkdownModule,
            providers: [
                { provide: MarkdownConfig, useValue: config }
            ]
        };
    };
    return KioNg2MarkdownModule;
}());
export { KioNg2MarkdownModule };
KioNg2MarkdownModule.decorators = [
    { type: NgModule, args: [{
                providers: [KioNg2MarkdownService, MarkdownConfig]
            },] },
];
/** @nocollapse */
KioNg2MarkdownModule.ctorParameters = function () { return []; };
//# sourceMappingURL=module.js.map
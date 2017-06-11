import { ModuleWithProviders, Provider } from '@angular/core';
export { KioNg2MarkdownService } from './services/markdown.service';
import { KioNg2MarkdownConfig } from './config';
/**
 * provider for module config
 */
export declare let ConfigProvider: Provider;
/**
 * @brief      angular module for parsing markdown with showdown
 *
 * @return     angular module
 */
export declare class KioNg2MarkdownModule {
    static forRoot(config: KioNg2MarkdownConfig): ModuleWithProviders;
}

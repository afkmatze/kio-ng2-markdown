/// <reference types="showdown" />
import * as showdown from 'showdown';
import { MarkdownDriverOptions, ConverterExtensionArg } from '../../interfaces';
import { MarkdownDriver } from '../driver.class';
import { ExtensionTypes, ExtensionTypeNames, FormattingExtension, MatchingExtension, ExtensionProvider } from 'kio-ng2-markdown-extension';
export declare function isTypeName<T extends ExtensionTypeNames>(other: any): other is T;
export declare const typeName: <T extends ExtensionTypes, K extends "output" | "lang">(type: T) => K;
export declare const filterExtensionImplementation: <T extends ExtensionTypes, K extends ConverterExtensionArg>(extensions: K | K[]) => ExtensionProvider[];
export declare const filterExtensionKeys: <T extends ExtensionTypes>(extensions: string | ExtensionProvider | ConverterExtensionArg[]) => string[];
export declare function convertExtension<T extends ExtensionTypes>(extension: FormattingExtension<T>): showdown.ShowdownExtension;
export declare function convertExtension<T extends ExtensionTypes>(extension: MatchingExtension<T>): showdown.ShowdownExtension;
/**
 * markdown driver using showdown
 */
export declare class ShowdownDriver extends MarkdownDriver {
    readonly options: MarkdownDriverOptions;
    constructor(options: MarkdownDriverOptions);
    protected applyExtension(extension: ConverterExtensionArg): void;
    protected setupConverter(): void;
    private extensions;
    private extensionKeys;
    protected converter: showdown.Converter;
    renderHtml(source: string): string;
}

import { ExtensionProvider } from 'kio-ng2-markdown-extension';
export declare type ConverterExtensionArg = string | ExtensionProvider;
export interface MarkdownDriverInterface<T extends ConverterExtensionArg> {
    readonly options?: MarkdownDriverOptions;
    renderHtml(source: string): string;
}
export interface MarkdownDriverOptions {
    extensions: ConverterExtensionArg | ConverterExtensionArg[];
}
export interface MarkdownDriverClass<T extends ConverterExtensionArg> {
    new (options?: MarkdownDriverOptions): MarkdownDriverInterface<T>;
}
export interface MarkdownDriverMap {
    [key: string]: MarkdownDriverClass<ConverterExtensionArg>;
}
export { ExtensionProvider };

import { MarkdownDriverInterface, MarkdownDriverOptions, ConverterExtensionArg, ExtensionProvider } from '../interfaces';
export declare abstract class MarkdownDriver implements MarkdownDriverInterface<ExtensionProvider> {
    readonly options: MarkdownDriverOptions;
    constructor(options?: MarkdownDriverOptions);
    protected abstract applyExtension(extension: ConverterExtensionArg): void;
    protected abstract setupConverter(): void;
    /**
     * reads markdown source and returns html source
     *
     * @param      source  markdown source
     *
     * @return     html source
     */
    abstract renderHtml(source: string): string;
}

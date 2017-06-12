import { ConverterExtensionArg, MarkdownDriverOptions } from '../markdown';
export interface ConverterConfig {
    extensions: ConverterExtensionArg | ConverterExtensionArg[];
}
export interface KioNg2MarkdownConfig {
    converter: MarkdownDriverOptions;
}

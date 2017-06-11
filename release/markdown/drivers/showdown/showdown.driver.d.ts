/// <reference types="showdown" />
import * as showdown from 'showdown';
import { ShowdownDriverOptions } from './interfaces';
import { MarkdownDriverInterface } from '../../interfaces';
import { MarkdownDriver } from '../driver.class';
/**
 * Markdown driver implementation for showdown
 *
 * @param      options  showdown config
 *
 * @return     markdown driver interface
 */
export declare function Driver(options: ShowdownDriverOptions): MarkdownDriverInterface;
/**
 * maps options to be compatible with showdown converter options
 *
 * @param      options  The options
 *
 * @return     showdown converter options
 */
export declare const parseOptions: (options: ShowdownDriverOptions) => ShowdownDriverOptions;
/**
 * markdown driver using showdown
 */
export declare class ShowdownDriver extends MarkdownDriver {
    readonly options: ShowdownDriverOptions;
    constructor(options: ShowdownDriverOptions);
    protected converter: showdown.Converter;
    renderHtml(source: string): string;
}

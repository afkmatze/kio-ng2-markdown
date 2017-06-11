import { MarkdownDriverInterface, MarkdownDriverOptions } from '../interfaces';
export declare abstract class MarkdownDriver implements MarkdownDriverInterface {
    readonly options: MarkdownDriverOptions;
    constructor(options?: MarkdownDriverOptions);
    /**
     * reads markdown source and returns html source
     *
     * @param      source  markdown source
     *
     * @return     html source
     */
    abstract renderHtml(source: string): string;
}

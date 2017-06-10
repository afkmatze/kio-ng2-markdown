import * as showdown from 'showdown'
//import * as footnotes from 'showdown-footnotes'
import { MarkdownDriver, MarkdownWrapper } from '../../interfaces'

export interface ShowdownDriverOptions extends showdown.ConverterOptions {}

export function Driver (options:ShowdownDriverOptions):MarkdownWrapper {

  if ( !Array.isArray(options.extensions) )
  {
    options.extensions = [options.extensions]
  }
  const _converter = new showdown.Converter(options)

  return {
    renderHtml: ( source:string ) => {
      return _converter.makeHtml(source)
    }
  }

}

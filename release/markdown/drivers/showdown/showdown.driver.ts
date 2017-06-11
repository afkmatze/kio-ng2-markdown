import * as showdown from 'showdown'
import { ShowdownDriverOptions } from './interfaces'
import { MarkdownDriverInterface, MarkdownDriverClass } from '../../interfaces'
import { MarkdownDriver } from '../driver.class'

/**
 * Markdown driver implementation for showdown
 *
 * @param      options  showdown config
 *
 * @return     markdown driver interface
 */
export function Driver (options:ShowdownDriverOptions):MarkdownDriverInterface {

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

/**
 * maps options to be compatible with showdown converter options
 *
 * @param      options  The options
 *
 * @return     showdown converter options
 */
export const parseOptions = ( options:ShowdownDriverOptions ):ShowdownDriverOptions => {
  if ( !Array.isArray(options.extensions) )
  {
    options.extensions = [options.extensions]
  }
  return options
}

/**
 * markdown driver using showdown
 */
export class ShowdownDriver extends MarkdownDriver {

  constructor(readonly options:ShowdownDriverOptions){
    super()
    this.options = parseOptions(options)
  }

  protected converter=new showdown.Converter(this.options)

  renderHtml( source:string ) {
    return this.converter.makeHtml(source)
  }
}
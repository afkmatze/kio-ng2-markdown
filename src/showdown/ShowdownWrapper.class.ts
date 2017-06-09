import * as showdown from 'showdown'

export function ShowdownWrapper () {

  const converterOptions = {}
  const _converter = new showdown.Converter(converterOptions)


  return {
    parse: ( source:string ) => {
      return _converter.makeHtml(source)
    }
  }

}
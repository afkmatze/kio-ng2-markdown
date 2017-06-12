import * as showdown from 'showdown'
import { ShowdownDriverOptions } from './interfaces'
import { MarkdownDriverInterface, MarkdownDriverClass, MarkdownDriverOptions, ConverterExtensionArg } from '../../interfaces'
import { MarkdownDriver } from '../driver.class'
import { 
  Extension, ExtensionImplementation, ExtensionType, ExtensionTypeByName, ExtensionTypes, ExtensionTypeNames, LangExtension, OutputExtension,
  FormattingExtension, MatchingExtension, ExtensionProvider,
  isMatchingExtension, isFormattingExtension, isExtensionImplementation,
  isExtensionProvider, isExtensionKey, nameOfType
} from 'kio-ng2-markdown-extension'

export function isTypeName<T extends ExtensionTypeNames> ( other:any ):other is T {
  return ( other in ExtensionTypeByName )
}

export const typeName = <T extends ExtensionTypes, K extends ExtensionTypeNames> ( type:T ):K => {
  return isTypeName ( name ) ? name : undefined
}

export const filterExtensionImplementation = <T extends ExtensionTypes, K extends ConverterExtensionArg|string>( extensions:K|K[] ):ExtensionProvider[] => {
  if ( !Array.isArray(extensions) )
  {
    return filterExtensionImplementation([extensions])
  }
  const providers:ExtensionProvider[] = []
  extensions.forEach ( extension => {
    if ( isExtensionProvider(extension) )
    {
      providers.push ( extension )
    }
  } )
  return providers
}


export const filterExtensionKeys = <T extends ExtensionTypes>( extensions:ConverterExtensionArg|ConverterExtensionArg[] ):string[] => {
  if ( !Array.isArray(extensions) )
  {
    return filterExtensionKeys([extensions])
  }
  const extImplementations:string[] = []
  extensions.forEach ( extension => {
    if ( 'string' === typeof extension )
    {
      extImplementations.push ( <string>extension )
    }
  } )
  return extImplementations
}

export function convertExtension <T extends ExtensionTypes>( extension:FormattingExtension<T> ):showdown.ShowdownExtension 
export function convertExtension <T extends ExtensionTypes>( extension:MatchingExtension<T> ):showdown.ShowdownExtension 
export function convertExtension <T extends ExtensionTypes>( extension:MatchingExtension<T>|FormattingExtension<T> ):showdown.ShowdownExtension 
{
  const {
    type,
    ...extensionImplementation
  } = extension
  const tName:ExtensionTypeNames = nameOfType(type)
  return {
    type: tName,
    ...extensionImplementation
  }
}

/**
 * markdown driver using showdown
 */
export class ShowdownDriver extends MarkdownDriver {

  constructor(readonly options:MarkdownDriverOptions){
    super(options)
  }

  protected applyExtension ( extension:ConverterExtensionArg ) {
    if ( 'string' === typeof extension )
    {
      return this.converter.useExtension(extension)
    }
    if ( isExtensionProvider(extension) )      
    {
      const name = extension.name
      const extensionArgs =  extension()
      extensionArgs.forEach ( extensionArg => {
        if ( isFormattingExtension(extensionArg) )
        {
          this.converter.addExtension(convertExtension(extensionArg),extension.name)  
        }
        if ( isMatchingExtension(extensionArg) )
        {
          this.converter.addExtension(convertExtension(extensionArg),extension.name)  
        }
      } )
      
    }
  }

  protected setupConverter () {
    const keys = filterExtensionKeys(this.options.extensions)
    this.converter = new showdown.Converter({extensions: keys})
    const providers = filterExtensionImplementation(this.options.extensions)
    providers.forEach ( provider => {
      this.applyExtension(provider)
    } )
  }

  private extensions:showdown.ShowdownExtension[]
  private extensionKeys:string[]

  protected converter:showdown.Converter

  renderHtml( source:string ) {
    return this.converter.makeHtml(source)
  }
}
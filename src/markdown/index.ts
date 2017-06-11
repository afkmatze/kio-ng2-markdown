import { MarkdownDriverInterface, MarkdownDriverClass, MarkdownDriverOptions, MarkdownDriverMap } from './interfaces'
import * as Showdown from './drivers/showdown'

export * from './interfaces'
export * from './types'
export * from './drivers/driver.class'
export * from './drivers/showdown'

export const drivers:MarkdownDriverMap = {
  showdown: Showdown.ShowdownDriver
}
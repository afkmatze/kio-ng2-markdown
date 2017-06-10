import { MarkdownDriver, MarkdownDriverMap } from './interfaces'
export * from './interfaces'
export * from './types'

import * as Showdown from './drivers/showdown'

export const drivers:MarkdownDriverMap = {
  showdown: Showdown.Driver
}
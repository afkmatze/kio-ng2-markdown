export type MarkdownDriverType = string

export type TypeMap<T> = {
  [K in MarkdownDriverType]: T
}
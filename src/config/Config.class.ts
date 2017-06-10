import { Injectable } from '@angular/core'
import { KioNg2MarkdownConfig } from './interfaces'


@Injectable()
export class MarkdownConfig {

  converter:{extensions?:string|string[]}

}
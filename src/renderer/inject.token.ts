import { InjectionToken, ComponentFactory, ComponentRef, Component } from '@angular/core'
import { RendererOptions } from './interfaces'

export let RENDERER_CONFIG = new InjectionToken<RendererOptions>('renderer_options')
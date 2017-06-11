import { InjectionToken, ComponentFactory, ComponentRef, Component } from '@angular/core'

export let DEFAULT_COMPONENT_FACTORY = new InjectionToken<ComponentFactory<Component>>('default_component_factory')
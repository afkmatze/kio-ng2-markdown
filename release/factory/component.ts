import { Component, ComponentRef, Injector, NgModuleRef, ComponentFactory, ComponentFactoryResolver, Provider } from '@angular/core'
import { MarkdownComponent } from '../components/markdown/markdown.component'
import { 
  DEFAULT_COMPONENT_FACTORY 
} from './inject.token'

export function DefaultComponentFactoryProviderFactory ( resolver:ComponentFactoryResolver ):ComponentFactory<MarkdownComponent> {
  const factory = resolver.resolveComponentFactory(MarkdownComponent)
  const _create = factory.create.bind(factory)
  function create ( injector:Injector, ...args:any[] ):ComponentRef<MarkdownComponent> {
    console.log('before::createComponent',args)
    const component = _create(injector,...args)
    console.log('after::createComponent',component)
    return component
  }
  return Object.assign(factory,{create})
}

export let DefaultComponentFactoryProvider:Provider = {
  provide: DEFAULT_COMPONENT_FACTORY,
  useFactory: DefaultComponentFactoryProviderFactory,
  deps: [ ComponentFactoryResolver ]
}
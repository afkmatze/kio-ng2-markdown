import { ComponentFactoryResolver } from '@angular/core';
import { MarkdownComponent } from '../components/markdown/markdown.component';
import { DEFAULT_COMPONENT_FACTORY } from './inject.token';
export function DefaultComponentFactoryProviderFactory(resolver) {
    var factory = resolver.resolveComponentFactory(MarkdownComponent);
    var _create = factory.create.bind(factory);
    function create(injector) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        console.log('before::createComponent', args);
        var component = _create.apply(void 0, [injector].concat(args));
        console.log('after::createComponent', component);
        return component;
    }
    return Object.assign(factory, { create: create });
}
export var DefaultComponentFactoryProvider = {
    provide: DEFAULT_COMPONENT_FACTORY,
    useFactory: DefaultComponentFactoryProviderFactory,
    deps: [ComponentFactoryResolver]
};
//# sourceMappingURL=component.js.map
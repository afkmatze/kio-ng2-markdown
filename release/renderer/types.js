import { ViewContainerRef } from '@angular/core';
export function isHTMLNode(other) {
    return ('node' in other && 'children' in other);
}
export function isTargetViewHTML(other) {
    return ('innerHTML' in other);
}
export function isViewContainerRef(other) {
    return (other instanceof ViewContainerRef);
}
export function isTargetViewComponent(other) {
    return (isViewContainerRef(other) && 'function' === typeof other['createNodeComponent']);
}
export function isTargetView(other) {
    return isViewContainerRef(other) || isTargetViewComponent(other);
}
//# sourceMappingURL=types.js.map
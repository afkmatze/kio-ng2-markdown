var HTMLParser = (function () {
    function HTMLParser(source) {
        this.source = source;
        this.domRoot = document.createElement('div');
        this.domRoot.classList.add('--html-root');
        this.domRoot.innerHTML = source;
    }
    //private domWalker:TreeWalker
    HTMLParser.prototype.renderNode = function (node, parent) {
        var htmlNode = {
            node: node,
            tag: node.nodeName,
            parent: parent,
            children: []
        };
        for (var i = 0; i < node.childNodes.length; i++) {
            var childNode = this.renderNode(node.childNodes[i], htmlNode);
            htmlNode.children.push(childNode);
        }
        return htmlNode;
    };
    HTMLParser.prototype.parse = function () {
        var rootNode = this.renderNode(this.domRoot);
        return rootNode;
    };
    return HTMLParser;
}());
export { HTMLParser };
//# sourceMappingURL=html.parser.js.map
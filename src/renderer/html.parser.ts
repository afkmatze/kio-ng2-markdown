import {
  NodeMatcher,
  ComponentMap,

  ComponentMappingOptions,
  HTMLNode
} from './interfaces'

export class HTMLParser {

  constructor(protected source:string){

    this.domRoot = document.createElement('div')
    this.domRoot.classList.add('--html-root')
    this.domRoot.innerHTML = source
  }

  private domRoot:HTMLDivElement
  //private domWalker:TreeWalker

  protected renderNode ( node:Node, parent?:HTMLNode ) {
    const htmlNode:HTMLNode = {
      node ,
      tag: node.nodeName,
      parent,
      children: []
    }

    for ( var i=0; i<node.childNodes.length; i++ )
    {
      const childNode = this.renderNode ( node.childNodes[i], htmlNode )
      htmlNode.children.push ( childNode )
    }

    return htmlNode
  }


  parse ( ):HTMLNode {
    const rootNode:HTMLNode = this.renderNode(this.domRoot)
    return rootNode
  }

}
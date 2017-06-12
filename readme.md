# kio-ng2-markdown
----------

GitHub: [https://github.com/afkmatze/kio-ng2-markdown](https://github.com/afkmatze/kio-ng2-markdown)


## About

kio-ng2-markdown is a configurable kio module for rendering markdown in digitorial components.

Implemented parser is [showdown](https://github.com/showdownjs/showdown)



## installation

in digitorial project

`$ npm install git@github.com:afkmatze/kio-ng2-markdown.git --save`

### app.module.ts

```typescript 
import { NgModule, BrowserModule } from '@angular/core';
import { KioNg2MarkdownModule, KioNg2MarkdownService } from 'kio-ng2-markdown'

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    KioNg2MarkdownModule.forRoot ()
  ],
  providers: [KioNg2MarkdownService],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

### app.component.html
```html
<kio-markdown [source]="markdownSource"></kio-markdown>
```

### app.component.ts 
```typescript
import { Component, ViewChild, ViewContainerRef, ElementRef } from '@angular/core';
import { KioNg2MarkdownService } from 'kio-ng2-markdown'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(protected markdown:KioNg2MarkdownService){}

  markdownSource:string = "# Headline"
  
}
```

## configuration

### showdown extension
example with [showdown-footnotes](https://github.com/Kriegslustig/showdown-footnotes)

install *showdown-footnotes* extension

```bash
$ npm i showdown-footnotes --save
```

#### app.module.ts


```typescript 
import { NgModule, BrowserModule } from '@angular/core';
import { KioNg2MarkdownModule, KioNg2MarkdownService } from 'kio-ng2-markdown'

import { AppComponent } from './app.component';

import * as footnotes from 'showdown-footnotes'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    KioNg2MarkdownModule.forRoot ({
    	converter: { 
    		extensions: [ footnotes ] 
		}
    })
  ],
  providers: [KioNg2MarkdownService],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

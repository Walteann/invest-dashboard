import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeChangeService {
  private renderer: Renderer2;
  private bodyClassList: DOMTokenList;

  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
    this.bodyClassList = document.body.classList;
  }

  toggleBodyClass(className: string) {
	this.bodyClassList.contains(className)
	? this.renderer.removeClass(document.body, className)
	: this.renderer.addClass(document.body, className);
  }
}

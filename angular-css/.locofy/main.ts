
    import {
      importProvidersFrom,
      NgModule,
      AfterViewChecked,
      AfterViewInit,
      Component,
      ElementRef,
      Input,
    } from '@angular/core';
    import { provideRouter } from '@angular/router';
    import { createCustomElement } from '@angular/elements';
    import { BrowserModule, createApplication } from '@angular/platform-browser';
    import { CommonModule } from '@angular/common';
    import { ButtonComponent } from '../src/app/button/button.component';

    @NgModule({
      imports: [BrowserModule, CommonModule],
      declarations: [],
      exports: [], 
      providers: [],
      bootstrap: [],
    })
    class LocofyAppModule {}

    
  @Component({
    selector: 'locofy-app-inner-wrapper-zzzpcsudbrnkuuqqsvssght',
    template: '<ng-content></ng-content>',
  })
  export class LocofyAppWrapperzzzpcsudbrnkuuqqsvssght implements AfterViewInit, AfterViewChecked {
    @Input() isMapping: boolean = false;

    constructor(private elementRef: ElementRef) {}

    ngAfterViewInit() {
      this.replaceImageSrcWithCDN();
    }

    ngAfterViewChecked() {
      this.replaceImageSrcWithCDN();
    }

    replaceImageSrcWithCDN() {

      const w = window as any;
      if (!w['locofyCliImageCache']) {
        w['locofyCliImageCache'] = {} as any;
      }
        
      const images: NodeListOf<HTMLImageElement> = this.elementRef.nativeElement.querySelectorAll('img');
      const elementsWithStyles: NodeListOf<HTMLElement> = this.elementRef.nativeElement.querySelectorAll('*');
      const locofyPresignUrls = {} as Record<string, string>;

      const handleImage = (src: string) => {
        if (!src) return;
        if (typeof src !== 'string' || (src.startsWith('http') || src.startsWith('data:') || src.startsWith('blob:'))) {
          return;
        }

        if (locofyPresignUrls && locofyPresignUrls[src]) {
          return locofyPresignUrls[src];
        }

        const locofySrc = "https://d3beo87skfz9b9.cloudfront.net/2zz2zPCSUdB5RNkuUQQsVssg7HT" + (src.startsWith('/') ? src : '/' + src);
        return locofySrc
      };

      images.forEach((img) => {
        const src =
          img.getAttribute('src') ||
          img.getAttribute('ngSrc') ||
          img.getAttribute('ngsrc');
          if(src){
            const imageSrc =  handleImage(src);  
            if(imageSrc){
              if(this.isMapping){
                img.setAttribute('src', imageSrc);
              } else {
                w['locofyCliImageCache'][src] = imageSrc;
              }
            }
          }
      });

      const processElementStyles = (element: HTMLElement) => {
        const classList = Array.from(element.classList);
        let backgroundImage = '';

        // Iterate through all stylesheets
        Array.from(document.styleSheets).forEach((stylesheet) => {
          try {
            const rules = Array.from((stylesheet as CSSStyleSheet).cssRules);
            rules.forEach((rule) => {
              if (rule instanceof CSSStyleRule) {
                // Check if the rule matches any of the element's classes
                if (classList.some(cls => rule.selectorText.includes('.' + cls))) {
                  const bgImage = rule.style.backgroundImage;
                  if (bgImage && bgImage !== 'none') {
                    backgroundImage = bgImage;
                    return;
                  }
                }
              }
            });
          } catch {
          }
          if (backgroundImage) return;
        });

        const url = backgroundImage.includes('url') && backgroundImage.replace('url("', '').replace('")', '');

        if (url) {
         const imageSrc =  handleImage(url)
         if(imageSrc && url) {
           element.style.backgroundImage = 'url(' + imageSrc +  ')';

          if(!this.isMapping){
            w['locofyCliImageCache'][url] = imageSrc;    
          }
         }
         
        }
      };

      elementsWithStyles.forEach((element) => {
        const style = window.getComputedStyle(element);
        const backgroundImage = style.backgroundImage;

        if (backgroundImage && backgroundImage !== 'none') {
          processElementStyles(element);
        }
      })
    }
  }


    async function webComponentApp() {
      const app = await createApplication({
        providers: [
          importProvidersFrom(LocofyAppModule),
          provideRouter([
            { path: '', component: ButtonComponent, pathMatch: 'full' }
          ]),
        ],
      });

      
      const ele0 = createCustomElement(ButtonComponent, {
        injector: app.injector,
      });
      customElements.define("app-button-zzzpcsudbrnkuuqqsvssght", ele0);
    

      const LocofyAppWrapper = createCustomElement(LocofyAppWrapperzzzpcsudbrnkuuqqsvssght, {
        injector: app.injector,
      });
      customElements.define("locofy-image-wrapper-zzzpcsudbrnkuuqqsvssght", LocofyAppWrapper);
    
    }

    (async function () {
      await webComponentApp();
    })();
  
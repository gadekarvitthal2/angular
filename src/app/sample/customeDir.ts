import { style } from '@angular/animations';
import { Directive, ElementRef, HostBinding, HostListener, Input, OnChanges, Renderer2, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core'

@Directive({
    selector: '[changeColor]'
})

export class custome implements OnChanges {
    @Input() changeColor: any;
    constructor(private custome: ElementRef, private render: Renderer2,
        private vcr:ViewContainerRef,private templateref:TemplateRef<any>,) {
        (custome.nativeElement as HTMLElement).style.backgroundColor = 'red';
    }
    ngOnChanges(changes: SimpleChanges): void {
  if(changes)
    {
        this.vcr.createEmbeddedView(this.templateref)
    }
    else{
        this.vcr.clear();
    }
}
    @HostBinding('style.color') change = 'red';
    @HostListener('click') colorchanage(event: Event) {
        this.render.setStyle(this.custome.nativeElement, 'background-color', 'blue')
        console.log(`khglkjs`)
        this.change = 'red'
    }



}



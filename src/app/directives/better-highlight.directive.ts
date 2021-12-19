import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
  Renderer2,
} from "@angular/core";

@Directive({
  selector: "[appBetterHighlight]",
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultBgColor: string = "transparent";
  @Input() defaultHighlightBgColor: string = "blue";
  @Input() defaultTextColor: string = "black";
  @Input() defaultHighlightTextColor: string = "white";

  @HostBinding("style.backgroundColor") backgroundColor: string;
  @HostBinding("style.color") textColor: string;

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.backgroundColor = this.defaultBgColor;
    this.textColor = this.defaultTextColor;
    // this.renderer.setStyle(
    //   this.elRef.nativeElement,
    //   "background-color",
    //   "blue"
    // );
    // this.renderer.setStyle(this.elRef.nativeElement, "color", "white");
  }

  @HostListener("mouseenter") mouseover(eventData: Event) {
    this.backgroundColor = this.defaultHighlightBgColor;
    this.textColor = this.defaultHighlightTextColor;
  }

  @HostListener("mouseleave") mouseleave(eventData: Event) {
    this.backgroundColor = this.defaultBgColor;
    this.textColor = this.defaultTextColor;
  }
}

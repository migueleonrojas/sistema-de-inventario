import { Component, ElementRef, HostListener, OnInit, ViewChild, AfterContentChecked } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { distinctUntilChanged, tap } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  @ViewChild('hideSection') hideSection: ElementRef<HTMLDivElement>;
  @ViewChild('mainSectionContainer') mainSectionContainer: ElementRef<HTMLDivElement>;

  title = 'sistema-de-inventario';
  titleButton: string = 'Registrarse';
  Breakpoints = Breakpoints;
  
  readonly breakpoint$ = this.breakpointObserver
    .observe(['(max-width:800px)', '(min-width:800px)'])
    .pipe(
      distinctUntilChanged()
    );


  constructor(
    private el: ElementRef,
    private breakpointObserver: BreakpointObserver
  ){

  }
  ngOnInit(): void {
    this.breakpoint$.subscribe(() =>
      this.breakpointChanged()
    );
  }

  


  private breakpointChanged() {

    if(this.breakpointObserver.isMatched('(max-width: 800px)') && this.hideSection !== undefined) {

      if(this.titleButton === 'Ingresar'){

        (this.hideSection.nativeElement as HTMLDivElement).style.transform = 'translate(0, 100%)';
      }
      
    }
    else if(this.breakpointObserver.isMatched('(min-width: 800px)') && this.hideSection !== undefined) {
     
      if(this.titleButton === 'Ingresar'){

        (this.hideSection.nativeElement as HTMLDivElement).style.transform = 'translate(100%, 0)';

      }
      
    }
  }



  toggleSection() {
    
    
    this.titleButton = this.titleButton === 'Registrarse' ? 'Ingresar' : 'Registrarse';
    let initialTranslate: string = 'translate(0, 0)';
    let translated: string =  window.innerWidth > 800 ? 'translate(100%, 0)' : 'translate(0, 100%)';
    let transform = this.titleButton === 'Registrarse' ? initialTranslate : translated;

    (this.hideSection.nativeElement as HTMLDivElement).style.transform = transform;

    
  }


}

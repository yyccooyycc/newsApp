import { AfterViewInit, ChangeDetectorRef, Component,ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver, BreakpointState, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit{
  title = 'newsApp';
  @ViewChild(MatSidenav)sideNav!:MatSidenav;

  constructor(private observer: BreakpointObserver, private cd: ChangeDetectorRef){
    
  }
  ngAfterViewInit(): void {
    this.sideNav.opened = true;
    this.observer.observe(['(max-width:787px)']).subscribe((res)=>{
      if(res?.matches){
        this.sideNav.mode = "over";
        this.sideNav.close();
      }else{
        this.sideNav.mode="side";
        this.sideNav.open();
      }
    })
    this.cd.detectChanges() 
  }
}

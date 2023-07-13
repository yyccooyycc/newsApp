import { AfterViewInit, ChangeDetectorRef, Component,ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver, BreakpointState, Breakpoints } from '@angular/cdk/layout';
import { NewServiceService } from './new-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit{
  title = 'newsApp';
  sources: any =[];
  articles: any =[];
  selectedNewsChannel: string = 'Top 10 Trending News!'
  @ViewChild(MatSidenav)sideNav!:MatSidenav;

  constructor(private observer: BreakpointObserver, private cd: ChangeDetectorRef, private newsApi : NewServiceService){
    
  }

  ngOnInit(): void{

    this.newsApi.initArticles().subscribe((res:any)=>{
      console.log(res);
      this.articles=res.articles
    })


    this.newsApi.initSource().subscribe((res:any)=>{
      console.log(res);
      this.sources = res.sources

    })

  }
  ngAfterViewInit(): void {
    this.observer.observe(['(max-width:1600px)']).subscribe((res)=>{
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

  searchSource(source:any){
    this.newsApi.getArticlesByid(source.id).subscribe((res:any)=>{
      this.selectedNewsChannel =source.name;
      this.articles = res.articles
    })
  }
}

import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {

  mobileQuery: MediaQueryList

  fillerNav = [
    { label: 'Cars Stock', link: 'cars' }
  ]

  private _mediaQueryListener: () => void

  constructor( changeDetectorRef: ChangeDetectorRef, media: MediaMatcher ) { 
    this.mobileQuery = media.matchMedia('(max-width: 600px)')
    this._mediaQueryListener = () => changeDetectorRef.detectChanges()
    this.mobileQuery.addListener(this._mediaQueryListener)
  }

  ngOnInit() {
  }

}

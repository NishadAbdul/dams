import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, NavigationStart, Router } from '@angular/router';
import { HttpLoaderService } from './core/services/loader.service';

export let browserReloaded = false;
const Color = require('color');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public config: any = {
    colors: {primary: '#694ED6', secondary: '#0E3558'}
  };
  constructor(
    public loaderService: HttpLoaderService,
    public router: Router
  ) {

    if (this.config?.colors) {
      this.setColorTheme();
    }
    this.setTitle();
  }

  ngOnInit() {
    
    
  }

  setColorTheme() {
    // TODO - Update required on all SCSS file color variables
    const configuredPrimaryColor = this.config.colors?.primary ?? '#694ED6';
    const configuredSecondaryColor = this.config.colors?.secondary ?? '#0E3558';
    const primaryColor = Color(configuredPrimaryColor);
    let shadeBg = primaryColor.desaturate(0.48).lightness(79);
    let shadeColor = primaryColor.desaturate(0.12).lightness(96);
    if (primaryColor.isLight()) {
      shadeBg = primaryColor.darken(0.6);
      shadeColor = primaryColor.darken(0.8);
    } 
    document.documentElement.style.setProperty('--primary-color', configuredPrimaryColor);
    document.documentElement.style.setProperty('--secondary-color', configuredSecondaryColor);
    document.documentElement.style.setProperty('--time_line', shadeBg); // TODO needs to update
    document.documentElement.style.setProperty('--time_line_bg', shadeColor); // TODO needs to update
  }

  setTitle() {
    // get product/organization name for setting title from config API
    const instititutionName = this.config.instititutionName ? this.config.instititutionName : 'DAMS';
    document.title = instititutionName ? instititutionName : '';
  }
}

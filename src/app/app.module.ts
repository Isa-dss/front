import { PrimengModule } from '../assets/shared/primeng.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
// import { NgxUiLoaderConfig, NgxUiLoaderModule, NgxUiLoaderRouterModule, NgxUiLoaderHttpModule } from "ngx-ui-loader";
import { PagesModule } from './pages/pages.module';

import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'; // Importe CUSTOM_ELEMENTS_SCHEMA



// const ngxUiLoaderConfig: NgxUiLoaderConfig = {
//   "bgsColor": "#1bbc9d",
//   "bgsOpacity": 0.4,
//   "bgsPosition": "bottom-right",
//   "bgsSize": 60,
//   "bgsType": "ball-spin-clockwise",
//   "blur": 2,
//   "delay": 0,
//   "fastFadeOut": true,
//   "fgsColor": "#1bbc9d",
//   "fgsPosition": "center-center",
//   "fgsSize": 100,
//   "fgsType": "double-bounce",
//   "gap": 48,
//   "logoPosition": "center-center",
//   "logoSize": 120,
//   "logoUrl": "",
//   "masterLoaderId": "master",
//   "overlayBorderRadius": "0",
//   "overlayColor": "rgba(40, 40, 40, 0.8)",
//   "pbColor": "#1bbc9d",
//   "pbDirection": "ltr",
//   "pbThickness": 3,
//   "hasProgressBar": true,
//   "text": "",
//   "textColor": "#FFFFFF",
//   "textPosition": "center-center",
//   "maxTime": -1,
//   "minTime": 300
// };

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    // NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    // NgxUiLoaderRouterModule,
    // NgxUiLoaderHttpModule,
    PagesModule,
    PrimengModule,
    AppComponent,

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }

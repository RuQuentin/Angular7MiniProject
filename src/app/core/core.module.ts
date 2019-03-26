import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule }    from '@angular/common/http';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [],
  imports: [
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    NgxWebstorageModule.forRoot(),
  ],
  providers: [],
  bootstrap: [],
  exports: [
    MatToolbarModule
  ]
})
export class CoreModule {}

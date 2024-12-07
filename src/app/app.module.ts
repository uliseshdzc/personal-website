import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CircularContainerComponent } from './circular-container/circular-container.component';
import { BrainSparksComponent } from './brain-sparks/brain-sparks.component';

@NgModule({
  declarations: [AppComponent, CircularContainerComponent, BrainSparksComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

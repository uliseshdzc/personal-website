import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CircularContainerComponent } from './circular-container/circular-container.component';
import { BrainSparksComponent } from './brain-sparks/brain-sparks.component';
import { AiQuestioningComponent } from "./ai-questioning/ai-questioning.component";
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, CircularContainerComponent, BrainSparksComponent],
  imports: [BrowserModule, AiQuestioningComponent],
  providers: [provideHttpClient(withInterceptorsFromDi())],
  bootstrap: [AppComponent],
})
export class AppModule {}

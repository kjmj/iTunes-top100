import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopAlbumsComponent } from './components/top-albums/top-albums.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialElevationOnHoverDirective } from './directives/material-elevation-on-hover.directive';
import { ListFilterPipe } from './pipes/list-filter.pipe';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AlbumRankComponent } from './components/album-rank/album-rank.component';
import {MatSelectModule} from '@angular/material/select';
import { AlbumTextComponent } from './components/album-text/album-text.component';
import { ProjectDescriptionComponent } from './components/project-description/project-description.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { ProjectHeaderComponent } from './components/project-header/project-header.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';

@NgModule({
  declarations: [
    AppComponent,
    TopAlbumsComponent,
    MaterialElevationOnHoverDirective,
    ListFilterPipe,
    AlbumRankComponent,
    AlbumTextComponent,
    ProjectDescriptionComponent,
    ProjectHeaderComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    FlexLayoutModule,
    MatInputModule,
    FormsModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatProgressBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

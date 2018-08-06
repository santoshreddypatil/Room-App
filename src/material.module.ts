import { NgModule } from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule, MatIconModule,
        MatInputModule, MatFormFieldModule, MatListModule,  MatRadioModule,
        MatNativeDateModule, MatDatepickerModule, MatSidenavModule, MatCardModule,
        MatSelectModule, MatTabsModule, MatProgressSpinnerModule, MatDialogModule
     } from '@angular/material';

     import {MatTableModule} from '@angular/material/table';

@NgModule(
{
imports: [
    MatButtonModule,  MatIconModule, MatInputModule,
    MatFormFieldModule, FlexLayoutModule,  MatRadioModule, MatDatepickerModule, MatNativeDateModule, MatSidenavModule, 
    MatToolbarModule, MatListModule, MatCardModule, MatTabsModule,
    MatSelectModule, MatProgressSpinnerModule, MatDialogModule,MatTableModule
],
exports: [
    MatButtonModule, MatIconModule, MatInputModule,
    MatFormFieldModule, FlexLayoutModule, BrowserAnimationsModule,
    MatRadioModule, MatDatepickerModule, MatNativeDateModule,
    MatSidenavModule, MatToolbarModule, MatListModule, MatCardModule,
    MatTabsModule, MatSelectModule, MatProgressSpinnerModule, MatDialogModule,MatTableModule

]

})
export class Material {

}
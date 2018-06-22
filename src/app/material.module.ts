import {NgModule} from '@angular/core';
import {
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    MatPaginatorModule,
    MatTableDataSource,
    MatTableModule,
    MatSortModule


} from '@angular/material';

@NgModule({
  imports: [
      MatToolbarModule,
      MatButtonModule,
      MatFormFieldModule,
      MatIconModule,
      MatInputModule,
      MatProgressSpinnerModule,
      MatMenuModule,
      MatTableModule,
      MatPaginatorModule,
      MatSortModule
    ],
  exports: [
      MatToolbarModule,
      MatButtonModule,
      MatFormFieldModule,
      MatIconModule,
      MatInputModule,
      MatProgressSpinnerModule,
      MatMenuModule,
      MatTableModule,
      MatPaginatorModule,
      MatSortModule
    ],
})
export class Material { }

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TrustTableComponent } from "./trust-table.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { EditTrustTableComponent } from "../edit-trust-table/edit-trust-table.component";

//Angular Material Module
import { MatTableModule } from "@angular/material/table";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatListModule } from "@angular/material/list";
import { MatDialogModule } from "@angular/material/dialog";
import { MatDividerModule } from "@angular/material/divider";
import { MatSortModule } from "@angular/material/sort";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";

export { MatTableModule } from "@angular/material/table";
export { MatFormFieldModule } from "@angular/material/form-field";
export { MatInputModule } from "@angular/material/input";
export { MatButtonModule } from "@angular/material/button";
export { MatListModule } from "@angular/material/list";
export { MatDialogModule } from "@angular/material/dialog";
export { MatDividerModule } from "@angular/material/divider";
export { MatSortModule } from "@angular/material/sort";
export { MatCheckboxModule } from "@angular/material/checkbox";
export { MatPaginatorModule } from "@angular/material/paginator";
export { MatCardModule } from "@angular/material/card";
export { MatIconModule } from "@angular/material/icon";

@NgModule({
  declarations: [TrustTableComponent, EditTrustTableComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatDividerModule,
    MatSortModule,
    MatDialogModule,
    MatListModule,
  ],
  exports: [TrustTableComponent, EditTrustTableComponent],
  entryComponents: [TrustTableComponent, EditTrustTableComponent],
})
export class TrustTableModule {}

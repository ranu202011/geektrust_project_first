import { Component, Inject, OnInit } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: "app-edit-trust-table",
  templateUrl: "./edit-trust-table.component.html",
  styleUrls: ["./edit-trust-table.component.scss"],
})
export class EditTrustTableComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<EditTrustTableComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {
    console.log(this.data);
  }

  cancel() {
    this.dialogRef.close();
  }
  edit() {}
}

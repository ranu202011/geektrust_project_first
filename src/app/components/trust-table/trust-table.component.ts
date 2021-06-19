import { SelectionModel } from "@angular/cdk/collections";
import {
  AfterViewInit,
  Component,
  Inject,
  OnInit,
  TemplateRef,
  ViewChild,
} from "@angular/core";
import {
  MatDialog,
  MatDialogConfig,
  MatDialogModule,
  MatDialogRef,
  MatIconRegistry,
  MatPaginator,
  MatSort,
  MAT_DIALOG_DATA,
} from "@angular/material";
import { MatTableDataSource } from "@angular/material/table";
import { DomSanitizer } from "@angular/platform-browser";
import { EditTrustTableComponent } from "../edit-trust-table/edit-trust-table.component";
import { TrustTableService } from "../trust-table.service";

@Component({
  selector: "app-trust-table",
  templateUrl: "./trust-table.component.html",
  styleUrls: ["./trust-table.component.scss"],
})
export class TrustTableComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = [
    "select",
    "id",
    "name",
    "email",
    "role",
    "actions",
  ];
  dataSource = new MatTableDataSource();
  selection = new SelectionModel(true, []);
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild("template", { static: true }) template: TemplateRef<any>;
  @ViewChild("alerttemplate", { static: true }) alerttemplate: TemplateRef<any>;
  @ViewChild("dynamicContent", { static: true })
  dynamicContent: TemplateRef<any>;
  pageLength: number;
  searchdata: any;
  tableDataStored: any;
  dialogRef: MatDialogRef<any>;
  constructor(
    private dialog: MatDialog,
    private svc: TrustTableService,
    private domSanitizer: DomSanitizer,
    private matIconregistry: MatIconRegistry
  ) {
    this.matIconregistry.addSvgIcon(
      "edit",
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        "../assets/edit_icon.svg"
      )
    );
    this.matIconregistry.addSvgIcon(
      "delete",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/delete.svg")
    );
  }

  ngOnInit() {
    this.loadData();
  }
  clearData() {
    this.searchdata = "";
    this.dataSource.data = this.tableDataStored;
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  loadData() {
    this.svc.getTrustData().subscribe((response: any) => {
      if (response && response.length > 0) {
        this.tableDataStored = response;
        this.dataSource.data = response;

        this.pageLength = response.length;
      } else {
        this.dataSource.data = [];
      }
    });
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.dataSource.data.forEach((row) => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: any): string {
    if (!row) {
      return `${this.isAllSelected() ? "select" : "deselect"} all`;
    }
    return `${this.selection.isSelected(row) ? "deselect" : "select"} row ${
      row.position + 1
    }`;
  }

  filterData(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  deleteSelectedRow() {
    if (this.selection.isEmpty()) {
      const dialogConfig = this.dialogDataConf();
      const dialogRef = this.dialog.open(this.alerttemplate, dialogConfig);
      this.dialogRef = dialogRef;
      dialogRef.afterClosed().subscribe();
    } else {
      console.log(this.selection.selected);
      if (this.selection.selected.length < 2) {
        const dialogConfig = this.dialogDataConf(200);
        const dialogRef = this.dialog.open(this.dynamicContent, dialogConfig);
        this.dialogRef = dialogRef;
        dialogRef.afterClosed().subscribe();
      } else {
        console.log("Too Long");
      }
    }
  }

  downloadPdf() {}

  editRowData(element: any) {
    const dialogConfig = this.dialogDataConf(300, 500);
    dialogConfig.data = element;
    const dialogRef = this.dialog.open(EditTrustTableComponent, dialogConfig);
    dialogRef.afterClosed().subscribe();
  }

  deleteRowData(element: any, template: TemplateRef<any>) {
    const dialogConfig = this.dialogDataConf();
    dialogConfig.data = element;
    const dialogRef = this.dialog.open(template, dialogConfig);
    this.dialogRef = dialogRef;
    dialogRef.afterClosed().subscribe();
  }
  hide() {
    this.dialogRef.close();
  }

  deleteData() {
    this.dialogRef.afterClosed().subscribe((res) => {});
  }

  dialogDataConf(
    height: number = 150,
    width: number = 300
  ): MatDialogConfig<any> {
    const dialogHeight = `${height.toString()}px `;
    const dialogWidth = `${width.toString()}px `;
    const dialogConfig = new MatDialogConfig();
    (dialogConfig.height = dialogHeight), (dialogConfig.width = dialogWidth);
    return dialogConfig;
  }
}

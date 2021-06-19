import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { TrustTableModule } from "./components/trust-table/trust-table.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { TrustTableService } from "./components/trust-table.service";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TrustTableModule,
    BrowserAnimationsModule,
  ],
  providers: [TrustTableService],
  bootstrap: [AppComponent],
})
export class AppModule {}

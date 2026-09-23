import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { InvestmentResultsComponent } from "./investment-results/investment-results.component";
import { BrowserModule } from "@angular/platform-browser";
import { UserModule } from "./user-input/user-input.module";

@NgModule({
    declarations:[
        AppComponent,
        HeaderComponent,
        InvestmentResultsComponent
    ],
    imports: [BrowserModule, UserModule],
    bootstrap: [AppComponent],
})
export class AppModule{

}
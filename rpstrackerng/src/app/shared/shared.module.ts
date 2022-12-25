import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { PresetFilterComponent } from "./components/preset-filter/preset-filter.component";

import { MainMenuComponent } from "./components/main-menu/main-menu.component";
import { SideMenuComponent } from "./components/side-menu/side-menu.component";
import { ModalComponent } from "./components/modal-dialog/modal-dialog.component";
import { ButtonsModule } from "@progress/kendo-angular-buttons";
import { InputsModule } from "@progress/kendo-angular-inputs";
import { LabelModule } from "@progress/kendo-angular-label";
import { DropDownsModule } from "@progress/kendo-angular-dropdowns";

@NgModule({
  imports: [
    FormsModule,
    RouterModule,
    ButtonsModule,
    InputsModule,
    LabelModule,
    DropDownsModule,
  ],
  exports: [
    FormsModule,
    MainMenuComponent,
    SideMenuComponent,
    PresetFilterComponent,
    ModalComponent,
    ButtonsModule,
    InputsModule,
    LabelModule,
    DropDownsModule,
  ],
  declarations: [
    MainMenuComponent,
    SideMenuComponent,
    PresetFilterComponent,
    ModalComponent,
  ],
  providers: [],
})
export class SharedModule {}

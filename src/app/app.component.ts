import { Component, OnInit } from '@angular/core';
import { FormsModule, FormControl, FormArray, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'SaveLife';

  public formParent: FormGroup = new FormGroup({}); //Declaracion del FORM


}


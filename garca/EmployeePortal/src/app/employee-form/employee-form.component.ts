import { CommonModule } from '@angular/common';
import { Component,OnInit,Input, } from '@angular/core';
import {NgForm, FormsModule,ReactiveFormsModule} from '@angular/forms';
@Component({
  selector: 'app-employee-form',
  imports: [FormsModule,CommonModule],
  templateUrl: './employee-form.component.html',
  styleUrl: './employee-form.component.css'
})
export class EmployeeFormComponent {
  submittedData : any = null; // data to be sent to database
  fileSubmitter : boolean = false;
  fileData : any = null;
  
 
onSubmit(form:NgForm){ // onsubmit function with handle launching the call to update the database.
  this.submittedData = {...form.value}; // eventually changed to an array of objects. [{}]
  form.reset()
}

selectedFile: File | null = null;  // Stores the selected file

onFileSelected(event: any) {
  this.selectedFile = event.target.files[0];  // Capture the uploaded file
}

}

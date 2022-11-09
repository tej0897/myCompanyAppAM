import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { ApiService } from '../services/api.service';

import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private companyService: ApiService, private dialogRef: MatDialogRef<DialogComponent>) { }

  companyForm !: FormGroup;

  ngOnInit(): void {
    this.companyForm = this.formBuilder.group({
      companyID: ['', Validators.required],
      companyName: ['', Validators.required],
      companyCEO: ['', Validators.required],
      turnover: ['', Validators.required],
      website: ['', Validators.required]
    })
  }


  
  productForm !: FormGroup;

  addCompany(){
    if(this.companyForm.valid){
      this.companyService.addCompany(this.companyForm.value).subscribe({
        next: (res)=> {
          alert("company added successfully!")
          this.companyForm.reset();
          this.dialogRef.close("save");
        }, error:() => {
          alert("Error while adding the company!")
        }
      })
    }
  }

}

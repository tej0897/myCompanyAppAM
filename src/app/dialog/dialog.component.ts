import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { Company } from './company';
import { DialogService } from './dialog.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private companyService: ApiService) { }

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
        }, error:() => {
          alert("Error while adding the company!")
        }
      })
    }
  }

}

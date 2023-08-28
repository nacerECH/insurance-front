import { Component, OnInit } from '@angular/core';
import { Insurance } from 'src/app/models/Insurance';
import { InsuranceService } from 'src/app/services/insurance.service';

@Component({
  selector: 'app-insurances',
  templateUrl: './insurances.component.html',
  styleUrls: ['./insurances.component.css']
})
export class InsurancesComponent implements OnInit {

  insurances!: Array<Insurance>

  constructor(private insuranceService:InsuranceService) { }


  ngOnInit(): void {
    this.insuranceService.getAllInsurances(0,10).subscribe({
      next: (data) =>{
        this.insurances = data;
      },
      error: (err) =>{
        window.alert('failed')
        console.log(err)
      }
    })
  }

}

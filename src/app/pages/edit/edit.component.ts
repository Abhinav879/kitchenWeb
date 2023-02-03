import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderDetailsService } from 'src/app/services/order-details.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

protected:any
foodData:any

  constructor(private activatedroute:ActivatedRoute,private service:OrderDetailsService) { }

  ngOnInit(): void {
  }

  updateFood(form:any){
    let updateFood={
      id:form.value.id,
      foodName:form.value.foodName,
      foodDetails:form.value.foodDetails,
      foodPrice:form.value.foodPrice,
      foodImg:form.value.foodImg 
    }

  }
}

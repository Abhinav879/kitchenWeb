import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { OrderDetailsService } from 'src/app/services/order-details.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  addproductform=this.formbuilder.group({

    id:[""],
    foodName:[""],
    foodDetails:[""],
    foodPrice:[""],
    foodImg:[""]
  })

  constructor(private formbuilder :FormBuilder, private service:OrderDetailsService,private router:Router) { }

  ngOnInit(): void {
  }

  addfoodItem(){
    let newProduct={
      id:this.addproductform.value.id,
      foodName:this.addproductform.value.foodName,
      foodDetails:this.addproductform.value.foodDetails,
      foodPrice:this.addproductform.value.foodPrice,
      foodImg:this.addproductform.value.foodImg 
    }

    this.service.addfoodItem(newProduct).subscribe((data)=>{
      alert("fooditem added")
      this.router.navigateByUrl('menu')
    })

  }

}

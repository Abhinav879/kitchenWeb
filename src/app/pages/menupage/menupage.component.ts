import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderDetailsService } from 'src/app/services/order-details.service';

@Component({
  selector: 'app-menupage',
  templateUrl: './menupage.component.html',
  styleUrls: ['./menupage.component.css']
})
export class MenupageComponent implements OnInit {

  // getMenuid:any
  menuData:any
  productid:any
  constructor(private param:ActivatedRoute,private service:OrderDetailsService,private router:Router ) { }

  ngOnInit(): void {

    this.productid=this.param.params.subscribe((data)=>{
      this.productid=data['id']

      this.service.menupage(this.productid).subscribe((item)=>{
        this.menuData=item
      })
    })
  }

  placeorder(){
    alert("order placed")
    this.router.navigateByUrl('menu')
  }

}




 // this.getMenuid=this.param.snapshot.paramMap.get('id')
    // console.log(this.getMenuid,'getmenu');
    // if(this.getMenuid){
    //   this.menuData=this.service.foodDetails.filter((value)=>{
    //     return value.id==this.getMenuid
    //   })
    //   // console.log(this.menuData,'menudata>>');
    // }
import { Component ,OnInit } from '@angular/core';
import { Router } from '@angular/router'

import {ResultService} from './result.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{

  title = 'SPS';
  constructor(private result :ResultService,private route:Router) { }
  ngOnInit(): void {
  }

  status={
    loading:false,
    loaded:true,
    data:null
  }

  visible=false

  runIt(){
    this.status.loading=true

    this.result.getReset().subscribe(
      res=>{
        this.result.getData().subscribe(
          res=>{
            console.log(res)
            this.status.loading=false
            this.status.loaded=true
            this.status.data=res.data1
            this.visible=true
            
            console.log(this.status)
          },
          err=>{
            console.log(err)
          }
        )
      },
      err=>{
        console.log(err)
      }

    )

    
  }

  
}

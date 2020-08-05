import { Component, OnInit } from '@angular/core';
import {ResultService} from '../result.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  constructor(private result :ResultService,private route:Router) { }

  ngOnInit(): void {

    
  }

  data={
    iteration:[],
    playerChoice:[]
  }

  detail(){
    this.result.getAlldata().subscribe(
      res=>{
        console.log(res)
        this.data.iteration=res.fullData
        this.data.playerChoice=res.row
        console.log("ll",this.data.iteration)

      },
      err=>{
        console.log(err)
      }
    )
  }

  check(i){
    if(i==0){
      return "Rock"
    }
    if(i==1){
      return 'Paper'
    }
    if(i==2){
      return "Scissor"
    }
  }

}

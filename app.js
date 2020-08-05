const express =require('express') 
const path =require('path')
const http =require('http')

const app =express()


app.use(express.static(path.join(__dirname,'dist/SPS')))




//--------------------  Used to store people choice (rock,paper,scissor)  --------------------------------------------------
data=[
    {choice:[null,null,null,null]}  
 ]

//-------------------Used to Store all Iteration--------------------------------------------- 

allIteration=[{
    0:[null,0,0,0],
    1:[0,null,0,0],
    2:[0,0,null,0],
    3:[0,0,0,null]
}]

// ------------------- this route is used take random people choice and store in data array and also make all iteration -------------------------------------------------------
app.get('/startCalculation',(req,res)=>{
    
    console.log(data)
    console.log("hello")
    makeArray()
    for(var i=0;i<50;i++){
        console.log(data[i],i)
    }
    makeIteration()
    res.send({data1:allIteration[allIteration.length-1]}) // it send only final result not all
})


// --------------------------------  this route is used to send all iteration and people choices  --------------------------------------------------
app.get('/completeDetail', (req,res)=>{
    res.send({fullData:allIteration,row:data})  //sending data to angular
})


// -----------------------------  this route is helping route (it help for clearing previous record)   -----------------------------------------------------

app.get('/reset',(req,res)=>{
    data=[
        {choice:[null,null,null,null]}
     ]
     allIteration=[{
        0:[null,0,0,0],
        1:[0,null,0,0],
        2:[0,0,null,0],
        3:[0,0,0,null]
    }]
    res.send({temp:"done"})  
})

// ----------------------  this is used for viewing------------------------------------------

app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'dist/SPS/index.html'))
})


// this fuction is used to create iteration from people choice
function makeIteration(){
        for(i=0;i<50;i++){
            temp1=allIteration[allIteration.length-1]
            temp={
                0:[null,temp1[0][1],temp1[0][2],temp1[0][3]],
                1:[temp1[1][0],null,temp1[1][2],temp1[1][3]],
                2:[temp1[2][0],temp1[2][1],null,temp1[2][3]],
                3:[temp1[3][0],temp1[3][1],temp1[3][2],null]
            }
            for(j=0;j<=3;j++){
               
                    for(k=0;k<=3;k++){
                        if(j!=k){
                            switch(data[i].choice[j]){
                                case 0:{
                                    if(data[i].choice[k] ==2){
                                        temp[j][k]=temp[j][k]+1
                                        
                                    }
                                    break
                                }
                                case 1:{
                                    if(data[i].choice[k] ==0){
                                        temp[j][k]=temp[j][k]+1
                                        
                                    }
                                    break
                                }
                                case 2:{
                                    if(data[i].choice[k] ==1){
                                        temp[j][k]=temp[j][k]+1
                                        
                                    }
                                    break
                                }
                            }
                        }
                    }
                    
                    
                    
                    
            }
                    allIteration.push(temp)
        }
}


///---------------------------  this function is used to take people choice (rendomly)  -----------------------------------------
function makeArray(){
    data=[
        {choice:[null,null,null,null]}
     ]
    data[0].choice[0]=getRandomInt(3)
    data[0].choice[1]=getRandomInt(3)
    data[0].choice[2]=getRandomInt(3)
    data[0].choice[3]=getRandomInt(3)
    for(var i=1;i<50;i++){
            var temp={choice:[getRandomInt(3),getRandomInt(3),getRandomInt(3),getRandomInt(3)]}
            data.push(temp)
        
    }
}


//----------------------------------   this function is used to generate random number     ----------------------------------------------
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }


const server=http.createServer(app)

server.listen(3000,()=>{
    console.log("connected")
})
var req=new XMLHttpRequest();
req.open("GET","https://restcountries.com/v3.1/all")
req.send();
req.onload=function(){
    var result=JSON.parse(req.response)
 //   console.log(result)
    for(let i = 0 ; i< result.length ; i++){
        console.log(result[i].flags);   

}
}


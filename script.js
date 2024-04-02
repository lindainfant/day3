let obj1={name:"person",age=5}
let obj2={age=5,name="person"}
let same=true;
if(Object.keys(obj1).length===Object.keys(obj2).length)
{
    else 
    {
        same=false
        console.log("length are different")
    }
    if(same){
        console.log("JASON is Equal")
    }
    else{
        console.log("JASON is not Equal")
    }
}













var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v2/all");
request.send();
request.onload=function(){
    var result=JSON.parse(request.response);
    for(let i = 0 ; i< result.length ; i++){
        console.log(result[i].flags);   

}
}


var request = newXMLHttpRequest();
request.open("GET","https://restcountries.com/v2/all");
request.send();
request.onload=function(){
    var result=JSON.parse(request.response);
    for(let i = 0 ; i< result.length ; i++){
        console.log(result[i].name);
        console.log(result[i].region);
        console.log(result[i].subregion); 
        console.log(result[i].population);    

}
}

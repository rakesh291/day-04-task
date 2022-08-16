var obj1= {name: "Person 1", age:5};
var obj2= { age:5, name: "person 1"};
// using javascript

JSON.stringify(obj1)===JSON.stringify(obj2); //true
console.log(true)


//rest api

let xhr=new XMLHttpRequest ();
xhr.open('GET',"https://restcountries.eu/v3.1/all")
xhr.onload=function(){
    // get the data
    if( xhr.status>=200&& xhr.status<300){
        //only if request is ok and received the data
        let data=JSON.parse(this.response);
        console.log(data);
        //console.log (for this response)
        console.log(data[0]);

}else{
    //run the request is not ok
    console.log("error");
}
}

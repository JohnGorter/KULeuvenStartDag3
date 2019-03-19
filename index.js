


let JohnVue = function(n){
    this.name = n;
}

JohnVue.globalstart = function(){
    console.log("global starting...")
}
JohnVue.prototype.$start = function(){
    console.log("instance starting..")
}

let test = new JohnVue("test");

JohnVue.globalstart();
test.$start(); 
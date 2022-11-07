//var rashik={education:true,hair:"black",relation:"single",quality:"good"}
// console.log(rashik["education"]);
var jawad={
    education:{
        hsc:"passed",
        SSc:"passed",
        bachelor:"passed"

    },
    hair:{
        qualityofhair:"good",
        shine:"good"
    }

}

for(propertyname in jawad){
    var value=jawad[propertyname];
    console.log(propertyname,value,)
}

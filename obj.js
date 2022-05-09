//object 
const data={
    FirstName:'Darshit',
    lastName:'alpeshbhai',
    surname:'Tarapara',
    // getdetails(){

    // }
    //inneribj//
    childobj:{
        age:22,
        Native:'Rajula',
    }
}
console.log(data);
delete data.childobj;
console.log(data);
//add properties
data.college='L.D. College of Engineering';
console.log(data);
data.FirstName='Yesha';
console.log(data)


// JSON.stringify

let userdetails=JSON.stringify(data);
console.log(userdetails);



//default parameter
function welcome(name='darshit'){
return(`Hello ${name}`)
}
console.log(welcome('yash'))



//Rest Operator
function sumofall(Name,...arg){
    let sum=0
for(let a in arg){
    sum+=arg[a]
}
sum=sum/arg.length
console.log(Name + ' Mark : '+ sum)
}
sumofall('Darshit',90,98,97,100)

//


//Destructuring
const em_data={
  Name:'Rakesh',
  age:25,
  Position:'Frontend DevelopMent',
  gmail:'rakesh12@gmail.com'
}

const createobj=(Name,gmail,phone,post,usermessage)=>{
    const obj={
        Name:Name,
        gmail:gmail,
        Phone_number:phone,
        course:post,
        usermessage
        // salary:salary
    }
    return obj
  
}


const savedata=()=>{
    let getdata=JSON.parse(localStorage.getItem('userinformation'));
    if(getdata==null){
        getdata=''
    }
const olddata={
    oldvalue:getdata
}
  
    return olddata
}

const checkpost=()=>{
    let Name=document.getElementById('Name').value
    let email=document.getElementById('email').value
    let phone=document.getElementById('phone').value;
    let post=document.getElementById('post').value;
  let usermessage=document.getElementById('usermessage').value;
    let details=createobj(Name,email,phone,post,usermessage);
    if(details.Position=='Frontend DevelopMent'){
      details.fees=20000
    }
   else if(details.Position=='Backend DevelopMent'){
        details.fees=26000
      }

    else if(details.Position=='Node js'){
        details.fees=28000
    }
    else {
        details.fees=30000
    }
    const muchdata={
        newvalue:details,
        oldvalue:savedata()
    }
    localStorage.setItem('userinformation',JSON.stringify(muchdata))
}



//array
const book=['Code Name God','Life In Wood','My Name Is Memory'];    
let [book1,book2,book3]=book
console.log(book3)
 {
    const person ={
      firstName: 'John',
      lastName : 'Doe',
      emailAddress: 'thony@gmail.com',
      
      message : function(){
        return(`{this.firstName} ${this.lastName} ${this.emailAddress} is online`)
      }
    }
    console.log(person.message()); 
 }    



 {
  const person = {
    firstName :'vince',
    lastName  : 'honcho',
    hobbies :   ['eating', 'playing', 'workng'],
  };
   person.age = 35;
   person.hobbies.unshift("dancing"),
   person.hobbies.push('lieing'),

   console.log(person)
 }


 // OBJECT TO ARRAY
 {
   const person = {
    firstName : 'John',
    lastName  : 'Doe',
    city      : 'York',
   }

    const myArray = Object.values(person);
    console.log(myArray);
 }



 // FORM INPUT
 
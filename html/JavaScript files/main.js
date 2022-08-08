console.log("Hello");
console.log("Hello world")

const cars =["Volvo" , "BMW", "SAAB" , " "]
console.log(cars[1]);
console.log(cars)

for (i= 0; i<4; i++) {
    console.log(cars[i]);
}

{
    let a = 1;
    let b = "obi";
    let c = a + " " + b;
    console.log(c);

    let x = 4;
    let y = 5;
    let xy = 4*5;
    console.log(xy);
}

{
    let x = 5;
    let y = 5;
    let yx = 6;
    console.log(x === y)
}

let txt= "MBANISICHIJIOKEANTHONY";
let length = txt.length;
console.log(txt.length)

let person = {
    firstName : "John",
    lastName : "Vince",
    age      :   19,
    eyeColor : "Hazel",
};
   console.log(person.firstName + " " + person.lastName + " is " + person.age + " " + "years" +" "+ "and"+" "+ "he"+" " + "has"+" " + person.eyeColor +" " + "eyes")

   //adding array

   const vehicle = ["saab", "volvo", "bmw"];
   vehicle[vehicle.length] = "lemon", "benz";
   console.log(vehicle);



    {
        const array = [
                  ['a', 'b', 'c', 'd', 'e'],
                  [1, 2, 3, 4, 5],
        ];
    }


    const fruits = ["bananna", "orange", "apple", "mango"];
    console.log(fruits.toString());

    {
        const fruits = ["banna", "orange", "apple", "mango"];
        console.log(fruits.join("*"));
    }


       //  push
      {
        const fruit = ["banna", "orange", "apple", "mango"]
        console.log(fruits.push("kiwi"));
      } 
             
              

          //concacting
      {
        const arr1 = ["tony", "amid"];
        const arr2 = ["hon", "vince"];
        const arr3 = ["mike", "mark"];
        console.log(arr1.concat(arr2, arr3));
      }

      
        //slice
      {
        const fruits = ["Bananna", "Orange", "Apple", "Mango"];
        console.log(fruits.slice(1, 3))
      }  

         //sorting
      {
        const fruits = ["Bananna", "Orange", "Apple", "Mango"];
        console.log(fruits.sort());
      }

         
         // reversing
      {
        
      }   


      console.log('Thony');
      let a = 'vince';
      let b = 'Thony';
      // concact
      console.log("the first man is " + a + " this second man is "+ b);
      console.log(`the first man is ${a} this second man is ${b}`);
      console.warn('this is a warning');
      console.error("this is an error");

          
           //embeded obect
      {
        let man = {
          name: 'vincent',
          age: '24',
          sex: 'zeh',
          hobbies : ['singing', 'dancing', 'reading'],
          address : {
            street : 'allen',
            city   : 'ikeja',
            state  : 'Lagos',
          }
        }
        console.log(man.name, man.age, man.sex);
        console.log(man.address.state);
        console.log(man.hobbies[2]);
        console.log(man);
      }



      {
        const human = [
          {
            id: 'shima',
            age: '23',
          },

          {
            id: 'tony',
            age: '23',
          },

          {
            id: 'shima',
            age: '23',
          },
        ]
         console.log(human[1]);

         human.forEach(function(item){
         console.log(item);
             });

         for (i= 0; i<human.length; i++) 
         {
          console.log(human);
        }
      }



      const human = [
        {
          id: 1,
          text: "code by 2",
          age: '23',
        },

        {
          id: 2,
          text: "code by 5",
          age: '24',
        },

        {
          id: 3,
          text: "code by 8",
          age: '21',
        },
      ]
          const male = JSON.stringify(human);
          console.log(male);

        
         person = {};
         person.firstName = "John";
         person.lastName = "Doe";
         person.age      = "50";
         person.eyeColor = "blue";   
         console.log(`${person.firstName} is ${person.age}`);

      {
       const myObj ={
        name : "John",
        age : 30,
        cars : [
          {name:"ford", models:["fiesta", "focus", "mustang"]},
          {name:"BMW", models:["320", "X3", "X5"]},
          {name:"fait", models:["500", "panda"]},
        ]
       }
         console.log(myObj.cars[0].name);
         console.log(myObj.cars[2].models[1]);
      }
      
      function apple(x,y) {
        return x+y;
      }
      var f=apple(7,9);
      console.log(f);

let g="hello, how do you do";
let d=g.toUpperCase();
console.log(d);

    {
      const bootLaptop = ['pizza']; 
       console.log(...bootLaptop);
    }


  {
    if (20 > 18);
    cout << "20 is greater than 18";
  }   
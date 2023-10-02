// task 1
// function dataRequest (){
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then(res => res.json())
//     .then(data =>{
//  const newNames =  data.map(item => console.log(item.name))
//  return newNames
//     })
//     dataRequest().then(datas =>{
//         console.log(datas)
//     })
// }


// task 2
 class Car {
     constructor(model,company,year){
         this.model=model;
         this.company =company;
         this.year=year;
     }
     getCarDetails(){
         return `${this.model},${this.company}, ${this.year}`
     }
 }
 const newClass =new Car('mazda','3',2018)
 console.log(newClass.getCarDetails())
 console.log(this)


// 3.ამ პოსტების API-დან https://jsonplaceholder.typicode.com/posts
 // შექმენით კლასის პოსტი თვისებების ID,
 // სათაური და ტექსტი. შექმენით Post ობიექტების მასივი მოტანილი მონაცემების საფუძველზე
 class Post {
     constructor(id,title,body){
         this.id =id;
         this.title =title;
         this.text =body;
     }
 }
 function myData(){
     fetch('https://jsonplaceholder.typicode.com/posts')
     .then(res => res.json())
     .then(data =>{
      const newPost =  data.map(item=> new Post(item.id,item.title,item.body))
      return newPost;
     })
 }
 myData().then(dataRequest=>{
     console.log("My Data",dataRequest);
 })
/ task 
 const persons = [
     { name: 'gio', age: 21 },
     { name: 'zura', age: 27 },
     { name: 'nikolozi', age: 16 },
     { name: 'gega', age: 19 },
     { name: 'lizi', age: 22 }
   ];
   const adults = persons.filter(person => person.age > 18);
   console.log(adults);
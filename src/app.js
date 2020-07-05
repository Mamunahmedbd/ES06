//! ****************** Iterator Basics

let arr = [1, 2, 3];

// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i])
// }

// //* Old way to Itarator
// function itaratorCreate(collection){
//     let i = 0
//     return{
//         next(){
//             return{
//                 done: i >= collection.length,
//                 value: collection[i++]
//             }
//         }
//     }
// }
// const itarator = itaratorCreate(arr)

// console.log(itarator.next())
// console.log(itarator.next())
// console.log(itarator.next())
// console.log(itarator.next())
// console.log(itarator.next())

// //! *************** Iterator with Symbol

// //* ES6 Itarator
// console.log('Mamun'[Symbol.iterator])

// //* Simple way to iterator with Symbol
// let iterated = arr[Symbol.iterator]()

// console.log(iterated.next())
// console.log(iterated.next())
// console.log(iterated.next())
// console.log(iterated.next())
// console.log(iterated.next())
// console.log(iterated.next())

// let str = 'Mamun'
// let iteratorText = str[Symbol.iterator]()

// console.log(iteratorText.next())
// console.log(iteratorText.next())
// console.log(iteratorText.next())
// console.log(iteratorText.next())
// console.log(iteratorText.next())
// console.log(iteratorText.next())
// console.log(iteratorText.next())

//! ************ For of loop

// for(let v of arr){
//     console.log(v)
// }
// for(let v of 'Mamun'){
//     console.log(v)
// }

//! **************** Generators

// let obje = {
//     start: 1,
//     end: 3,
//     [Symbol.iterator]: function* (){
//         let currentValue = this.start
//         while(currentValue <= this.end){
//             yield currentValue++
//         }
//     }
// }
// let iterated = obje[Symbol.iterator]()

// console.log(iterated.next())
// console.log(iterated.next())
// console.log(iterated.next())
// console.log(iterated.next())
// console.log(iterated.next())
// console.log(iterated.next())

// function* iterator(){
//     yield 1
//     yield 2
//     yield 3
// }
// const simIt = iterator()
// console.log(simIt.next())
// console.log(simIt.next())
// console.log(simIt.next())
// console.log(simIt.next())

// //* Simple way to Generator function engine
// function* generate(collection) {
//   for (let i = 0; i < collection.length; i++) {
//     yield collection[i];
//   }
// }
// let gene = generate(arr);
// console.log(gene.next());
// console.log(gene.next());
// console.log(gene.next());
// console.log(gene.next());


// //! **************** SET

// //* Set is never doublicate
// let set = new Set([1, 2, 3])
// // let set = new Set()
// set.add(4)
// set.add(5)
// set.add(5)

// // console.log(set)
// // console.log(set.size)

// // set.clear()
// set.delete(4)
// console.log(set.has(4))
// console.log(set)

// //* output iterator 
// console.log(set.keys())
// console.log(set.values())

// //* return iterator 
// let keyIterator = set.keys()
// console.log(keyIterator.next())
// console.log(keyIterator.next())
// console.log(keyIterator.next())
// console.log(keyIterator.next())
// console.log(keyIterator.next())

// //* How to check Iterator 

// function isIterator(obj){
//   return typeof obj[Symbol.iterator] === 'function'
// }
// console.log(isIterator(set))

// //* use for of looop with set
// // for (let v of set){
// //   console.log(v)
// // }

// console.log(set.entries())


// //! ******************* Map 
// let map = new Map([
//   ['a', 10],
//   ['b', 20],
//   ['c', 30]
// ])
// map.set('d', 40)
// map.set('d', 45)
// map.set({name: 'Mamun Ahmed'}, 50)
// map.delete('c')

// console.log(map)
// // console.log(map.get('b'))
// console.log(map.size)
// console.log(map.values())
// console.log(map.keys())
// console.log(map.entries())

// //* for loop 
// for(let [k, v] of map){
//   console.log(k, v)
// }

// //* forEach looop 
// map.forEach((v, k) => {
//   console.log(v,k)
// });



// let a = {a: 10}, b = {b: 20}

// let weakSets = new Set([a, b])
// a = null
// console.log(weakSets)
// let setToArr = [...weakSets]
// console.log(setToArr)


// //! **************** WeakSet
// // weakset can change value 
// //! **************** WeakMap

// let weakMap = new WeakMap([[a, 10], [b, 20]])
// a = null
// //* weakmap can detele value 
// console.log(weakMap)


//! ******************** Class 

//* simple class
//  class rectangle{
//    constructor(width, height){
//      this.width = width
//      this.height = height
//    }

//   //  use babel properties plugin 
//   //  name = 'Mamun Ahmed' 
//    draw(){
//      console.log('Its a Class base rectangle')
//    }
//  }
// const rect = new rectangle(222, 3434)
// console.log(rect)


//! ****************** Class Propeties 
// class StaticM {
//   constructor(name, email){
//     this.name = name
//     this.email = email
//   }
//   print(){
//     console.log(this.name, this.email)
//   }
//   test(){
//     //* Class function this always Reference undefined 
//     //* Transform strict mode plugin babel
//     console.log(this)
//   }
//   //* create Static method
//   static create(str){
//     let person = JSON.parse(str)
//     return new StaticM(person.name, person.email)
//   }
// }

// let testing = new StaticM()
// let itTest = testing.test
// itTest()

// let json = '{"name": "Mamun Ahmed", "email": "mamunahmed@gmail.com"}'

// let p1 = StaticM.create(json)
// console.log(p1)
// p1.print()
// console.log(p1 instanceof StaticM)


// function Shape(){
//   this.draw = function(){
//     //* Consta function this always Reference window object 
//     console.log(this)
//   }
// }

//! this reference window object 

// let consta = new Shape()
// let drawe = consta.draw
// drawe()

//! ******************* Private Data with Symbol

// const _radius = Symbol()
// const _name = Symbol()
// const _draw = Symbol()

// class Circle {
//   constructor (radius, name){
//     this[_radius] = radius
//     this[_name] = name
//   }
//   // draw(){
//   //   console.log(_radius, _name)
//   //   console.log(Object.getOwnPropertyNames(_radius))
//   // }
//   [_draw](){
//     console.log('Drawing....!')
//   }
// }

// let out = new Circle(22, 'Mamun Ahmed')
// // out.draw()

// // //* out.draw()  for access 
// console.log(Object.getOwnPropertyNames(out))
// console.log(Object.getOwnPropertySymbols(out))
// let key = Object.getOwnPropertySymbols(out)[1]
// console.log(out[key])


// ! *************** Private Properties with WeakMap


// const _radius = new  WeakMap()
// const _name = new WeakMap()
// const _resize = new WeakMap()

// class Circle {
//   constructor (radius, name){
//     this.size = 100
//     _radius.set(this, radius)
//     _name.set(this, name)
//     _resize.set(this, () => {
//       console.log(this.size)
//     })
//   }
//   draw(){
//     //console.log('Drawing....!')
//     console.log(_radius.get(this), _name.get(this))
//     _resize.get(this)()
//   }
// }

// let out = new Circle(23, 'Mamun Ahmed')
// out.draw()


//! ******************  Getter Setter


// const _radius = new  WeakMap()
// const _name = new WeakMap()
// const _resize = new WeakMap()

// class Circle {
//   constructor (radius, name){
//     this.size = 100
//     _radius.set(this, radius)
//     _name.set(this, name)
//     _resize.set(this, () => {
//       console.log(this.size)
//     })
//   }

//   //* its use to get 
//   get name(){
//     return _name.get(this)
//   }
//   //* It's use to SET 
//   set name(v){
//     _name.set(this, v)
//   }


//   // draw(){
//   //   //console.log('Drawing....!')
//   //   console.log(_radius.get(this), _name.get(this))
//   //   _resize.get(this)()
//   // }
// }

// let out = new Circle(23, 'Mamun Ahmed')
// // out.draw()
// //* its get result 
// console.log(out.name)
// //* its set result 
// out.name = 1000
// console.log(out.name)


//! ************* Inderitance 

// class Shape{
//   constructor(color){
//     this.color = color
//   }
//   draw(){
//     console.log('drawing....')
//   }
// }
// // let change = new Shape('GREEN')
// // console.log(change)
// class Reatangle extends Shape{
//   constructor(colors, height, width){
//     super(colors)
//     this.height = height 
//     this.width = width
//   }
//   calculate(){
//     return this.width, this.height
//   }
// }
// let r = new Reatangle('RED', 22, 33)
// console.log(r.calculate())
// // r.draw()
// console.log(r)


//! ********************* Method Overriding


// class Shape{
//   constructor(color){
//     this.color = color
//   }
//   draw(){
//     console.log('drawing....')
//   }
// }
// // let change = new Shape('GREEN')
// // console.log(change)
// class Reatangle extends Shape{
//   constructor(colors, height, width){
//     super(colors)
//     this.height = height 
//     this.width = width
//   }
//   draw(){
//     console.log('Drawing a Reatangle')
//   }
//   calculate(){
//     return this.width, this.height
//   }
// }
// let r = new Rectangle('RED', 22, 33)
// r.draw()
// console.log(r)


//! *************** Modules Import  

// * above all function cloned 
import Rectangle from './Reactangle'
let r = new Rectangle('RED', 22, 33)
r.draw()
console.log(r)

// * all func import system
// import * as func from './func.js'
// console.log(func.add(33, 33))
// console.log(func.multi(33, 33))

// *  Indivisual func call system 
import {add, multi} from './func'
console.log(add(33, 43))
console.log(multi(33, 43))
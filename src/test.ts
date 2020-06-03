//  1、类型注解
// let title: string;
// title = "hello";
// console.log(title);

// let title2 = 'hello';  // 类型推论

// // 数组类型
// let arr: string[];
// arr = ['',];

// // 任意
// let foo: any;
// foo = 1;
// foo = '1'

// let arrFoo: any[];
// arrFoo = ['1',1];

// console.log(title);
// console.log(title2);
// console.log(foo);
// console.log(arr);
// console.log(arrFoo);

// // 函数类型
// // 参数指定必传参
// // 可选参数 ?
// function greetgin(person: string, age?:number, sex:number=1): string {
//   return person
// }
// const abc:string =  greetgin('tom')

// // void 类型
// function warnUser(): void {}

interface Person {
  firstName: string;
  lastName: string
}

function greetgin2(person: Person) {
  return "hello "  + person.firstName + " " + person.lastName
}

const usr = {firstName: 'A', lastName: "b"}
console.log(greetgin2(usr))
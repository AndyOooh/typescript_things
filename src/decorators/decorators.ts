// // function toUpperCase(target: Object, str: string, descriptor: TypedPropertyDescriptor<any>) {
// //   /* store original before modification */
// //   const originalMethod = descriptor.value;

// //   /* modify the originla */
// //   descriptor.value = function (...args: any[]) {
// //     args[0] = args[0].toUpperCase();
// //     /* Apply changes */
// //     originalMethod.apply(this, args);
// //   };
// // }

// function reverse(target: Object, str: string, descriptor: TypedPropertyDescriptor<any>) {
//   /* store original before modification */
//   const originalMethod = descriptor.value;

//   /* modify the originla */
//   descriptor.value = function (...args: any[]) {
//     const [str] = args;
//     const stringArray = str.reverse();
//     /* Apply changes */
//     originalMethod.apply(this, [stringArray]);
//   };
// }

// function split(target: Object, str: string, descriptor: TypedPropertyDescriptor<any>) {
//   /* store original before modification */
//   const originalMethod = descriptor.value;

//   /* modify the originla */
//   descriptor.value = function (...args: any[]) {
//     const [str] = args;
//     const stringArray = str.split('');
//     /* Apply changes */
//     originalMethod.apply(this, [stringArray]);
//   };
// }

// function join(target: Object, str: string, descriptor: TypedPropertyDescriptor<any>) {
//   /* store original before modification */
//   const originalMethod = descriptor.value;

//   /* modify the originla */
//   descriptor.value = function (...args: any[]) {
//     const [arr] = args;
//     const stringArray = arr.join('');
//     /* Apply changes */
//     originalMethod.apply(this, [stringArray]);
//   };
// }

// class StringManager {
//   //   @toUpperCase
//   @split
//   @reverse
//   @join
//   printString(str: string) {
//     console.log('printString called', str);
//   }
// }

// const stringManager = new StringManager();
// stringManager.printString('hello');

// const string1 = 'Hellooo';
// console.log('string1: ', string1.split('').reverse().join(''));

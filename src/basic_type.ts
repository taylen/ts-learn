function greeter(person: string) {
    return "Hello, " + person;
}
let user = "Jane User";
// let user = [0, 1, 2];
document.body.innerHTML = greeter(user);

// 类型声明 - 布尔值
let isDone: boolean = true;

// 类型声明 - 数字
let num: number = 123;

// 类型声明 - 字符串
let str: string = '123';

// 类型声明 - 数组 - 基础类型+[]
let arr1: number[] = [1, 2];
arr1.push(1)

// 类型声明 - 数组 - 数组泛型
let arr2: Array<number> = [];
arr2.push(1);

// 类型声明 - 数组 - 元组 tuple
let arr3: [string, number];
arr3.push(1); // tsc 加上 --strictNullChecks 时会报错
arr3.push('2'); // tsc 加上 --strictNullChecks 时会报错
arr3 = ['2', 1];

// 类型声明 - 任意类型 - any
let t: any = 1;
t = "abc";

// 类型声明 - 没有类型 - void，只有 Null/Undefined
// 某种程度上来说，void类型像是与any类型相反，它表示没有任何类型。 当一个函数没有返回值时，你通常会见到其返回值类型是 void：
function warnUser(): void {
    console.log("This is my warning message");
}
// 声明一个void类型的变量没有什么大用，因为你只能为它赋予undefined和null：
let noType: void;
noType = null; // tsc 加上 --strictNullChecks 时会报错
noType = undefined; // tsc 加上 --strictNullChecks 时会报错
// noType = 1; // Error

// 类型声明 - 特殊类型 - null/undefined
// 默认情况下null和undefined是所有类型的子类型。 就是说你可以把 null和undefined赋值给number类型的变量。
/**
然而，当你指定了--strictNullChecks标记，null和undefined只能赋值给void和它们各自。 这能避免 很多常见的问题。 也许在某处你想传入一个 string或null或undefined，你可以使用联合类型string | null | undefined。 再次说明，稍后我们会介绍联合类型。
注意：我们鼓励尽可能地使用--strictNullChecks，但在本手册里我们假设这个标记是关闭的。
 */
let n: null = null;
n = undefined; // tsc 加上 --strictNullChecks 时会报错

// 通过类型断言这种方式可以告诉编译器，“相信我，我知道自己在干什么”。 类型断言好比其它语言里的类型转换，但是不进行特殊的数据检查和解构。 它没有运行时的影响，只是在编译阶段起作用。 TypeScript会假设你，程序员，已经进行了必须的检查。

// 类型断言有两种形式。 其一是“尖括号”语法：
let s1: any = 'this is a string';
let s1Len: number = (<string>s1).length;

// 另一个为 as 语法
let someValue: any = "this is a string";
let strLength: number = (someValue as string).length;


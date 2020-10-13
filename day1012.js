//定义对象
let person = new Object();
person.name = 'xiaoming';
person.age = 49;
console.log(person.name)

//对象自变量
let person1 = {};
person1.name = 'xiaoming';
person1.age = 49;


let person2 = {
    name : 'xiaoming',
    age: 49
    // getuername: function()
}
console.log(person2.age)
console.log(typeof person2)//查看类型 object



//定义数组
const oArray = new Array(); //1.

const oArray1 = [];                         //创建【】为数组字面量 为{}对象字面量 //2.
console.log(typeof oArray)  //object

console.log(typeof oArray1)//object

//数组初始化
const heroes = [];
heroes[0] = '蝙蝠侠';
heroes[1] = '神奇女侠';
heroes[2] = '闪电侠';
heroes[5] = '绿灯侠';

console.log(heroes);
//数组字面量
const avebgers = ['美国队长','钢铁侠','雷神','绿巨人']
console.log(avebgers);
delete avebgers[2];
console.log(avebgers);
console.log(avebgers.length)
avebgers.length = 2;
console.log(avebgers);


let person2 = {
    name : 'xiaoming',
    age: 49
    // getuername: function()
}
const a =[0,null,'sdasdasd',person2,undefined];
console.log(a);


//结构语法
const  Array = [1,2,3];
let a = Array1[0];
let a = Array2[1];
let a = Array3[2];

const [a,b,c] = [1,2,3];
console.log(a);
console.log('a=${a}, b=${b}, c=${c}');

//数组元素 pop  push shift unshift
const avebgers = ['美国队长','钢铁侠','雷神','绿巨人']
avebgers.pop(); //弹出最后一个 [ '美国队长', '钢铁侠', '雷神' ]
console.log(avebgers);
avebgers.push('神奇博士');//添加一个元素 [ '美国队长', '钢铁侠', '雷神', '神奇博士' ]
console.log(avebgers);
avebgers.shift();//删除数组第一个元素 [ '钢铁侠', '雷神', '神奇博士' ]
console.log(avebgers);
avebgers.unshift('蜘蛛侠');//添加在数组第一个元素 [ '蜘蛛侠', '钢铁侠', '雷神', '神奇博士' ]
console.log(avebgers);

const avebgers = ['美国队长','钢铁侠','雷神','绿巨人']
console.log(avebgers.shift()); //第一个删除元素的返回值

//数组合并
const avebgers = ['美国队长','钢铁侠','雷神','绿巨人']
const avebgers = ['蝙蝠侠','神奇女侠','闪电侠','绿灯侠']

const Array = avebgers.concat(heroes) //合并的值 给于新的变量 Array
console.log(avebgers);
console.log(Array);

//方法二
const avebgers = ['美国队长','钢铁侠','雷神','绿巨人']
const heroes = ['蝙蝠侠','神奇女侠','闪电侠','绿灯侠']
const oArray = [...avebgers,...heroes]
console.log(avebgers)
console.log(oArray)

//数组的属性与方法 slice splice
const avebgers = ['美国队长','钢铁侠','雷神','绿巨人']
const a = avebgers.slice(2,4); //从中切去一部分组成新的数组
console.log(a);
console.log(avebgers) //原来数组没有变

const avebgers = ['美国队长','钢铁侠','雷神','绿巨人']
const b = avebgers.splice(2,2,'xiaoming');
console.log(b); //返回切的值
console.log(avebgers) //原来数组变l [ '美国队长', '钢铁侠', 'xiaoming' ]

const avebgers = ['美国队长','钢铁侠','雷神','绿巨人']
const b = avebgers.splice(2,2,'xiaoming',2,3.88,null);//切的过程中添加多中元素
console.log(b); //返回切的值
console.log(avebgers)


const d = ['a','b','c','h']
const e = d.reverse(); //从大到小 改变的值永久改变 不是原来数组
console.log(e,d)



const d = ['1','2','10','5']
const e = d.sort(); //从小到大 改变的值永久改变 不是原来数组
console.log(e,d)

const avebgers = ['美国队长','钢铁侠','雷神','绿巨人']
const a = avebgers.indexOf('美国队长'); //查看美国队长的位置 indexof
console.log(a);


//多维数组
const ma = [[1,2],[3,4]];
console.log(ma[0,0]);//第一个数列
console.log(ma[0][0]);//第一个数组第一行第一个


//set
const list = new Set();
list.add(1);
list.add(2).add(3).add(4).add(5); //连式集合 意味着他的返回值就是创建这个对象的本身 list是返回值
list.add(5) //set 重复值自动忽略，不会报错
console.log(list);

//数组去重
const a = [1,2,12,1,2,3,4,5]
const b = new Set(a);
console.log(b);
const c = [...b];
console.log(c);

const c = new Set('Hello');
console.log(c)

const a = [1,1,2,2,1,5,9,8,66]
const b = new Set(a); //利用set重复自动忽略，来去重
console.log(b)

const list4 = new Set().add('the').add('quick').add('brown').add('bear');
console.log(list4.size);
list4.size = 6;
console.log(list4);

const list4 = new Set().add('the').add('quick').add('brown').add('bear');
const oArray = [...list4];
console.log(oArray);




//WeskSet 与 Set
let array1 = [1,2,3]
let array2 = [4,5,6]
const week = new Set().add(array1).add(array2);
console.log(week);
array1 = null;
array2 = null;
const array3 = [...weak][0];
const array4 = [...weak][1];
console.log(array3);
console.log(array4);

let array1 = [1,2,3]
let array2 = [4,5,6]
const week = new WeakSet().add(array1).add(array2);
console.log(week);
array1 = null;
array2 = null;
const array1=[...week][0];
const array2=[...week][0];
console.log(array1);
console.log(array2);

//map
const roman = new Map();
roman.set(1,'1');
roman.set(2,'2').set(3,'3').set(4,'4').set(5,'5');
console.log(roman);
console.log(roman.size);
console.log(roman.get(3));
console.log(roman.has(5));

const roman = new Map();
roman.set(2,'2').set(3,'3').set(4,'4').set(5,'5');
const oArray1 = [...roman];//变成数组
const oArray2 = Array.from(roman);
console.log(oArray1);
console.log(oArray2);


//review 复习

/*

数据类型：
    基础类型：string Number Boolean Symbor underfined null
    引用类型：Object/Function

2种：
let oStudent = new Object（）；

对象变量
let oStudent ={
    name : ’xiaoming’
    age： 49；
}
oStudent.name


Array
   new Array()
   []
   


set
    let oSet = new Set（）；
    oSet .add(1).add(2)
    let oSet = new Set([1,2,3]);
*/
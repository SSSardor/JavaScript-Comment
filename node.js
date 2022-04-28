var name = 'sardor';
var surname = 'samijonov';
surname = 'Samijonov';
console.log(name);
console.log(surname);
var max = Number.MAX_SAFE_INTEGER;
console.log(max);
var num = 111;

//----------------2 chi dars js-------------------
console.log(parseInt(num, 2));
var num1 = 11.88;
var num2 = 12.55;
var num3 = -121;
console.log(parseInt(num));
console.log(parseFloat(num1));
console.log(Math.pow(2, 2)); // daraja
console.log(Math.round(num2)); // yaxlitlash
console.log(Math.ceil(num1)); // uzidan katta butun songa utkazadi 3.1 ni ceil qise   4 boladi
console.log(Math.floor(num2)); // faqat butun qismini oberadi
console.log(Math.abs(num3)); // modul
var num4 = Math.max(45, 45, 75, 96, 12); // maximum qiymatini chiqazberadi min bolsa minimumini ciqazberadi
console.log(num4);
var max = 20;
var min = 5;
var num = Math.random() * (max - min); // ixtiyoriy sonni topib beradi
console.log(Math.floor(num) + min);

//                                    -------------------3chi dars js --------------------

console.log(3 % 2); // qoldiq oberadi

console.log(2 ** 2); // daraja
var num5 = 3;
console.log(num5++); //  num=num+1  bunda 1 taga ortiradi -- bolsa 1 taga ayrib boradi
console.log(num5);
console.log(1n == 1); // true ciqdi cunki == bu faqat valuelarini solishtiradi
var num6 = 0;
var num7 = 2;
console.log(!!(num6 && num7)); // bundagi !! amali uzgaruvcimizi boolean turiga utkazadi.    and
console.log(!!(num6 || num7)); // or
console.log(!num6); // ! masmi degni

//   String

var num8 = 12;
var str = `""${num8}''`; //stringlar ichida boshqa variablellarni ishlata olamz
var str1 = "'sardor' "; //    '\'sardor\' '  string tipini ichida qushtirnoqli 'Sardor'cciqarish
console.log(str1);
console.log(String(num8)); // String tipiga utkazib beradi
console.log(num8.toString()); // String tipiga utkazib beradi bunda undefined bilan null qiymatlarni stringga ugirmaydi
var num9 = 'string';
console.log(num9.length); // nechta harf borligini aniqlab baeradi
console.log(num9.charAt(3)); // shu metod orqali nechanchi raqamdagi harfni ciqarib beradi
console.log(num9[3]); // shu metod orqali nechanchi raqamdagi harfni ciqarib beradi
var num10 = 'a';
var num11 = 'b';
console.log(num10 < num11); //  string turdagilarni ham compare qilish mumkin necanci raqamda turishiga qarab solishtira
console.log(num10.localeCompare(num11)); // num10 ni num11 ga solishrtiradi num10 katta bolsa -1 kichik bolsa 1 teng bolsa 0 chiqaradi.
console.log(num9.substring(0, 3)); // from to 0 dan 3 gacha(0,3] ciqarib beradi bunda ikkala(0,3] ham boshidan sanab kesad
console.log(num9.substr(2, 5)); // 2 dan boshlab 5 ta harfni kesib ciqardi
console.log(num9.slice(2, -1)); //substring bilan bir xil faqat negativ qiymatlarni ham oladi sozni oxiridan sananb keladi
var num12 = '2/25/2022';
console.log(num12.split('/')); //splitni massiv hosil qilishda ishlalatamiz uzgaruvchimizni nima bilan ajratishimizni ichiga yozse bold
console.log(num12.split('/').join('/')); // slashlarni olib tashlab(split) hamma raqamni yopishtirib yozib beradi(join)
console.log(num9.toUpperCase()); //barcha harflarni katta harf qiberadi
console.log(num9.toLowerCase()); // barcha harflar kichkina qiladi
var num13 = boja;
console.log(num13.indexOf('j')); // 2ni ciqaradi j ni necanci indexda turganinin ifodallaydi
console.log(num13.lastIndexOf(j)); // oxirgi j ni necanci indexda ekanligini ciqaraddi ciqaradi
console.log(num13.includes('j')); // num13 ni ichida j  bor bolsa true yuq bolsa false
console.log(num13.match(/j/gi)); // malumotlarni ciqarib beradi necta j bolsa massiv  korinishda regular expression(/ orasida
//yozildagin qqiymatlar) va gi(global ignore) global barja j lar ciqaradi, ignore esa kattami kichikmi ikkalsini ciqaradi
console.log(num13.startWith('b')); // num13 b bilan boshlasa true boshamasa flase
console.log(num13.endsWith('a')); // num13 a bilan tugasa true bomasa false
console.log(num13.padStart(8, 'a')); // sozimiz 6 ta harf bolsa boshiga 2 ta bosh joyga a harfidan quyib tashedi
console.log(num13.padEnd(8, '.')); // sozimiz 6 ta harf bolsa oxirigga 2 ta nuqta quyadi
var warn = '                    dark   web         ';
var input = 'google';
console.log(input.includes(warn) ? 'waarning' : input); // input  warnni uzini ichiga olgan bolsa waarning ciqar aks hollda
//inputnui uziniciqar
console.log(input.replace('google', 'chrome')); // what to what googleni urniga chromega uzgartiradi asl inputimizni consolega
//bersak qiymat uzgarmayddi
console.log(warn.trim()); // white spacelarini olib tashlaydi
console.log(warn.trimStart()); //boshidan joy tashalgan joyni  olib tashaydi
consoile.log(warn.trimEnd()); //oxiridan tashalgan joyni olib tashlaydi
console.log(input.repeat(2)); // inputimizdegi valuemizni 2 martta qaytarib yozib beradi
console.log(`${Number(true)}${Number(false)}${Number(false)}`); // 100

//---------------------------------------  4 chi ddddddaaarrrrrssssssssssssssssss  ------------------------------------------------

//                                     function
//1 turi
function GetCofee() {
  console.log('Boil the water');
}
GetCofee();
//------------
function GetCofee(milk, sugar) {
  console.log(`Cofe order for ${milk} milk and ${sugar}  peace of sugar`);
}
GetCofee('30ml', 10);
// 2 chi turiii
(function () {
  // self inwoken deyiladi
  console.log('sardor');
});
// 3 chi turi
const getName = function () {
  // return dan keyin hech nima ishlamaydi
  var res = 'sardor';
  return res;
};
//4 chi tur(arrow function)   sintaksisi====     const arrowname=(parm)=>{ return value }
//
const something = () => {
  // kodimiz 1 qatorli bolsa return shartamas arrow functionda
};

const something1 = () => {
  return 'sardor';
  console.log(); // ishlamaydi
};
console.log(something1);

//----------------------------------------   5 chi darsssssssssssssssssssss   ------------------------------------------------------

//                                              if,else
var age = 14;
if (age >= 18) {
  console.log('kirishg mumkin');
} else if (age > 0 && age < 18) {
  console.log('kirish mumkin emas');
} else if (!isNaN(age)) {
  console.log('manfiy qiymat');
}
if (isNaN(age)) {
  console.log('enter vaslid input');
}

//                               ternarly usulida shart kiritish(   condition ? {true}: {false}  )

var num = 12;
num == 12 ? (num = 'true') : (num = 'false');
console.log(num);

//                               switch (case yani holatlarni larni yekshirish uchun ishlatamiz)

var num = true;

switch (num) {
  case true: {
    console.log('true');
  }
  case false:
    {
      console.log('false');
    }
    break; // tohtatish
  default: {
    //default yuqoridagi num degi malumotlarimiz hec biriga tori kelmasa( if dagi  else kabi)
    console.log('neither');
  }
}

//                             for takrorlash operatori(funksiya ichida  commentga olingan joyda ishlatilgan)
function loop(params) {
  var res = 0;
  // for (i = 0; i < params.length; i++){
  //     console.log(params[i]);

  // }
  return res;
}
loop('123465678');

//------------------------------- 6 chi darssssssssssss   ----------------------------------------------------------------------
var d = new Date();
console.log(d.getDate());
console.log(d.getHours());
console.log(d.getMinutes());
console.log(d.getDay());
console.log(`Hours:${d.getHours()} : ${d.getMinutes} : ${d.getSeconds}`); // 10:07:55

// while and Do while  (loop)

//while loop
var i = 0;
while (i < 5) {
  console.log(i);
  i++;
}

// do while loop
do {
  console.log(i);
  i++;
} while (i < 5);

//for(initilaize;compare;increament){statement}

//------------------------------7 chi Objectlar------------------------------------------------------------------------
// Object- Bir turdagi malumotlarin bir joyda saqplash uchun

  var obj={
    key: value
  }
 // key malumotlarimizni update delete qilishimizda kerak boladisa
new Object(), // objectlarni 3 xil usulda yashash mumkin ekan
  Object.create();
// Objectlardan bir xil turdagi malumotlarimizni e'lon qilishdda foydallanamiz
var mycar = {
  wheel: '90dum',
  window: { nested: 'nest' },
  microphone: false,
  color: 'red',
};
console.log(myCar.wimdow);
console.log(myCar.window.nested); // ichma ichga kirish orqali
console.log(mayCar['color']); // red chiqadi
var color = 'wheel';
console.log(myCar['color']); //90 dum  chiqadi
myCar.asdg = 'add'; // ichidagi yuq narsaga teng qilishimiz yangi qushadi
myCar.color = 'blue'; //ichidagi bor naraga yangi qiymat berishimiz update qilarkan
var car = {
  wheel: '90dum',
  window: { nested: 'nest' },
  microphone: false,
  color: 'red',
  mathod: () => {
    console.log('asd');
  },
};
myCar.mathod();
console.log('color' in myCar); // myCarni ichida color bormi yuqmi bor bolsa true yuq bolsa false

var ob1 = { age: 13, name: 'sardor' };
Object.freeze(ob1); //muzlagan ya'ni ichidagi malumotlarni uzgartiribam yangi kiritibam bolmaydi ucirib ham
Object.seal(ob1); //ichidagi bor narsani update qilib berolidi lekin yengi narsa qushomaydi

// -------------------------8 chi dars  Arraylar  -------------------------------------------------------------------------

//Array-ichida har qanday data turini saqlovchi metod
var arr = new Array(12, 321, 'sardor', true);
var arr = new Array(1); // nechta item bolishini aytishimiz mumkin.(length)ikkinci sonni kiritishimiz bilan arrayga aylanib ketadi
var arr3 = [132, 'sardor'];
console.log(arr3[0]); // 132
var arr = [['sardor', 45], 'asd'];
console.log(arr[0][0]); // ichma ich kirib keturadi
console.log(arr[0], arr[1]); //bitta arraydagi malumotlarni ciqarishda
arr.push('pushed'); // arrayni oxirida item qushadi
arr.pop(); // arrayni oxiridan olib tashaydi bitta
arr.unshift('unshift'); // array boshiga item qushadi
arr.shift(); // array arrayni boshidan item olib tashlaydi bitta
console.log(Array.isArray(arr)); // array bolsa true bomasa false
console.log(Array.from('Sardor')); // split bilan bir xil
console.log(Array.of(12)); // bitta item bolsa ham arrayni ichiga solib beradi(kop bolsa ham)
var arr = [1, 45, 68, 75, 39, 84];
console.log(arr.sort()); //faqat birinci songa qaraab tartiblaydi
var sorted = arr.sort((a, b) => a - b); // sonlarni usish tartibida qiymatiga qarab tartiblaydi
var sorte = arr.sort(function (a, b) {
  return a - b;
}); // bu ham yuqoridagi kabi faqat regular function orqalisi
console.log(sorted);
console.log(arr.some((i) => i > 50)); //function orqali shart kirita olamiz some orqali
var arr = [44, 25, 36, 48, 86, 'xasanboy'];
console.log(arr.some((i) => i === 'xasanboy')); //arr da xasanboy bor yuqligini tekshiradi bolsa true bomasa false
var filtered = arr.filter((item) => console.log(item)); //ichidagi malumotlarni boricha aylantirib beradi har birini
var filtetred = arr.filter((item) => item > 50); // bunda 50 dan yuqori bolganlarini filterlab ciqarib bervotii(har qanday shart kiritishimiz mumkin)
console.log(filtered);
var arr4 = [8, 85, 9, [25812], 12, 35, 45, 87, 656];
console.log(arr4.flat()); //arrayni ichidagi arrayni(yani childini)parentga ciqarib beradi.flat(infinity) desak ichida nechta child bolsa ham chiqarib beradi
//
var arr = [12, 25, 36];
arr.map((value) => console.log(value)); //map bizdagi malumotlarni saqlaydi
//
var maped = arr.map((value) => {
  return value + value;
});
console.log(maped); //[24,50,72]
//
var maped = arr.map((index, value, arr) => {
  console.log(`key:${index}=> value:${value}`); //0=>24,1=>50,2=>72
});

var arr = [1, 5, [45, 65], 48, 36];
var res = arr.flatMap((a) => a);
console.log(res); //[1,5,45,65,48,36]

//reduce((prev,cu)r=>statement,initial);
var res = arr.reduce((prev, init) => prev + init, 5); //har birini qushib beradi.5-boshlangich qushiluvchi qiymat
console.log(res);
var res = arr.reverse();
console.log(arr.splice(2, 5)); //2 dan boshlab 5 gta sanab 5chini omaydi 0 dan boshlanadi sanash
arr.splice(0, 3, [0, 2, 3, 4]);
console.log(arr);

//--------------------------Classlar-------------------------------------------------------------------------------------------------
//Classlar--Objectlarni yaratuvchi metod hisoblanadi
///Classs
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  Sayhello() {
    return this.name + 'hello';
  }
}

var Sardor = new Person('Sardor');
console.log(Sardor.Sayhello());

class Car {
  constructor(name) {
    //clasga parametr berish uchun constructordan foydalanamiz
    this.name = name; //global qibketvomiz
  }
  getCarName() {
    return 'I have a ' + this.name;
  }
}
class Model extends Car {
  //extends-Meros olish yani Modelga Cardegi hamma ma'lumotlar utadi
  constructor(name, model) {
    super(name); //uzidan tepadegi classga(Car) yunaltiradi
    this.model = model;
  }
  GetCarModel() {
    return this.getCarName() + ' Model is ' + this.model;
  }
}
var moshina = new Model('cobalt', 'chevrolet');
console.log(moshina.GetCarModel());

class St {
  constructor() {
    (this.name = 'Sardor'), (this.surname = 'Samijonov');
  }
}
var newSt = new St();
console.log(newSt); // bunda {name:"Sardor",Surnmame:"Samijonov"}
//
//
class St {
  constructor() {
    (this.name = name), (this.surname = Surname);
  }
  Getfullname() {
    return `${this.name} ${this.surname}`;
  }
}
var newSt = new St('Sardor', 'Samijonov');
console.log(newSt); //Bunda esa {name:'Sardor',Surnmae:'Samijonov'}
//
//
class St {
  constructor() {
    (this.name = name), (this.surnmae = Surname);
  }
  Getfullname() {
    return `${this.name} ${this.surname}`;
  }
}
var newSt = new St('Sardor', 'Samijonov');
console.log(newSt.Getfullname()); //Bunda esa {name:'Sardor',Surnmae:'Samijonov'}
//
//
class Rectangle {
  constructor(width, height) {
    (this.width = width), (this.height = height);
  }
  getFace(type) {
    if (type === 'square') {
      return this.width * this.height;
    } else if (type === 'p') {
      return (this.width + this.height) * 2;
    } else {
      this.width * this.height;
    }
  }
}
var Rectangle = new Rectangle(4, 5);
console.log(Rectangle.getFace('p')); // typeimizga qarab ishlaydi yuza perimeter square uchun alohida
//return this funksiyani ichidagi qiymatlarini tashqariga chiqarib quyadi

// -----------------   Currying , Callback , Recursive  functionlar ------------------------------------------------------------
//Currying function
const addCurry = (a) => {
  return (b) => {
    return (c) => {
      return a + b + c;
    };
  };
};

console.log(addCurry(2)(3)(5)); //10

//Callback-Bir ish tugallanganda boshqa ishla boshlanishi.backendddan API aga surov junatib javobini olishlada ishlatamiz
//bitta funksiyaga uning parametri orqali boshqa funksiyani berib yuboriladi va shu 1 funksiya ichida nargi funksiyani chaqirishiga callback deyiladi
function add(a, b, callback) {
  console.log(`${a} va ${b} larning yigindisi ${a + b}`);
  callback();
}
function display() {
  console.log(`bu qator qushuvdan keyin chiqadi`);
}
add(3, 4, display);

//anonim function
function add(a, b, callback) {
  console.log(`${a} va ${b} larning yigindisi ${a + b}`);
  callback();
}
add(3, 4, function display() {
  //shu joyi anonim function nomsiz funksiya anonim function deyiladi
  console.log(`bu qator qoshuvdan keyin chiqadi`);
});
//----------------------------------------- Recursive  functionlar  -----------------------------------------------------------

//regularly function orqali faktorial topish
function factorial(n) {
  if (n == 0 || n == 1) {
    return 1;
  }
  var result = n;
  while (n > 1) {
    result = result * (n - 1);
    n = n - 1;
  }
  return result;
}
document.write(factorial(5));

// Recursion function orqali faktorial topish

function factorial(n) {
  if (n == 0 || n == 1) {
    return 1;
  }
  return n * factorial(n - 1);
}
console.log(factorial(5));

//---------------------------------- setTimeout , callback , Promise    -----------------------------------
// setTimeout
setTimeout(() => {
  console.log('Sardor');
}, 2000); //2 sekund keyin chiqadi Sardor

const time = () => {
  setTimeout(() => {
    console.log('Sardor');
  }, 2000);
};
clearTimeout(time); // vaqt tugamasidan tohtatadi undefined chiqadi

// callback
//callback hell =====   parametrida callbacklarni kopayib ketish
const asd = (callback) => {
  var str = 'asd';
  callback(str);
};

asd((name) => {
  console.log(name);
});

////
var pass = '123';
const signIn = (signed, rejected) => {
  if (pass == '123') {
    signed(`You are signed width ${pass} code`);
  } else {
    rejected(`${pass} is invalid code`);
  }
};
signIn(
  (res) => {
    console.log(res);
  },
  (err) => {
    console.log(err);
  }
);

//Promise===resolveda boradigan qiymat thenga boradi,rejectga boradigan qiymat catchga boradi
const WidthPromise = () => {
  var user = new Promise((resolve, reject) => {
    if (pass == '123') {
      resolve(`You are signed width ${pass} code`);
    } else {
      reject(`${pass} is invalid code`);
    }
  });
  user.then((res) => {
    console.log(res); //pass 123ga teng bolsa resolve bomasa reject dagi chiqadi
  });
};
WidthPromise();

/////
const WidthPromise1 = () => {
  var user = new Promise((resolve, reject) => {
    if (pass == '123') {
      resolve(['name', 'adedaw']);
    } else {
      reject(`${pass} is invalid code`);
    }
  });
  user
    .then((res) => {
      return res.shift(); // 1chi then da boshidan olib tashadik (filter qilish joyi)
    })
    .then((res) => {
      console.log(res); // olib tashlangandan qolgan resni chiqaradi yani filter bolganini
    });
};
WidthPromise1();

///
const WidthPromise2 = () => {
  var user = new Promise((resolve, reject) => {
    if (pass == '123') {
      resolve([1, 4, 5, 7, 8, 9]);
    } else {
      reject(`${pass} is invalid code`);
    }
  });
  user
    .then((res) => {
      return res.filter((i) => i > 4); // 1chi then da boshidan olib tashadik (filter qilish joyi)
    })
    .then((res) => {
      console.log(res); // olib tashlangandan qolgan resni chiqaradi yani filter bolganini
    })
    .catch((err) => {
      console.log(res); // rejectda berilgan narsa catchda tutib olamiz
    });
};
WidthPromise2();

//-------------------------------------------------fetch-----------------------------------------------------------------------

fetch('url', options); //Backenddagi malumotlarni

//class,super,Callback,Promise,distructure,this,async await,CRUD,forEach,async awaitda catch ishlatilishi
//OOP-object orient programming(onkektga yunaltirilgan dasturlash tili)

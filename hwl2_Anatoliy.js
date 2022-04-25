// 1. Написать скриптик, который сосчитает и выведет результат от возведения 2 в степень 10,
// начиная со степени 1
const print = function (a,b){
    let result = a 
    console.log (result)
    for (let i = 0; i < b; i++ ) {
      result *= a
     console.log (result)
    }
}
print(2,10)


// 2. Написать скрипт, который выведет 5 строк в консоль таким образом, чтобы в первой строчке выводилось :)||
// во второй :):) и так далее
// Пример в консоли:
// :)
// :):)
// :):):)
// :):):):)
// :):):):):)
const smile = function (c,d){
let result = c;
console.log (result)
for (let i=1; i<d; i++){
  result+=c;
  console.log (result)
  }
}
smile(':)',5)
    
// 2*. Преобразовать 2 задачу в функцию, принимающую на вход строку,
//которая и будет выводиться в консоль (как в условии смайлик),а также количество строк для вывода 
// e.g. function printSmile(stroka, numberOfRows)
const smile1 = function (e,f){
  let result1 = e;
  console.log (result1 + 1)
  for (let i=1; i<f; i++){
    result1+=e;
    console.log (result1 + (1+i))
  }
}
smile1('Hello ' , 5)

//3**.  Написать функцию, которая принимает на вход слово. Задача функции посчитать и вывести в консоль,
//сколько в слове гласных, и сколько согласных букв.
//e.g. function getWordStructure(word)
//В консоли: 
//Слово (word) состоит из  (число) гласных и (число) согласных букв
function getWordStructure(word){
  let glasn = word.toLowerCase().match(/[aeuio]/g); //Метод match() возвращает получившиеся совпадения при сопоставлении строки с регулярным выражением.
  let soglasn = word.toLowerCase().match(/[wrtpsdfghjklzxcvbnm]/g);//Если регулярное выражение содержит флаг g, метод вернёт массив, содержащий все сопоставления.
  if (glasn == null || soglasn == null) {return 0};

  console.log('Слово ' + '"'+ (word) +'"' + ' состоит из ' + (glasn.length) + ' гласных и ' + (soglasn.length) + ' согласных букв');
}
getWordStructure('case');
getWordStructure('Case');
getWordStructure('Check-list')

// 4**. Написать функцию, которая проверяет, является ли слово палиндромом
// e.g. function isPalindrom(word)

// Проверки: 'abba', 'Abba'

function isPalindrom(str) {
  let b = str.split("").reverse().join(""); // методы по порядку: разделяет значение на массив, затем разворачивает, затем соединяет.
      if (str.toUpperCase() !=b.toUpperCase()){ // toUpperCase() возвращает значение строки, преобразованное в верхний регистр
      console.log ('Слово ' + '"' +str +'"' + ' не является палиндромом' );
  }
  else {
      console.log ('Слово ' + '"' +str +'"' + ' является палиндромом' ); 
  }
}
isPalindrom("abba")
isPalindrom("Abba")


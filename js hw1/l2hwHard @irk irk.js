// задания со звездочками //
//Преобразовать написанный код в 26-33 пунктах в функцию, принимающую на вход возраст.
//Пример: const checkAge = function(age) {
//Ваши преобразования
// }
// Вывести в консоль результат работы функции с возрастами 17, 18, 61

  
   let age_2 = 18
   let age_3 = 60

   const checkAge = function (age) {

    if (age < age_2){
    console.log (`You don’t have access cause your age is ` + age +  ` It’s less then 18`)
}
else if (age >= age_2 && age < age_3) {
    console.log ("Welcome")
}
else if (age > age_3) {
    console.log ("Keep calm and look Culture channel")
}
else console.log ("Technical work")}

checkAge (17)
checkAge (18)
checkAge (61)

//2*: Преобразовать задание 1* таким образом, чтобы первым делом в 
//функции проверялся тип данных. И если он не Number - кидалась ошибка.   

const checkAge1 = function (age1) { // переименовала константу,чтоб не путалась с 
    //константой в предыдущем задании

if (typeof age1 == "number"){
     
    if (age1 < age_2){
        console.log (`You don’t have access cause your age is ` +age1+ ` It’s less then 18`)
    } else if (age1 >= age_2 && age1 < age_3) {
        console.log ("Welcome")
    } else if(age1 > age_3) {
        console.log ("Keep calm and look Culture channel")
    } else console.log ("Technical work")} 

else console.log ("Error Age is Not a Number")
}

checkAge1 (10)
checkAge1 (22)
checkAge1 ('*gdd')

// 3**:
// Преобразовать 2* таким образом, чтобы значение '2' (строка в которой лежит ТОЛЬКО ЦИФРА) 
//пропускалось, преобразовываясь в number
    
const checkAge2 = function (age2) {  // переименовала константу,чтоб не путалась с 
    //константой в предыдущем задании
    
    // age2 = Number(age2)
    // if (!isNaN(age2)){ == тоже самое,что строка ниже.но не так громоздко
if(+age2){
    
    if (age2 < age_2){
        console.log (`You don’t have access cause your age is ` + age2 +` It’s less then 18`)
        }
        else if (age2 >= age_2 && age2 < age_3) {
        console.log ("Welcome")
        }
        else if(age2 > age_3) {
        console.log ("Keep calm and look Culture channel")
        }
        else console.log ("Technical work")}
    else {console.log ("Error Age is Not a Number")}
}
checkAge2 (10)
checkAge2 ('22')
checkAge2 ('35ff')


//4***:
//Преобразовать задание 3* таким образом, чтобы возраст вводится используя функцию prompt 
//в привязанной верстке
const checkAge3 = function (age3) {  // переименовала константу,чтоб не путалась с 
    //константой в предыдущем задании
    
    age3 = Number(age3)
   // if (!isNaN(age3)){ //== тоже самое,что строка ниже.но не так громоздко
   // if (typeof age3 != 'undefined') {
    if(+age3){
    if (age3 < age_2){
        console.log (`You don’t have access cause your age is ` + age3 +` It’s less then 18`)
        }
        else if (age3 >= age_2 && age3 < age_3) {
        console.log ("Welcome")
        }
        else if(age3 > age_3) {
        console.log ("Keep calm and look Culture channel")
        }
        else console.log ("Technical work")}
    else {console.log ("Error Age is Not a Number")}
}
checkAge3 (10)
checkAge3 (22)
checkAge3 ('35ff')

let age3Prompt = prompt("Укажите свой возраст");
checkAge3(age3Prompt)

    

    

 
  
    


        

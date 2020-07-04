// // --створити масив та вивести його в консоль:
// // - з 5 числових значень
// // - з 5 стічкових значень
// // - з 5 значень стрічкового, числового та булевого типу
// // -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

// let arr0 = [1,2,3,4,5];
// let arr1 = ["1","2","3","4","5"];
// let arr2 = ["3","4",1,2,false];
// let array = [];
// for (let i = 0; i < 3; i++) {
//     array.push(eval("arr" + i));
// }
// console.log(array);



// // - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// for (let i = 0; i < 10; i++) {
//     document.write('<div>document is not defined</div>');
// }

// // - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// for (let i = 0; i < 10; i++) {
//     document.write(`<div>document is not defined ---- ${i}</div>`);
// }

// // - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// let while1 = 0;
// while(while1 < 20) {
//     document.write(`<h1>h1 is not defined</h1>`);
//     while1++;
// }

// // - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
// let while2 = 0;
// while(while2 < 20) {
//     document.write(`<h1>h1 is not defined --- ${while2}</h1>`);
//     while2++;
// }

// // - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// let arrrNumber = [1,2,3,4,5,6,7,8,9,10];
// for (const iterator of arrrNumber) {
//     console.log(iterator);
// }


// // - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// let arrrString = ["1","2","3","4","5","6","7",'8','9','10'];
// for (const iterator of arrrString) {
//     console.log(iterator);
// }

// // - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// let arrrMix1 = ["1","2","3",4,"5",6,"7", false,'9', null];
// for (const iterator of arrrMix1) {
//     console.log(iterator);
// }

// // - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// let arrrMix2 = ["1","2",true,4,"5",6,"7",false,'9',null];
// for (const iterator of arrrMix2) {
//     if(typeof iterator === "boolean") {
//         console.log(iterator);
//     }
// }

// // - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// let arrrMix3 = ["1","2",true,4,"5",6,"7",false,'9',null];
// for (const iterator of arrrMix3) {
//     if(typeof iterator === "number") {
//         console.log(iterator);
//     }
// }

// // - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
// let arrrMix4 = ["1","2",true,4,"5",6,"7",false,'9',null];
// for (const iterator of arrrMix4) {
//     if(typeof iterator === "string") {
//         console.log(iterator);
//     }
// }

// // - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// let arrNull = [];
// for (let i = 0; i <10; i++) {
//     arrNull[i] = i%2 ? null : i == 4 || i == 6 ? `index${i}`: i ;
// }
// console.log(arrNull);

// // - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// document.write(`<h1>step 1</h1> <br>`)
// for (let i = 0; i <10; i+=2) {
//     document.write(`${i}<hr>`)
//     console.log(i);
// }



// // - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// document.write(`<h1>step 2</h1> <br>`)
// for (let i = 0; i <100; i+=3) {
//     document.write(`${i}<hr>`)
//     console.log(i);
// }

// // - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// document.write(`<h1>paired steps</h1> <br>`)
// for (let i = 0; i <100; i+=1) {
//     if(!!i%2){
//         document.write(`${i}<hr>`)
//         console.log(i);
//     }
// }

// // - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
// document.write(`<h1>unpaired steps</h1> <br>`)
// for (let i = 0; i <100; i+=1) {
//     if(i%2){
//         document.write(`${i}<hr>`)
//         console.log(i);
//     }
// }

// // - Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)
// for(let m = 0; m < 2; m++) {
//     document.write(`<div style='background:red'>${m}</div> <hr>`)
//     for(let s = 0; s <= 60; s++){
//         document.write(`<div>${s}</div> <hr>`)
//     }
// }

// // - Відтворити роботу годинника, відрахувавши  2 години 20 хвилини (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)
// for(let h = 0; h < 2; h++) {
//     document.write(`<div style='background:yellow'>${h}</div> <hr>`)
//     for(let m = 0; m < 20; m++){
//         document.write(`<div style='background:red'>${m}</div> <hr>`)
//         for(let s = 0; s <= 60; s++){
//             document.write(`<div>${s}</div> <hr>`)
//         }
//     }
// }
// // Додатково
// // - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
// let arrq = [ 'a', 'b', 'c'];
// let str = '';
// for(let h = 0; h < arrq.length; h++) {
//     str += arrq[h];
// }
// console.log(str);

// // - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
// let arrw = [ 'a', 'b', 'c'];
// let strw = '';
// while(strw.length < arrw.length){
//     strw += arrw[strw.length];
// }
// console.log(strw);


// // - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
// let arre = [ 'a', 'b', 'c'];
// let stre = '';
// for (const iterator of arre) {
//     stre += iterator
// }
// console.log(stre);

// // =================
// // =================
// // =================
// // =================

// // - Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.
// let arrt = [ 'a', 'b', 'c'];
// for (let index = 0; index < 3; index++) {
//     arrt.push(index + 1)
// }
// console.log(arrt);

// // - Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].
// let arry = [1, 2, 3];
// let arryMod = []
// for (let index = 0; index < arry.length; index++) {
//     arryMod.push(arry[(arry.length - 1) - index]);
// }
// console.log(arryMod);

// // - Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.
// let arru = [1, 2, 3];
// for (let index = 0; index < 3; index++) {
//     arru.push(arru.length + 1);
// }
// console.log(arru);

// // - Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.
// let arruy = [1, 2, 3];
// for (let index = 0; index < 3; index++) {
//     arruy.unshift((arruy.length - index + 3) - index);
// }
// console.log(arruy);

// // - Дан масив ['js', 'css', 'jq']. Виведіть на екран перший елемент за допомогою shift()
// let arrjs = ['js', 'css', 'jq'];
// document.write(arrjs.shift());

// // - Дан масив ['js', 'css', 'jq']. Виведіть на екран останній елемент за допомогою pop()
// let arrjq = ['js', 'css', 'jq'];
// document.write(arrjs.pop());

// // - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [4, 5].
// let arrjqc = [1, 2, 3, 4, 5];
// arrjq.slice(3,4);


// // - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [1,2].
// let arrjgs = [1, 2, 3, 4, 5];
// arrjq.slice(0,1);

// // - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice перетворіть масив в [1, 4, 5].
// let arrjg = [1, 2, 3, 4, 5];
// arrjq.splice(1,2);

// // - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 2, 3, 'a', 'b', 'c', 4, 5].
// let arrjgf = [1, 2, 3, 4, 5];
// arrjgf.splice(3,0,'a', 'b', 'c');

// // - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
// let arrjfff = [1, 2, 3, 4, 5];
// arrjfff.splice(1,0,'a', 'b')
// arrjfff.splice(6,0,'c')
// arrjfff.splice(arrjfff.length,0,'e');
// console.log(arrjfff);

// // - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
// let arr33u = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let index = 0; index < arr33u.length; index++) {
//     if(!(arr33u[index] % 2)) {
//         console.log(arr33u[index]);   
//     } 
// }
// // - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу та push () скопіювати значення одного масиву в інший
// let arr33ud = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let newArr = []
// for (let index = 0; index < arr33u.length; index++) {
//     newArr.push(arr33u[index]);
// }
// console.log(newArr);

// // ============

// // зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
// // 1. перебрати його циклом while
// let artfd = [2,17,13,6,22,31,45,66,100,-18];
// let i = 0;
// while (i < artfd.length ){
//     i++
// }

// // 2. перебрати його циклом for

// let artfdd = [2,17,13,6,22,31,45,66,100,-18];
// for (let index = 0; index < artfd.length; index++) {
//     const element = artfd[index];
// }

// // 3. перебрати циклом while та вивести  числа тільки з непарним індексом
// let aretfd = [2,17,13,6,22,31,45,66,100,-18];
// let i = 0;
// while (i < aretfd.length ){
//     if(i%2) console.log(aretfd[i])
//     i++;
// }

// // 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// let aretfddg = [2,17,13,6,22,31,45,66,100,-18];
// for (let index = 0; index < aretfddg.length; index++) {
//     if(index % 2) {
//         console.log(aretfddg[index]);   
//     } 
// }

// // 5. перебрати циклом while та вивести  числа тільки парні  значення
// let aretfd = [2,17,13,6,22,31,45,66,100,-18];
// let i = 0;
// while (i < aretfd.length ){
//     if(!(i%2)) console.log(aretfd[i])
//     i++;
// }

// // 6. перебрати циклом for та вивести  числа тільки парні  значення
// let at = [2,17,13,6,22,31,45,66,100,-18];
// for (let index = 0; index < at.length; index++) {
//     if(!(index % 2)) {
//         console.log(at[index]);   
//     } 
// }


// // 7. замінити кожне число кратне 3 на слово "okten"
// let adt = [2,17,13,6,22,31,45,66,100,-18];
// for (let index = 0; index < adt.length; index++) {
//     if(!(adt[index] % 3)) {
//         adt[index] = "okten"
//     } 
// }
// console.log(adt);   

// // 8. вивести масив в зворотньому порядку.
// let adt3 = [2,17,13,6,22,31,45,66,100,-18];
// adt3.reverse();
// console.log(adt3);

// // 10
// //  створити пустий масив та :
// // - заповнити його 50 парними числами за допомоги циклу.
// // - заповнити його 50 непарними числами за допомоги циклу.
// let adt50 = [];
// for (let index = 0; index < 100; index++) {
//     if(!(adt50[index] % 2)) adt50[index] = index
//     adt50[index] = index
// }
// console.log(adt50);   

// // 3. используя Math.random заполнить массив из ???(сколько хотите) элементов.
// //  диапазон рандома 8 до 732. (но сначала пробуйте БЕЗ ДИАПАЗОНА!)
// let ar = []
// let pairedNumbers = [] 
// for (let index = 0; index < 100; index++) {
//     let number = Math.floor((Math.random() + Math.random()) * 100);
//     ar.push(number);
// //  2. вывести на консоль  каждый третий елемент
//     if(!(index % 3) && index != 0){
//         console.log(`каждый третий елемент ////     ${ar[index -1]}`)
//     }
// //  3. вывести на консоль  каждый третий елемент
// //  но при условии что его значение является парным.
//     if(!(index % 3) && index != 0){
//         if(!(ar[index -1] % 2)){
//             console.log(`каждый третий елемент является парным ////     ${ar[index -1]}`)
//         }
//     }
// //  4. вывести на консоль  каждый третий елемент
// //  но при условии что он имеет парное значение и
// //  записать их в другой массив.
//     if(!(index % 3) && index != 0){
//         if(!(ar[index -1] % 2)){
//             pairedNumbers.push(ar[index -1])
//         }
//     }
// //  5. Вывести каждый елемент массива у которого соседний с права элемент - парный
//     if(index != 0 && !(index % 2) && !(ar[index] % 2) ){
//         console.log(`соседний с права элемент - парный ////    ${ar[index]}`)
//     }
// }
// console.log(ar)


// //   5 масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. обрахувати середній чек.
// let arifme = [100,250,50,168,120,345,188];
// let quantity = 0;

// for (let index = 0; index < arifme.length; index++) {
//     quantity += arifme[index];
// }
// let check = quantity / arifme.length;
// console.log(check);


// // 3 створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
// let arrRa = [];
// let arrRandom = [];

// for (let index = 0; index < 20; index++) {
//     let numberRand = Math.floor((Math.random() * 5) * (Math.random() + 10));
//     arrRandom.push(numberRand);
//     arrRa.push(arrRandom[index] * 5);
// }
// console.log(arrRa);


// // 4 створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо об'єкт є числом,
// //  додати його в інший масив.
// const fakeArray = [null, 0,'3', 3333, true, NaN, Boolean, Number, Array, 1, 4, '', {}];
// const drdwesdsdew = [];

// for (const iterator of fakeArray) {
//     if(typeof iterator === 'number') drdwesdsdew.push(iterator);
// }

// console.log(drdwesdsdew);

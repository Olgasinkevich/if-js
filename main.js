// lesson-1 lesson-2
/*
let user = 'John Doe';
console.log(user);
const student = 'Olga';
console.log(student);
user = student;
// 'Olga'
console.log(user);

let test = 1;
test++;
test += '1';
// 21;
console.log(test);
test--;
// 20;
console.log(test);
console.log(!!test);
// true;
console.log(test);

const arr = [2, 3, 5, 8];
let a = 1;
for (let i = 0; i < arr.length; i++) {
  a *= arr[i];
}
console.log(a);

const arr1 = [2, 5, 8, 15, 0, 6, 20, 3];
for (let i = 0; i < arr1.length; i++) {
  if (arr1[i] > 5 && arr1[i] < 10) {
    console.log(arr1[i]);
  }
}

const arr2 = [2, 5, 8, 15, 0, 6, 20, 3];
for (let i = 0; i < arr2.length; i++) {
  if (!(arr2[i] % 2)) {
    console.log(arr2[i]);
  }
}
*/

// lesson-3
/*
const string = 'word';
const arr = string.split('');
const reverse = arr.reverse();
const stringRev = reverse.join('');
const check = (str, strRev) => str === strRev;

console.log(check(string, stringRev));

function min(a, b) {
  if (a > b) {
    return b;
  }

  return a;
}
console.log(min(1, 2));

function max(a, b) {
  if (a > b) {
    return a;
  }

  return b;
}
console.log(max(3, 4));
*/

// lesson-4

/* function sum (a) {
    return function (b) {
    return a+b;
  }
} */

// сколько угодно значений (раз) возвращать

function sum(a) {
  /*  console.log(a);
    return (b) => sum(a + b); */
  let result = a;
  const f = (b) => {
    result += b;
    console.log(result);
    return f;
  };
  return f;
}

sum(5)(2)(3);

// 1 вариант
/*
const text1=document.getElementById('text1');
text1.addEventListener('click',() => {
  text1.style.color='white';
  const body=document.getElementsByTagName('body')[0];
  body.style.backgroundColor = 'grey';
});
const text2=document.getElementById('text2');
text2.addEventListener('click',() => {
  text2.style.color='red';
});
const text3=document.getElementById('text3');
text3.addEventListener('click',() => {
  text3.style.color='white';
});
*/

// 2 вариант
/*
const body=document.getElementsByTagName('body')[0];
body.style.backgroundColor = 'grey';
function colorByClick(id, color = 'white') {
  const element=document.getElementById(id);
  element.addEventListener('click',() => {
    element.style.color = color;
  });
}
colorByClick('text1');
colorByClick('text2', 'red');
colorByClick('text3');
*/

// для одного абзаца
/*
function colorArrayByClick() {
  const colors = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];
  let counter = undefined;
  const text1 = document.getElementById('text1');
  text1.addEventListener('click', ()=>{
    if (typeof counter === "undefined") {
      counter = 0;
    }
    else {
      counter++;
    }
    text1.style.color = colors[counter];
    }
    )
}
colorArrayByClick();
*/

// для любого количества абзацев

function colorArrayByClick(arr) {
  const colors = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];
  arr.forEach((item) => {
    let counter;
    const element = document.getElementById(item);
    element.addEventListener('click', () => {
      if (counter === undefined || counter >= colors.length) {
        counter = 0;
      }
      /*
          if (counter === undefined) {
              counter = 0;
            } else {
                      if (counter < colors.length) {
                counter++;
            } else {
              counter=0;
              }
            } */
      element.style.color = colors[counter];
      counter++;
    });
  });
}

colorArrayByClick(['text1', 'text2', 'text3']);

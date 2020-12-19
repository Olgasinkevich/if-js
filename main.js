//lesson-1 lesson-2
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

//lesson-3
const string = 'word';
const arr = string.split('');
const reverse = arr.reverse();
const stringRev = reverse.join("");
const check = (str, strRev) => {
   return str === strRev;
};

console.log(check(string, stringRev));

function min (a,b) {
    if (a > b) {
        return b;
    }
    else {
        return a;
    }
}
console.log(min(1,2));

function max (a,b) {
   if (a>b) {
      return a;
   }
   else {
      return b;
   }
}
console.log(max(3,4));
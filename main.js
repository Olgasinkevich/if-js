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

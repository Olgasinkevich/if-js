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

// для любого количества абзацев
const callback = () => {
  const colors = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];
  let counter = 0;
  return (event) => {
    if (counter && counter >= colors.length) {
      counter = 0;
    }
    // eslint-disable-next-line no-param-reassign
    event.target.style.color = colors[counter];
    counter++;
  };
};
const colorArrayByClick = (arr) => {
  arr.forEach((item) => {
    item.addEventListener('click', callback());
  });
};
const querySelectorAll = document.querySelectorAll('.text');
colorArrayByClick(querySelectorAll);

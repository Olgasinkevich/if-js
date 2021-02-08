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
const callback = (element) => {
  const colors = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];
  let counter = 0;
  return () => {
    if (counter && counter >= colors.length) {
      counter = 0;
    }
    // eslint-disable-next-line no-param-reassign
    element.style.color = colors[counter];
    counter++;
  };
};
const colorArrayByClick = (arr) => {
  arr.forEach((item) => {
    const element = document.getElementById(item);
    element.addEventListener('click', callback(element));
  });
};
colorArrayByClick(['text1', 'text2', 'text3']);

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

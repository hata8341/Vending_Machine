const imgList = [
  {
    name: "Tiger",
    price: "100",
    src: "https://cdn.pixabay.com/photo/2015/12/18/13/46/tiger-1098607__340.jpg"
  },
  {
    name: "Elephant",
    price: "200",
    src: "https://cdn.pixabay.com/photo/2016/11/14/04/45/elephant-1822636__480.jpg"
  },
  {
    name: "Parrot",
    price: "30",
    src: "https://cdn.pixabay.com/photo/2018/09/22/17/05/parrot-3695678__340.jpg"
  },
  {
    name: "Lemurs",
    price: "15",
    src: "https://cdn.pixabay.com/photo/2015/10/28/15/05/lemurs-1010643__340.jpg"
  },
  {
    name: "Ibis",
    price: "75",
    src: "https://cdn.pixabay.com/photo/2018/11/11/16/51/ibis-3809147__340.jpg"
  },
  {
    name: "Panda",
    price: "90",
    src: "https://cdn.pixabay.com/photo/2019/08/21/16/03/panda-4421395__340.jpg"
  },
  {
    name: "Zebra",
    price: "120",
    src: "https://cdn.pixabay.com/photo/2020/10/13/10/20/zebra-5651454__480.jpg"
  },
  {
    name: "Rabbit",
    price: "25",
    src: "https://cdn.pixabay.com/photo/2018/06/28/00/11/mara-mammal-3502921__340.jpg"
  },
  {
    name: "Giraffe",
    price: "150",
    src: "https://cdn.pixabay.com/photo/2019/07/27/06/21/giraffe-4366005__340.jpg"
  },
  {
    name: "Raccoon",
    price: "45",
    src: "https://cdn.pixabay.com/photo/2018/07/14/17/46/raccoon-3538081__340.jpg"
  },
  {
    name: "Frog",
    price: "5",
    src: "https://cdn.pixabay.com/photo/2016/04/17/16/37/frog-1335022__340.jpg"
  },
  {
    name: "Iguana",
    price: "40",
    src: "https://cdn.pixabay.com/photo/2017/02/05/11/43/iguana-2039719__340.jpg"
  },
  {
    name: "Adler",
    price: "55",
    src: "https://cdn.pixabay.com/photo/2017/10/20/21/45/adler-2872995__340.jpg"
  },
  {
    name: "Wolf",
    price: "60",
    src: "https://cdn.pixabay.com/photo/2019/09/17/14/24/wolf-4483675__340.jpg"
  },
  {
    name: "Crocodile",
    price: "250",
    src: src="https://cdn.pixabay.com/photo/2014/01/14/18/31/nile-crocodile-245013__340.jpg"
  },
  {
    name: "Ape",
    price: "20",
    src: "https://cdn.pixabay.com/photo/2019/07/24/14/17/monkey-4360298__340.jpg"
  },
  {
    name: "Ostrich",
    price: "140",
    src: "https://cdn.pixabay.com/photo/2019/09/25/15/58/ostrich-4504017__340.jpg"
  },
  {
    name: "Rhinoceros",
    price: "170",
    src: "https://cdn.pixabay.com/photo/2019/09/04/09/48/rhinoceros-4451152__340.jpg"
  },
  {
    name: "Icebear",
    price: "210",
    src: "https://cdn.pixabay.com/photo/2017/08/14/20/33/polar-bear-2641842__340.jpg"
  },
  {
    name: "Cheetah",
    price: "190",
    src: "https://cdn.pixabay.com/photo/2018/06/14/22/22/cheetah-3475778__340.jpg"
  },
  {
    name: "Koala",
    price: "30",
    src: "https://cdn.pixabay.com/photo/2013/01/14/12/21/koala-74908__340.jpg"
  },
  {
    name: "Penguin",
    price: "25",
    src: "https://cdn.pixabay.com/photo/2016/09/29/16/40/king-penguin-1703294__340.jpg"
  },
]

// スライダーのdiv作成
const slider = document.getElementById("slider");
const dNoneDiv = document.createElement("div");
dNoneDiv.classList.add("d-none");

//テキストのdiv作成
const selectDiv = document.getElementById("select");
const textNoneDiv = document.createElement("div");
textNoneDiv.classList.add("d-none");


//img要素とtextContentの作成
for (let i = 0; i < imgList.length; i++){
  let img = document.createElement("img");
  img.classList.add("img");
  img.src = `${imgList[i]["src"]}`;
  dNoneDiv.append(img);

  let textContentDiv = document.createElement("div");
  textContentDiv.classList.add("text-content");
  let nameP = document.createElement("p");
  let priceP = document.createElement("p");
  nameP.innerHTML = "Name : " + `${imgList[i]["name"]}`;
  priceP.innerHTML = "Price : " + `${imgList[i]["price"]}`;
  textContentDiv.append(nameP, priceP);
  textNoneDiv.append(textContentDiv);
}

slider.append(dNoneDiv);
selectDiv.append(textNoneDiv);

//スライダー表示main要素,非表示要素の作成
const sliderItems = document.querySelectorAll("img");
let slidershow = document.createElement("div");
let main = document.createElement("div");
let extra = document.createElement("div");
slidershow.classList.add("col-12", "d-flex", "flex-nowrap", "overflow-hiddens");
main.classList.add("main", "full-width");
extra.classList.add("extra", "full-width");

slidershow.append(main);
slidershow.append(extra);
slider.append(slidershow);

//テキスト表示要素の作成
const textItems = document.querySelectorAll(".text-content");
let textShow = document.createElement("div");
textShow.classList.add("text-wrap", "mt-3", "overflow-hiddens");
selectDiv.append(textShow);


//ボタン、スライド・テキスト変更イベント追加
let btnWrapDiv = document.createElement("div");
btnWrapDiv.classList.add("btn-wrap", "row", "flex-wrap");
for (let i = 1; i <= sliderItems.length; i++){
  let btn = document.createElement("button");
  btn.classList.add("btn", "d-block", "bg-white", "col-2", "py-1", "border-0", "m-3");
  btn.innerHTML = i.toString();
  //スライド変更イベント
  btn.addEventListener("click", function () {
    sliderChange(i - 1);
  });
  //テキスト変更イベント
  btn.addEventListener("click", function () {
    textContentChange(i - 1);
  })
  btnWrapDiv.append(btn);
}

selectDiv.append(btnWrapDiv);


//テキスト変更メソッド
function textContentChange(num) {
  textShow.innerHTML = "";
  textShow.append(textItems[num]);
}

//スライダー変更メソッド
main.setAttribute("data-index", "0");
function sliderChange(num) {

  let index = parseInt(main.getAttribute("data-index"));
  let currentElement = sliderItems[index];
  console.log(currentElement);

  let nextElement = sliderItems[num];
  console.log(nextElement);

  main.setAttribute("data-index", num.toString());

  let animationType = index < num ? "right" : "left";
  animateMain(currentElement, nextElement, animationType);
}

function animateMain(currentElement, nextElement, animationType) {
  extra.innerHTML = "";
  extra.append(currentElement);

  main.innerHTML = "";
  main.append(nextElement);

  main.classList.add("expand-animation");
  extra.classList.add("deplete-animation");

  if (animationType === "right") {
    slidershow.innerHTML = "";
    slidershow.append(extra);
    slidershow.append(main);
  }
  else if (animationType === "left") {
    slidershow.innerHTML = "";
    slidershow.append(main);
    slidershow.append(extra);
  }
}

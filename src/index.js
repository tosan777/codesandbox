// const func1 = (str) => {
//   return str;
// };
// console.log(func1("koreha"));

// オブジェクトの分割代入
// const myProfile = {
//   name: "kosuke",
//   age: 21
// };

// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}です`;
// console.log(message1);

// const { name, age } = myProfile;
// const message2 = `名前は${name}です。年齢は${age}です`;
// console.log(message2);

// 配列の分割代入
// const MyProfile = ["kosuke", 21];

// const message1 = `名前は${MyProfile[0]}です。年齢は${MyProfile[1]}です。`;
// console.log(message1);

// const [name, age] = MyProfile;
// const message2 = `名前は${name}です。年齢は${age}です。`;
// console.log(message2);

/**
 * defolt値
 *  */
// const sayHello = (name = "gest") => console.log(`こんにちは${name}さん`);
// sayHello("kosuke");

/**
 * スプレット構文
 *  */
// 配列の展開
// const arr1 = [1, 2];
// console.log(arr1);
// console.log(...arr1);

/**
 * ドットを三つ繋げることにより配列の中身を展開して表示することができる
 */

// const sumFunc1 = (num1, num2) => console.log(num1 + num2);
// sumFunc1(...arr1);

/**
 * 配列をまとめる
 * 下記のように...arr3でまだ代入されていない値をまとめることができる
 * */
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

/*
 * 配列のコピー、結合
配列は違う配列の中にコピーすることができる
 */
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

/*
* mapやfilterを使った配列の処理
map：従来for文を使って繰り返し処理を行なっていたが、mapの方が長上にならずに繰り返し処理を行える
filter:配列の中から特定の値を条件に一致するものだけ取り出すもの
*/

// const nameArr = ["山田", "遠山", "篠塚"];
/*従来のfor文*/
// for (let index = 0; index < nameArr.length; index++) {
//   /*テンプレートリテラルを使用し配列番号と配列の値を取得する方法*/
//   console.log(`${index + 1}番目は${nameArr[index]}です`);
// }

/*map*/
// const nameArr2 = nameArr.map((name) => {
//   return name;
// });
// console.log(nameArr2);

/*filter*/
// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 1;
// });
// console.log(newNumArr);
/*
特定の配列だけ出力を変更したい時
if文でreturnする
*/
// const newNameArr = nameArr.map((name) => {
//   if (name === "遠山") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });
// console.log(newNameArr);

/**
 *  三項演算子
 * ある条件 ? 条件がtrueの時 `trueです` : `falseです`;
 * ifよりも簡単に条件分岐することができる
 * */
// const val1 = 1 > 0 ? `trueです` : `falseです`;
// console.log(val1);

// const num = 1300;
// // console.log(num.toLocaleString());
// /*toLocaleString:　数値を三桁区切りにしてくれる”文字列には効かない”*/

// const formattedNum =
//   typeof num === "number" ? num.toLocaleString() : "数値を入力してください";
// /*typeof : 値がどのような型なのか調べることができる*/
// console.log(formattedNum);

/*応用篇*/
// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? "100を超えています！！" : "許容範囲ないです";
// };
// console.log(checkSum(10, 80));

/*
論理演算子の本当の意味
|| は左側がfalseなら右側を返す
&& は左側がtureなら右側を返す
*/
const num = 100;
const fee = num || "金額未設定です";
console.log(fee);

const num2 = 100;
const fee2 = num2 && "何か設定されました";
console.log(fee2);

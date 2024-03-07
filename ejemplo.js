// const DOMHandler = (function (parentSelector) {
//   ////código
// })("#root");
console.log("Hola");
const transactions = [
  { id: 2561, amount: 2500, date: "2024-09-23", notes: "Air Jorda" },
  { id: 2561, amount: 3500, date: "2024-09-23", notes: "Air Jorda" },
  { id: 2561, amount: 4500, date: "2024-09-23", notes: "Air Jorda" },
];
function calcTotal(transactions) {
  // console.log(transactions);
  ///Forma 1//////
  // let total = 0;
  // transactions.forEach((transaction) => {
  //   total += transaction.amount;
  // });
  // return total;
  ///Forma 2/////
  ////category.transactions = array de objetos= [{id: 2561, amount: 2500, date: '2024-09-23', notes: 'Air Jorda}, ......]
  result = transactions.reduce(
    (total, transaction) => total + transaction.amount,
    0
  );
  return result; ///Total toma el valor de cero
}
console.log(calcTotal(transactions));

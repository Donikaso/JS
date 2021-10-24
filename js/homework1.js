let money = prompt('Ваш бюджет?');
let brand = prompt('Название магазина?', 'defect');

mainList = {
    budget: money,
    shopName: brand,
    shopGoods: [],
    employers: {},
    open: false
} 

mainList.shopGoods[0] = prompt('Какой тип товаров будем продавать?');
mainList.shopGoods[1] = prompt('Какой тип товаров будем продавать?');
mainList.shopGoods[2] = prompt('Какой тип товаров будем продавать?');

alert('Ваш дневной бюджет: ' + mainList.budget/30);

console.log(mainList);
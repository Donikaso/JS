let money,
    brand,
    time,
    price = 1000

function start() {
    money = prompt('Ваш бюджет?');

    while (isNaN(money) || money == '' || money == null) {
        money = prompt('Ваш бюджет?');
    }

    brand = prompt('Название магазина?', 'Defect').toUpperCase();
    time = 19
}

start();

mainList = {
    budget: money,
    shopName: brand,
    shopGoods: [],
    employers: {},
    open: false,
    discount: true
}

if(mainList.discount == true) {
    totalPrice = price * 0.8;
}
console.log(totalPrice);

function huntEmployers() {
    for (let i = 0; i < 4; i++) {
        employer = prompt("Employer's name");
        if ((typeof(employer)) === 'string' && (typeof(employer)) === null && employer != '' && employer.length < 50) {
            mainList.employers[i] = employer;
        }
    }
}
huntEmployers();

function chooseGoods() {
    for (let i = 0; i < 5; i++) {
        let a = prompt('Какой тип товаров будем продавать?');
        if ((typeof(a)) === 'string' && (typeof(a)) === null && a != '' && a.length < 50) {
            console.log('Всё верно!');
            mainList.shopGoods[i] = a;
        } else {

        }

    }
}
chooseGoods();


function workTime(time) {
    if (time < 0) {
        console.log('Unreal');
    } else if (time > 8 && time < 20) {
        console.log("It's time to work!");
        } else if (time < 24) {
            console.log('Now time is late to work');
            } else {
                console.log('One Day always have 24 hours');
            }
}


function dayBudget() {
    alert('Ваш дневной бюджет: ' + mainList.budget/30);
}
dayBudget();

console.log(mainList);
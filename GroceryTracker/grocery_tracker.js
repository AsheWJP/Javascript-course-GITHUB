let grocery1;
let grocery2;
let grocery3;

function groceryTotal(){
    grocery1 = parseFloat(document.getElementById('item1').value);
    grocery2 = parseFloat(document.getElementById('item2').value);
    grocery3 = parseFloat(document.getElementById('item3').value);

    let total = grocery1 + grocery2 + grocery3;

    document.getElementById('cost').innerText = `Your total spendings on groceries today are: £ ${total}`;
}
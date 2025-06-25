const breakfastMenu = ['Pancakes - £9.99', 'Eggs Benedict - £12.99', 'Oatmeal - £6', 'Frittata - £10.50'];
const mainCourseMenu = ['Steak - £19.50', 'Pasta - £12.50', 'Burger - £15.99', 'Salmon - £18'];
const dessertMenu = ['Cake - £7', 'Ice Cream - £6.50', 'Pudding - £7.50', 'Fruit Salad - £5'];

const breakfastMenuItemsHTML = breakfastMenu.map((item, index) => `<p>Item ${index + 1}: ${item}</p>`).join('');
document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuItemsHTML;

let mainCourseItem = '';
mainCourseMenu.forEach((item, index) => {
    mainCourseItem += `<p>Item ${index + 1}: ${item}</p>`;});
document.getElementById('maincourseMenuItems').innerHTML = mainCourseItem;

let dessertItem = '';
for (let i = 0; i < dessertMenu.length; i++) {
    dessertItem += `<p>Item ${i + 1}: ${dessertMenu[i]}</p>`;}
document.getElementById('dessertMenuItems').innerHTML = dessertItem;
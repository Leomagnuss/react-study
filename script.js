// const name = prompt ('Введите ваше имя:');
// alert (`Привет, ${name}!`);
// let a = 1, b = 1;
// let c = ++a; 
// let d = b++;

// alert(`a = ${a}, b = ${b}, c = ${c}, d = ${d}`);

// let a = 2;
// let x = 1 + ( a *= 2);
// alert(`a = ${a}, x = ${x}`)

// var a = +prompt("Первое число?", 1);
// var b = +prompt("Второе число число?", 2);
// alert (a + b);

// 7 > 5
// "стол" > "стул"
// "4" > "52"
// undefined == null
// undefined === null
// null == "\n0\n"
// null === +"\n0\n"

// if ("0") {
//     alert( 'Привет' );
//   }

// const a = prompt(`Какое «официальное» название JavaScript?`);
// if  (a == `ECMAScript`)
// {
//     alert('Верно')
// }
// else
// {
//     alert('Не знаете? ECMAScript!')
// }

// var input = prompt('Введите число')
// if (input >= 1) {
//     alert('1');
// } 
// else if (input == 0) { 
//     alert('0');
// } else { 
//     alert ('-1'); 
// }

// result = (a + b < 4) ? ('мало'):('много')

// let message = (login == 'Сотрудник') ? 'Привет':
//  (login == 'Директор') ? 'Здравствуйте':
//  (login == '') ? 'Нет логина' :  ''

// alert( null || 4 || undefined ); //4

// alert( alert(1) || 2 || alert(3) ); //1 // 2

// alert( 1 && null && 2 ); // 1 //null

// alert( alert(1) && alert(2) ); // 1 //undefined

// alert( null || 2 && 3 || 4 ); //3

// let value = NaN;
// 
// value &&= 10;
// value ||= 20;
// value &&= 30;
// value ||= 40;
// 
// alert(value); //30

// if (age >= 14 && age <=90);

// if (age < 17 || age > 99);
// if (!(age >=17 && age <=99));

// if (-1 || 0) alert( 'first' );
// if (-1 && 0) alert( 'second' );
// if (null || -1 && 1) alert( 'third' ); // 1 и 3

// let user = prompt('Кто там?');
// if (user === 'Админ') {
//     let password = prompt('Введите пароль');
//         if (password === 'Я главный') {
//             alert('Здравствуйте!');
//         }
//         else if (password === '' || null) {
//             alert('Отменено');
//         }
//         else {
//             alert('Пароль неверный');
//         }
//     }
// else if (user === '' || user === null) {
//     alert('Отменено');
// }
// else {
//     alert('Я вас не знаю');
// }

// function chBackcolor(color) {
//     document.body.style.background = color;
// }


// const button = document.getElementById('button');


// button.addEventListener('click', changeBackground);
// function open123() {
//     let div = document.createTextNode('А вот и я');
//     document.body.append(div);    
// }

// let isOpen = false;

// function open123() {
//  if (isOpen) {
//  return;
//  }

//  let div = document.createTextNode('А вот и я');
//  document.body.append(div);

//  isOpen = true;
// }


// let divOpen = false
// function open123() {
//     if (divOpen){
//         return
//     }
//     let div = document.createElement('div');
//     div.className = "msg";
//     div.innerHTML = "Важная информация!";
//     document.body.append(div);
//     divOpen=true;
// }
// let elem = document.getElementById('text');
// elem.style.visibility = 'hidden';

// function open123() {
//   const rainbow = ['red', 'orange', 'yellow', 'green', 'blue', 'rebeccapurple', 'violet'];
//   document.body.style.background = rainbow[Math.floor(7 * Math.random())];
//   if (elem.style.visibility === 'visible') {
//     elem.style.visibility = 'hidden';
//   } else {
//     elem.style.visibility = 'visible';
//   }
// }
// function styl() {
//   let elem = document.getElementById("text");
//   elem.style.fontFamily = "Arial";
//   elem.style.color = "Purple";
// }
// function styl1() {
//   let elem = document.getElementById("text");
//   elem.style.fontFamily = "Courier";
//   elem.style.color = "aqua";
// }

// function removeItem() {
//   var list = document.getElementById("List");
//   if (list.children.length > 0) {
//     list.removeChild(list.lastElementChild);
//   }
// }


// function changeCaption() {
//   var image = document.getElementById('pic');
//   var caption = document.getElementById('fig');

//   image.onmouseover = function () {
//     caption.textContent = 'Махакамский спирт';
//   };

//   image.onmouseout = function () {
//     caption.textContent = 'Жижа';
//   };
// }
// changeCaption();


// function getRandomNumber(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// var newElem = document.createElement("table");

// var newRow = newElem.insertRow(0);
// var newCell = newRow.insertCell(0);
// newCell.width = "200";
// newCell.innerHTML = getRandomNumber(1,100);

// var newCell = newRow.insertCell(1);
// newCell.width = "200";
// newCell.innerHTML = getRandomNumber(1,100);

// var newRow = newElem.insertRow(1);
// var newCell = newRow.insertCell(0);
// newCell.width = "200";
// newCell.innerHTML = getRandomNumber(1,100);

// var newCell = newRow.insertCell();
// newCell.width = "200";
// newCell.innerHTML = getRandomNumber(1,100);

// document.body.appendChild(newElem);

// var p = document.createElement('p');
// p.tagName = 'p';
// p.innerHTML = 'Параграф';
// document.body.append(p)


// function myFunction() {
//   document.getElementById("myDropdown").classList.toggle("show");
// }

// // Закрыть dropdown, если кликнули вне его
// window.onclick = function (event) {
//   if (!event.target.matches('.dropbtn')) {
//     var dropdowns = document.getElementsByClassName("dropdown-content");
//     for (var i = 0; i < dropdowns.length; i++) {
//       var openDropdown = dropdowns[i];
//       if (openDropdown.classList.contains('show')) {
//         openDropdown.classList.remove('show');
//       }
//     }
//   }
// }


// function myFunction() {
//   document.getElementById("dropdown").classList.toggle("show");
// }


// _______________________



var dropdown = document.createElement('dropdown');
dropdown.innerHTML = 'Menu🔻';
dropdown.addEventListener('click', drop)
dropdown.style.border = '2px solid white';
dropdown.style.borderRadius = '10px';
dropdown.style.backgroundColor = 'aqua';
dropdown.style.width = '80px';
dropdown.style.height = '40px';
dropdown.style.display = 'flex';
dropdown.style.justifyContent = 'center';
dropdown.style.textAlign = 'Center';
dropdown.style.alignItems = 'Center';
dropdown.style.fontFamily = 'Arial';
dropdown.style.fontWeight = '600';
dropdown.style.cursor = 'pointer';
document.body.append(dropdown);



var isOpen = false; 

function drop() {
  if (isOpen) {
    document.querySelectorAll('.dropdown-child').forEach(function(child) {
      child.remove();
    });
    isOpen = false;
  } else {
    createDropdownItem('Main');
    createDropdownItem('About');
    createDropdownItem('Contacts', true);
    isOpen = true;
  }
}

function createDropdownItem(text, isLast) {
  var child = document.createElement('div');
  child.classList.add('dropdown-child');
  child.innerHTML = text;
  Object.assign(child.style, {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: '2px solid white',
    backgroundColor: 'aqua',
    width: '80px',
    textAlign: 'center',
    fontFamily: 'Arial',
    fontWeight: '600',
    height: '30px',
  });

  if (isLast) {
    child.style.borderRadius = '0 0 10px 10px';
  }

  document.body.append(child);
}

dropdown.addEventListener('click', drop);
// function drop() {
//   if (dropdown) {return}
//   var child = document.createElement('elem');
//   dropdown.style.borderRadius = '10px 10px 0 0';
//   dropdown.style.border = '2px solid white';
//   child.innerHTML = 'Main';
//   Object.assign(child.style, {
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     border: '2px solid white',
//     backgroundColor: 'aqua',
//     width: '80px',
//     justifyContent: 'center',
//     textAlign: 'center',
//     fontFamily: 'Arial',
//     fontWeight: '600',
//     height: '30px',
//     });

//   var child2 = document.createElement('elem2');
//   child2.innerHTML = 'about';
//   Object.assign(child2.style, {
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     border: '2px solid white',
//     backgroundColor: 'aqua',
//     width: '80px',
//     justifyContent: 'center',
//     textAlign: 'center',
//     fontFamily: 'Arial',
//     fontWeight: '600',
//     height: '30px',
//     });

//   var child3 = document.createElement('elem3');
//   child3.innerHTML = 'contacts';
//   Object.assign(child3.style, {
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     border: '2px solid white',
//     backgroundColor: 'aqua',
//     width: '80px',
//     justifyContent: 'center',
//     textAlign: 'center',
//     fontFamily: 'Arial',
//     fontWeight: '600',
//     height: '30px',
//     borderRadius: '0 0 10px 10px',
//     });

//   document.body.append(child);
//   document.body.append(child2);
//   document.body.append(child3);
//   }
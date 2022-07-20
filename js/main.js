var elList = document.querySelector('.js-list');

function showToDom( array , node){
	for(arr of array){
		var elId = document.createElement('h2');
		var elItem = document.createElement('li');
		var elNum = document.createElement('span');
		var elName = document.createElement('h3');
		var elImg = document.createElement('img');
		var elType = document.createElement('p');
		var elHeight = document.createElement('h4');
		var elWeight = document.createElement('h4');
		var elCandy = document.createElement('span');
		var elEgg = document.createElement('p');
		var elSpawnTime = document.createElement('h4');

		
		elId.textContent = `id: ${arr.id}`
		elName.textContent = `name: ${arr.name}`;
		elImg.src = `${arr.img}`;
		elType.textContent = `Type: ${arr.type}`;
		elHeight.textContent = `Heights: ${arr.height}`;
		elWeight.textContent = `Weights: ${arr.weight}`;
		elCandy.textContent = ` Cand: ${arr.candy}`;
		elEgg.textContent = `${arr.egg}`;
		elSpawnTime.textContent = `Time: ${arr.spawn_time}`;
	
	
	
		elId.setAttribute('class', 'js-id');
		elNum.setAttribute('class', 'js-num');
		elName.setAttribute('class', 'js-name');
		elImg.setAttribute('class', 'js-img');
		elType.setAttribute('class', 'js-type');
		elHeight.setAttribute('class', 'js-h');
		elWeight.setAttribute('class', 'js-w');
		elCandy.setAttribute('class', 'js-candy');
		elEgg.setAttribute('class', 'js-egg');
		elSpawnTime.setAttribute('class', 'js-time');
	
	
		elItem.appendChild(elId);
		elItem.appendChild(elName);
		elItem.appendChild(elNum);
		elItem.appendChild(elImg);
		elItem.appendChild(elType);
		elItem.appendChild(elHeight);
		elItem.appendChild(elWeight);
		elItem.appendChild(elCandy);
		elItem.appendChild(elEgg);
		elItem.appendChild(elSpawnTime);
		node.appendChild(elItem);
	}
}
showToDom(pokemons , elList)



let set1 = new Set();
pokemons.forEach(e => {
	e.type.forEach(el => {
		set1.add(el);
	})
})
let elSelect1 = document.querySelector("select");
console.log(elSelect1);
	for(let item of set1) {
		let option = document.createElement("option")
		option.value = item
		option.textContent = item;
		console.log(item)
		elSelect1.appendChild(option)
	}	
var newArray = []
var elSelect = document.querySelector('.js-select')
elSelect.addEventListener('change', function () {
	newArray = [];
	elList.innerHTML = ''
	var selectValue = elSelect.value
	console.log(selectValue)
	pokemons.forEach((types) => {
		if (types.type.includes(selectValue)) {
		newArray.push(types)
		}
	})
	showToDom(newArray , elList)
})

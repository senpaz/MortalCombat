const $arenas = document.querySelector('.arenas');
const SCORPION = {
	name: "Scorpion",
	hp: 80,
	img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
	weapon: ['hit', 'knife'],
	attack() {
		console.log(this.name + ' Fight...');
	}
};
const SUBZERO = {
	name: "SUB ZERO",
	hp: 30,
	img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
	weapon: ['hit', 'knife'],
	attack() {
		console.log(this.name + ' Fight...');
	}
};

function createPlayer(classPlayer, { name, hp, img } = obj) {
	//создание
	const $player = document.createElement('div');
	const $progressbar = document.createElement('div');
	const $character = document.createElement('div');
	const $life = document.createElement('div');
	const $name = document.createElement('div');
	const $img = document.createElement('img');
	//Добавление классов
	$player.classList.add(classPlayer);
	$progressbar.classList.add('progressbar');
	$character.classList.add('character');
	$life.classList.add('life');
	$name.classList.add('name');
	//Добавление в html
	$player.appendChild($progressbar);
	$player.appendChild($character);
	$progressbar.appendChild($life);
	$progressbar.appendChild($name);
	$character.appendChild($img);
	//Добавление стилей
	$life.style.width = `${hp}%`;
	$name.innerText = name;
	$img.src = img;
	$arenas.appendChild($player);
	console.log('Работай плиз');
}

createPlayer('player1', SCORPION);
createPlayer('player2', SUBZERO);

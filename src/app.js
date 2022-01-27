const select = document.querySelector('#select')
const box = document.querySelector('#box')
const score = document.querySelector('#score')

const nodes_select = document.querySelectorAll('#select div .border')

function getRandomNode() {
	return Math.floor(Math.random() * nodes_select.length);
}

let scoreValue = localStorage.getItem('score') ? JSON.parse(localStorage.getItem('score')) : 0
localStorage.setItem('score', JSON.stringify(scoreValue))
score.textContent = scoreValue
let ownOption = ''
let computerOption = ''

const results = document.createElement('div');
results.id = 'results_box'

const whoWin = document.createElement('div')
const h1 = document.createElement('h1')

whoWin.appendChild(h1)
whoWin.id = 'outResoult'

let newBtn = document.createTextNode('Play Again')
const btn_again = document.createElement('button')
btn_again.id = 'btn-again'
btn_again.appendChild(newBtn)
whoWin.appendChild(btn_again)

nodes_select.forEach(e => {
	e.addEventListener('click', () => {

		const textBox1 = document.createElement('div')
		const text1 = document.createElement('h3')
		text1.textContent = 'YOU PICKED'
		textBox1.appendChild(text1)
		textBox1.classList.add('textBox')

		const textBox2 = document.createElement('div')
		const text2 = document.createElement('h3')
		text2.textContent = 'THE HOUSE PICKED'
		textBox2.appendChild(text2)
		textBox2.classList.add('textBox')

		const nodeRandom = nodes_select[getRandomNode()]

		ownOption = e.id
		computerOption = nodeRandom.id

		let cloneCpu = nodeRandom.cloneNode(true)
		let clone = e.cloneNode(true)
		clone.disabled = true
		cloneCpu.disabled = true

		textBox1.appendChild(clone)
		textBox2.appendChild(cloneCpu)

		select.replaceChildren(results)
		results.appendChild(textBox1)

		const div = document.createElement('div')
		div.classList.add('div')
		results.appendChild(textBox2)
		cloneCpu.replaceWith(div)

		setTimeout(function() {
			textBox2.style.order = '2'
			div.replaceWith(cloneCpu)
		}, 3000);


		const h2 = document.createElement('h2')
		h2.classList.add('h2')
		results.appendChild(h2)


		setTimeout(function() {
			if (ownOption === computerOption) {
				h1.textContent = 'DEAD HAT'
			} else if ((ownOption === 'paper' && computerOption === 'scissors') ||
				(ownOption === 'scissors' && computerOption === 'rock') ||
				(ownOption === 'rock' && computerOption === 'paper')
				) {
				h1.textContent = 'YOU LOSE'
				cloneCpu.classList.add('shadows-victory')
			} else {
				h1.textContent = 'YOU WIN'
				scoreValue += 1
				localStorage.setItem('score', JSON.stringify(scoreValue));
				score.textContent = scoreValue
				clone.classList.add('shadows-victory')
			}
			h2.replaceWith(whoWin);
		}, 4000);
	})
})

function deleteChild() {
	results.innerHTML = ""
}


btn_again.addEventListener('click', () => {
	deleteChild()
	select.replaceChildren(box)
})

const modal = document.getElementById("myModal");

const rules = document.querySelector('#rules')
const close = document.querySelector('.close')

rules.addEventListener('click', function() {
  modal.style.display = "block";
})

close.addEventListener('click', function() {
  modal.style.display = "none";
})

window.addEventListener('click', function (event) {
	if (event.target == modal) {
	  modal.style.display = "none";
	}
})
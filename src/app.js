const select = document.querySelector('#select')
const box = document.querySelector('#box')
const rules = document.querySelector('#rules')
const score = document.querySelector('#score')


const nodes_select = document.querySelectorAll('#select div .border')


function getRandomNode() {
	return Math.floor(Math.random() * nodes_select.length);
}

let scoreValue = 0
score.textContent = scoreValue
let ownOption = ''
let computerOption = ''

const results = document.createElement('div');
results.id = 'results_box'
results.classList.toggle('wrap')

const whoWin = document.createElement('div')
const h1 = document.createElement('h1')

whoWin.appendChild(h1)
whoWin.id = 'outResoult'

let newBtn = document.createTextNode('Play Again')
const btn_again = document.createElement('button')
btn_again.id = 'btn-again'
btn_again.appendChild(newBtn)
whoWin.appendChild(btn_again)

function soloTexto() {

}



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

		results.classList.toggle('wrap')
		const nodeRandom = nodes_select[getRandomNode()]

		ownOption = e.id
		computerOption = nodeRandom.id

		let cloneCpu = nodeRandom.cloneNode(true)
		let clone = e.cloneNode(true)
		clone.disabled = true
		cloneCpu.disabled = true

		textBox1.appendChild(clone)
		textBox2.appendChild(cloneCpu)

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
			score.textContent = scoreValue
			clone.classList.add('shadows-victory')
		}

		select.replaceChildren(results)
		results.appendChild(textBox1)
		results.appendChild(textBox2).style.order = '2'

		setTimeout(function() {
			results.classList.toggle('wrap')
			results.appendChild(whoWin)
		}, 1000);
	})
})

function deleteChild() {
	results.innerHTML = ""
}


btn_again.addEventListener('click', () => {
	console.log(results)
	deleteChild()
	select.replaceChildren(box)
})
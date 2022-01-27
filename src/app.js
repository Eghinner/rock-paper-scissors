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


nodes_select.forEach(e => {
	e.addEventListener('click', () => {
		results.classList.toggle('wrap')
		const nodeRandom = nodes_select[getRandomNode()]

		ownOption = e.id
		computerOption = nodeRandom.id

		let cloneCpu = nodeRandom.cloneNode(true)
		let clone = e.cloneNode(true)
		clone.disabled = true
		cloneCpu.disabled = true

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
		results.appendChild(clone)
		results.appendChild(cloneCpu).style.order = '2'

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
    	select.replaceChildren(box)
    	deleteChild()
    })



    function execute() {
    	if (ownOption === computerOption) {
    		aquiDice = 'Match'
    	} else if ((ownOption === 'paper' && computerOption === 'scissors') ||
    		(ownOption === 'scissors' && computerOption === 'rock') ||
    		(ownOption === 'rock' && computerOption === 'paper')
    		) {
    		aquiDice = 'Match'
    	} else {
    		aquiDice = 'Match'
    	}
    }
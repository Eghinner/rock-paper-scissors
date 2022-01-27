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

const whoWin = document.createElement('div')
const h1 = document.createElement('h1')

whoWin.appendChild(h1)
whoWin.id = 'outResoult'

let newBtn = document.createTextNode('Play Again')
const btn_again = document.createElement('button')
btn_again.appendChild(newBtn)
whoWin.appendChild(btn_again)


nodes_select.forEach(e => {
	e.addEventListener('click', () => {
		const nodeRandom = nodes_select[getRandomNode()]
		ownOption = e.id
		computerOption = nodeRandom.id
		if (ownOption === computerOption) {
			let newText = document.createTextNode('DEAD HAT')
			h1.appendChild(newText)
			// aquiDice = 'Match'
		} else if ((ownOption === 'paper' && computerOption === 'scissors') ||
			(ownOption === 'scissors' && computerOption === 'rock') ||
			(ownOption === 'rock' && computerOption === 'paper')
			) {
			let newText = document.createTextNode('YOU LOSE')
			h1.appendChild(newText)
		} else {
			scoreValue += 1
			score.textContent = scoreValue
			let newText = document.createTextNode('YOU WIN')
			h1.appendChild(newText)
		}
		const clone = e.cloneNode(true)
		clone.disabled = true
		const cloneCpu = nodeRandom.cloneNode(true)
		cloneCpu.disabled = true
		select.replaceChildren(results)
		results.appendChild(clone)
		results.appendChild(cloneCpu).style.order = '2'
		results.appendChild(whoWin)
        // console.log(ownOption)
        // console.log(computerOption)

        // execute()
    })
})

function deleteChild() {
        // var child = results.lastElementChild;
        // while (child) {
        // 	results.removeChild(child);
        // 	child = results.lastElementChild;
        // }
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
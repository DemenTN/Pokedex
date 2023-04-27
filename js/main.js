//Simple pokedex using pokemonapi.co API
//could use a try catch
document.querySelector('button').addEventListener('click', getFetch)

async function getFetch() {
  const choice = document.querySelector('input').value
  const url = 'https://pokeapi.co/api/v2/pokemon/'+choice
  const res = await fetch(url)
  const data = await res.json()
  console.log(data)

  document.querySelector('img').src=data.sprites.front_default
  document.querySelector('h2').innerText=data.name

  function statBarMaker(statClass,statAPIValue,statId) {
    document.querySelector(statClass).innerText=statAPIValue
    let statTag = document.getElementById(statId)
    statTag.style.width = (statAPIValue*2) + 'px'
    statBarColorPicker(statAPIValue,statTag)
  }

  statBarMaker('.hp',data.stats[0].base_stat,'hpBar')
  statBarMaker('.att',data.stats[1].base_stat,'attBar')
  statBarMaker('.def',data.stats[2].base_stat,'defBar')
  statBarMaker('.spa',data.stats[3].base_stat,'spaBar')
  statBarMaker('.spd',data.stats[4].base_stat,'spdBar')
  statBarMaker('.spe',data.stats[5].base_stat,'speBar')
}

function statBarColorPicker(statValue,statTag){
  if (statValue>=100){
    statTag.style.background  = 'green'
  } else if (statValue >=80) {
    statTag.style.background = 'yellow'
  } else if (statValue >= 60) {
    statTag.style.background = 'orange'
  } else {
    statTag.style.background = 'red'
  }
}



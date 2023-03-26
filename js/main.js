//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  const url = 'https://pokeapi.co/api/v2/pokemon/'+choice

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('img').src=data.sprites.front_default
        document.querySelector('h2').innerText=data.name

        document.querySelector('.hp').innerText=data.stats[0].base_stat
        let hpValue=data.stats[0].base_stat
        let hpTag = document.getElementById('hpBar')
        hpTag.style.width = (hpValue*2) + 'px'
        statBarColorPicker(hpValue,hpTag)
       
        document.querySelector('.att').innerText=data.stats[1].base_stat
        let attValue=data.stats[1].base_stat
        let attTag = document.getElementById('attBar')
        attTag.style.width = (attValue*2) + 'px'
        statBarColorPicker(attValue,attTag)

        document.querySelector('.def').innerText=data.stats[2].base_stat
        let defValue=data.stats[2].base_stat
        let defTag = document.getElementById('defBar')    
        defTag.style.width = (defValue*2) + 'px'
        statBarColorPicker(defValue,defTag)

        document.querySelector('.spa').innerText=data.stats[3].base_stat
        let spaValue=data.stats[3].base_stat
        let spaTag = document.getElementById('spaBar')
        spaTag.style.width = (spaValue*2) + 'px'
        statBarColorPicker(spaValue,spaTag)

        document.querySelector('.spd').innerText=data.stats[4].base_stat
        let spdValue=data.stats[4].base_stat
        let spdTag = document.getElementById('spdBar')
        spdTag.style.width = (spdValue*2) + 'px'
        statBarColorPicker(spdValue,spdTag)

        document.querySelector('.spe').innerText=data.stats[5].base_stat
        let speValue=data.stats[5].base_stat
        let speTag = document.getElementById('speBar')
        speTag.style.width = (speValue*2) + 'px'
        statBarColorPicker(speValue,speTag)

      })
      .catch(err => {
          console.log(`error ${err}`)
      });
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



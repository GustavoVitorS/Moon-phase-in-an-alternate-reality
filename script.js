universeGo = (earths, phases, posX, posY, size, rot) => {

  shift = (id, arr) => {
    document.getElementById(id).innerHTML = arr[0]
    arr.push(arr[0])
    arr.shift()
    return arr
  }

  move = (id, arr, attr) => {
    const elm = document.getElementById('moon')
    elm.style[attr] = arr[0] + (attr === 'fontSize' ? 'px' : '')
    arr.push(arr[0])
    arr.shift()
    return arr
  }

  const moon = document.getElementById('moon')
  const adj = parseInt(size[0]) / 2 * -1 + 'px'
  moon.style.marginTop = adj
  moon.style.marginLeft = adj

  earths = shift('earth', earths)
  phases = shift('moon', phases)
  posX = move('moon', posX, 'left')
  posY = move('moon', posY, 'top')
  size = move('moon', size, 'fontSize')

  const sun = document.getElementById('sun')
  sun.style.transform = "rotate(" + rot + "deg)"
  rot += 10

  setTimeout(() => { universeGo(earths, phases, posX, posY, size, rot) }, 500)
}

universeGo(
  ['🪐', '🪐', '🪐'],
  ['🌑', '🌒', '🌓', '🌔', '🌕', '🌖', '🌗', '🌘'],
  ['50%', '45%', '30%', '15%', '10%', '18%', '30%', '42%'],
  ['50%', '60%', '70%', '60%', '50%', '40%', '35%', '40%'],
  ['50', '75', '100', '75', '50', '30', '10', '30'],
  0,
)

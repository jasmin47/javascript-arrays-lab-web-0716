const app = "I don't do much."

function destructivelyAppendKitten(name) {
  kittens.push(name)
  return kittens
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
  return kittens
}

function destructivelyRemoveLastKitten() {
  kittens.pop()
  return kittens
}

function destructivelyRemoveFirstKitten() {
  kittens.shift()
  return kittens
}

function appendKitten(name) {
  var kittenAdded = [...kittens, name]
  return kittenAdded
}

function prependKitten(name) {
  var kittenAdded = [name, ...kittens]
  return kittenAdded
}

function removeLastKitten() {
  var lastRemoved = [...kittens]
  lastRemoved.pop()
  return lastRemoved
}

function removeFirstKitten() {
  var firstRemoved = [...kittens]
  firstRemoved.shift()
  return firstRemoved
}

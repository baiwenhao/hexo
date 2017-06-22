var log = (str) => console.log(str)
const obj = {values:{}}
const d = new Date()
let i = 1
for (; i < 30; i++) {
  if (i === 1) {
    obj.defaultValue = d.toLocaleDateString()
  }
  obj.values[i]= d.toLocaleDateString()
}
obj.style = 'center'

log(d.toLocaleDateString())


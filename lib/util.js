import moment from 'moment'


export function clone() {
  let a = [{}]
  for (var k in arguments) {
    a.push(arguments[k])
  }
  return Object.assign.apply(null, a)
}


Array.prototype.filterMap = function filterMap(filterfn, mapfn) {
  return this.map(e => {
    if (filterfn(e)) {
      return mapfn(e)
    }
    return e
  });
}


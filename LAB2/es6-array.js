const array = [1, 2, 3, 4, 5, 6]

const filterArr = array.filter((idx) => idx%2 === 0).map((idx) => idx *2)
console.log(filterArr)

// const getarray = array.map((item) => item +2 )

// console.log(getarray)


// const cars = ['toyota', 'mazda', 'subaru']

// const getCar = cars.reduce((car) => car === ['toyota', 'force', 'tesla'])
// console.log(getCar)


// const machine = new Array ('boat', 'hello', 'flutter')

// const getMachine = [...machine]
// getMachine[0 ] = "Thiraphat"
// console.log(machine)
// console.log(getMachine)


const machine1 = new Array ('boat', 'hello', 'flutter')
// console.log(machine1)

// const getMachine1 = machine1.pop()
// console.log(getMachine1)


// const shifts = machine1.shift()
// console.log(shifts)


// const unshifts = machine1.unshift("flutter")
// console.log(unshifts)

// const include = ['a', 'b', 'c', 'flutter'].includes(machine1)
// console.log(include)

// const slices = machine1.slice(1, 2)

// console.log(slices)

// const splices = machine1.splice(0, 1, [...array])

// console.log(splices)

const concats = machine1.concat([...array])
console.log(concats.toString().toUpperCase())
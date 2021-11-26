const {sum, sub} = require('./calculator')

it('should sum 2 and 2 and the result must be 4',()=>{
  expect(sum(2,2)).toBe(4);
})

it("should sum 2 and 2 even if one of them is a string and return 4",()=>{
  expect(sum("2","2")).toBe(4)
})

it("should throw an error if what is provided to the method cannot be summed",()=>{

  // para capturar o erro, deve passar uma callback no expect
  expect(()=>{
    sum("",2)
  }).toThrowError()

  expect(()=>{
    sum([2,2])
  }).toThrowError()

  expect(()=>{
    sum({})
  }).toThrowError()

  expect(()=>{
    sum()
  }).toThrowError()
})

it("should sub 4 and 2 and the result must be 2",()=>{
  expect(sub(4,2)).toBe(2)
})

it("should sub 6 and 3 and the result must b 3",()=>{
  expect(sub(6,3)).toBe(3)
})


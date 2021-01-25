import App from '../src/App.js';

describe('TDD', () => {
    test('TFD', () => {
        
        expect(1).toBe(1)

    })
})

// describe('Working with functions', () => {
//     it('should not return 4', () => {
//       expect(utils.sum(2, 4)).not.toBe(4)
//     })
//     test('adds 1 + 2 to equal 3', () => {
//       expect(utils.sum(1, 2)).toBe(3)
//     })
//     it('should divide baseSalary by number of months', () => {
//       const baseSalary = utils.baseSalary(500)
//       expect(baseSalary).toBe(500 / 12)
//       expect(baseSalary).toBeGreaterThan(5)
//     })
//     it('should return undefined if no argument is set', () => {
//       expect(utils.baseSalary()).toBeUndefined()
//     })
//   })
  
//   describe('Working with Promises', () => {
//     test('should return peanut butter', () => {
//       utils.stringPromise()
//         .then(data => {
//           expect(data).not.toBeNull()
//           expect(data).toMatch(/peanut/)
//           expect(data).toBeTruthy()
//           expect(data).not.toBeInstanceOf(Number)
//         })
//     })
//   })
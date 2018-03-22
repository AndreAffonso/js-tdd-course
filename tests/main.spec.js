import { expect } from 'chai';
import FizzBuzz from '../src/main';

describe('Main', () => {
  it('Should return `Fizz` when multiple of 3', () => {
    expect(FizzBuzz(3)).to.be.equal('Fizz');
    expect(FizzBuzz(6)).to.be.equal('Fizz');
  });

  it('Should return `Buzz` when multiple of 5', () => {
    expect(FizzBuzz(5)).to.be.equal('Buzz');
    expect(FizzBuzz(20)).to.be.equal('Buzz');
  });

  it('Should return `FizzBuzz` when multiple of 3 and 5', () => {
    expect(FizzBuzz(30)).to.be.equal('FizzBuzz');
    expect(FizzBuzz(15)).to.be.equal('FizzBuzz');
  });

  it('Should return the number when no multiple', () => {
    expect(FizzBuzz(7)).to.be.equal(7);
    expect(FizzBuzz(13)).to.be.equal(13);
  });

  it('Should return 0 when zero', () => {
    expect(FizzBuzz(0)).to.be.equal(0);
  });
});

// import { expect } from 'chai';
// import { sum, sub, mult, div } from '../src/main';

// describe('Calc', () => {
//   // smoke tests

//   it('Should exists method sum', () => {
//     expect(sum).to.exist;
//     expect(sum).to.be.a('function');
//   });
//   it('Should exists method sub', () => {
//     expect(sub).to.exist;
//     expect(sub).to.be.a('function');
//   });
//   it('Should exists method mult', () => {
//     expect(mult).to.exist;
//     expect(mult).to.be.a('function');
//   });
//   it('Should exists method div', () => {
//     expect(div).to.exist;
//     expect(div).to.be.a('function');
//   });

//   describe('Sum', () => {
//     it('should return 4 when sum(2,2)', () => {
//       expect(sum(2, 2)).to.be.equal(4);
//     });
//   });

//   describe('Sub', () => {
//     it('should return 4 when sub(6,2)', () => {
//       expect(sub(6, 2)).to.be.equal(4);
//     });

//     it('should return -4 when sub(6,10)', () => {
//       expect(sub(6, 10)).to.be.equal(-4);
//     });
//   });

//   describe('Mult', () => {
//     it('should return 4 when sub(2,2)', () => {
//       expect(mult(2, 2)).to.be.equal(4);
//     });
//   });

//   describe('Div', () => {
//     it('should return 2 when sub(10,5) hahdahhahs', () => {
//       expect(div(10, 5)).to.be.equal(2);
//     });

//     it('should return `não é possível divisão por zero` when divide by zero', () => {
//       expect(div(4, 0)).to.be.equal('Não é possível divisão por zero');
//     });
//   });
// });

// describe('Method A', () => {
//   context.skip('Case 1', () => {
//     it('should happen blablabla', () => {
//       // espera que aconteça
//       // Entra de dados / método sum(2,2)
//       // espera retornar (4 ) => true
//       throw new Error('errinho de leve');
//     });
//   });
//   context('Case 2', () => {
//     it('should happen lelele pagode', () => {
//       // espera que aconteça
//       // Entra de dados / método sum(2,2)
//       // espera retornar (4 ) => true
//     });
//   });
// });

// describe('Method B', () => {});

// const expect = require('chai').expect;

// describe('Main', () => {
//   let arr;
//   // roda uma vez antes do bloco
//   before(() => {
//     // inicia conexão no banco
//     // criar conjunto de dados
//   });

//   // roda uma vez depois do bloco
//   after(() => {
//     // fecha conexão do banco
//     // apaga conjunto de dados
//   });

//   // todas as vezes antes de cada bloco
//   beforeEach(() => {
//     arr = [1, 2, 3];
//   });

//   // todas as vezes depois de cada bloco
//   afterEach(() => {});

//   it('should be an array', () => {
//     expect(arr).to.be.an('array');
//   });

//   it('should return true when pop three from the array', () => {
//     expect(arr.pop() === 3).to.be.true;
//   });

//   it('should have a size of 4 when push another value to the array', () => {
//     arr.push(4);
//     expect(arr).to.have.lengthOf(4);
//   });

//   it('should have a size of 2 when pop a value from the array', () => {
//     arr.pop();
//     expect(arr).to.have.lengthOf(2);
//   });

//   it('should remove the value 3 when use pop in the array', () => {
//     arr.pop();
//     expect(arr).to.not.include(3);
//   });
// });

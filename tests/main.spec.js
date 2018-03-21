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

// tests/calculadora.test.js
const { sumar, restar, multiplicar, dividir } = require('../src/calculadora');

describe('Funciones matemáticas básicas', () => {
  test('La función sumar debe retornar la suma correcta', () => {
    expect(sumar(1, 2)).toBe(3);
    expect(sumar(-1, -1)).toBe(-2);
    expect(sumar(0, 0)).toBe(0);
  });

  test('La función restar debe retornar la resta correcta', () => {
    expect(restar(5, 3)).toBe(2);
    expect(restar(-1, -1)).toBe(0);
    expect(restar(0, 0)).toBe(0);
  });

  test('La función multiplicar debe retornar el producto correcto', () => {
    expect(multiplicar(2, 3)).toBe(6);
    expect(multiplicar(-2, -3)).toBe(6);
    expect(multiplicar(0, 5)).toBe(0);
  });

  test('La función dividir debe retornar el cociente correcto', () => {
    expect(dividir(6, 3)).toBe(2);
    expect(dividir(-6, -3)).toBe(2);
    expect(dividir(0, 1)).toBe(0);
  });

  test('La función dividir debe lanzar un error al dividir por cero', () => {
    expect(() => dividir(1, 0)).toThrow('División por cero');
  });
});
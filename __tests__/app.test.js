// __tests__/app.test.js
function sum(a, b) {
    return a + b;
  }
  
  test('Ajout de 1 + 2 = 3', () => {
    expect(sum(1, 2)).toBe(3);
  });
  
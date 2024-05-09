import { render, screen } from '@testing-library/react';
const addCommas = require("./addCommas");

describe ('addCommas', () => {
  test('it is a function', () => {
    expect(typeof addCommas).toBe('function')
  });

  test('it adds commas', () => {
    expect(addCommas(1)).toEqual('1');
    expect(addCommas(10000)).toEqual('10,000');
    expect(addCommas(5000)).toEqual('5,000');
    expect(addCommas(25000)).toEqual('25,000');
    expect(addCommas(25500000)).toEqual('25,500,000');
  })
})

import { describe, it } from 'node:test';
import { expect } from 'chai';

describe('a suite', () => {
  it('passing test', () => {
    expect(true).to.be.a('boolean').that.equals(true);
  });

  it('failing test', () => {
    expect({foo: 'hello'})
      .to.be.an('object')
      .that.has.property('foo')
      .that.is.a('number', 'should be a number')
      .that.equals(123);
  });

  it.skip('a skipped test', () => {
    throw new Error('does not matter');
  });
});

it('a snapshot test', (t) => {
  const value = { foo: 1 };
  value.circular = value;

  t.assert.snapshot(value);
});

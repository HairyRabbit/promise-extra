import { PromiseMap } from '../lib'

test('Should resolved when all promise were resolved.', (done) => {
  PromiseMap({
    foo: Promise.resolve(true),
    bar: Promise.resolve(42),
    baz: Promise.resolve('qux')
  }).then(res => {
    expect(res).toEqual({
      foo: true,
      bar: 42,
      baz: 'qux'
    })
  }).then(done)
})

test('Should rejected when one of promise was rejected.', (done) => {
  const error = new Error(42)
  PromiseMap({
    foo: Promise.resolve(true),
    bar: Promise.reject(error),
    baz: Promise.resolve('qux')
  }).catch(err => {
    expect(err).toEqual(error)
  }).then(done)
})

test('Should rejected when all the promise were rejected.', (done) => {
  const err1 = new Error('foo')
  const err2 = new Error('bar')
  const err3 = new Error('baz')
  PromiseMap({
    foo: Promise.reject(err1),
    bar: Promise.reject(err2),
    baz: Promise.reject(err3)
  }).catch(err => {
    expect(err).toEqual(err1)
  }).then(done)
})

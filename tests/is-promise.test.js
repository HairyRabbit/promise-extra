import { isPromise } from '../lib'

test('should be true', () => {
  expect(isPromise(Promise.resolve(42))).toBe(true)
  expect(isPromise(Promise.reject(42).catch(e => e))).toBe(true)
  expect(isPromise({ then: () => {} })).toBe(true)

  const p = () => new Promise(resolve => resolve(42))
  expect(isPromise(p())).toBe(true)
})

test('should be false', () => {
  expect(isPromise(null)).toBe(false)
  expect(isPromise('foo')).toBe(false)
  expect(isPromise({})).toBe(false)
  expect(isPromise(() => {})).toBe(false)
  expect(isPromise(42)).toBe(false)
})

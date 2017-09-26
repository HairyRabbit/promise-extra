// -*- mode: js -*-
// -*- coding: utf-8 -*-
// @flow

/**
 * PromiseMap
 *
 * Map version of `Promise.all`.
 *
 * Examples:
 *
 * PromiseMap({
 *   foo: Promise.resolve(1),
 *   bar: Promise.resolve(2)
 * }).then(res => {
 *   foo: 1
 *   bar: 2
 * })
 *
 * PromiseMap({
 *   foo: Promise.resolve(1),
 *   bar: Promise.reject(new Error(2))
 * }).catch(err => {
 *   throw err //=> Error 2
 * })
 */

type Obj<T> = { [key: string]: Promise<T> }
type PromiseObj<T> = Promise<$ObjMap<T, typeof $await>>

export default function<A, O: Obj<A>>(map: O): PromiseObj<O> {

  // Store keys and values.
  const keys = []
  const vals = []
  
  for (let key in map) {
    keys.push(key)
    vals.push(map[key])
  }

  // Map result by promise.all.
  return new Promise(function (resolve, reject) {
    Promise.all(vals)      
      .then(res => {
	      return resolve(
	        keys.reduce(function (acc, curr, idx) {
	          acc[curr] = res[idx]
	          return acc
	        }, {})
	      )
      })
      .catch(err => reject(err))
  })
}

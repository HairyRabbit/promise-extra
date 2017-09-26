// -*- mode: js -*-
// -*- coding: utf-8 -*-
// @flow

/**
 * isPromise
 *
 * Test object is a promise.
 *
 * Examples:
 *
 * isPromise(null)                //=> false
 * isPromise(42)                  //=> false
 * isPromise(Promise.resolve(42)) //=> true
 * isPromise({ then: id })        //=> true
 */

export default function (obj: *): boolean {
  if(!!obj
     && ~['object', 'function'].indexOf(typeof obj)
     && typeof obj.then === 'function') return true

  return false
}

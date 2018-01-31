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

export default function (obj: *): boolean %checks {
  return !!obj
    && Boolean(~['object', 'function'].indexOf(typeof obj))
     && typeof obj.then === 'function'
}

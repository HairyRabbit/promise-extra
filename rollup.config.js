import startCase from 'lodash/startCase'
import babel     from 'rollup-plugin-babel'
import uglify    from 'rollup-plugin-uglify'
import pkg       from './package.json'

const input     = pkg.main
const name      = startCase(pkg.npmName).replace(/\s/g, '')
const format    = 'umd'
const sourcemap = true

let output, plugins

if(process.env.NODE_ENV === 'development') {
  output = {
    file: 'dist/promise-extra.js',
    format,
    sourcemap
  }
  
  plugins = [
    babel()
  ]
} else {
  output = {
    file: 'dist/promise-extra.min.js',
    format,
    sourcemap
  }
  
  plugins = [
    babel(),
    uglify()
  ]
}

export default  {
  input,
  output,
  name,
  plugins
}

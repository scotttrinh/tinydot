import nodeResolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'

export default {
  entry: 'src/main.js',
  moduleName: 'tinydot',
  format: 'umd',
  plugins: [
    nodeResolve(),
    commonjs({
      exclude: [
        'node_modules/lodash-es/**'
      ]
    })
  ],
  dest: 'build/main.js'
}

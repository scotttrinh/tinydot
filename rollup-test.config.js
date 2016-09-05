import nodeResolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'

export default {
  entry: 'test/tests.js',
  moduleName: 'tinydot',
  format: 'umd',
  plugins: [
    nodeResolve(),
    commonjs({
      exclude: [
        'src/**',
        'test/**',
        'node_modules/lodash-es/**'
      ]
    })
  ],
  dest: 'build/tests.js'
}

import 'angular'
import 'angular-mocks/angular-mocks'

const context = require.context('.', true, /.spec$/)
context.keys().forEach(context)

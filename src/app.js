import './styles/app.css'

import 'babel-polyfill'
import angular from 'angular'
import uirouter from 'angular-ui-router'

import routing from './app.config'
import accounts from './modules/accounts'
import header from './modules/header'

angular
  .module('app', [ uirouter, accounts, header ])
  .config(routing)

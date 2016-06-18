import './accounts.css';

import angular from 'angular'
import uirouter from 'angular-ui-router'

import routing from './accounts.routes'
import controller from './accounts.controller'
import service from './accounts.service'
import dataService from '../../services/data.service'

export default angular
  .module('modules.accounts', [ uirouter, dataService ])
  .controller('AccountsCtrl', controller)
  .service('AccountsSrv', service)
  .config(routing)
  .name

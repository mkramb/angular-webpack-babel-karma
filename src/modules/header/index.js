import './header.css';

import angular from 'angular';
import directive from './header.directive'

export default angular.module('modules.header', [])
  .directive('header', directive)
  .name;

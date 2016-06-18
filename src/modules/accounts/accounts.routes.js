export default function routes($stateProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      template: require('./accounts.html'),
      controller: 'AccountsCtrl',
      controllerAs: 'ctrl'
    });
}

routes.$inject = ['$stateProvider'];

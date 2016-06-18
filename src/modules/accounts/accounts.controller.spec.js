import accounts from './index'

describe('AccountsCtrl', function() {
  let ctrl
  let scope
  let deferred
  let AccountsSrvMock = {
    getAll: sinon.stub().returns('accounts'),
    getColumns: sinon.stub().returns('columns'),
    getTotals: sinon.stub().returns('totals'),
    refresh: sinon.stub(),
    add: sinon.stub()
  }

  beforeEach(angular.mock.module(accounts, function($provide) {
     $provide.value('AccountsSrv', AccountsSrvMock)
  }))

  beforeEach(inject(function($rootScope, $q, $controller) {
    deferred = $q.defer();
    scope = $rootScope.$new();

    AccountsSrvMock.refresh.returns(deferred.promise)
    ctrl = $controller('AccountsCtrl', {
      $scope: $rootScope.$new()
    })

    deferred.resolve('mockAccounts');
    scope.$apply();
  }))

  it('should be able to call refresh accounts', function() {
    expect(AccountsSrvMock.refresh.called).to.true
  })

  it('should be able to call add accounts', function() {
    ctrl.addAccount()

    expect(AccountsSrvMock.add.called).to.true
    expect(AccountsSrvMock.getAll.called).to.true
    expect(AccountsSrvMock.getTotals.called).to.true
  })
})

import accounts from './index'

const mockAccounts = [
  { name: 'AAA', marketValue: 100, cash: 200, legend: 'orange' },
  { name: 'BBB', marketValue: 100, cash: 200, legend: 'orange' },
  { name: 'CCC', marketValue: 100, cash: 200, legend: 'orange' }
]

describe('AccountsSrv', function() {
  let scope
  let service
  let deferred
  let DataSrvMock = {
    getAccounts: sinon.stub()
  }

  beforeEach(angular.mock.module(accounts, function($provide) {
     $provide.value('DataSrv', DataSrvMock)
  }))

  beforeEach(inject(function($q, $rootScope, AccountsSrv) {
    deferred = $q.defer();
    scope = $rootScope.$new();

    DataSrvMock.getAccounts.returns($q.when(mockAccounts))
    service = AccountsSrv

    service.refresh()
    scope.$apply();
  }))

  it('should be able to get accounts', function() {
    expect(service.getAll()).to.eql(mockAccounts)
  })

  it('should be able to get columns', function() {
    expect(service.getColumns()).to.eql([
      'name', 'market Value', 'cash', 'legend'
    ])
  })

  it('should be able to callculate totals', function() {
    expect(service.getTotals()).to.eql({
      marketValue: 300,
      cash: 600
    })
  })
})

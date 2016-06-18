const dummyAccount = () => {
  return {
    name: String(new Date().getTime()),
    marketValue: Math.random() * 100000,
    cash: Math.random() * 400000,
    legend: 'cyan'
  }
}

export default function AccountsController(AccountsSrv) {
  let vm = this

  AccountsSrv.refresh().then(() => {
    vm.accounts = AccountsSrv.getAll()
    vm.columns = AccountsSrv.getColumns()
    vm.totals = AccountsSrv.getTotals()
  })

  vm.addAccount = function()  {
    AccountsSrv.add(dummyAccount())

    vm.accounts = AccountsSrv.getAll()
    vm.totals = AccountsSrv.getTotals()
  }

  vm.refreshAccounts = function() {
    AccountsSrv.refresh().then(() => {
      vm.accounts = AccountsSrv.getAll()
      vm.totals = AccountsSrv.getTotals()
    })
  }
}

AccountsController.$inject = ['AccountsSrv']

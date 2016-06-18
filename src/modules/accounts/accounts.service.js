const insertSpaceBeforeCapital = function (string) {
  return string.replace(/([A-Z])/, ' $1').trim()
}

export default class AccountsSrv {
  constructor($q, DataSrv) {
    this.$q = $q
    this.DataSrv = DataSrv
    this.data = []
  }
  add(account) {
    this.data.push(account)
  }
  refresh() {
    return this.DataSrv.getAccounts().then((data) => {
      this.data = data
    })
  }
  getColumns() {
    return this.data && this.data.length && Object.keys(this.data[0])
      .map(insertSpaceBeforeCapital)
  }
  getAll() {
    return this.data
  }
  getTotals() {
    let totals = {
      marketValue: 0,
      cash: 0
    }

    this.data.forEach((item) => {
      totals.marketValue += item.marketValue
      totals.cash += item.cash
    })

    return totals
  }
}

AccountsSrv.$inject = ['$q', 'DataSrv']

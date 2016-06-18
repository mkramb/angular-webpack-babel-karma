export default function header() {
  return {
    restrict: 'A',
    replace: true,
    scope: {},
    template: require('./header.html')
  }
}

export function _ensurePerformance(): void {
  // performance polyfill. Copied from https://gist.github.com/paulirish/5438650

  // https://gist.github.com/paulirish/5438650
  // @license http://opensource.org/licenses/MIT
  // copyright Paul Irish 2015

  if ('performance' in self === false) {
    self.performance = {};
  }

  Date.now = (Date.now || function() {
    return new Date().getTime();
  });

  if ('now' in self.performance === false) {
    let nowOffset = Date.now();

    if (performance.timing && performance.timing.navigationStart) {
      nowOffset = performance.timing.navigationStart;
    }

    self.performance.now = function now() {
      return Date.now() - nowOffset;
    };
  }
}

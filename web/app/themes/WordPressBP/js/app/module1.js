var $ = require('jQuery')

var Module1 = function (options) {
  this.options = $.extend({}, Module1.DEFAULTS, options)
  //this.init()
}

Module1.DEFAULTS = {
  msg: 'Module1 loaded.'
}

Module1.prototype = {
  init: function () {
    console.log(this.options.msg)
  }
}

module.exports = Module1

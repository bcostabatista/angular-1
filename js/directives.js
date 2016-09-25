define(['angularAMD'], function (app) {
  app.directive('phoneNumber', function () {
    return {
      require: 'ngModel',
      restrict: 'A',
      link: function (scope, $element) {
        $element.bind('keyup', function () {
          var regex = /^(\d{3})(\d{3})(\d)+$/
          var mask = '($1) $2-$3'
          var apply = scope.directive.phone.replace(regex, mask)
          $element.val(apply)
        })
      }
    }
  })
  app.directive('currency', function () {
    var precision = 2
    return {
      require: 'ngModel',
      restrict: 'A',
      link: function (scope, $element, $attrs, $ctrl) {
        $element.bind('keyup', function () {
          var plainNumber = $element[0].value.replace(/[^\d|\-+|\+]/g, '')
          var length = plainNumber.length
          var intValue = plainNumber.substring(0, length-precision)
          var decimalValue = plainNumber.substring(length-precision, length)
          var plainNumberWithDecimal = intValue + '.' + decimalValue
          var formatted = plainNumberWithDecimal
          $element.val(formatted)
        })
      }
    }
  })
  app.directive('jumper', function () {
    return {
      restrict: 'A',
      link: function (scope, $element, $attrs) {
        $element.bind('keyup', function () {
          var maxlength = $attrs.maxlength
          var value = $element[0].value.length
          var tabindex = $attrs.tabindex
          if(value >= 5) {
            var go = parseInt(tabindex) + 1
            document.getElementById('input-' + go).focus()
          }
          if(value <= 0) {
            var backwards = parseInt(tabindex) - 1
            document.getElementById('input-' + backwards).focus()
          }
        })
      }
    }
  })
})

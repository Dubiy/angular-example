# Angular demo

    npm install
    
    
## get started
  
    npm, gulp, service-dependency

## base directives
  
    ng-app, ng-init, ng-model, ng-class, ng-style,

## data binding
  
    {{ double curly braces }}, ng-model, 

## scopes, rootScope

    scope inheritance

Controller

    angular.module('invoice1', [])
    .controller('InvoiceController', function InvoiceController() {
      this.qty = 1;
      this.cost = 2;
      this.inCurr = 'EUR';
      this.currencies = ['USD', 'EUR', 'CNY'];
      this.usdToForeignRates = {
        USD: 1,
        EUR: 0.74,
        CNY: 6.09
      };
    
      this.total = function total(outCurr) {
        return this.convertCurrency(this.qty * this.cost, this.inCurr, outCurr);
      };
      this.convertCurrency = function convertCurrency(amount, inCurr, outCurr) {
        return amount * this.usdToForeignRates[outCurr] / this.usdToForeignRates[inCurr];
      };
      this.pay = function pay() {
        window.alert('Thanks!');
      };
    });

Template

    <div ng-app="invoice1" ng-controller="InvoiceController as invoice">
      <b>Invoice:</b>
      <div>
        Quantity: <input type="number" min="0" ng-model="invoice.qty" required >
      </div>
      <div>
        Costs: <input type="number" min="0" ng-model="invoice.cost" required >
        <select ng-model="invoice.inCurr">
          <option ng-repeat="c in invoice.currencies">{{c}}</option>
        </select>
      </div>
      <div>
        <b>Total:</b>
        <span ng-repeat="c in invoice.currencies">
          {{invoice.total(c) | currency:c}}
        </span><br>
        <button class="btn" ng-click="invoice.pay()">Pay</button>
      </div>
    </div>

Scheme

    https://docs.angularjs.org/img/guide/concepts-databinding2.png



* filters
    
* custom filters
* form validation

* controller

* services
* templates
* routing

Extensions

    $$Watchers    
    https://chrome.google.com/webstore/detail/angular-watchers/nlmjblobloedpmkmmckeehnbfalnjnjk
    
    Batarang
    https://chrome.google.com/webstore/detail/angularjs-batarang/ighdmehidhipcmcojjgiloacoafjmpfk
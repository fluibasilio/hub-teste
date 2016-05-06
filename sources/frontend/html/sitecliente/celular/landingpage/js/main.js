(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
header();
var wrap = document.querySelector('#wrap');
var content = document.querySelector('.pm-content');
var loader = document.querySelector('.loader');

loader.style.display = 'none';
content.style.display = 'block';
wrap.style.display = 'block';

// EXEMPLO DE MÓDULOS

var moduleExampleInJs = require('./modules/module-example-in-js');
var moduleExampleInCoffee = require('./modules/module-example-in-coffee');

moduleExampleInJs.methodExample();
moduleExampleInCoffee.methodExample();

console.log('This is the main.js file');
},{"./modules/module-example-in-coffee":2,"./modules/module-example-in-js":3}],2:[function(require,module,exports){
var ModuleExampleInCoffee;

module.exports = ModuleExampleInCoffee = (function() {
  function ModuleExampleInCoffee() {}

  ModuleExampleInCoffee.methodExample = function() {
    return console.log("This is a module example written in .coffee");
  };

  return ModuleExampleInCoffee;

})();


},{}],3:[function(require,module,exports){
var ModuleExampleInJs = {};

ModuleExampleInJs.methodExample = function() {
  console.log("This is a module example written in .js" );
}

module.exports = ModuleExampleInJs;
},{}]},{},[1]);

'use strict';
var moduloPrincipal = angular.module('AgenciaEmpleo',["ngTable","ui.router"]);

moduloPrincipal.controller('listadoPrincipal', ['$scope', function($scope) {

  this.greeting = 'Hola!';

  $scope.datos = [
	  {"id":"1","nombre":"Camilo","apellido":"Concha","cedula":"1023946"},
	  {"id":"2","nombre":"Andrea","apellido":"García","cedula":"9023946"},
	  {"id":"3","nombre":"Luciana","apellido":"Pérez","cedula":"5023946"},

  ];




}]);	
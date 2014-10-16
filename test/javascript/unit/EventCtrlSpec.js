'use strict';
describe('gravitasTest', function(){
	beforeEach(module('events'));
	var scope, listEventsController;
	beforeEach(inject(function($compile,$rootScope){
		scope=$rootScope.$new();
	}));
	describe('gravitasListEventsController', function(){
		beforeEach(inject(function($controller){
			listEventsController = $controller("listEventsController", {$scope:scope});
		}));
		it('should create "events" model with 0 events', function(){
			var scope = {},
				ctrl = new listEventsController(scope);
			expect(scope.events.length).toBe(0);
		});
	})
});
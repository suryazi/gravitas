// This is a manifest file that'll be compiled into application.js.
//
// Any JavaScript file within this directory can be referenced here using a relative path.
//
// You're free to add application-wide JavaScript to this file, but it's generally better 
// to create separate JavaScript files as needed.
//
//= require jquery/dist/jquery
//= require angular/angular
//= require angular-route/angular-route
//= require angular-http-auth/src/http-auth-interceptor
//= require angular-bootstrap/ui-bootstrap
//= require angular-bootstrap/ui-bootstrap-tpls
//= require gravitas/app
//= require gravitas/home
//= require gravitas/login
//= require gravitas/events
//= require_tree .
//= require_self
console.log("gravitas manifest load complete.");
if (typeof jQuery !== 'undefined') {
	(function($) {
		$('#spinner').ajaxStart(function() {
			$(this).fadeIn();
		}).ajaxStop(function() {
			$(this).fadeOut();
		});
	})(jQuery);
}

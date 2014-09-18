<!DOCTYPE html>
<html ng-app="gravitasApp" lang="en">
<!--[if lt IE 7 ]> <html lang="en" class="no-js ie6"> <![endif]-->
<!--[if IE 7 ]>    <html lang="en" class="no-js ie7"> <![endif]-->
<!--[if IE 8 ]>    <html lang="en" class="no-js ie8"> <![endif]-->
<!--[if IE 9 ]>    <html lang="en" class="no-js ie9"> <![endif]-->
<!--[if (gt IE 9)|!(IE)]><!--> <html lang="en" class="no-js"><!--<![endif]-->
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
		<title><g:layoutTitle default="Gravitas"/></title>
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<link rel="shortcut icon" href="${assetPath(src: 'favicon.ico')}" type="image/x-icon">
		<link rel="apple-touch-icon" href="${assetPath(src: 'apple-touch-icon.png')}">
		<link rel="apple-touch-icon" sizes="114x114" href="${assetPath(src: 'apple-touch-icon-retina.png')}">
  		<asset:stylesheet src="application.css"/>
		<asset:javascript src="application.js"/>
		<g:layoutHead/>
	</head>
	<body class="show-login">
        <div class="page-header container">
            <div class="row">
                <div class="span6">
                    Welcome to Gravitas
                </div>
                <div class="span6" style="text-align: right;" ng-controller="logoutController" ng-show="isAuthenticated">
                    Welcome, {{currentUser}}.
                    <a href="" ng-click="logOut()">(Log out)</a>
                </div>
            </div>
        </div>

        <div id="login-holder" class="container" style="width: 300px;">
            <div id="login-error" class="alert alert-error">
                <button type="button" class="close" onclick="$('#login-error').hide();">&times;</button>
                Email address and/or password incorrect.
            </div>
            <div id="loginbox">
                <div id="login-inner" ng-controller="loginController">
                    <form name="loginForm" role="form" ng-submit="logIn()" autocomplete="off">
                        <div class="form-group">
                            <label for="username">Email Address</label>
                            <input id="username" class="form-control" type="text" ng-model="authData.username"/>
                        </div>
                        <div class="form-group">
                            <label for="password">Password</label>
                            <input id="password" class="form-control" type="password" ng-model="authData.password"/>
                        </div>
                        <input type="submit" class="btn btn-primary" value="Login"/>
                    </form>
                </div>
                <div class="clear"></div>
            </div>
        </div>
        <div id="content" class="container">
		    <g:layoutBody/>
            <br/>
            <div class="col-sm-12">
               <footer>
                &copy;
                <footer:copyright startYear="2013">Cloud Computing Company.</footer:copyright>
               </footer>
           </div>
        </div>
	</body>
</html>

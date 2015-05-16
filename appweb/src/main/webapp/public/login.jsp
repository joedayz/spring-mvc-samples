<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>





<div class="container" ng-app="doChefApp">
	<div  ng-controller="LoginController">
		<legend>
			Inicie Sesión
		</legend>
	
      <div class="alert alert-danger" ng-class="{'': displayLoginError == true, 'none': displayLoginError == false}">
        Usuario o Password Inválidos.
      </div>
      
        <form method="post" action="j_spring_security_check">
            <div>
                <input name="j_username" id="j_username" type="text" class="span12" placeholder="<spring:message code='sample.email' /> "><br/>
                <input name="j_password" id="j_password" type="password"  class="span12" placeholder="Password"><br/>
                <br>
                <button type="submit" name="submit" class="btn btn-default">Inicie Sesión</button>
            </div>
        </form>      
				
	</div>
</div>		

<script src="<c:url value='/resources/js/pages/login.js' />"></script>
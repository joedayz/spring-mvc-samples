<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>

<header>
	<h1>
		<a href="<c:url value="/"/>"><img
			src="<c:url value='/resources/img/shared/logo.png' />" alt="doChef"></a>
	</h1>
	<ul class="nav nav-pills nav-justified">
		<li><a href="recetas-diarias.html">Regístrate</a></li>
		<li><a href="<c:url value="/public/recetas"/>">Recetas Diarias</a></li>
		<li class="active"><a href="<c:url value="/public/consejos"/>">Consejos Alimenticios</a></li>
		<li><a href="<c:url value="/public/planes"/>">Planes Alimenticios</a></li>					
	</ul>
</header>

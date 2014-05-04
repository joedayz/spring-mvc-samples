
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>

<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Modificar Cuenta</title>
</head>
<body>
    <h3>Modificar Cuenta</h3>
    <form action="modificarCuenta" method="post">
        Descripcion: <br/>
        <textarea name="descripcion" rows="5" cols="100">${cuenta.descripcion}</textarea>
        <br/>
        Valor: <br/>
        <input type="text" name="valor" value="${cuenta.valor}"/>
        <br/>
        Tipo: <br/>
        <select name="tipo">
            <option value="INGRESO" ${cuenta.tipo=='INGRESO' ? 'selected':''}>Ingreso</option>
            <option value="SALIDA" ${cuenta.tipo=='SALIDA' ? 'selected':''}>Salida</option>
        </select>
        <br/>
        ¿Pago? <input type="checkbox" name="pago" ${cuenta.pago?'checked':''} />
        <br/>
        Fecha de Pago: <input type="text" name="fechaPago" 
        		value="<fmt:formatDate value="${cuenta.fechaPago.time}" pattern="dd/MM/yyyy" />" />
        <br/>
        <input type="hidden" name="id" value="${cuenta.id}"/>
        <input type="submit" value="Modificar"/>
    </form>
</body>
</html>
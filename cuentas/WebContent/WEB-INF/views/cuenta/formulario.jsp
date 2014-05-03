<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Agregar Cuentas</title>
</head>
<body>

	<h3>Agregar Cuentas</h3>

	<form action="agregarCuenta" method="post">
		Descripcion: <br />
		<textarea name="descripcion" rows="5" cols="100"></textarea>
		<br /> 
		Valor: <br /> 
		<input type="text" name="valor" /><br /> 
		Tipo: <br />
		<select name="tipo">
			<option value="INGRESO">Ingreso</option>
			<option value="SALIDA">Salida</option>
		</select> <br />
		<br /> <input type="submit" value="Agregar" />
	</form>


</body>
</html>
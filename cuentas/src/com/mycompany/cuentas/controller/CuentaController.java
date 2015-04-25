package com.mycompany.cuentas.controller;

import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.mycompany.cuentas.dao.CuentaDAO;
import com.mycompany.cuentas.modelo.Cuenta;

@Controller
public class CuentaController {

	@RequestMapping("/form")
	public String initFormulario() {
		return "cuenta/formulario";
	}

	@RequestMapping("/agregarCuenta")
	public String guardarFormulario(Cuenta cuenta) {
		
		System.out.println("La cuenta agregada es " + cuenta.getDescripcion());
		CuentaDAO dao = new CuentaDAO();
		dao.agregar(cuenta);

		return "cuenta/cuenta-agregada";
	}	
	
	
	
	
	@RequestMapping("/pagarCuenta")
	public void pagar(Long id, HttpServletResponse response){
		CuentaDAO dao = new CuentaDAO();
		dao.pagar(id);
		response.setStatus(200);
	}
	
	
	
	
	
	
	
	@RequestMapping("/eliminarCuenta")
	public String remove(Cuenta cuenta) {
		CuentaDAO dao = new CuentaDAO();
		dao.eliminar(cuenta);
		return "redirect:listarCuentas";
	}
	
	@RequestMapping("/muestraCuenta")
	public String muestra(Long id, Model model) {
	  CuentaDAO dao = new CuentaDAO();
	  model.addAttribute("cuenta", dao.buscarPorId(id));
	  return "cuenta/muestra";
	}	



	
	@RequestMapping("/modificarCuenta")
	public String modificar(Cuenta cuenta) {
	  CuentaDAO dao = new CuentaDAO();
	  dao.modificar(cuenta);
	  return "redirect:listarCuentas";
	}
	
	@RequestMapping("/listarCuentas")
	public String listar(Model model) {
		CuentaDAO dao = new CuentaDAO();
		List<Cuenta> cuentas = dao.listar();
		model.addAttribute("cuentas", cuentas);
		return "cuenta/lista";
	}

}

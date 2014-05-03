package com.mycompany.cuentas.controller;

import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

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
	public ModelAndView listar() {
		CuentaDAO dao = new CuentaDAO();
		List<Cuenta> cuentas = dao.listar();
		ModelAndView mv = new ModelAndView("cuenta/lista");
		mv.addObject("cuentas", cuentas);
		return mv;
	}

}

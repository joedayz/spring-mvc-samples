package com.mycompany.cuentas.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;


@Controller
public class HolaMundoController {

	@RequestMapping("/holaMundoSpring")
	public String mostrarMensaje(){
		System.out.println("hola mundo controller");
		return "holaMundo";
	}
}

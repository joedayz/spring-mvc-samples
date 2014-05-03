package com.mycompany.cuentas.dao;

import java.sql.Connection;
import java.sql.Date;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.List;

import com.mycompany.cuentas.ConnectionFactory;
import com.mycompany.cuentas.modelo.Cuenta;
import com.mycompany.cuentas.modelo.TipoDeCuenta;

public class CuentaDAO {
	private Connection connection;

	public CuentaDAO() {
		try {
			this.connection = new ConnectionFactory().getConnection();
		} catch (SQLException e) {
			throw new RuntimeException(e);
		}
	}

	public void agregar(Cuenta cuenta) {
		String sql = "insert into cuentas (descripcion, pago, valor, tipo) values (?,?,?,?)";
		PreparedStatement stmt;
		try {
			stmt = connection.prepareStatement(sql);
			stmt.setString(1, cuenta.getDescripcion());
			stmt.setBoolean(2, cuenta.isPago());
			stmt.setDouble(3, cuenta.getValor());
			stmt.setString(4, cuenta.getTipo().name());
			stmt.execute();
			connection.close();
		} catch (SQLException e) {
			throw new RuntimeException(e);
		}
		
	}

	public void eliminar(Cuenta cuenta) {

		if (cuenta.getId() == null) {
			throw new IllegalStateException("Id de la cuenta no debe ser nulo.");
		}

		String sql = "delete from cuentas where id = ?";
		PreparedStatement stmt;
		try {
			stmt = connection.prepareStatement(sql);
			stmt.setLong(1, cuenta.getId());
			stmt.execute();
			
			connection.close();
		} catch (SQLException e) {
			throw new RuntimeException(e);
		}
	}

	public void modificar(Cuenta cuenta) {
		String sql = "update cuentas set descripcion = ?, pago = ?, fechaPago = ?, tipo = ?, "
				+ "valor = ? where id = ?";
		PreparedStatement stmt;
		try {
			stmt = connection.prepareStatement(sql);
			stmt.setString(1, cuenta.getDescripcion());
			stmt.setBoolean(2, cuenta.isPago());
			stmt.setDate(3, cuenta.getFechaPago() != null ? new Date(cuenta
					.getFechaPago().getTimeInMillis()) : null);
			stmt.setString(4, cuenta.getTipo().name());
			stmt.setDouble(5, cuenta.getValor());
			stmt.setLong(6, cuenta.getId());
			stmt.execute();
			
			connection.close();
			
		} catch (SQLException e) {
			throw new RuntimeException(e);
		}
	}

	public List<Cuenta> listar() {
		try {
			List<Cuenta> cuentas = new ArrayList<Cuenta>();
			PreparedStatement stmt = this.connection
					.prepareStatement("select * from cuentas");

			ResultSet rs = stmt.executeQuery();

			while (rs.next()) {
				// agrega una cuenta a la lista
				cuentas.add(poblarCuenta(rs));
			}

			rs.close();
			stmt.close();
			connection.close();

			return cuentas;
		} catch (SQLException e) {
			throw new RuntimeException(e);
		}
	}

	public Cuenta buscarPorId(Long id) {

		
		if (id == null) {
			throw new IllegalStateException("Id de la cuenta no debe ser nulo.");
		}

		try {
			PreparedStatement stmt = this.connection
					.prepareStatement("select * from cuentas where id = ?");
			stmt.setLong(1, id);
			ResultSet rs = stmt.executeQuery();

			if (rs.next()) {
				connection.close();
				return poblarCuenta(rs);
			}

			rs.close();
			stmt.close();
			

			connection.close();
			return null;
		} catch (SQLException e) {
			throw new RuntimeException(e);
		}
	}

	public void pagar(Long id) {

		if (id == null) {
			throw new IllegalStateException("Id de la cuenta no debe ser nulo.");
		}

		String sql = "update cuentas set pago = ?, fechaPago = ? where id = ?";
		PreparedStatement stmt;
		try {
			stmt = connection.prepareStatement(sql);
			stmt.setBoolean(1, true);
			stmt.setDate(2, new Date(Calendar.getInstance().getTimeInMillis()));
			stmt.setLong(3, id);
			stmt.execute();
			
			connection.close();
		} catch (SQLException e) {
			throw new RuntimeException(e);
		}
	}

	private Cuenta poblarCuenta(ResultSet rs) throws SQLException {
		Cuenta cuenta = new Cuenta();

		cuenta.setId(rs.getLong("id"));
		cuenta.setDescripcion(rs.getString("descripcion"));
		cuenta.setPago(rs.getBoolean("pago"));
		cuenta.setValor(rs.getDouble("valor"));

		Date fecha = rs.getDate("fechaPago");
		if (fecha != null) {
			Calendar fechaPago = Calendar.getInstance();
			fechaPago.setTime(fecha);
			cuenta.setFechaPago(fechaPago);
		}
		
		cuenta.setTipo(Enum.valueOf(TipoDeCuenta.class, rs.getString("tipo")));
		
		return cuenta;
	}
}

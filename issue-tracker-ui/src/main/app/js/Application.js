//Creamos la aplicacion

window.IssueTrackerApp = new Backbone.Marionette.Application();

//Crear las 4 regiones

IssueTrackerApp.addRegions({
	headerRegion : '#header-region',
	mainRegion : '#main-region',
	dialogRegion : '#dialog-region',
	footerRegion : '#footer-region'
});

// Eventos de la aplicacion
//Inicializar el ruteador

IssueTrackerApp.on('start', function(options) {
	logger.debug("Backbone.history.start");
	Backbone.history.start();
});

//Iniciar la aplicacion
$( function(){
	//Configurar la libreria log4javascript
	window.logger = log4javascript.getLogger();
	consoleAppender = new log4javascript.BrowserConsoleAppender();
	consoleAppender.setLayout(new log4javascript.PatternLayout('%d{HH:mm:ss} %-5p- %m'));
	window.logger.addAppender(consoleAppender);

	//inicias la aplicacion Marionette
	logger.debug("IssueTrackerApp.start");
	IssueTrackerApp.start();

});














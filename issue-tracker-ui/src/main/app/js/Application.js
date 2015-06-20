//Personalizar el Render para usar Namespace
Backbone.Marionette.Renderer.render =  function(template,data){
	return IssueTrackerTemplates[template](data);
};


//Creamos la aplicacion

window.IssueTrackerApp = new Backbone.Marionette.Application();


// Navigate to a route
IssueTrackerApp.navigate = function(route, options) {
  logger.debug("IssueTrackerApp.navigate route:" + route);
  options = options || {};
  Backbone.history.navigate(route, options);
};

// Retrieve the current route
IssueTrackerApp.getCurrentRoute = function() {
  return Backbone.history.fragment;
};


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

	if(IssueTrackerApp.getCurrentRoute() === ''){
		IssueTrackerApp.execute('issuemanager:list');
	}
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














 IssueTrackerApp.module('Entities', function(Entities, 
 	IssueTrackerApp, Backbone, Marionette, $, _) {

 	//Definir el Modelo para la entidad Issue

 	Entities.Issue = Backbone.Model.extend({


 	});

	Entities.IssueCollection = Backbone.Collection.extend({

		model: Entities.Issue,
		url: 'http://localhost:8080/issues'

	});

	var IssueEntityController = Marionette.Controller.extend({

		getIssues: function(){
			logger.debug("IssueEntityController.getIssues");
			var issues = new Entities.IssueCollection();
			var defer = $.Deferred();
			issues.fetch({
				success: funcion(data){
					defer.resolve(data);		
				}	
			});
			return defer.promise();
		};	

		//Crear una instancia de la controladora
		var issueController = new IssueEntityController()


	});


	//Manejar el request para una collection of Issue Entities
	IssueTrackerApp.reqres.setHandler('issue:entities', function(){
		logger.debug("Manejando request issue:entities");
		return issueController.getIssues();
	});



 });
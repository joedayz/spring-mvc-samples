 IssueTrackerApp.module('Entities', function(Entities, 
 	IssueTrackerApp, Backbone, Marionette, $, _) {

 	//Definir el Modelo para la entidad Issue

 	Entities.Issue = Backbone.Model.extend({

 		urlRoot: 'http://localhost:28080/issues',

 		defaults: {
      		status: 'OPEN'
    	},

	   validate: function(attrs, options) {
	      var errors = {};
	      if (!attrs.title) {
	        errors.title = 'Title is required.';
	      }
	      if (!attrs.description) {
	        errors.description = 'Description is required.';
	      }
	      if (!attrs.type) {
	        errors.type = 'Type is required.';
	      }
	      if (!attrs.priority) {
	        errors.priority = 'Priority is required.';
	      }
	      if (! _.isEmpty(errors)) {
	        return errors;
	      }
	    }    	

 	});

	Entities.IssueCollection = Backbone.Collection.extend({

		model: Entities.Issue,
		url: 'http://localhost:28080/issues'

	});

	var IssueEntityController = Marionette.Controller.extend({

		getIssues: function(){
			logger.debug("IssueEntityController.getIssues");
			var issues = new Entities.IssueCollection();
			var defer = $.Deferred();
			issues.fetch({
				success: function(data){
					defer.resolve(data);		
				}	
			});
			return defer.promise();
		},

	    getIssue: function(issueId) {
	      logger.debug("IssueEntityController.getIssue");
	      var issue = new Entities.Issue({ id: issueId });
	      var defer = $.Deferred();
	      issue.fetch({
	        success: function(data) {
	          defer.resolve(data);
	        }
	      });
	      return defer.promise();
	    }		



	});

	//Crear una instancia de la controladora
	var issueController = new IssueEntityController();

	//Manejar el request para una collection of Issue Entities
	IssueTrackerApp.reqres.setHandler('issue:entities', function(){
		logger.debug("Manejando request issue:entities");
		return issueController.getIssues();
	});

	  // Handle request for an Issue Model
	  IssueTrackerApp.reqres.setHandler('issue:entity', function(id) {
	    logger.debug("Handling 'issue:entity' request");
	    return issueController.getIssue(id);
	  });



 });
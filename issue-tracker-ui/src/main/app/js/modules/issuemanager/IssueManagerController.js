IssueTrackerApp.module('IssueManager', 
	function(IssueManager, IssueTrackerApp, Backbone, Marionette, $, _) {


// Define the AppRouter for the IssueManager module
  var IssueManagerRouter = Marionette.AppRouter.extend({

    appRoutes: {
      'issues': 'list'//,  //http://host[:port]/[path/]page.html[#hash][?param=value]
      //'issues/:id': 'view'
    }


  });

  var IssueManagerController = Marionette.Controller.extend({

  	  list: function(collection) {
      	logger.debug("IssueManagerController.list");

      	var displayListView = function(issueCollection) {
        	var listView = new IssueManager.IssueListView({
          	collection: issueCollection
        	});

        	logger.debug("Show IssueListView in IssueTrackerApp.mainRegion");
        	
			     IssueTrackerApp.mainRegion.show(listView);
		    };


		
    		if(collection){
    			displayListView(collection);
    		}else{
    			var fetchingIssues = IssueTrackerApp.request('issue:entities');
    			$.when(fetchingIssues).done(function(issues) {
              		displayListView(issues);
            	});
    		}

      },

      add: function() {
      logger.debug("IssueManagerController.add");
      var addIssueView = new IssueManager.IssueAddView();

      // Handle 'form:cancel' event
      addIssueView.on('form:cancel', function() {
        logger.debug("Handling 'form:cancel' event");
        IssueTrackerApp.execute('issuemanager:list');
      });

      // Handle 'form:submit' trigger
      addIssueView.on('form:submit', function(data) {
        logger.debug("Handling 'form:submit' event");
        logger.debug("form data:" + JSON.stringify(data));
        var issueModel = new IssueTrackerApp.Entities.Issue();
        if(issueModel.save(data,
          {
            success: function() {
              IssueTrackerApp.execute('issuemanager:list');
            },
            error: function() {
              alert('An unexpected problem has occurred.');
            }
          })
         ) {
          // validation successful
        } else {
          // handle validation errors
          addIssueView.triggerMethod('form:validation:failed', issueModel.validationError);
        }
      });

      logger.debug("Show IssueAddView in IssueTrackerApp.mainRegion");
      IssueTrackerApp.mainRegion.show(addIssueView);
    }


  });

  //crear la instancia
  var controller = new IssueManagerController();

  //Cuando el modulo se inicialice hay que establecerle la contraladora

  IssueManager.addInitializer(function(){
  	logger.debug("IssueManager initializer");
  	var router = new IssueManagerRouter({
  		controller: controller
  	});

  });

  IssueTrackerApp.commands.setHandler('issuemanager:list', function(collection){
  	logger.debug("Handling 'issuemanager:list' command");
  	IssueTrackerApp.navigate('issues');
  	controller.list(collection);

  });

  IssueTrackerApp.commands.setHandler('issuemanager:add', function() {
    logger.debug("Handling 'issuemanager:add' command");
    controller.add();
  });


});


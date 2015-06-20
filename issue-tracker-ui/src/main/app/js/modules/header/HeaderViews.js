IssueTrackerApp.module('Header',
 function(Header, IssueTrackerApp, Backbone, Marionette, $, _) {

 // Define the NavBarView Class
 Header.NavBarView = Backbone.Marionette.ItemView.extend({

 template: 'navbar'

 });

});
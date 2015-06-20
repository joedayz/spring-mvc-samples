 IssueTrackerApp.module('Footer', function(Footer, IssueTrackerApp, Backbone, Marionette, $, _) {

	 // Define the FooterView Class
	 Footer.FooterView = Backbone.Marionette.ItemView.extend({

	 	className: 'container-fluid',
	 	template: 'footer'

	 });
 });
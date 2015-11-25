this["IssueTrackerTemplates"] = this["IssueTrackerTemplates"] || {};

this["IssueTrackerTemplates"]["footer"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<p>\r\n\tAcme S.A.\r\n</p>';

}
return __p
};

this["IssueTrackerTemplates"]["issueadd"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="row">\r\n  <div class="col-md-12">\r\n    <div class="page-header">\r\n      <h1>Add Issue</h1>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class="row">  <!-- begin outer row -->\r\n  <div class="col-md-12">  <!-- begin outer column -->\r\n\r\n    <form role="form">\r\n\r\n      <div class="row"> <!-- begin nested row -->\r\n\r\n        <div class="col-md-4">  <!-- begin 1st column -->\r\n\r\n          <div class="form-group">\r\n            <div class="btn-group btn-group-sm" data-toggle="buttons">\r\n              <label class="btn btn-default active">\r\n                <input type="radio" \r\n                       name="type" \r\n                       value="TASK" \r\n                       autocomplete="off" \r\n                       checked>\r\n                  <i class="fa fa-check fa-fw"></i> Task\r\n                </input>\r\n              </label>\r\n              <label class="btn btn-default">\r\n                <input type="radio" \r\n                       name="type" \r\n                       value="STORY" \r\n                       autocomplete="off">\r\n                  <i class="fa fa-book fa-fw text-primary"></i> Story\r\n                </input>\r\n              </label>\r\n              <label class="btn btn-default">\r\n                <input type="radio" \r\n                       name="type" \r\n                       value="ENHANCEMENT" \r\n                       autocomplete="off">\r\n                  <i class="fa fa-wrench fa-fw text-muted"></i> Enhancement\r\n                </input>\r\n              </label>\r\n              <label class="btn btn-default">\r\n                <input type="radio" \r\n                       name="type" \r\n                       value="BUG" \r\n                       autocomplete="off">\r\n                  <i class="fa fa-bug fa-fw text-danger"></i> Bug\r\n                </input>\r\n              </label>\r\n            </div>\r\n          </div>\r\n\r\n        </div>  <!-- end 1st column -->\r\n\r\n        <div class="col-md-3"> <!-- begin 2nd column -->\r\n\r\n          <div class="form-group">\r\n            <div class="btn-group btn-group-sm" data-toggle="buttons">\r\n              <label class="btn btn-default">\r\n                <input type="radio" \r\n                       name="priority" \r\n                       value="LOW" \r\n                       autocomplete="off">\r\n                  <i class="fa fa-arrow-down fa-fw text-success"></i> Low\r\n                </input>\r\n              </label>\r\n              <label class="btn btn-default active">\r\n                <input type="radio" \r\n                       name="priority" \r\n                       value="MEDIUM" \r\n                       autocomplete="off" \r\n                       checked>\r\n                  <i class="fa fa-chevron-up fa-fw text-primary"></i> Medium\r\n                </input>\r\n              </label>\r\n              <label class="btn btn-default">\r\n                <input type="radio" \r\n                       name="priority" \r\n                       value="HIGH" \r\n                       autocomplete="off">\r\n                  <i class="fa fa-arrow-up fa-fw text-danger"></i> High\r\n                </input>\r\n              </label>\r\n            </div>\r\n          </div>\r\n\r\n        </div> <!-- end 2nd column -->\r\n\r\n      </div> <!-- end nested row -->\r\n\r\n      <div class="form-group">\r\n        <label for="issue-title-input" \r\n               class="control-label">\r\n          Title\r\n        </label>\r\n        <input id="issue-title-input" \r\n               type="text" \r\n               name="title" \r\n               class="form-control" \r\n               placeholder="Enter a brief title..." \r\n               autofocus />\r\n      </div>\r\n\r\n      <div class="form-group">\r\n        <label for="issue-description-textarea" \r\n               class="control-label">\r\n          Description\r\n        </label>\r\n        <textarea id="issue-description-textarea" \r\n                  name="description" \r\n                  class="form-control" \r\n                  rows="6" \r\n                  placeholder="Describe the issue..." />\r\n      </div>\r\n\r\n      <button type="button" \r\n              class="btn btn-primary js-create" \r\n              data-loading-text="Creating...">\r\n        Create\r\n      </button>\r\n      <button type="button" \r\n              class="btn btn-link js-cancel">\r\n        Cancel\r\n      </button>\r\n\r\n    </form>\r\n\r\n  </div> <!-- end outer column -->\r\n</div> <!-- end outer row -->\r\n\r\n';

}
return __p
};

this["IssueTrackerTemplates"]["issuelist"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="row">\r\n  <div class="col-md-12">\r\n    <div class="page-header">\r\n      <h1>Issues</h1>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class="row">\r\n  <div class="col-md-12">\r\n    <table class="table table-hover">\r\n      <thead>\r\n        <tr>\r\n          <th class="col-md-1">Priority</th>\r\n          <th class="col-md-1">Type</th>\r\n          <th class="col-md-1">Status</th>\r\n          <th class="col-md-7">Title</th>\r\n          <th class="col-md-2">Actions</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n</div>';

}
return __p
};

this["IssueTrackerTemplates"]["issuelistempty"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<td colspan="5" class="col-md-12">No issues.</td>';

}
return __p
};

this["IssueTrackerTemplates"]["issuelistitem"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<td class="col-md-1">\r\n';
 switch( priority ) {
     case "LOW": { ;
__p += '\r\n  <i class="fa fa-arrow-down fa-fw text-success" title="Low"></i>\r\n  ';
   break;
     }
     case "MEDIUM": { ;
__p += '\r\n  <i class="fa fa-chevron-up fa-fw text-primary" title="Medium"></i>\r\n  ';
   break;
     }
     case "HIGH": { ;
__p += '\r\n  <i class="fa fa-arrow-up fa-fw text-danger" title="High"></i>\r\n  ';
   break;
     }
   } ;
__p += '\r\n</td>\r\n\r\n<td class="col-md-1">\r\n';
 switch( type ) {
     case "TASK": { ;
__p += '\r\n  <i class="fa fa-check fa-fw" title="Task"></i>\r\n  ';
   break;
     }
     case "STORY": { ;
__p += '\r\n  <i class="fa fa-book fa-fw text-primary" title="Story"></i>\r\n  ';
   break;
     }
     case "ENHANCEMENT": { ;
__p += '\r\n  <i class="fa fa-wrench fa-fw text-muted" title="Enhancement"></i>\r\n  ';
   break;
     }
     case "BUG": { ;
__p += '\r\n  <i class="fa fa-bug fa-fw text-danger" title="Bug"></i>\r\n  ';
   break;
     }
   } ;
__p += '\r\n</td>\r\n\r\n<td class="col-md-1">\r\n';
 switch( status ) {
     case "OPEN": { ;
__p += '\r\n  <span class="label label-primary">Open</span>\r\n  ';
   break;
     }
     case "IN_PROGRESS": { ;
__p += '\r\n  <span class="label label-warning">In Progress</span>\r\n  ';
   break;
     }
     case "DONE": { ;
__p += '\r\n  <span class="label label-success">Done</span>\r\n  ';
   break;
     }
   } ;
__p += '\r\n</td>\r\n\r\n<td class="col-md-7">\r\n  <a href="#" class="js-view">' +
((__t = ( title )) == null ? '' : __t) +
'</a>\r\n</td>\r\n\r\n<td class="col-md-2">\r\n  <button type="button" class="btn btn-default btn-xs js-edit">\r\n    <i class="fa fa-pencil fa-fw"></i> Edit\r\n  </button>\r\n  <button type="button" class="btn btn-danger btn-xs js-delete">\r\n    <i class="fa fa-trash fa-fw"></i> Delete\r\n  </button>\r\n</td>\r\n';

}
return __p
};

this["IssueTrackerTemplates"]["navbar"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += ' <nav class="navbar navbar-default navbar-fixed-top" role="navigation">\r\n <div class="container-fluid">\r\n <!-- Brand and toggle get grouped for better mobile display -->\r\n <div class="navbar-header">\r\n <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" \r\ndata-target="#bs-example-navbar-collapse-1">\r\n <span class="sr-only">Toggle navigation</span>\r\n <span class="icon-bar"></span>\r\n <span class="icon-bar"></span>\r\n <span class="icon-bar"></span>\r\n </button>\r\n <a class="navbar-brand" href="#">Issue Tracker</a>\r\n </div>\r\n\r\n\r\n    <!-- Collect the nav links, forms, and other content for toggling -->\r\n    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">\r\n      <ul class="nav navbar-nav">\r\n        <li class="dropdown">\r\n          <a href="#" class="dropdown-toggle" data-toggle="dropdown">Issues <span class="caret"></span></a>\r\n          <ul class="dropdown-menu" role="menu">\r\n            <li><a href="#" class="js-nav" data-nav-target="issuemanager:list"><i class="fa fa-list fa-fw"></i> List</a></li>\r\n          </ul>\r\n        </li>\r\n      </ul>\r\n      <ul class="nav navbar-nav navbar-right">\r\n        <li><button type="button" class="btn btn-default navbar-btn js-nav" data-nav-target="issuemanager:add"><i class="fa fa-plus fa-fw text-primary"></i> Issue</button></li>\r\n      </ul>\r\n    </div><!-- /.navbar-collapse -->\r\n  </div><!-- /.container-fluid -->\r\n\r\n\r\n\r\n</nav>';

}
return __p
};
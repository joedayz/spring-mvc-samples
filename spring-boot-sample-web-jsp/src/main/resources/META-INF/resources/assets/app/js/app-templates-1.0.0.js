this["IssueTrackerTemplates"] = this["IssueTrackerTemplates"] || {};

this["IssueTrackerTemplates"]["dialog"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="modal-dialog">\r\n\r\n  <div class="modal-content">\r\n\r\n    <div class="modal-header">\r\n      <h4 class="modal-title">' +
((__t = ( title )) == null ? '' : __t) +
'</h4>\r\n    </div>\r\n\r\n    <div class="modal-body">\r\n      <p>' +
((__t = ( body )) == null ? '' : __t) +
'</p>\r\n    </div>\r\n\r\n    <div class="modal-footer">\r\n      <button type="button" \r\n              class="btn btn-default js-secondary">\r\n        ' +
((__t = ( secondary )) == null ? '' : __t) +
'\r\n      </button>\r\n      <button type="button" \r\n              class="btn btn-primary js-primary">\r\n        ' +
((__t = ( primary )) == null ? '' : __t) +
'\r\n      </button>\r\n    </div>\r\n\r\n  </div>\r\n\r\n</div>\r\n';

}
return __p
};

this["IssueTrackerTemplates"]["footer"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<p>\r\n\tAcme S.A.\r\n</p>';

}
return __p
};

this["IssueTrackerTemplates"]["issueList"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="row">\r\n  <div class="col-md-12">\r\n    <div class="page-header">\r\n      <h1>Issues</h1>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class="row">\r\n  <div class="col-md-12">\r\n    <table class="table table-hover">\r\n      <thead>\r\n        <tr>\r\n          <th class="col-md-1">Priority</th>\r\n          <th class="col-md-1">Type</th>\r\n          <th class="col-md-1">Status</th>\r\n          <th class="col-md-7">Title</th>\r\n          <th class="col-md-2">Actions</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n</div>';

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

this["IssueTrackerTemplates"]["issueedit"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="row">\r\n  <div class="col-md-12">\r\n    <div class="page-header">\r\n      <h1>Edit Issue</h1>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class="row"> <!-- begin outer row -->\r\n  <div class="col-md-12"> <!-- begin outer column -->\r\n\r\n    <form role="form">\r\n\r\n      <div class="row">  <!-- begin nested row -->\r\n\r\n        <div class="col-md-4"> <!-- begin 1st column -->\r\n\r\n          <div class="form-group">\r\n            <div class="btn-group btn-group-sm" data-toggle="buttons">\r\n              <label class="btn btn-default ';
 if( type === 'TASK') { ;
__p += ' active ';
 } ;
__p += '">\r\n                <input type="radio" \r\n                       name="type" \r\n                       value="TASK" \r\n                  ';
 if( type === 'TASK') { ;
__p += ' checked ';
 } ;
__p += '\r\n                       autocomplete="off">\r\n                  <i class="fa fa-check fa-fw"></i> Task\r\n                </input>\r\n              </label>\r\n              <label class="btn btn-default ';
 if( type === 'STORY') { ;
__p += ' active ';
 } ;
__p += '">\r\n                <input type="radio" \r\n                       name="type" \r\n                       value="STORY" \r\n                  ';
 if( type === 'STORY') { ;
__p += ' checked ';
 } ;
__p += '\r\n                       autocomplete="off">\r\n                  <i class="fa fa-book fa-fw text-primary"></i> Story\r\n                </input>\r\n              </label>\r\n              <label class="btn btn-default ';
 if( type === 'ENHANCEMENT') { ;
__p += ' active ';
 } ;
__p += '">\r\n                <input type="radio" \r\n                       name="type" \r\n                       value="ENHANCEMENT" \r\n                  ';
 if( type === 'ENHANCEMENT') { ;
__p += ' checked ';
 } ;
__p += '\r\n                       autocomplete="off">\r\n                  <i class="fa fa-wrench fa-fw text-muted"></i> Enhancement\r\n                </input>\r\n              </label>\r\n              <label class="btn btn-default ';
 if( type === 'BUG') { ;
__p += ' active ';
 } ;
__p += '">\r\n                <input type="radio" \r\n                       name="type" \r\n                       value="BUG" \r\n                  ';
 if( type === 'BUG') { ;
__p += ' checked ';
 } ;
__p += '\r\n                       autocomplete="off">\r\n                  <i class="fa fa-bug fa-fw text-danger"></i> Bug\r\n                </input>\r\n              </label>\r\n            </div>\r\n          </div>\r\n\r\n        </div> <!-- end 1st column -->\r\n\r\n        <div class="col-md-3"> <!-- begin 2nd column -->\r\n\r\n          <div class="form-group">\r\n            <div class="btn-group btn-group-sm" data-toggle="buttons">\r\n              <label class="btn btn-default ';
 if( priority === 'LOW') { ;
__p += ' active ';
 } ;
__p += '">\r\n                <input type="radio" \r\n                       name="priority" \r\n                       value="LOW" \r\n                  ';
 if( priority === 'LOW') { ;
__p += ' checked ';
 } ;
__p += '\r\n                       autocomplete="off">\r\n                  <i class="fa fa-arrow-down fa-fw text-success"></i> Low\r\n                </input>\r\n              </label>\r\n              <label class="btn btn-default ';
 if( priority === 'MEDIUM') { ;
__p += ' active ';
 } ;
__p += '">\r\n                <input type="radio" \r\n                       name="priority" \r\n                       value="MEDIUM" \r\n                  ';
 if( priority === 'MEDIUM') { ;
__p += ' checked ';
 } ;
__p += '\r\n                       autocomplete="off">\r\n                  <i class="fa fa-chevron-up fa-fw text-primary"></i> Medium\r\n                </input>\r\n              </label>\r\n              <label class="btn btn-default ';
 if( priority === 'HIGH') { ;
__p += ' active ';
 } ;
__p += '">\r\n                <input type="radio" \r\n                       name="priority" \r\n                       value="HIGH" \r\n                  ';
 if( priority === 'HIGH') { ;
__p += ' checked ';
 } ;
__p += '\r\n                       autocomplete="off">\r\n                  <i class="fa fa-arrow-up fa-fw text-danger"></i> High\r\n                </input>\r\n              </label>\r\n            </div>\r\n          </div>\r\n\r\n        </div> <!-- end 2nd column -->\r\n\r\n        <div class="col-md-3"> <!-- begin 3rd column -->\r\n\r\n          <div class="form-group">\r\n            <div class="btn-group btn-group-sm" data-toggle="buttons">\r\n              <label class="btn btn-default ';
 if( status === 'OPEN') { ;
__p += ' active ';
 } ;
__p += '">\r\n                <input type="radio" \r\n                       name="status" \r\n                       value="OPEN" \r\n                  ';
 if( status === 'OPEN') { ;
__p += ' checked ';
 } ;
__p += '\r\n                       autocomplete="off">\r\n                  Open\r\n                </input>\r\n              </label>\r\n              <label class="btn btn-default ';
 if( status === 'IN_PROGRESS') { ;
__p += ' active ';
 } ;
__p += '">\r\n                <input type="radio" \r\n                       name="status" \r\n                       value="IN_PROGRESS" \r\n                  ';
 if( status === 'IN_PROGRESS') { ;
__p += ' checked ';
 } ;
__p += '\r\n                       autocomplete="off">\r\n                  In Progress\r\n                </input>\r\n              </label>\r\n              <label class="btn btn-default ';
 if( status === 'DONE') { ;
__p += ' active ';
 } ;
__p += '">\r\n                <input type="radio" \r\n                       name="status" \r\n                       value="DONE" \r\n                  ';
 if( status === 'DONE') { ;
__p += ' checked ';
 } ;
__p += '\r\n                       autocomplete="off">\r\n                  Done\r\n                </input>\r\n              </label>\r\n            </div>\r\n          </div>\r\n\r\n        </div> <!-- end 3rd column -->\r\n\r\n      </div> <!-- end nested row -->\r\n\r\n      <div class="form-group">\r\n        <label for="issue-title-input" \r\n               class="control-label">\r\n          Title\r\n        </label>\r\n        <input id="issue-title-input" \r\n               type="text" \r\n               name="title" \r\n               class="form-control" \r\n               placeholder="Enter a brief title..." \r\n               autofocus \r\n               value="' +
((__t = ( title )) == null ? '' : __t) +
'" />\r\n      </div>\r\n\r\n      <div class="form-group">\r\n        <label for="issue-description-textarea" \r\n               class="control-label">\r\n          Description\r\n        </label>\r\n        <textarea id="issue-description-textarea" \r\n                  name="description" \r\n                  class="form-control" \r\n                  rows="6" \r\n                  placeholder="Describe the issue...">' +
((__t = ( description )) == null ? '' : __t) +
'</textarea>\r\n      </div>\r\n\r\n      <button type="button" \r\n              class="btn btn-primary js-update" \r\n              data-loading-text="Updating...">\r\n        Update\r\n      </button>\r\n      <button type="button" \r\n              class="btn btn-link js-cancel">\r\n        Cancel\r\n      </button>\r\n\r\n    </form>\r\n\r\n  </div>  <!-- end outer column -->\r\n</div> <!-- end outer row -->\r\n\r\n';

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

this["IssueTrackerTemplates"]["issueview"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="row">\r\n  <div class="col-md-12">\r\n    <div class="page-header">\r\n      <h1>' +
((__t = ( title )) == null ? '' : __t) +
'</h1>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class="row">  <!-- begin actions row -->\r\n  <div class="col-md-12">  <!-- begin actions column -->\r\n\r\n    <div class="actionbar">\r\n      <button type="button" class="btn btn-default js-list">\r\n        <i class="fa fa-list fa-fw"></i>\r\n        List\r\n      </button>\r\n      <button type="button" class="btn btn-default js-edit">\r\n        <i class="fa fa-pencil fa-fw"></i>\r\n        Edit\r\n      </button>\r\n    </div>\r\n\r\n  </div> <!-- end actions column -->\r\n</div> <!-- end actions row -->\r\n\r\n<div class="row">  <!-- begin details row -->\r\n  <div class="col-md-12">  <!-- begin details column -->\r\n\r\n    <h4>Details:</h4>\r\n    <div class="panel panel-default">\r\n      <div class="panel-body">\r\n\r\n        <div class="row"> <!-- begin type row -->\r\n\r\n          <div class="col-md-2">  <!-- begin 1st column -->\r\n            Type:\r\n          </div> <!-- end 1st column -->\r\n\r\n          <div class="col-md-4">  <!-- begin 2nd column -->\r\n          ';
 switch( type ) {
             case "TASK": { ;
__p += '\r\n            <span>\r\n              <i class="fa fa-check fa-fw" title="Task"></i>\r\n              Task\r\n            </span>\r\n            ';
   break;
             }
             case "STORY": { ;
__p += '\r\n            <span>\r\n              <i class="fa fa-book fa-fw text-primary" title="Story"></i>\r\n              Story\r\n            </span>\r\n            ';
   break;
            }
            case "ENHANCEMENT": { ;
__p += '\r\n            <span>\r\n              <i class="fa fa-wrench fa-fw text-muted" title="Enhancement"></i>\r\n              Enhancement\r\n            </span>\r\n            ';
   break;
            }
            case "BUG": { ;
__p += '\r\n            <span>\r\n              <i class="fa fa-bug fa-fw text-danger" title="Bug"></i>\r\n              Bug\r\n            </span>\r\n            ';
   break;
               }
            } ;
__p += '\r\n          </div>  <!-- end 2nd column -->\r\n\r\n        </div> <!-- end type row -->\r\n        <div class="row"> <!-- begin priortity row -->\r\n\r\n          <div class="col-md-2">  <!-- begin 1st column -->\r\n            Priority:\r\n          </div> <!-- end 1st column -->\r\n\r\n          <div class="col-md-4">  <!-- begin 2nd column -->\r\n          ';
 switch( priority ) {
             case "LOW": { ;
__p += '\r\n            <span>\r\n              <i class="fa fa-arrow-down fa-fw text-success" title="Low"></i>\r\n              Low\r\n            </span>\r\n            ';
   break;
             }
             case "MEDIUM": { ;
__p += '\r\n            <span>\r\n              <i class="fa fa-chevron-up fa-fw text-primary" title="Medium"></i>\r\n              Medium\r\n            </span>\r\n            ';
   break;
            }
            case "HIGH": { ;
__p += '\r\n            <span>\r\n              <i class="fa fa-arrow-up fa-fw text-danger" title="High"></i>\r\n              High\r\n            </span>\r\n            ';
   break;
               }
            } ;
__p += '\r\n          </div>  <!-- end 2nd column -->\r\n\r\n        </div> <!-- end priority row -->\r\n        <div class="row"> <!-- begin status row -->\r\n\r\n          <div class="col-md-2">  <!-- begin 1st column -->\r\n            Status:\r\n          </div> <!-- end 1st column -->\r\n\r\n          <div class="col-md-4">  <!-- begin 2nd column -->\r\n          ';
 switch( status ) {
             case "OPEN": { ;
__p += '\r\n            <span class="label label-primary">Open</span>\r\n            ';
   break;
             }
             case "IN_PROGRESS": { ;
__p += '\r\n            <span class="label label-warning">In Progress</span>\r\n            ';
   break;
            }
            case "DONE": { ;
__p += '\r\n            <span class="label label-success">Done</span>\r\n            ';
   break;
               }
            } ;
__p += '\r\n          </div>  <!-- end 2nd column -->\r\n\r\n        </div> <!-- end status row -->\r\n\r\n      </div>\r\n    </div>\r\n\r\n  </div> <!-- end details column -->\r\n</div> <!-- end details row -->\r\n\r\n<div class="row">  <!-- begin description row -->\r\n  <div class="col-md-12">  <!-- begin description column -->\r\n\r\n    <h4>Description:</h4>\r\n    <pre class="panel-pre">' +
((__t = ( description )) == null ? '' : __t) +
'</pre>\r\n\r\n  </div> <!-- end description column -->\r\n</div> <!-- end description row -->\r\n';

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
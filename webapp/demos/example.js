angular.module('plunker', [ 'ui.bootstrap' ]);
function AccordionDemoCtrl($scope) {

	$scope.groups = [ {
		head : "权限管理",
		body : ["人员管理", "其他管理"]
	}, {
		head : "角色管理",
		body : ["新增角色"]
	} ];
	
	$scope.tabs = {};
	
	$scope.addTab = function(tabHead){
		if(!$scope.tabs[tabHead]){
			$scope.tabs[tabHead] = {head : tabHead, content : tabHead + "内容"};
			// tab页选中
			$scope.tabs[tabHead].active = true;
		} else {
			// tab页选中
			$scope.tabs[tabHead].active = true;
		}
	};

	$scope.remove = function(tabHead){
		delete $scope.tabs[tabHead];
	};
}
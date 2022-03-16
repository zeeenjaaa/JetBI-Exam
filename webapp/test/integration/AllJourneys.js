/*global QUnit*/

jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
	"sap/ui/test/Opa5",
	"ControlTaskNS/ControlTask-Zenchyk/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"ControlTaskNS/ControlTask-Zenchyk/test/integration/pages/Worklist",
	"ControlTaskNS/ControlTask-Zenchyk/test/integration/pages/Object",
	"ControlTaskNS/ControlTask-Zenchyk/test/integration/pages/NotFound",
	"ControlTaskNS/ControlTask-Zenchyk/test/integration/pages/Browser",
	"ControlTaskNS/ControlTask-Zenchyk/test/integration/pages/App"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "ControlTaskNS.ControlTask-Zenchyk.view."
	});

	sap.ui.require([
		"ControlTaskNS/ControlTask-Zenchyk/test/integration/WorklistJourney",
		"ControlTaskNS/ControlTask-Zenchyk/test/integration/ObjectJourney",
		"ControlTaskNS/ControlTask-Zenchyk/test/integration/NavigationJourney",
		"ControlTaskNS/ControlTask-Zenchyk/test/integration/NotFoundJourney"
	], function () {
		QUnit.start();
	});
});
sap.ui.define([
		"ControlTaskNS/ControlTask-Zenchyk/controller/BaseController"
	], function (BaseController) {
		"use strict";

		return BaseController.extend("ControlTaskNS.ControlTask-Zenchyk.controller.NotFound", {

			/**
			 * Navigates to the worklist when the link is pressed
			 * @public
			 */
			onLinkPressed : function () {
				this.getRouter().navTo("worklist");
			}

		});

	}
);
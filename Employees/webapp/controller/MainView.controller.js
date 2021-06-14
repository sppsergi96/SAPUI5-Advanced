// @ts-nocheck
sap.ui.define([
		"sap/ui/core/mvc/Controller"
	],
	/**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
	function (Controller) {
		"use strict";

        /*function myCheck() {
            var inputEmployee = this.byId("inputEmployee");
            var valueEmployee = inputEmployee.getValue();

            if (valueEmployee.length === 6) {
                inputEmployee.setDescription("OK");
            } else {
                inputEmployee.setDescription("Not OK");
            }
        }*/

		return Controller.extend("logaligroup.Employees.controller.MainView", {

			onInit: function () {

            },
            
            //onValidate: myCheck
            onValidate: function () {
                var inputEmployee =  this.getView().byId("inputEmployee");
                var valueEmployee = inputEmployee.getValue();

                if (valueEmployee.length === 6) {
                    //inputEmployee.setDescription("OK");
                    this.getView().byId("labelCountry").setVisible(true);
                    this.getView().byId("inputCountry").setVisible(true);
                } else {
                    //inputEmployee.setDescription("Not OK");
                    this.getView().byId("labelCountry").setVisible(false);
                    this.getView().byId("inputCountry").setVisible(false);
                }
            }
		});
	});

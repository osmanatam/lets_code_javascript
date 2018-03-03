// Copyright (c) 2016-2017 Titanium I.T. LLC. All rights reserved. For license, see "README" or "LICENSE" file.
(function() {
	"use strict";

	var ServerRemovePointerEvent = require("./server_remove_pointer_event.js");

	var ClientRemovePointerMessage = module.exports = function() {
	};

	ClientRemovePointerMessage.EVENT_NAME = "client_remove_pointer_event";
	ClientRemovePointerMessage.prototype.name = function() { return ClientRemovePointerMessage.EVENT_NAME; };

	ClientRemovePointerMessage.fromPayload = function(obj) {
		return new ClientRemovePointerMessage();
	};

	ClientRemovePointerMessage.prototype.payload = function() {
		return {};
	};

	ClientRemovePointerMessage.prototype.toServerEvent = function(clientId) {
		return new ServerRemovePointerEvent(clientId);
	};

}());
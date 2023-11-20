"use strict";

var AccessibilityHelper = /** @class */ (function () {
    function AccessibilityHelper() {
        this._helperElement = null;
    }
    Object.defineProperty(AccessibilityHelper.prototype, "helperElement", {
        get: function () {
            if (this._helperElement == null)
                this._helperElement = this.createHelperElement();
            return this._helperElement;
        },
        enumerable: false,
        configurable: true
    });
    AccessibilityHelper.prototype.createHelperElement = function () {
        var helperElement = document.createElement("DIV");
        helperElement.className = "dxAIFE dxAIFME";
        helperElement.setAttribute("role", "note");
        helperElement.setAttribute("aria-live", "assertive");
        document.documentElement.appendChild(helperElement);
        return helperElement;
    };
    AccessibilityHelper.prototype.sendMessageToAssistiveTechnology = function (message) {
        var _this = this;
        this.helperElement.innerHTML = message;
        setTimeout(function () { _this.helperElement.innerHTML = ""; }, 300);
    };
    return AccessibilityHelper;
}());

function sendMessageToAssistiveTechnology(message) {
    if (!window.dxAccessibilityHelper)
        window.dxAccessibilityHelper = new AccessibilityHelper();
    window.dxAccessibilityHelper.sendMessageToAssistiveTechnology(message);
}


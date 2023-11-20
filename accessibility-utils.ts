declare global {
    interface Window {
        dxAccessibilityHelper: AccessibilityHelper;
    }
}

export function sendMessageToAssistiveTechnology(message: string): void {
    if(!window.dxAccessibilityHelper)
        window.dxAccessibilityHelper = new AccessibilityHelper();
    window.dxAccessibilityHelper.sendMessageToAssistiveTechnology(message);
}

class AccessibilityHelper {
    _helperElement: HTMLElement | null;

    constructor() {
        this._helperElement = null;
    }
    get helperElement(): HTMLElement {
        if(this._helperElement == null)
            this._helperElement = this.createHelperElement();
        return this._helperElement;
    }
    createHelperElement(): HTMLElement {
        const helperElement = document.createElement("DIV");
        helperElement.className = "dxAIFE dxAIFME";
        helperElement.setAttribute("role", "note");
        helperElement.setAttribute("aria-live", "assertive");
        document.documentElement.appendChild(helperElement);
        return helperElement;
    }
    sendMessageToAssistiveTechnology(message: string): void {
        this.helperElement.innerHTML = message;
        setTimeout(() => { this.helperElement.innerHTML = ""; }, 300);
    }
}

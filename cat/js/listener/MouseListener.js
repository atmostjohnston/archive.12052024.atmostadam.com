export class MouseListener {
    constructor() {
        window.addEventListener('click', (e) => {
            const rect = this.context.getCanvas().getBoundingClientRect();
            console.log("Gamer clicked [clientX=" + e.clientX + " : clientY=" + e.clientY + "]. Offset [rect.left=" + rect.left + ", rect.top=" + rect.top + "]");
            this.context.getInstance().currentScreen.notify(e.clientX - rect.left, e.clientY - rect.top);
        });
    }
}
import { MAIN_REVENUE_COMPONENT } from "./../configuration/CareerConfiguration.js";
import { JuniorSoftwareEngineer } from "./../model/jobs/software/engineer/JuniorSofwareEngineer.js";
import { Player } from "./../model/player/Player.js";

export class CareerGameContext {
    constructor() {
        this.player = new Player(this, new JuniorSoftwareEngineer(this), 22, 22);
        this.player.getLiabilities().getStudentLoan().setValue(100000);
        this.player.getExpenses().getMortgagePayment().setValue(500);
        this.mainComponents = new Map();
        this.mainComponent = MAIN_REVENUE_COMPONENT;
    }

    getPlayer() {
        return this.player;
    }

    setPlayer(player) {
        this.player = player;
    }

    getMainComponent() {
        return this.mainComponent;
    }

    setMainComponent(component) {
        this.mainComponent = component;
        return this;
    }

    addMainComponent(component) {
        this.mainComponents.set(component.constructor.name, component);
        return this;
    }

    getMainComponentName() {
        return this.mainComponent.constructor.name;
    }

    getMainComponentByName(name) {
        return this.mainComponents.get(name);
    }

    setMainComponentByName(name) {
        let component = this.getMainComponentByName(name);
        this.setMainComponent(component);
        return this;
    }

    getSliderComponentName() {
        return this.sliderComponent;
    }

    setSliderComponentName(sliderComponent) {
        this.sliderComponent = sliderComponent;
        return this;
    }

    getSliderModel() {
        return this.sliderModel;
    }

    setSliderModel(sliderModel) {
        this.sliderModel = sliderModel;
        return this;
    }
}

export const careerGameContext = new CareerGameContext();
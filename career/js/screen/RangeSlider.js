import { CircleSolidDrawing } from "../drawing/CircleSolidDrawing.js";
import { RectangleSolidDrawing } from "../drawing/RectangleSolidDrawing.js";
import { TextDrawing } from "../drawing/TextDrawing.js";
import {
    RANGE_SLIDER_PERCENT_X,
    RANGE_SLIDER_PERCENT_Y,
    RANGE_SLIDER_PERCENT_W,
    RANGE_SLIDER_PERCENT_H,
    RANGE_SLIDER_COLOR,
    RANGE_SLIDER_POSITION_PERCENT_Y,
    RANGE_SLIDER_POSITION_PERCENT_W,
    RANGE_SLIDER_POSITION_PERCENT_H,
    RANGE_SLIDER_UNITS_PERCENT_X,
    RANGE_SLIDER_UNITS_PERCENT_Y,
    RANGE_SLIDER_UNITS_FONT,
    RANGE_SLIDER_UNITS_COLOR,
    RANGE_SLIDER_DEFAULT_BACKGROUND_COLOR,
    RANGE_SLIDER_ON_CLICK_BACKGROUND_COLOR,
    RANGE_SLIDER_ON_MOUSE_OVER_BACKGROUND_COLOR,
    INVESTMENT_SCREEN,
    LOAN_SCREEN
} from "../configuration/GameConfiguration.js";
import { insideRectangle } from "./../function/MathFunctions.js";

export class RangeSlider {
    constructor(context) {
        this.context = context;
        this.position = 0;
        this.pricePerUnit = 0;
        this.cash = 0;
        this.pressed = false;
    }

    update(tick) {
        this.tick = tick;
    }

    draw() {
        if (INVESTMENT_SCREEN != this.context.getScreen() &&
            LOAN_SCREEN != this.context.getScreen()) {
            return;
        }
        new RectangleSolidDrawing(
            this.context,
            RANGE_SLIDER_PERCENT_X,
            RANGE_SLIDER_PERCENT_Y,
            RANGE_SLIDER_PERCENT_W + RANGE_SLIDER_POSITION_PERCENT_W,
            RANGE_SLIDER_PERCENT_H,
            RANGE_SLIDER_COLOR
        )
            .draw();
        let positionX = RANGE_SLIDER_PERCENT_X + (this.position * (RANGE_SLIDER_PERCENT_W / 10));
        new RectangleSolidDrawing(
            this.context,
            positionX,
            RANGE_SLIDER_POSITION_PERCENT_Y,
            RANGE_SLIDER_POSITION_PERCENT_W,
            RANGE_SLIDER_POSITION_PERCENT_H,
            this.backgroundColor
        )
            .draw();
        var maxUnits = 0;
        var maxUnits = this.cash != 0 && this.pricePerUnit != 0 ? this.cash / this.pricePerUnit : 0;
        let units = this.position * (maxUnits / 10);
        new TextDrawing(
            this.context,
            "Units: " + this.position,
            RANGE_SLIDER_UNITS_PERCENT_X,
            RANGE_SLIDER_UNITS_PERCENT_Y,
            RANGE_SLIDER_UNITS_FONT,
            RANGE_SLIDER_UNITS_COLOR
        )
            .draw();
    }

    onMouseOver(x, y) {
        this.setBackgroundColor(this.pressed, x, y);
    }

    onClick(x, y) {
        this.setBackgroundColor(true, x, y);
    }

    onUnclick(x, y) {
        this.setBackgroundColor(false, x, y);
    }

    setBackgroundColor(pressed, x, y) {
        let positionX = RANGE_SLIDER_PERCENT_X + (this.position * (RANGE_SLIDER_PERCENT_W / 10));
        let expectX = this.context.getWidthPercent(positionX);
        let expectY = this.context.getHeightPercent(RANGE_SLIDER_POSITION_PERCENT_Y + (RANGE_SLIDER_POSITION_PERCENT_H * 2));
        let expectW = this.context.getWidthPercent(RANGE_SLIDER_POSITION_PERCENT_W);
        let expectH = this.context.getHeightPercent(RANGE_SLIDER_POSITION_PERCENT_H);
        if (this.pressed == true && pressed == false) {
            this.pressed = false;
            return;
        }
        if (pressed == true) {
            this.pressed = true;
            this.backgroundColor = RANGE_SLIDER_ON_CLICK_BACKGROUND_COLOR;
            let minPositionX = RANGE_SLIDER_PERCENT_X;
            if (x < this.context.getWidthPercent(minPositionX)) {
                this.position = 0;
                return;
            } else {
                for (let i = 0; i < 10; i++) {
                    let startX = RANGE_SLIDER_PERCENT_X + (i * (RANGE_SLIDER_PERCENT_W / 10));
                    let endX = RANGE_SLIDER_PERCENT_X + ((i + 1) * (RANGE_SLIDER_PERCENT_W / 10));
                    if (x >= this.context.getWidthPercent(startX) && x <= this.context.getWidthPercent(endX)) {
                        this.position = i;
                        return;
                    }
                }
                this.position = 10;
                return;
            }
        }
        if (!insideRectangle(x, y, expectX, expectY, expectW, expectH)) {
            this.backgroundColor = RANGE_SLIDER_DEFAULT_BACKGROUND_COLOR;
            this.pressed = false;
            return;
        }
        this.pressed = pressed;
        if (pressed) {
            this.backgroundColor = RANGE_SLIDER_ON_CLICK_BACKGROUND_COLOR;
        } else {
            this.backgroundColor = RANGE_SLIDER_ON_MOUSE_OVER_BACKGROUND_COLOR;
        }
    }

    getPosition() {
        return this.position;
    }

    setPosition(position) {
        this.position = position;
        return this;
    }

    getPricePerUnit() {
        return this.pricePerUnit;
    }

    setPricePerUnit(pricePerUnit) {
        this.pricePerUnit = pricePerUnit;
        return this;
    }

    getCash() {
        return this.cash;
    }

    setCash(cash) {
        this.cash = cash;
        return this;
    }

    getTitle() {
        return this.title;
    }

    setTitle(title) {
        this.title = title;
        return this;
    }

    getAction() {
        return this.action;
    }

    setAction(action) {
        this.action = action;
        return this;
    }

    getButtonText() {
        return this.buttonText;
    }

    setButtonText(buttonText) {
        this.buttonText = buttonText;
        return this;
    }
}
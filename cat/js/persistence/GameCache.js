import { GameValidationException } from "./../../../corejs/exception/GameValidationException.js";

export class GameCache {
    constructor(context, canvas, ctx) {
        this.context = context;
        GameCache.map = new Map();
        GameCache.canvas = canvas;
        GameCache.ctx = ctx;
    }

    static set(key, value) {
        if (null == key) {
            var message = "GameValidationException -> NullPointerException -> NEVER pass null key into setCache";
            console.error(message);
            throw new GameValidationException(message);
        }
        GameCache.map.set(key, value);
    }

    static setImage(id) {
        if (null == id) {
            var message = "GameValidationException -> NullPointerException -> NEVER pass null into preloadImage";
            console.error(message);
            throw new GameValidationException(message);
        }
        const image = document.getElementById(id);
        if (null == image) {
            var message = "GameValidationException -> Search by Image Element id [" + id + "] results in a null!";
            console.error(message);
            throw new GameValidationException("GameValidationException -> Search by Image Element id [" + id + "] results in a null!");
        }
        return this.context.set(id, image);
    }

    static setClass(clazz) {
        if (null == clazz) {
            var message = "GameValidationException -> NullPointerException -> NEVER pass null into setClass";
            console.error(message);
            throw new GameValidationException(message);
        }
        this.context.set(clazz.constructor.name, clazz);
    }

    static get(key) {
        if (!this.context.map.has(key)) {
            var message = "GameValidationException -> No entry exists in cache for key [" + key + "]";
            console.error(message);
            throw new GameValidationException(message);
        }
        return this.context.map.get(key);
    }

    static contains(key) {
        return this.context.map.has(key);
    }

    static delete(key) {
        return this.context.map.delete(key);
    }

    static clear() {
        this.context.map.clear();
    }

    static getCtx() {
        return this.context.ctx;
    }

    static getCanvas() {
        return this.context.canvas;
    }
}
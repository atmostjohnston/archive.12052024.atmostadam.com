import { requireContext } from "../../../boot/function/ValidationFunctions.js";

export class FileLoader {
    constructor(context) {
        /*
        var file = document.getElementById("myFile").files[0];

        const reader = new FileReader();

        reader.onload = function (e) { this.context.set("csvMap", e.target.result); };

        reader.readAsText(file);
        */


        /*
        var reader = new FileReader();
        reader.readAsText("dad.csv", function (error, data) {
            if (error) {
                console.log(error);
            } else {
                console.log(data);
            }
        });
        */
        requireContext(context, this);

        var xhr = new XMLHttpRequest();
        xhr.open("GET", "dad.csv");
        xhr.send();

        xhr.onload = function () {
            console.log(xhr.responseText);
            this.context.set("atlas", xhr.responseText);
            //var properties = ;
            // Do something with the properties
        };
    }
}
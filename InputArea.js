class InputArea {
    
    constructor(id, name, num, com) {
        
        var guesstr, guessBtn;

        this.parent = document.getElementById(id);
        this.table = document.createElement("table");
        this.table.className = "inputTable"
        this.name = name;
        this.number = num;

        var tr, td, th;
        var labels = ["Guess", "Cows", "Bulls"];

        // Add first row
        tr = document.createElement("tr");
        th = document.createElement("th");

        th.colSpan = 3;
        th.innerHTML = (com) ? this.name + ":   " + "####" : 
                                this.name + ":   " + this.number;
        tr.appendChild(th);
        this.table.appendChild(tr);
        
        // Add second row
        tr = document.createElement("tr");

        for (var i = 0; i < 3; i++) {
            td = document.createElement("td");
            td.className = "inputHeader"
            td.innerHTML = labels[i];
            tr.appendChild(td);
        }
        this.table.appendChild(tr);

        this.parent.appendChild(this.table);
/** 
        guesstr = document.createElement("tr");
        this.guessIn = document.createElement("input");
        this.guessIn.type = "text";
        this.guessIn.id = "guess";
        guessBtn = document.createElement("Button");
        guessBtn.id = "guessButton";
        guessBtn.innerHTML = "Guess";
        guessBtn.addEventListener("click", this.checkCowsBulls());
        guesstr.appendChild(this.guessIn);
        guesstr.appendChild(guessBtn);

        this.parent.appendChild(guesstr);
    */
    }

    /**
     * Add an event listener to the HTML input element.
     * 
     * @param {String} type 
     * @param {Function} callback 
     */
    addEventListener(type, callback) {
        this.input.addEventListener(type, callback);
    }

    addRow(guess, cows, bulls) {
        var tr, td;
        var classes = ["guess", "cows", "bulls"]
        var data = [guess, cows, bulls]

        tr = document.createElement("tr");

        // Add the input areas
        for (var i = 0; i < 3; i++) {
            td = document.createElement("td");
            td.className = classes[i] + "Field";
            td.innerHTML = data[i];
            
            tr.appendChild(td);
        }

        this.table.appendChild(tr);

        this.parent.appendChild(this.table);
    }

    checkCowsBulls() {
        var guess = document.getElementById("guess").value;
        var cb = [0, 0];
        var actual = this.number.toString();
        
        if (guess == null) { return; }

        for (var i = 0; i < 4; i++) {
            if (guess[i] == actual[i]) {
                cb[1]++;
            }
            else {
                for (var k = 0; k < 4; k++) {
                    if (guess[i] == actual[k]) {
                        cb[0]++;
                        break;
                    }
                }
            }
        }
        
        this.addRow(guess, cb[0], cb[1]);
    }    
}
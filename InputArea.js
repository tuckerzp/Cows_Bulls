class InputArea {
    
    constructor(id, name, num, com) {
        
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

        this.checkWin(bulls);
    }

    checkCowsBulls() {
        var guess = document.getElementById("guess").value;
        document.getElementById("guess").value = "";
        var cb = [0, 0];
        var actual = this.number.toString();
        
        if (guess == null || !validNumber(guess)) { return; }

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
    
    gameReset() {
        this.number = getNumber();

        for (var i = this.table.rows.length - 1; i > 1; i--) {
            this.table.deleteRow(i);
        }
    }

    checkWin(bulls) {
        if (bulls == 4) {
            alert("You win!");
        }
    }
}

function getNumber(){
    var num = shuffle( "0123456789".split('') ).join('').substring(0,4);
    console.log(num);
    return num;
}
      
function shuffle(o){
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    
    return o;
}

function validNumber(number) {

    var valid = true;

    // Check number has four digits 
    if (number.length != 4)                   { valid = false; }

    // Check number containts only number characters
    if (number.match(/^[0-9]+$/) == null)     { valid = false; }

    // Check for no repeat digits
    if (number.match(/([0-9]).*?\1/) != null) { valid = false; }

    return valid;
}
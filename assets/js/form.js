const database = {
  url: "https://database-teacher-onlineshop.herokuapp.com/sql",
  group: "aL4",
  pw: "bda1ea0b",
  sql: ""
}

const submit = document.getElementById("submit")
const vorname = document.getElementById("vorname")
const nachname = document.getElementById("nachname")
const wohnort = document.getElementById("wohnort")
submit.disabled = true



// Dieser Teil des Skripts ist da um die Fehlermeldung anzuzeigen
        function printError(elemId, hintMsg) {
            document.getElementById(elemId).innerHTML = hintMsg;
        }

        // Formular Validierung
        function validateForm() {
            // Die Variablen, welchem die Werte des Formulars zugeteilt werden
            var vorname = document.formular1.vname.value;
            var nachname = document.formular1.nname.value;
            var wohnort = document.formular1.wohnort.value;

            // Fehlermeldung -> Variablen definieren
            var vnameErr = nnameErr = wohnortErr = true;

            // Vorname validieren
            if (vorname == "") {
                printError("vnameErr", "Bitte Vornamen eingeben <br><br>");
            }
            else {
                var regex = /^[a-zA-Z\s]+$/;
                if (regex.test(vorname) == false) {
                    printError("vnameErr", "Keine Zahlen oder Sonderzeichen verwenden <br><br>");
                }
                else {
                    printError("vnameErr", "");
                    vnameErr = false;
                }
            }

            // Nachname validieren
            if (nachname == "") {
                printError("nnameErr", "Bitte Nachnamen eingeben <br><br>");
            }
            else {
                var regex = /^[a-zA-Z\s]+$/;
                if (regex.test(nachname) == false) {
                    printError("nnameErr", "Keine Zahlen oder Sonderzeichen verwenden <br><br>");
                }
                else {
                    printError("nnameErr", "");
                    nnameErr = false;
                }
            }

            // Wohnort validieren
            if (wohnort == "") {
                printError("wohnortErr", "Bitte Wohnort eingeben <br><br>");
            }
            else {
                var regex = /^[a-zA-Z\s]+$/;
                if (regex.test(wohnort) == false) {
                    printError("wohnortErr", "Keine Zahlen oder Sonderzeichen verwenden <br><br>");
                }
                else {
                    printError("wohnortErr", "");
                    nnameErr = false;
                }
            }

            // Wenn eines der Felder nicht richtig ausgefüllt ist, wird das Formular nicht gesendet
            if ((vnameErr || nnameErr || wohnortErr) == true) {
                return false;
            }
        }
})


submit.addEventListener("click", async (event) => {
    event.preventDefault()
    const result = await databaseClient.insertInto("users", ["vorname","nachname""wohnort"], [vorname.value, nachname.value, wohnort.value])
    if (result.error) {
        alert("Datenbank Fehler: " + JSON.stringify(result.error, null, 2))
    }
    else {
        // Weiterleitung auf die Game Page  
        location.href = "./game.html"
    }

})

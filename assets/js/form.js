const submit = document.getElementById("submit")
const wohnort = document.getElementById("wohnort")
submit.disabled = true

const validate = () => {
    if (wohnort.value == "") {
        submit.disabled = true
    } else {
        submit.disabled = false
    }
}

wohnort.addEventListener("keyup", (event) => {
    validate()
})


submit.addEventListener("click", async (event) => {
    event.preventDefault()
    const result = await databaseClient.insertInto("user", ["vorname","nachname""wohnort"], [vorname.value, nachname.value, wohnort.value])
    if (result.error) {
        alert("Datenbank Fehler: " + JSON.stringify(result.error, null, 2))
    }
    else {
        // Weiterleitung auf die Game Page  
        location.href = "./game.html"
    }

})

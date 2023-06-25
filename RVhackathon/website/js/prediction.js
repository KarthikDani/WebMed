document.getElementById('send-btn').addEventListener('click', async () => {
    let data = new Array(132).fill(0)
let symptoms = Array.from(document.getElementsByClassName('symptoms'))
console.log(data)
for (let i = 0; i < 30; i++) {
    console.log(symptoms[i])
    if (symptoms[i].checked==true) {
        data[i] = 1
    }
}
    const response = await fetch("http://127.0.0.1:8000/predict", {
        method: 'POST',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST, GET, PUT',
            'Access-Control-Allow-Headers': 'Content-Type',
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },

        body: JSON.stringify({
            "data": data
        })
    })

    const content = await response.json();
    document.getElementById("response").innerHTML = content['prediction'];
    alert("Detected symptom: " + content['prediction']);
})
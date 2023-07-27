

function getForms(){
    fetch("http://localhost:8000/ibg-reality/all-forms")
    .then(response => response.json())
    .then(json => console.log(json))
}


function saveForm() {
    var consultationForm = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value,
    };

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');

    fetch("http://localhost:8000/ibg-reality/save-form", {
        method: 'POST',
        body: JSON.stringify(consultationForm),
        headers: headers,
    })
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(error => console.error('Error:', error));

}

function getContractForms(){
    fetch("http://localhost:8000/ibg-reality/all-contract-forms")
    .then(response => response.json())
    .then(json => console.log(json))
}


function saveContractForm() {
    var contractForm = {
        companyName: document.getElementById('companyName').value,
        website: document.getElementById('website').value,
        purpose: document.getElementById('purpose').value,
        phoneNumber: document.getElementById('phone-number').value,
        location: document.getElementById('location').value,
        areaSqft: document.getElementById('area-sqft').value,
        contract: document.getElementById('contract').value
    };

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');

    fetch("http://localhost:8000/ibg-reality/save-contract-form", {
        method: 'POST',
        body: JSON.stringify(contractForm),
        headers: headers,
    })
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(error => console.error('Error:', error));

}
   

function getComments(){
    fetch("http://localhost:8000/ibg-reality/all-comments")
    .then(response => response.json())
    .then(json => console.log(json))
}


function saveComment(){
    var commentForm = {
        comment: document.getElementById('comment').value,
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        website: document.getElementById('website').value,
    };

    console.log(JSON.stringify(commentForm));

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');

    fetch("http://localhost:8000/ibg-reality/save-form", {
        method: 'POST',
        body: JSON.stringify(commentForm),
        headers: headers,
    })
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(error => console.error('Error:', error));
}
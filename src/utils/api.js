const baseUrl = 'http://localhost:3001';

function handleResponse(res) {
  return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
}

function getItems() {
    return fetch(`${baseUrl}/items`).then(handleResponse)
}


function addItems(data){
    return fetch(`${baseUrl}/items`, {
        method: "POST",
        headers:{ "Content-Type": "application/json"},
        body: JSON.stringify({
            name: data.name,
            imageUrl: data.imageUrl,
            weather: data.weather,
        })
    })
    .then(handleResponse)
}

function deleteItems(id){
    return fetch(`${baseUrl}/items/${id}`,
        {method:"DELETE",
        headers: {
            "Content-Type": "application/json"
        }
        }
    ).then(handleResponse)
}


export { getItems, addItems, deleteItems, handleResponse};
 const button = document.querySelector('#btnSearch')
 const txtVerse = document.querySelector('#txtVerse')
 const txtReference = document.querySelector('#reference')
 const txtPreview = document.querySelector('#preview')
 const BASE_POINT = "https://bible-api.com/"

txtVerse.addE
ventListener('input', getBibleRequest)

function getBibleRequest(){

    let Verse = txtVerse.value
    // console.log(`${BASE_POINT}${Verse}`);
    fetch(`${BASE_POINT}${Verse}`).then(function(res){
        return res.json()
    }).then(function(data){
        reference.innerHTML = data.reference
        preview.innerHTML = data.text

    })
}   

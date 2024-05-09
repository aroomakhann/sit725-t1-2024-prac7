const cardList = [ 
    { 
    title: "Caret", 
    image: "images/@soffairys.jpeg",  
    link: "About Caret", 
    description: "basic information about Caret" 
    },  
    { 
    title: "Le Relais de l’Entrecôte", 
    image: "images/Red wine, entrecote and french fries @ Le Relais de L'entrecôte - Paris, France.jpeg", 
    link: "About Le Relais de l’Entrecôte", 
    description: "basic information about Le Relais De L’Entrecôte" 
    }, 
    { 
    title: "Cedric Grolet",  
    image: "images/croissant.jpeg", 
    link: "About Cedric Grolet", 
    description: "basic information about Cedric Grolet", 
    } 
    ]; 

const addCards = (items) => {
    items.forEach(item => {
        let itemToAppend = '<div class="col s4 center-align">' +
            '<div class="card medium"><div class="card-image waves-effect waves-block waves-light"><img class="activator" src="' + item.image + '">' +
            '</div><div class="card-content">' +
            '<span class="card-title activator grey-text text-darken-4">' + item.title + '<i class="material-icons right">more_vert</i></span><p><a href="#">' + item.link + '</a></p></div>' +
            '<div class="card-reveal">' +
            '<span class="card-title grey-text text-darken-4">' + item.title + '<i class="material-icons right">close</i></span>' +
            '<p class="card-text card-desc-color">' + item.desciption + '</p>' +
            '</div></div></div>';
        $("#card-section").append(itemToAppend)
    });
}

const clickMe = () => {
    alert("Have a great day guys!")
}

const submitForm = () => {
    let formData = {};
    formData.first_name = $('#first_name').val();
    formData.last_name = $('#last_name').val();
    formData.password = $('#password').val();
    formData.email = $('#email').val();

    console.log("Form Data Submitted: ", formData);
}

$(document).ready(function () {
    $('.materialboxed').materialbox();
    addCards(cardList);
    $('.modal').modal();
    $('#formSubmit').click(() => {
        submitForm();
    })
})
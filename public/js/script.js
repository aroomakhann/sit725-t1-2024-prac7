const addCards = (items) => {
    items.forEach(item => {
        let itemToAppend = `
            <div class="col s4 center-align">
                <div class="card medium">
                    <div class="card-image waves-effect waves-block waves-light">
                        <img class="activator" src="${item.image}">
                    </div>
                    <div class="card-content">
                        <span class="card-title activator grey-text text-darken-4">${item.title}<i class="material-icons right">more_vert</i></span>
                        <p><a href="#">${item.link}</a></p>
                    </div>
                    <div class="card-reveal">
                        <span class="card-title grey-text text-darken-4">${item.title}<i class="material-icons right">close</i></span>
                        <p class="card-text card-desc-color">${item.description}</p>
                    </div>
                </div>
            </div>`;
        $("#card-section").append(itemToAppend);
    });
};

function formSubmitted () {
    let formData = {
        name_rest: $('#name_rest').val(),
        desc_rest: $('#desc_rest').val(),
        review: $('#review').val(),
        email: $('#email').val()
    };    

    console.log("Form Data Submitted: ", formData);
    postParis(formData);
};

function postParis(paris) {
    $.ajax({
        url: '/api/paris',
        type: 'POST',
        data: paris,
        success: (result) => {
            if (result.statusCode === 201) {
                alert('Form submitted successfully!');
            }
        },
    });
}

function getAllParis(){
    $.get('/api/paris', (response) => {
        console.log('Response: '+response);
        if (response.statusCode === 200) {
            addCards(response.data);
        }
    });
  }

  $(document).ready(function () {
    $('.materialboxed').materialbox();
    $('#formSubmit').click(() => {
        formSubmitted();
    });
    $('#clickMeButton').click(() => {
        $('.modal').modal('open'); 
    });
    getAllParis();
    $('.modal').modal();
});


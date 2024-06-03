function createParis(name, desc, img) {
    return `
        <div class="col s4">
            <div class="card">
                <div class="card-image">
                    <img src=${img}>
                </div>
                <div class="card-content">
                    <span class="card-title">${name}</span>
                    <p>${desc}</p>
                </div>
            </div>
        </div>
    `;
}

const submitForm = () => {
    const formData = {
        name: $('#card_title').val() + ' ' + $('#card_by').val(),
        desc: $('#card_desc').val(),
        img: $('#card_img').val() 
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
            if (result.statusCode === 200) {
                alert('Form submitted successfully!');
                getAllParis();
                $('#modal1').modal('close');
            } else {
                alert('Failed to add Paris. Please try again.');
            }
        },
        error: () => {
            alert('Error occurred while submitting form.');
        }
    });
}

const getAllParis = () => {
    $.get('/api/paris', (response) => {
        if (response.statusCode === 200) {
            addParis(response.data);
        }
    });
}

const addParis = (parisList) => {
    let parisContainer = $("#paris-container");
    parisContainer.html('');
    parisList.forEach((paris) => {
        parisContainer.append(createParis(paris.name, paris.desc, paris.img));
    });
}

$(document).ready(function () {
    $('.materialboxed').materialbox();
    $('#clickMeButton').click(() => {
        $('#modal1').modal('open');
    });
    getAllParis();
    $('.modal').modal();
    $('#formSubmit').click(() => {
        submitForm();
    });
});

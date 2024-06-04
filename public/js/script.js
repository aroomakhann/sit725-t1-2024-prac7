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

    $.post('/api/addParis', formData, (response) => {
        if (response.status === 200) {
            getAllParis();
            $('#modal1').modal('close');
        } else {
            alert('Failed to add card. Please try again.');
        }
    });
};

const getAllParis = () => {
    $.get('/api/paris', (response) => {
        if (response.status === 200) {
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
        alert("Card posted successfully");
    })

    socket.on('randomNumber', (msg) => {
        console.log('Random Number: ' + msg);
    });
});
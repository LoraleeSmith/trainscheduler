var nameInput = "";
var roleInput = "";
var arrivingInput = "";
var rateInput = "";

/*********************************
FUNCTIONS
*********************************/
function addTableRow() {
    // new tr and tds, tbody
    var tr = $("<tr>");
    var td1 = $("<td id='name'>");
    var td2 = $("<td id='role'>");
    var td3 = $("<td id='arriving'>");
    var td4 = $("<td id='departure'>");
    var td5 = $("<td id='rate'>");
    var td6 = $("<td id='total'>");
    var tbody = $("#train-table");

    // get inputs
    td1.text(nameInput);
    td2.text(role);
    td3.text(arriving);
    td5.text(rate);
}

// function monthsWorked() {

// }

// function totalBilled() {

// }

/*********************************
EVENTS
*********************************/
$('.btn-success').on("click", function () {
    // store inputs
    nameInput = $("#train-name").val().trim();
    roleInput = $("#role").val().trim();
    arrivingInput = $("#arriving").val().trim();
    rateInput = $("#rate").val().trim();
    // TEST
    console.log(nameInput);
    console.log(roleInput);
    console.log(arrivingInput);
    console.log(rateInput);

    // store in firebase
    database.ref().push({
        name: nameInput,
        role: roleInput,
        Arriving: arrivingInput,
        rate: rateInput
    });
});
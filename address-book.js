$("button#add-contact").click( () => {
    window.location = "contacts/input-contact.html"
});

/* JavaScript runs on client side, not server side. So it can't create new files.
    So, instead, we will store contact info in dictionaries, and when someone clicks the 
    link corresponding with that contact-dictionary, the contact page will populate with
    data from the relevant dictionary.

    TODO:
        check that at least one field has data before Submitting
    
    NOTES:
        the 'value' attribute is the value of an <input> field - can retrieve the current
            value or set an initial value
*/


$("button#submit-new-contact").click( () => {

    // check that at least one of fname, lname, or phone is filled
    let fname = $("#fname").val();
    let lname = $("#lname").val();
    let phone = $("#phone").val();

    if (!fname && !lname && !phone){
        alert("Please enter a name or phone number.");
        return;
    }

    let address = $("#address").val();
    let unit    = $("#unit").val();
    let city    = $("#city").val();
    let state   = $("#state").val();
    let zip     = $("#zip").val();
    let country = $("#country").val();

    let uID = createNewContact(fname, lname, phone, address, unit, city, state, zip, country);
    if (uID){
        window.location = "./contact.html"
    } else {
        console.error("Oops! Something went wrong.")
    }
});

/*
function populateContactPage(uID){
    if (window.location != "./contact.html"){
        console.error("Oops! Something went wrong.")
        return;
    }

    $("#fname").val(contacts[uID].fname);
} */

const contacts = {};
let _prevID = 0; // Incremented then returned by getUniqueID(). First uniqueID will be 1, because 0 is falsy.


function createNewContact(fname, lname="", phone="", address="", unit="", city="", state="", zip="", country="") {
    let contact = new Contact(fname, lname, phone, address, unit, city, state, zip, country);
    let uID     = getUniqueID();

    contacts[uID] = contact;
    return uID;
}


class Contact {
    constructor(fname, lname, phone, address, unit, city, state, zip, country) {
        this.fname = fname;
        this.lname = lname;
        this.phone = phone;
        this.address = address;
        this.unit    = unit;
        this.city    = city;
        this.state   = state;
        this.zip     = zip
        this.country = country;
    }
}

function getUniqueID(){
    _prevID++;
    return _prevID;
}
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
    // grab all values that were filled and put them in variables to use with createNewContact() v

    // create new Contact object with unique id
    /* let uID = createNewContact(....);
        if(uID){
        window.location = "contacts/contact.html"
        populateContactPage(uID);
    }
    */
});

const contacts = {};
let _nextID = -1;




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
    _nextID++;
    return _nextID;
}
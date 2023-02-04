$("button#add-contact").click( () => {
    window.location = "contacts/input-contact.html"
});

/* JavaScript runs on client side, not server side. So it can't create new files.
    So, instead, we will store contact info in dictionaries, and when someone clicks the 
    link corresponding with that contact-dictionary, the contact page will populate with
    data from the relevant dictionary.
*/
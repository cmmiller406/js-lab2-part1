"use strict";
// Addressbook Class
class AddressBook {
    constructor (){
        this.contacts = [];
    }
    //Methods
    add(info){
        this.contacts.push(info);
    }
    deleteAt(index){
        this.contacts.splice(index, 1);
    }
    print(){
        console.log(this.contacts);
    }
}

// Contact Class
class Contact {
    constructor (name, email, phone, relation) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.relation = relation;
    }
}

let addressBook = new AddressBook();
// while loop
    while (true) {
        let choice = prompt("Would you like to add, delete, print, or quit?");
        if (choice === "add") {
            let name = prompt ("Enter a name.");
            let email = prompt ("Enter an email.");
            let phone = prompt ("Enter a phone number.");
            let relation = prompt ("Enter relation.");
            addressBook.add(new Contact(name, email, phone, relation));
        } else if (choice === "delete") {
            let indexNum = prompt("What index do you want to delete?");
            addressBook.deleteAt(indexNum);
        } else if (choice === "print") {
            addressBook.print();
            break;
        } else if (choice === "quit") {
            console.log("Goodbye!");
            break;
        }
    }
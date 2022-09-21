function phoneBook(array) {

        let theBook = {};
        array.forEach(element => {
                let name = element.split(' ')[0];
                let number = element.split(' ')[1];
                theBook[name] = number;
        });
        
        for (let el in theBook) {
                console.log(`${el} -> ${theBook[el]}`);
        }


        console.log(`${Object.keys(theBook)} - ${Object.values(theBook)}`);
        

}

phoneBook(['Tim 0834212554',

'Peter 0877547887',

'Bill 0896543112',

'Tim 0876566344']);
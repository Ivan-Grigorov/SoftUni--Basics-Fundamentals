function meetings(array) {
        
                let meetingBook = {};

        array.forEach(element => {
                let day = element.split(' ')[0];
                let name = element.split(' ')[1];

                if (meetingBook.hasOwnProperty(day)) {
                        console.log(`Conflict on ${day}!`);
                }else{
                        meetingBook[day] = name;
                        console.log(`Scheduled for ${day}`);
                }
        });

        for (let day in meetingBook) {
                console.log(`${day} -> ${meetingBook[day]}`);
        }


}

meetings(['Friday Bob','Saturday Ted','Monday Bill','Monday John','Wednesday George']);
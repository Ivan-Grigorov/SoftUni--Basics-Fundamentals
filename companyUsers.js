function companyUsers(array) {
        
        let companies = new Map();

        for (let line of array) {
                let companyName = line.split(' -> ')[0];
                let idOfThePerson = line.split(' -> ')[1];
                
                if (!companies.has(companyName)) {
                        companies.set(companyName,new Set());
                        companies.get(companyName).add(idOfThePerson);
                }else{
                        companies.get(companyName).add(idOfThePerson);
                }
        }

        for (let [company,ids] of Array.from(companies.entries()).sort()) {
                console.log(company);
                for(let n of Array.from(ids)){
                        console.log('-- ' + n);
                };
        }

}companyUsers([ 'SoftUni -> AA12345', 'SoftUni -> BB12345', 'Microsoft -> CC12345', 'HP -> BB12345' ])
function areaOfFigures(n) {
            let numToString = String(n);

          let sum = 0;


          for(let i = 0; i < numToString.length; i++){

                       let num = Number(numToString[i]);
                       sum += num;
          }    
          let sumToString = String(sum);
          let isAmazing = false;

          for(let i = 0; i < sumToString.length; i++){
                   if (sumToString[i] == 9) {
                        isAmazing = true;
                        break;
                   }
          }   let amazing = isAmazing ? 'True' : 'False';
          console.log(`${numToString} Amazing? ${amazing}`);
      
}






areaOfFigures(1233)
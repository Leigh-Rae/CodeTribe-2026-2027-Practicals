function bankingCharges( amount , transactionType){
    let fee;
     if (transactionType === "deposit"){
        fee = 2;
     }else if (transactionType === "withdrawal"){
        fee = 10;
     }else if (transactionType === "transfer"){
        fee = 5;
     }

     let total = amount - fee;
     console.log(total);
}

bankingCharges (100,"deposit")
bankingCharges(600,"withdrawal")
bankingCharges(150,"transfer")
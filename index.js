// Code your solutions in this file
function countDown(num) {
    for (let i = num; i >= 0; i--) {
      console.log(i);
    }
  }
  function writeCards(names, event) {
    const birthdayMessage = [];
  
    for (let i = 0; i < names.length; i++) {
      birthdayMessage.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
  
    return birthdayMessage;
  }
  
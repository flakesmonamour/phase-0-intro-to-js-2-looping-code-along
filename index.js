const names = ["Guadalupe", "Ollie","Aki"];
function writeCards(names) {
    return names.map(name => {
      return `Thank you, ${name}, for the wonderful surprise gift!`;
    });
    
  }
  function countDown(num) {
    for (let i = num; i >= 0; i--) {
      console.log(i);
    }
  }
  
  module.exports = {
    writeCards,
    countDown
  };

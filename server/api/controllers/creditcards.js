const CreditCard = require('../models/creditcard');

showAll = (req, res) => {
  CreditCard.find( (err, creditcards) => {
    if (err) res.json({message: 'Could not find any credit cards'})
    res.json({creditcards: creditcards})
  })
}



module.exports = {
  showAll: showAll
}

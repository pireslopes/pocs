const bodyParser = require('body-parser');
const express = require('express');

const app = express();
const scalar = require('./processor');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/scalar', (req, res) => {
  
  if(!validateData(req.body)) {
    res.sendStatus(400);
  }
  scalar(req.body, (err, data) => {
    if(err) {
      return res.sendStatus(503);
    }
    res.json(data);
  });  
});

app.listen(3200, () => console.log('App is listening on port 3200'));

function validateData(objbody) {
  var _isValid = true;
  if(!Object.keys(objbody).length) {
    _isValid = false;
  }

  if(!objbody.arrA.length || !objbody.arrB.length) {
    _isValid = false;
  }
  return _isValid;
}

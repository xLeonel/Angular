const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

var currentUser;

var corsOptions = {
  orgim: '/',
  optionsSuccessStatus: 200
}

app.use(cors(corsOptions));
app.use(bodyParser.json());

app.listen(3100, () => {
  console.log('Server Started!');
});

app.route('/api/atm').get((request, response) => {
  response.send(ATMS);
});

app.route('/api/atm').post((request, response) => {
  let atm = request.body;

  const firstId = ATMS ? Math.max.apply(null, ATMS.map(atmSelect => atmSelect.id)) + 1 : 1;
  atm.id = firstId;
  ATMS.push(atm);
  
  response.status(201).send(course);
});

app.route('/api/atm/:id').put((request, response) => {
  const atmId = +request.params['id'];
  const atm = request.body;

  const index = ATMS.findIndex(atmSelect => atmSelect.id === atmId);
  ATMS[index] = atm;

  response.status(200).send(atm);
});

app.route('/api/atm/:id').get((request, response) => {
  const atmId = +request.params['id'];

  response.status(200).send(ATMS.find(atmSelect => atmSelect.id === atmId));
});

app.route('/api/atm/:id').delete((request, response)=> {
  const atmId = +request.params['id'];
  ATMS = ATMS.filter(atmSelect => atmSelect.id !== atmId);
  
  response.status(204).send({});
});

var ATMS = [
    {
        id: 1,
        numeroTerminal: '12345',
        agencia: '1500',
        tipoTerminal: 'DEC',
        modelo: 'NCR',   
        fabricacao: 'Novembro 2, 1999',   
    },
    {
        id: 2,
        numeroTerminal: '00930',
        agencia: '1500',
        tipoTerminal: 'DEC',
        modelo: 'NCR',   
        fabricacao: 'Julho 2, 2001',   
    },
    {
        id: 3,
        numeroTerminal: '12345',
        agencia: '1500',
        tipoTerminal: 'Recicladora',
        modelo: 'Diebold',   
        fabricacao: 'Janeiro 2, 2011',   
    },
    {
        id: 4,
        numeroTerminal: '12345',
        agencia: '1500',
        tipoTerminal: 'DEC',
        modelo: 'OKI',   
        fabricacao: 'Junho 6, 2019',   
    },
];

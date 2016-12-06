import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './app';
import template from './template';

const server = express();

server.set('port', process.env.PORT || 3000);

server.use('/assets', express.static('assets'));

server.get('/', (req, res) => {
  const isMobile = true;
  const initialState = { isMobile };
  const appString = renderToString(<App {...initialState} />);

  res.send(template({
    body: appString,
    title: 'Hello World from the server',
    initialState: JSON.stringify(initialState)
  }));
});



var server = app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + server.address().port);
});

server.listen(server.get('port'), () => {
	console.log("Listening on port: " + port);
});

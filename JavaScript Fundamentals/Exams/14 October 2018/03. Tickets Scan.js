function scan(ticket, info) {
  const namesRegex = /\s([A-Z][A-Za-z]*)\-([A-Z][A-Za-z]*)\s?(?:\.\-([A-Z][A-Za-z]*))?\s/gm;
  const airportRegex = /\s([A-Z]{3})\/([A-Z]{3})\s/gm;
  const flightNumberRegex = /\s([A-Z]{1,3}\d{1,5})\s/gm;
  const companyRegex = /\-\s([A-Z][A-Za-z]*\*[A-Z][A-Za-z]*)\s/gm;

  const names = namesRegex.exec(ticket);
  const firstName = names[1];
  const middleName = names[2];
  const lastName = names[3];

  const airports = airportRegex.exec(ticket);
  const flights = flightNumberRegex.exec(ticket);

  const flightNumber = flights[1];
  const fromAirport = airports[1];
  const toAirport = airports[2];

  const company = companyRegex.exec(ticket)[1].split('*').join(' ');

  switch (info) {
    case 'name':
      if (lastName) {
        console.log(`Mr/Ms, ${firstName} ${middleName}. ${lastName}, have a nice flight!`);
      } else {
        console.log(`Mr/Ms, ${firstName} ${middleName}, have a nice flight!`);
      }
      break;
    case 'flight':
      console.log(`Your flight number ${flightNumber} is from ${fromAirport} to ${toAirport}.`);
      break;
    case 'company':
      console.log(`Have a nice flight with ${company}.`);
      break;
    case 'all':
      if (lastName) {
        console.log(`Mr/Ms, ${firstName} ${middleName}. ${lastName}, your flight number ${flightNumber} is from ${fromAirport} to ${toAirport}. Have a nice flight with ${company}.`);
      } else {
        console.log(`Mr/Ms, ${firstName} ${middleName}, your flight number ${flightNumber} is from ${fromAirport} to ${toAirport}. Have a nice flight with ${company}.`);
      }
      break;
  }
}

scan('ahah Second-Testov )*))&&ba SOF/VAR ela** FB973 - Bulgaria*Air -opFB900 pa-SOF/VAr//_- T12G12 STD08:45  STA09:35 ', 'all');
scan(' TEST-T.-TESTOV   SOF/VIE OS806 - Austrian*Airlines T24G55 STD11:15 STA11:50 ', 'flight');
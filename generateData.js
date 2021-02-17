const faker = require('faker');
const dataBase = {issues: []};

//making randoom data
const loc = ['office', 'home', 'police department', 'House of Government'];
const sev = [1, 2, 3, 4];
const st = ['done', 'in progress', 'not started'];

for (let i = 1; i < 100; i++) {

  dataBase.issues.push({
    userinfo: faker.name.findName(),
    location: loc[Math.round(-0.5 + Math.random() * 4)],
    issueSeverity: sev[Math.round(-0.5 + Math.random() * 4)],
    date: faker.date.between('2020-01-01', '2020-01-05'),
    description: `${faker.hacker.noun()} ${faker.hacker.noun()} ${faker.hacker.noun()}`,
    status: st[Math.round(-0.5 + Math.random() * 3)],
    comments: [],


  });
}
console.log(JSON.stringify(dataBase));

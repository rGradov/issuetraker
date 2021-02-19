const faker = require('faker');
const fs = require('fs')
const dataBase = {db: []};

//making randoom data
const loc = ['office', 'home', 'police department', 'House of Government'];
const sev = [1, 2, 3, 4];
const st = ['done', 'in progress', 'not started'];
const comments = ['coment1', 'comment2', '', '', '', '', '', '', '', '', '', '', '', '', '']
comments[20] = '';
for (let i = 0; i < 10; i++) {
  dataBase.db.push({
    id: i,
    userinfo: faker.name.findName(),
    data: [],
  });
}
for (let i = 0; i < 10; i++) {
  dataBase.db[i].data.push({
      location: loc[Math.round(-0.5 + Math.random() * 4)],
      issueSeverity: sev[Math.round(-0.5 + Math.random() * 4)],
      date: faker.date.between('2017-01-01', '2020-01-05'),
      description: `${faker.hacker.noun()} ${faker.hacker.noun()} ${faker.hacker.noun()}`,
      status: st[Math.round(-0.5 + Math.random() * 3)],
      comments: [`${comments[Math.round(-0.5 + Math.random() * 14)]}`],

    }
  )
}
fs.writeFileSync('api/data.json', JSON.stringify(dataBase, null, '\t'));
console.log(JSON.stringify(dataBase));

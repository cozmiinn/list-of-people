const people = [
    { firstName: 'Mihai', secondName: 'Enescu', dateOfBirth: '1980-01-02' },
    { firstName: 'George', secondName: 'Ionescu', dateOfBirth: '1992-06-20' },
    { firstName: 'Maria', secondName: 'Popescu', dateOfBirth: '1995-03-13' },
    { firstName: 'Elena', secondName: 'Popescu', dateOfBirth: '1990-12-13' },
    { firstName: 'Andrei', secondName: 'Ionescu', dateOfBirth: '1996-03-01' },
    { firstName: 'Sergiu', secondName: 'Ionescu', dateOfBirth: '1990-02-01' }
];

people.sort(function (x, y) {
    let a = new Date(x.dateOfBirth),
        b = new Date(y.dateOfBirth);
    return a - b;
});


console.log(people);

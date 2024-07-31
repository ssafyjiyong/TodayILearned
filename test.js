const makeCompany = (showAddress) => {
    return{
        name: 'My Company',
        ...showAddress && {address: 'Seoul'}
    };
};

console.log(makeCompany(true)); // {name: 'My Company', address: 'Seoul'}
console.log(makeCompany(false)); // {name: 'My Company'}
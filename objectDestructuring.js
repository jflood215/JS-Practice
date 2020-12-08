const myAddress = {
    streetNumber: 123,
    streeName: "Bradley Dr.",
    city: "Westfield",
    state: "Indiana",
    zip: 46074
}

// const streetNumber = myAddress.streetNumber;
// const city = myAddress.city;

const {streetNumber: streetNum, city} = myAddress;

console.log(streetNum, city);


// Destructuring objects using dot notation and saved as new variable
const req = {
    body: {
        user: {
            email: "test@test.com",
            password: "password1",
        }
    }
};

const {email, password} = req.body.user

console.log(email, password)
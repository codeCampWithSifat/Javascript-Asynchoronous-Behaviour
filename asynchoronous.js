const takeOrder = (customer, callback) => {
    console.log(`Take Order From ${customer}`)
    callback(customer)
};

const processOrder = (customer, callback) => {
    console.log(`Processing Order From ${customer}`);

    setTimeout(() => {
        console.log(`Cooking Completed`);
        console.log(`Order Processed For ${customer}`)
        callback(customer)
    }, 3000);
};

const completeOrder = (customer) => {
    console.log(`Completed Order For ${customer}`)
};

takeOrder("Customer 1" ,(customer) => {
    processOrder(customer, (customer) => {
        completeOrder(customer)
    })
});

console.log("Hello Bangladesh")
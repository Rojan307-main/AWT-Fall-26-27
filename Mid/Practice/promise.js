function processOrder() {
  return new Promise((resolve, reject) => {
    console.log("Processing order... ");

    setTimeout(() => {
      const success = true;

      if (success) {
        resolve({
          orderid : 42017,
          customer : "Rojan",
          item : "chicken burger",
          quantity : 2,
          total : 500,
        });
      } else {
        reject("failed to process the order");
      }
    }, 3000);
  });
}

processOrder()
  .then((order) => {
    console.log("Customer order .... ");
    console.log("ID :  ", order.orderid);
    console.log("Name :  ", order.customer);
    console.log("Item :  ", order.item);
    console.log("Quantity :  ", order.quantity);
    console.log("Total :  ", order.total);
  })
  .catch((error) => {
    console.log("error", error);
  });

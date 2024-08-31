import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { renderCheckoutHeader } from "./checkout/checkoutHeader.js";
import { loadProducts, loadProductsFetch } from "../data/products.js";
import { loadCart } from "../data/cart.js";

//import '../data/car.js';
//import '../data/cart-class.js';
//import '../data/backend-practise.js';

async function loadPage() {
  try {

    //throw 'error1';

    await loadProductsFetch();

    // reject() is function that's let us create an error in
    // the future.
    const value = await new Promise((resolve, reject) => {
     // throw 'error';
      loadCart(() => {
        //reject('error3');
        resolve();
      });
    });

  } catch (error) {
    console.log("Unexpected error . Please try again later ");
  }

  renderCheckoutHeader();
  renderOrderSummary();
  renderPaymentSummary();
}
loadPage();

/*
Promise.all([
 loadProductsFetch(),

  new Promise((resolve) => {
    loadCart(()=>{
      resolve();
    });
   })

]).then((values)=>{
  renderCheckoutHeader();
  renderOrderSummary();
  renderPaymentSummary();
});
*/

/*
new Promise((resolve) => {
  loadProducts(() => {
    resolve('value1');
  });

}).then((value) => {
  console.log(value);

return new Promise((resolve) => {
  loadCart(()=>{
    resolve();
  });
 });

}).then(()=>{
  renderCheckoutHeader();
  renderOrderSummary();
  renderPaymentSummary();
});
*/

/*
loadProducts(() => {
  loadCart(()=>{
    renderCheckoutHeader();
    renderOrderSummary();
    renderPaymentSummary();
  });
});
*/

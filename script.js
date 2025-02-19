document.addEventListener("DOMContentLoaded", function () {
    const buyButtons = document.querySelectorAll(".buy-btn");

    buyButtons.forEach(button => {
        button.addEventListener("click", function () {
            let productName = this.getAttribute("data-product");
            let productPrice = this.getAttribute("data-price");

            alert(`Added ${productName} to cart! Price: $${productPrice}`);
            
            // Redirect to PayPal Checkout
            window.location.href = `https://www.paypal.com/cgi-bin/webscr?cmd=_xclick&business=YOUR_PAYPAL_EMAIL&item_name=${productName}&amount=${productPrice}&currency_code=USD`;
        });
    });
});

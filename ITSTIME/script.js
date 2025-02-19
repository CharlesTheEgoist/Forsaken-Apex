document.addEventListener("DOMContentLoaded", () => {
    const buyButtons = document.querySelectorAll(".buy-btn");

    buyButtons.forEach(button => {
        button.addEventListener("click", (e) => {
            const product = e.target.dataset.product;
            const price = e.target.dataset.price;
            
            alert(`You are purchasing ${product} for $${price}. Redirecting to checkout...`);
            
            // Updated PayPal link
            window.location.href = `https://www.paypal.com/cgi-bin/webscr?cmd=_xclick&business=YOUR_PAYPAL_EMAIL&item_name=${product}&amount=${price}&currency_code=USD`;
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const buyButtons = document.querySelectorAll(".buy-btn");

    buyButtons.forEach(button => {
        button.addEventListener("click", (e) => {
            const product = e.target.dataset.product;
            const price = e.target.dataset.price;
            
            alert(`You are purchasing ${product} for $${price}. Redirecting to checkout...`);
            
            // Example PayPal checkout link (Replace with actual payment gateway)
            window.location.href = `https://www.paypal.com/paypalme/testosteroneboost/${price}`;
        });
    });
});

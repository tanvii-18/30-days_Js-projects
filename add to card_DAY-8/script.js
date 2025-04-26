const addButtons = document.querySelectorAll(".add-btn");

const cartItems = document.getElementById("cartItems");
const cartCount = document.getElementById("cart-count");


addButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
       
        const product = e.target.parentElement;

        const name = product.querySelector("h2").innerText;
        const price = product.querySelector("p").innerText;


        const li = document.createElement("li");
        li.textContent = `${name} - ${price}`;

        cartItems.appendChild(li);

        cartCount.innerText = cartItems.children.length;
    });
});

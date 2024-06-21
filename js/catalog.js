document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', () => {
            const id = button.getAttribute('data-id');
            const name = button.getAttribute('data-name');
            const price = parseFloat(button.getAttribute('data-price')) || 0;
            const image = button.getAttribute('data-img');

            let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

            cartItems.push({ id, name, price, image });

            localStorage.setItem('cartItems', JSON.stringify(cartItems));

            alert('Товар добавлен в корзину!');
        });
    });
});
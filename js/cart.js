document.addEventListener('DOMContentLoaded', () => {
    const cartItemsContainer = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');

    const loadCartItems = () => {
        return JSON.parse(localStorage.getItem('cartItems')) || [];
    };

    const saveCartItems = (items) => {
        localStorage.setItem('cartItems', JSON.stringify(items));
    };

    const updateCartDisplay = () => {
        const cartItems = loadCartItems();
        cartItemsContainer.innerHTML = '';
        let totalPrice = 0;

        cartItems.forEach((item, index) => {
            const itemPrice = parseFloat(item.price) || 0;
            totalPrice += itemPrice;

            const cartItemElement = document.createElement('div');
            cartItemElement.classList.add('cart-item');
            cartItemElement.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <div class="cart-item-details">
                    <h3>${item.name}</h3>
                    <p>Цена: ₽${itemPrice.toFixed(2)}</p>
                </div>
                <div class="price">
                    <button class="remove" data-index="${index}">Удалить</button>
                </div>
            `;
            cartItemsContainer.appendChild(cartItemElement);
        });

        totalPriceElement.textContent = `₽${totalPrice.toFixed(2)}`;

        document.querySelectorAll('.remove').forEach(button => {
            button.addEventListener('click', () => {
                const index = button.getAttribute('data-index');
                let cartItems = loadCartItems();
                cartItems.splice(index, 1);
                saveCartItems(cartItems);
                updateCartDisplay();
            });
        });
    };

    updateCartDisplay();
});
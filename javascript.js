document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.carte');
    
    items.forEach(item => {
        const moinsButton = item.querySelector('.moins');
        const plusButton = item.querySelector('.plus');
        const quantityElement = item.querySelector('.quantity');
        const priceElement = item.querySelector('.price');
        const basePrice = parseInt(priceElement.textContent.replace('FCFA', '').trim());

        moinsButton.addEventListener('click', () => {
            let quantity = parseInt(quantityElement.textContent);
            if (quantity > 1) {
                quantity--;
                quantityElement.textContent = quantity;
                priceElement.textContent = (basePrice * quantity) + 'FCFA';
            }
        });

        plusButton.addEventListener('click', () => {
            let quantity = parseInt(quantityElement.textContent);
            quantity++;
            quantityElement.textContent = quantity;
            priceElement.textContent = (basePrice * quantity) + 'FCFA';
        });
    });
});

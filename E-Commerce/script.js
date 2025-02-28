// JavaScript for interactivity

// Add to Cart Button Click Event
document.querySelectorAll('.product button').forEach(button => {
    button.addEventListener('click', event => {
        const productName = event.target.closest('.product').querySelector('h3').innerText;
        alert(`${productName} has been added to your cart!`);
    });
});

// Smooth Scroll to Sections
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const targetId = event.target.getAttribute('href').slice(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth',
        });
    });
});

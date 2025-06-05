// Hero Slider
let slideIndex = 1;
let slideInterval;

function currentSlide(n) {
    clearInterval(slideInterval);
    showSlides(slideIndex = n);
    startSlideShow();
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");
    
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    
    for (i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active');
    }
    
    for (i = 0; i < dots.length; i++) {
        dots[i].classList.remove('active');
    }
    
    if (slides[slideIndex-1]) {
        slides[slideIndex-1].classList.add('active');
    }
    if (dots[slideIndex-1]) {
        dots[slideIndex-1].classList.add('active');
    }
}

function nextSlide() {
    showSlides(slideIndex += 1);
}

function startSlideShow() {
    slideInterval = setInterval(nextSlide, 5000);
}

// Start slideshow when page loads
document.addEventListener('DOMContentLoaded', function() {
    startSlideShow();
});

// Cart functionality
let cartCount = 0;
let cartItems = [];

function updateCartCount() {
    document.getElementById('cartCount').textContent = cartCount;
}

function showCart() {
    let modalContent = document.getElementById('modalContent');
    if (cartItems.length === 0) {
        modalContent.innerHTML = '<h2>Your Cart is Empty</h2><p>Add some books to get started!</p>';
    } else {
        let cartHTML = '<h2>Shopping Cart</h2><div class="cart-items">';
        let total = 0;
        cartItems.forEach((item, index) => {
            cartHTML += `
                <div class="cart-item">
                    <h3>${item.title}</h3>
                    <p>$${item.price}</p>
                    <button onclick="removeFromCart(${index})">Remove</button>
                </div>
            `;
            total += item.price;
        });
        cartHTML += `</div><h3>Total: $${total.toFixed(2)}</h3>`;
        modalContent.innerHTML = cartHTML;
    }
    document.getElementById('modal').style.display = 'block';
}

function removeFromCart(index) {
    cartItems.splice(index, 1);
    cartCount--;
    updateCartCount();
    showCart();
}

// Newsletter subscription
function subscribeNewsletter(event) {
    event.preventDefault();
    alert('Thank you for subscribing! Check your email for confirmation.');
    event.target.reset();
}

// Download file
function downloadFile(fileName) {
    alert(`Downloading ${fileName}...`);
}

// Show preview
function showPreview(bookTitle) {
    let modalContent = document.getElementById('modalContent');
    modalContent.innerHTML = `
        <h2>${bookTitle} - Preview</h2>
        <p>Chapter 1 preview content would go here...</p>
        <p>This is a sample preview of the book. In a real implementation, this would show the actual first chapter or excerpt from the book.</p>
    `;
    document.getElementById('modal').style.display = 'block';
}

// Show blog post
function showBlogPost(postTitle) {
    window.location.href = '#blog';
}

// Close modal
function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

// Close modal when clicking outside
window.onclick = function(event) {
    let modal = document.getElementById('modal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

// Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});
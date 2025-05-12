let cart = []; // تعريف المتغير مرة واحدة

// دالة لإضافة المنتج إلى السلة
function addToCart(productName, productPrice) {
    // إضافة المنتج إلى السلة
    cart.push({ name: productName, price: productPrice });
    
    // تحديث عرض السلة
    updateCartDisplay();
    alert(`${productName} added to cart! 🛒`);
    updateCartIcon();
}

// دالة لتحديث الأيقونة الخاصة بالسلة
function updateCartIcon() {
  const cartIcon = document.getElementById("cart-count");
  cartIcon.textContent = cart.length; // تحديث العدد في الأيقونة
}

// دالة لتحديث عرض السلة
function updateCartDisplay() {
    const cartItems = document.getElementById("cart-items");
    const totalPrice = document.getElementById("total-price");

    // مسح العناصر السابقة في السلة
    cartItems.innerHTML = '';

    if (cart.length === 0) {
        cartItems.innerHTML = '<p>No items in the cart</p>';
    } else {
        let total = 0;
        cart.forEach(item => {
            total += item.price;
            cartItems.innerHTML += `<p>${item.name} - $${item.price}</p>`;
        });
        totalPrice.innerText = total.toFixed(2); // حساب المجموع الكلي
    }
}

// دالة لإتمام عملية الدفع
function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty! Please add items before proceeding to checkout.');
    } else {
        alert('Proceeding to checkout...');
        // يمكن إضافة إعادة توجيه أو نموذج لإتمام عملية الدفع
    }
}

// JavaScript code will be here

document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelector('.slides');
    let currentIndex = 0;
    const totalSlides = slides.children.length;

    setInterval(() => {
        currentIndex = (currentIndex + 1) % totalSlides;
        slides.style.transform = `translateX(-${currentIndex * 100 / totalSlides}%)`;
    }, 5000); // Change slide every 5 seconds
});






let slideDiv = document.querySelectorAll(".slides")[0]


const slideImages = [
    "https://www.thingsguyana.com/wp-content/uploads/2018/09/4564745-d8e972.jpg",
    "https://www.on9deals.com/images/deals01/burger-king-2-veg.jpg",
    "https://wertzrealestate.com/wp-content/uploads/2018/02/REPRESENTATIVEPHOTO-18.jpg"
];
for (let i = 0; i < slideImages.length; i++) {
    slideDiv.innerHTML += `<img src="${slideImages[i]}">`;
}









let productList = document.querySelectorAll(".product-list")[0];

const products = [
    {
        image:
            "https://i.pinimg.com/564x/b8/a7/5e/b8a75e580a202cce7ac6bc3693e96672.jpg",
        productName: "THE <br /> DOPPLER",
        price: "$10.00",
        qty: 1,
        id: 0
    },
    {
        image:
            "https://t4.ftcdn.net/jpg/05/61/82/83/360_F_561828375_KCtTuNdpQTjHrMqDrcoCpoLaYhLrZQdI.jpg",
        productName: "QUADRA <br /> RELOADED",
        price: "$20.00",
        qty: 1,
        id: 1
    },
    {
        image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgzcmUeNiJwtYSeB-syasxZVUBFT9TDy-Yhg&s",
        productName: "ALL AMERICAN <br /> DOUBLE CHEESE",
        price: "$30.00",
        qty: 1,
        id: 2
    },
    {
        image: "https://t4.ftcdn.net/jpg/05/65/22/05/360_F_565220597_DjMSnmmbovq13MB8b8ET8ydwP0iOKuMX.jpg",
        productName: "Big <br /> Bang",
        price: "$40.00",
        qty: 1,
        id: 3
    },
]



function listAllProduct() {
    let productList = document.querySelectorAll(".product-list")[0];
    for (let i = 0; i < products.length; i++) {
        let product = products[i];
        let productCard = `
        <div class="product-item">
            <img src="${product.image}" />
            <h3>${product.productName}</h3>
            <p>${product.price}</p>
            <button class="product-btn button --door" onclick='addToCart(${JSON.stringify(product).replace(/'/g, "&apos;")}, ${product.id})'>Add To Cart</button>
        </div>
        `
        productList.innerHTML += productCard;
    }
}

let cart = []

function addToCart(product, id) {
    // console.log(id);
    let priceString = product.price.replace('$', '');
    product.price = parseFloat(priceString);

    let productInCart = cart.find(item => item.product.id === id);

    if (productInCart) {
        productInCart.product.qty++;
        productInCart.total = productInCart.product.price * productInCart.product.qty;
        Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Quantity updated to cart successfully 😎",
            showConfirmButton: false,
            timer: 1500
          });
          console.log("Product quantity updated:", cart);
    } else {
        cart.push({
            product,
            total: product.price * product.qty
        });
        Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Product added to cart successfully 😎",
            showConfirmButton: false,
            timer: 1500
          });
        console.log("Product added to cart:", cart);
    }

    
    let cartPara = document.querySelectorAll("#cart")[0];
    cartPara.innerHTML = cart.length;
}
listAllProduct();



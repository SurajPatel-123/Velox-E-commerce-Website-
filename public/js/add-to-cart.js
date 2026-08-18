// // Product ko cart mein add karne ke liye function
// async function addToCart(productId) {
//     try {
//         const response = await fetch("/cart/add", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify({
//                 productId: productId,
//                 quantity: 1
//             })
//         });

//         // Request fail hone par error throw karein
//         if (!response.ok) {
//             throw new Error(`HTTP Error: ${response.status}`);
//         }

//         const data = await response.json();

//         if (data.success) {
//             alert("Product added to cart");

//             // Agar updateCartCount function Navbar mein present hai, toh use call karein
//             if (typeof updateCartCount === "function") {
//                 updateCartCount();
//             }
//         } else {
//             alert(data.message || "Unable to add product to cart.");
//         }

//     } catch (err) {
//         console.error("Add to Cart Error:", err);
//         alert("Something went wrong. Please try again.");
//     }
// }
const products = [

    // =========================
    // FASHION - 8 PRODUCTS
    // =========================

    {
        title: "Men's Casual Denim Jacket",
        description: "Stylish denim jacket made with premium fabric, perfect for casual outings.",
        price: 1799,
        category: "Fashion",
        image: "https://images.unsplash.com/photo-1551028719-00167b16eac5",
        rating: 4.5
    },
    {
        title: "Women's Summer Dress",
        description: "Comfortable and elegant summer dress with a modern stylish design.",
        price: 1299,
        category: "Fashion",
        image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446",
        rating: 4.4
    },
    {
        title: "Men's Cotton T-Shirt",
        description: "Soft premium cotton t-shirt suitable for everyday casual wear.",
        price: 599,
        category: "Fashion",
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
        rating: 4.3
    },
    {
        title: "Women's Casual Hoodie",
        description: "Warm and comfortable hoodie designed for casual everyday styling.",
        price: 999,
        category: "Fashion",
        image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7",
        rating: 4.6
    },
    {
        title: "Men's Formal Shirt",
        description: "Classic formal shirt made from breathable fabric for office and events.",
        price: 899,
        category: "Fashion",
        image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf",
        rating: 4.2
    },
    {
        title: "Women's Handbag",
        description: "Elegant handbag with spacious compartments for everyday essentials.",
        price: 1199,
        category: "Fashion",
        image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3",
        rating: 4.5
    },
    {
        title: "Classic White Sneakers",
        description: "Lightweight sneakers with a clean design suitable for everyday outfits.",
        price: 1499,
        category: "Fashion",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
        rating: 4.7
    },
    {
        title: "Classic Analog Watch",
        description: "Elegant analog wristwatch with a premium stainless steel design.",
        price: 1599,
        category: "Fashion",
        image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d",
        rating: 4.4
    },


    // =========================
    // BEAUTY - 8 PRODUCTS
    // =========================

    {
        title: "Organic Face Care Kit",
        description: "Complete skincare kit containing cleanser, moisturizer and face serum.",
        price: 799,
        category: "Beauty",
        image: "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8",
        rating: 4.5
    },
    {
        title: "Vitamin C Face Serum",
        description: "Lightweight vitamin C serum designed to brighten and refresh your skin.",
        price: 599,
        category: "Beauty",
        image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be",
        rating: 4.4
    },
    {
        title: "Moisturizing Face Cream",
        description: "Daily moisturizing cream suitable for soft and hydrated skin.",
        price: 449,
        category: "Beauty",
        image: "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd",
        rating: 4.2
    },
    {
        title: "Matte Lipstick Set",
        description: "Long-lasting matte lipstick collection with multiple attractive shades.",
        price: 699,
        category: "Beauty",
        image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa",
        rating: 4.6
    },
    {
        title: "Makeup Brush Set",
        description: "Professional makeup brush set with soft and skin-friendly bristles.",
        price: 549,
        category: "Beauty",
        image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9",
        rating: 4.3
    },
    {
        title: "Perfume Eau De Parfum",
        description: "Long-lasting elegant fragrance suitable for everyday and special occasions.",
        price: 999,
        category: "Beauty",
        image: "https://images.unsplash.com/photo-1541643600914-78b084683601",
        rating: 4.7
    },
    {
        title: "Hair Care Shampoo",
        description: "Gentle shampoo designed to cleanse and nourish your hair.",
        price: 399,
        category: "Beauty",
        image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b",
        rating: 4.1
    },
    {
        title: "Aloe Vera Skin Gel",
        description: "Refreshing aloe vera gel suitable for daily skincare and hydration.",
        price: 299,
        category: "Beauty",
        image: "https://images.unsplash.com/photo-1620916297397-a4a5402a3c6c",
        rating: 4.4
    },


    // =========================
    // ELECTRONICS - 8 PRODUCTS
    // =========================

    {
        title: "Wireless Bluetooth Headphones",
        description: "Premium wireless headphones with deep bass and long battery life.",
        price: 1499,
        category: "Electronics",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
        rating: 4.6
    },
    {
        title: "Portable Bluetooth Speaker",
        description: "Compact wireless speaker with powerful sound and deep bass.",
        price: 1199,
        category: "Electronics",
        image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1",
        rating: 4.4
    },
    {
        title: "Wireless Keyboard",
        description: "Slim wireless keyboard with comfortable keys and modern design.",
        price: 899,
        category: "Electronics",
        image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3",
        rating: 4.3
    },
    {
        title: "Wireless Gaming Mouse",
        description: "High precision wireless mouse with ergonomic gaming design.",
        price: 799,
        category: "Electronics",
        image: "https://images.unsplash.com/photo-1527814050087-3793815479db",
        rating: 4.5
    },
    {
        title: "USB-C Fast Charger",
        description: "Compact fast charger compatible with modern smartphones and devices.",
        price: 699,
        category: "Electronics",
        image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0",
        rating: 4.2
    },
    {
        title: "Smart LED Desk Lamp",
        description: "Adjustable LED desk lamp with multiple brightness levels.",
        price: 799,
        category: "Electronics",
        image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c",
        rating: 4.4
    },
    {
        title: "Noise Cancelling Earbuds",
        description: "True wireless earbuds with active noise cancellation and clear audio.",
        price: 1899,
        category: "Electronics",
        image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1",
        rating: 4.6
    },
    {
        title: "Smart Watch Series 8",
        description: "Smartwatch with fitness tracking, notifications and health monitoring.",
        price: 2499,
        category: "Electronics",
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
        rating: 4.5
    },


    // =========================
    // MOBILES - 8 PRODUCTS
    // =========================

    {
        title: "Nova X5 5G Smartphone",
        description: "Modern 5G smartphone with powerful processor and high-resolution display.",
        price: 18999,
        category: "Mobiles",
        image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97",
        rating: 4.5
    },
    {
        title: "Galaxy Style Pro",
        description: "Premium smartphone with AMOLED display and advanced camera system.",
        price: 24999,
        category: "Mobiles",
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
        rating: 4.6
    },
    {
        title: "Pixel Vision 5G",
        description: "Powerful 5G smartphone with excellent photography and clean software.",
        price: 29999,
        category: "Mobiles",
        image: "https://images.unsplash.com/photo-1592286927505-1def25115558",
        rating: 4.7
    },
    {
        title: "Ultra Max Smartphone",
        description: "Flagship smartphone featuring a large display and powerful performance.",
        price: 39999,
        category: "Mobiles",
        image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd",
        rating: 4.6
    },
    {
        title: "One Plus Style 5G",
        description: "Fast and smooth 5G smartphone with premium design and camera.",
        price: 27999,
        category: "Mobiles",
        image: "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb",
        rating: 4.4
    },
    {
        title: "Budget Pro Smartphone",
        description: "Affordable smartphone with modern features and long-lasting battery.",
        price: 12999,
        category: "Mobiles",
        image: "https://images.unsplash.com/photo-1567581935884-3349723552ca",
        rating: 4.2
    },
    {
        title: "Fold X Premium Phone",
        description: "Innovative foldable smartphone with flexible display technology.",
        price: 69999,
        category: "Mobiles",
        image: "https://images.unsplash.com/photo-1556656793-08538906a9f8",
        rating: 4.5
    },
    {
        title: "Mini Compact Smartphone",
        description: "Compact smartphone with powerful performance and stylish design.",
        price: 15999,
        category: "Mobiles",
        image: "https://images.unsplash.com/photo-1523206489230-c012c64b2b48",
        rating: 4.1
    },


    // =========================
    // LAPTOPS - 8 PRODUCTS
    // =========================

    {
        title: "UltraBook Pro 14",
        description: "Slim and lightweight laptop designed for students and professionals.",
        price: 54999,
        category: "Laptops",
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853",
        rating: 4.6
    },
    {
        title: "Mac Style Air Laptop",
        description: "Premium lightweight laptop with high-resolution display and excellent performance.",
        price: 89999,
        category: "Laptops",
        image: "https://media.wired.com/photos/67e5bd328eceed9f2cae96f3/master/w_1600%2Cc_limit/Razer-Blade-16-2025-Laptop-(front)-Reviewer-Photo-SOURCE-Luke-Larsen.jpg",
        rating: 4.8
    },
    {
        title: "Gaming Beast Laptop",
        description: "High-performance gaming laptop with powerful graphics and fast refresh display.",
        price: 79999,
        category: "Laptops",
        image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302",
        rating: 4.7
    },
    {
        title: "Business Pro Laptop",
        description: "Reliable business laptop with powerful processor and professional design.",
        price: 64999,
        category: "Laptops",
        image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef",
        rating: 4.4
    },
    {
        title: "Student Essential Laptop",
        description: "Affordable laptop designed for online classes, coding and daily work.",
        price: 39999,
        category: "Laptops",
        image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
        rating: 4.3
    },
    {
        title: "Creator Studio Laptop",
        description: "Powerful laptop for video editing, graphic design and content creation.",
        price: 94999,
        category: "Laptops",
        image: "https://images.unsplash.com/photo-1593642532744-d377ab507dc8",
        rating: 4.7
    },
    {
        title: "Convertible 2-in-1 Laptop",
        description: "Flexible touchscreen laptop that can be used as both tablet and laptop.",
        price: 57999,
        category: "Laptops",
        image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed",
        rating: 4.4
    },
    {
        title: "Office Work Laptop",
        description: "Efficient laptop for office applications, browsing and productivity.",
        price: 44999,
        category: "Laptops",
        image: "https://images.unsplash.com/photo-1484788984921-03950022c9ef",
        rating: 4.2
    },


    // =========================
    // TVs - 8 PRODUCTS
    // =========================

    {
        title: "Smart LED TV 43 Inch",
        description: "4K Ultra HD smart TV with vivid colors and immersive sound.",
        price: 24999,
        category: "TVs",
        image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1",
        rating: 4.6
    },
    {
        title: "4K Ultra HD TV 55 Inch",
        description: "Large 55-inch 4K television with cinematic picture quality.",
        price: 39999,
        category: "TVs",
        image: "https://images.unsplash.com/photo-1461151304267-38535e780c79",
        rating: 4.7
    },
    {
        title: "Premium OLED TV",
        description: "Premium OLED television offering deep blacks and stunning contrast.",
        price: 69999,
        category: "TVs",
        image: "https://images.unsplash.com/photo-1593784991095-a205069470b6",
        rating: 4.8
    },
    {
        title: "Budget Smart TV 32 Inch",
        description: "Affordable smart TV with streaming apps and HD display.",
        price: 13999,
        category: "TVs",
        image: "https://images.unsplash.com/photo-1577979749830-f1d742b96791",
        rating: 4.2
    },
    {
        title: "QLED Smart TV 65 Inch",
        description: "Large QLED display with vibrant colors and premium cinematic experience.",
        price: 74999,
        category: "TVs",
        image: "https://images.unsplash.com/photo-1593305841991-05c297ba4575",
        rating: 4.7
    },
    {
        title: "Android Smart TV 43 Inch",
        description: "Feature-rich Android smart television with built-in streaming apps.",
        price: 21999,
        category: "TVs",
        image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1",
        rating: 4.3
    },
    {
        title: "4K Gaming TV",
        description: "High-resolution gaming TV with low latency and smooth refresh rate.",
        price: 45999,
        category: "TVs",
        image: "https://images.unsplash.com/photo-1542751371-adc38448a05e",
        rating: 4.5
    },
    {
        title: "Cinema Home TV 75 Inch",
        description: "Massive 75-inch smart TV designed for a home theatre experience.",
        price: 99999,
        category: "TVs",
        image: "https://images.unsplash.com/photo-1601944179066-29786cb9d32a",
        rating: 4.8
    },


    // =========================
    // HOME APPLIANCES - 8
    // =========================

    {
        title: "Air Fryer 4.5L",
        description: "Healthy cooking air fryer with digital controls and multiple cooking modes.",
        price: 3299,
        category: "Home Appliances",
        image: "https://images.unsplash.com/photo-1648137093190-d9a6c4f7f6f3",
        rating: 4.5
    },
    {
        title: "Automatic Washing Machine",
        description: "Fully automatic washing machine with multiple wash programs.",
        price: 18999,
        category: "Home Appliances",
        image: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1",
        rating: 4.4
    },
    {
        title: "Double Door Refrigerator",
        description: "Spacious double-door refrigerator with energy-efficient cooling.",
        price: 29999,
        category: "Home Appliances",
        image: "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5",
        rating: 4.6
    },
    {
        title: "Microwave Oven",
        description: "Multi-function microwave oven for quick and convenient cooking.",
        price: 7999,
        category: "Home Appliances",
        image: "https://images.unsplash.com/photo-1585659722983-3a675dabf23d",
        rating: 4.3
    },
    {
        title: "Mixer Grinder",
        description: "Powerful mixer grinder with multiple jars for kitchen preparation.",
        price: 2499,
        category: "Home Appliances",
        image: "https://images.unsplash.com/photo-1570222094114-d054a817e56b",
        rating: 4.2
    },
    {
        title: "Electric Kettle",
        description: "Fast boiling electric kettle with automatic shut-off protection.",
        price: 899,
        category: "Home Appliances",
        image: "https://images.unsplash.com/photo-1594213114663-d94db9b17119",
        rating: 4.4
    },
    {
        title: "Tower Fan",
        description: "Modern tower fan with multiple speed settings and quiet operation.",
        price: 2999,
        category: "Home Appliances",
        image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac",
        rating: 4.1
    },
    {
        title: "Robot Vacuum Cleaner",
        description: "Smart robotic vacuum cleaner for automated home floor cleaning.",
        price: 15999,
        category: "Home Appliances",
        image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd",
        rating: 4.5
    },


    // =========================
    // SPORTS - 8 PRODUCTS
    // =========================

    {
        title: "Premium Yoga Mat",
        description: "Non-slip exercise mat suitable for yoga, meditation and workouts.",
        price: 599,
        category: "Sports",
        image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f",
        rating: 4.5
    },
    {
        title: "Professional Cricket Bat",
        description: "High-quality cricket bat designed for powerful shots and professional practice.",
        price: 2499,
        category: "Sports",
        image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da",
        rating: 4.6
    },
    {
        title: "Football Training Ball",
        description: "Durable football suitable for training, practice and recreational matches.",
        price: 799,
        category: "Sports",
        image: "https://images.unsplash.com/photo-1553778263-73a83bab9b0c",
        rating: 4.3
    },
    {
        title: "Running Sports Shoes",
        description: "Lightweight running shoes with comfortable cushioning and grip.",
        price: 1799,
        category: "Sports",
        image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5",
        rating: 4.5
    },
    {
        title: "Adjustable Dumbbells",
        description: "Compact adjustable dumbbells suitable for strength training at home.",
        price: 1999,
        category: "Sports",
        image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e",
        rating: 4.4
    },
    {
        title: "Badminton Racket Set",
        description: "Lightweight badminton racket set suitable for beginners and players.",
        price: 1299,
        category: "Sports",
        image: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea",
        rating: 4.2
    },
    {
        title: "Fitness Resistance Bands",
        description: "Set of resistance bands for strength training and home workouts.",
        price: 499,
        category: "Sports",
        image: "https://images.unsplash.com/photo-1598971639058-a8e3b6c1f8c1",
        rating: 4.3
    },
    {
        title: "Sports Water Bottle",
        description: "Durable sports bottle with leak-proof lid for workouts and outdoor activities.",
        price: 449,
        category: "Sports",
        image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8",
        rating: 4.4
    },


    // =========================
    // BOOKS - 8 PRODUCTS
    // =========================

    {
        title: "The Psychology of Money",
        description: "A practical book about money, investing and financial behavior.",
        price: 399,
        category: "Books",
        image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73",
        rating: 4.8
    },
    {
        title: "Atomic Habits",
        description: "A practical guide to building good habits and breaking bad ones.",
        price: 499,
        category: "Books",
        image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f",
        rating: 4.9
    },
    {
        title: "Clean Code",
        description: "Essential programming book focused on writing clean and maintainable software.",
        price: 699,
        category: "Books",
        image: "https://images.unsplash.com/photo-1532012197267-da84d127e765",
        rating: 4.7
    },
    {
        title: "Java Programming Guide",
        description: "Beginner-friendly guide for learning Java programming and object-oriented concepts.",
        price: 599,
        category: "Books",
        image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
        rating: 4.5
    },
    {
        title: "Data Structures and Algorithms",
        description: "Comprehensive introduction to data structures and algorithmic problem solving.",
        price: 649,
        category: "Books",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
        rating: 4.6
    },
    {
        title: "Rich Dad Poor Dad",
        description: "Popular personal finance book about financial education and wealth building.",
        price: 349,
        category: "Books",
        image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e",
        rating: 4.7
    },
    {
        title: "Deep Work",
        description: "Guide to focused productivity and improving concentration in a distracted world.",
        price: 449,
        category: "Books",
        image: "https://images.unsplash.com/photo-1512820790803-83ca734da794",
        rating: 4.5
    },
    {
        title: "Web Development Handbook",
        description: "Learn modern web development concepts including HTML, CSS and JavaScript.",
        price: 749,
        category: "Books",
        image: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d",
        rating: 4.4
    },


    // =========================
    // TOYS - 8 PRODUCTS
    // =========================

    {
        title: "Remote Control Racing Car",
        description: "Fast remote control racing car designed for exciting indoor and outdoor play.",
        price: 899,
        category: "Toys",
        image: "https://images.unsplash.com/photo-1594787318286-3d835c1d207f",
        rating: 4.5
    },
    {
        title: "Building Blocks Set",
        description: "Creative building blocks set that encourages imagination and problem solving.",
        price: 699,
        category: "Toys",
        image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b",
        rating: 4.7
    },
    {
        title: "Teddy Bear Soft Toy",
        description: "Soft and cuddly teddy bear made from child-friendly materials.",
        price: 499,
        category: "Toys",
        image: "https://images.unsplash.com/photo-1559454403-b8fb88521f11",
        rating: 4.6
    },
    {
        title: "Kids Educational Puzzle",
        description: "Colorful educational puzzle designed to improve children's logical thinking.",
        price: 299,
        category: "Toys",
        image: "https://images.unsplash.com/photo-1607453998774-d533f65dac99",
        rating: 4.4
    },
    {
        title: "Toy Kitchen Set",
        description: "Fun pretend-play kitchen set with colorful accessories for kids.",
        price: 999,
        category: "Toys",
        image: "https://images.unsplash.com/photo-1560961911-ba7ef651a56c",
        rating: 4.3
    },
    {
        title: "Kids Drawing Kit",
        description: "Complete drawing and coloring kit for creative activities and learning.",
        price: 399,
        category: "Toys",
        image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f",
        rating: 4.5
    },
    {
        title: "Mini Building Robot",
        description: "Interactive educational robot building kit for young learners.",
        price: 1299,
        category: "Toys",
        image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
        rating: 4.6
    },
    {
        title: "Toy Train Set",
        description: "Colorful toy train set with tracks designed for creative and imaginative play.",
        price: 799,
        category: "Toys",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64",
        rating: 4.2
    },

  // ================= FRUITS & VEGETABLES (12 Items) =================
    {
        title: "Fresh Red Apples",
        description: "Fresh and juicy red apples, perfect for daily consumption.",
        price: 180,
        category: "Fruits & Vegetables",
        image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6",
        rating: 4.5
    },
    {
        title: "Fresh Bananas",
        description: "Naturally sweet and fresh bananas rich in essential nutrients.",
        price: 60,
        category: "Fruits & Vegetables",
        image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e",
        rating: 4.4
    },
    {
        title: "Fresh Tomatoes",
        description: "Farm fresh red tomatoes for cooking and salads.",
        price: 50,
        category: "Fruits & Vegetables",
        image: "https://images.unsplash.com/photo-1546094096-0df4bcaaa337",
        rating: 4.3
    },
    {
        title: "Fresh Potatoes",
        description: "High quality fresh potatoes suitable for everyday cooking.",
        price: 45,
        category: "Fruits & Vegetables",
        image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655",
        rating: 4.2
    },
    {
        title: "Fresh Oranges",
        description: "Juicy and refreshing oranges packed with natural goodness.",
        price: 120,
        category: "Fruits & Vegetables",
        image: "https://images.unsplash.com/photo-1547514701-42782101795e",
        rating: 4.6
    },
    {
        title: "Fresh Onions",
        description: "Essential organic red onions for rich flavor in everyday meals.",
        price: 40,
        category: "Fruits & Vegetables",
        image: "https://images.unsplash.com/photo-1618512496248-a07fe83aa8cf",
        rating: 4.3
    },
    {
        title: "Green Capsicum",
        description: "Crisp and fresh green bell peppers ideal for stir-fries and salads.",
        price: 80,
        category: "Fruits & Vegetables",
        image: "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83",
        rating: 4.5
    },
    {
        title: "Fresh Spinach",
        description: "Nutritious and pesticide-free green spinach leaves.",
        price: 30,
        category: "Fruits & Vegetables",
        image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb",
        rating: 4.7
    },
    {
        title: "Fresh Strawberries",
        description: "Delicious, handpicked sweet red strawberries.",
        price: 220,
        category: "Fruits & Vegetables",
        image: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6",
        rating: 4.8
    },
    {
        title: "Organic Carrots",
        description: "Crunchy and sweet red carrots, great for salads and juices.",
        price: 65,
        category: "Fruits & Vegetables",
        image: "https://images.unsplash.com/photo-1598170845058-12ef4a457939",
        rating: 4.4
    },
    {
        title: "Fresh Lemons",
        description: "Tangy and juicy lemons packed with Vitamin C.",
        price: 50,
        category: "Fruits & Vegetables",
        image: "https://images.unsplash.com/photo-1534531141161-e41d133a8979",
        rating: 4.2
    },
    {
        title: "Green Broccoli",
        description: "Healthy, farm-fresh green broccoli head packed with nutrients.",
        price: 90,
        category: "Fruits & Vegetables",
        image: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a",
        rating: 4.6
    },
   {
        title: "Fresh Full Cream Milk",
        description: "Fresh full cream milk suitable for tea, coffee and daily use.",
        price: 65,
        category: "Dairy & Bakery",
        image: "https://images.unsplash.com/photo-1550583724-b2692b85b150",
        rating: 4.5
    },
    {
        title: "Fresh Butter",
        description: "Creamy and delicious butter made from quality milk.",
        price: 120,
        category: "Dairy & Bakery",
        image: "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d",
        rating: 4.4
    },
    {
        title: "Cheese Slices",
        description: "Soft and creamy cheese slices perfect for sandwiches and burgers.",
        price: 150,
        category: "Dairy & Bakery",
        image: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d",
        rating: 4.6
    },
    {
        title: "White Bread",
        description: "Soft and fresh bread for breakfast and quick snacks.",
        price: 45,
        category: "Dairy & Bakery",
        image: "https://images.unsplash.com/photo-1509440159596-0249088772ff",
        rating: 4.3
    },
    {
        title: "Fresh Paneer",
        description: "Soft and fresh paneer ideal for Indian dishes.",
        price: 110,
        category: "Dairy & Bakery",
        image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7",
        rating: 4.7
    },
    {
        title: "Greek Yogurt",
        description: "Thick and creamy probiotic yogurt, perfect for smoothies or healthy snacks.",
        price: 85,
        category: "Dairy & Bakery",
        image: "https://images.unsplash.com/photo-1488477181946-6428a0291777",
        rating: 4.6
    },
    {
        title: "Multigrain Bread",
        description: "Healthy and fiber-rich multigrain bread loaf.",
        price: 55,
        category: "Dairy & Bakery",
        image: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73",
        rating: 4.4
    },
    {
        title: "Fresh Eggs (Pack of 6)",
        description: "Farm-fresh protein-rich eggs for breakfast.",
        price: 50,
        category: "Dairy & Bakery",
        image: "https://images.unsplash.com/photo-1506976785307-8732e854ad03",
        rating: 4.5
    },
    {
        title: "Mozzarella Cheese Block",
        description: "Grated or shredded mozzarella cheese perfect for home baked pizzas.",
        price: 210,
        category: "Dairy & Bakery",
        image: "https://images.unsplash.com/photo-1552767059-ce182ead8c1b",
        rating: 4.7
    },
    {
        title: "Fresh Croissants",
        description: "Flaky, buttery bakery-fresh french croissants.",
        price: 90,
        category: "Dairy & Bakery",
        image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a",
        rating: 4.6
    },
    {
        title: "Fresh Curd (Dahi)",
        description: "Pure and traditional thick set curd for daily meals.",
        price: 40,
        category: "Dairy & Bakery",
        image: "https://images.unsplash.com/photo-1571217869189-412c73af2036",
        rating: 4.3
    },
    {
        title: "Chocolate Muffins",
        description: "Soft and fluffy baked muffins enriched with dark chocolate chips.",
        price: 75,
        category: "Dairy & Bakery",
        image: "https://images.unsplash.com/photo-1607958996333-41aef7caefaa",
        rating: 4.5
    },

    // ================= SNACKS =================
    {
        title: "Classic Potato Chips",
        description: "Crispy and delicious potato chips with a classic salted flavour.",
        price: 30,
        category: "Snacks",
        image: "https://images.unsplash.com/photo-1566478989037-eec170784d0b",
        rating: 4.4
    },
    {
        title: "Masala Namkeen",
        description: "Crunchy and spicy Indian namkeen for every occasion.",
        price: 80,
        category: "Snacks",
        image: "https://images.unsplash.com/photo-1599599810694-cd5e7f5e8c2f",
        rating: 4.2
    },
    {
        title: "Chocolate Cookies",
        description: "Crunchy cookies filled with delicious chocolate flavour.",
        price: 90,
        category: "Snacks",
        image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e",
        rating: 4.6
    },
    {
        title: "Roasted Peanuts",
        description: "Crunchy roasted peanuts perfect for evening snacks.",
        price: 70,
        category: "Snacks",
        image: "https://images.unsplash.com/photo-1567892737950-30c8db9f9a3f",
        rating: 4.3
    },
    {
        title: "Cream Biscuits",
        description: "Delicious cream-filled biscuits loved by kids and adults.",
        price: 50,
        category: "Snacks",
        image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35",
        rating: 4.5
    },
    {
        title: "Salted Popcorn",
        description: "Light and airy butter-salted cinema style popcorn.",
        price: 40,
        category: "Snacks",
        image: "https://images.unsplash.com/photo-1578849278619-e73505e9610f",
        rating: 4.4
    },
    {
        title: "Corn Chips (Nachos)",
        description: "Crispy tortilla corn chips seasoned with tangy cheese.",
        price: 60,
        category: "Snacks",
        image: "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d",
        rating: 4.3
    },
    {
        title: "Mixed Roasted Nuts",
        description: "Healthy assortment of roasted almonds, cashews, and raisins.",
        price: 290,
        category: "Snacks",
        image: "https://images.unsplash.com/photo-1536591375315-1b836814d3e0",
        rating: 4.8
    },
    {
        title: "Oat Energy Bars",
        description: "Nutritious oat and honey bars for instant energy on the go.",
        price: 110,
        category: "Snacks",
        image: "https://images.unsplash.com/photo-1622484210800-8851921396b7",
        rating: 4.5
    },
    {
        title: "Spicy Banana Chips",
        description: "Traditional crispy banana chips seasoned with red chili and salt.",
        price: 65,
        category: "Snacks",
        image: "https://images.unsplash.com/photo-1621939514649-280e2ee25f60",
        rating: 4.2
    },
    {
        title: "Dark Chocolate Bar",
        description: "Rich 70% cocoa dark chocolate for true chocolate lovers.",
        price: 150,
        category: "Snacks",
        image: "https://images.unsplash.com/photo-1511381939415-e44015466834",
        rating: 4.7
    },
    {
        title: "Rice Crackers",
        description: "Lightly salted crispy baked rice crackers.",
        price: 85,
        category: "Snacks",
        image: "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e",
        rating: 4.1
    },

    // ================= BEVERAGES =================
    {
        title: "Orange Fruit Juice",
        description: "Refreshing orange juice with a delicious fruity taste.",
        price: 110,
        category: "Beverages",
        image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba",
        rating: 4.4
    },
    {
        title: "Green Tea",
        description: "Premium green tea leaves for a refreshing cup of tea.",
        price: 180,
        category: "Beverages",
        image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc",
        rating: 4.5
    },
    {
        title: "Instant Coffee",
        description: "Rich and aromatic instant coffee for your daily routine.",
        price: 220,
        category: "Beverages",
        image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd",
        rating: 4.6
    },
    {
        title: "Mango Juice",
        description: "Sweet and refreshing mango drink made with delicious mango flavour.",
        price: 100,
        category: "Beverages",
        image: "https://images.unsplash.com/photo-1546173159-315724a31696",
        rating: 4.4
    },
    {
        title: "Mineral Water",
        description: "Pure and refreshing packaged drinking water.",
        price: 30,
        category: "Beverages",
        image: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d",
        rating: 4.2
    },
    {
        title: "Sparkling Lemonade",
        description: "Carbonated refreshing lemon drink with a fizzy twist.",
        price: 60,
        category: "Beverages",
        image: "https://images.unsplash.com/photo-1621263764928-df1444c5e859",
        rating: 4.5
    },
    {
        title: "Cold Brew Coffee",
        description: "Smooth, low-acidity bottled cold brewed black coffee.",
        price: 140,
        category: "Beverages",
        image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c",
        rating: 4.7
    },
    {
        title: "Apple Juice Drink",
        description: "100% natural apple juice with no added refined sugars.",
        price: 115,
        category: "Beverages",
        image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6",
        rating: 4.3
    },
    {
        title: "Masala Chai Bags",
        description: "Authentic Indian spiced tea bags infused with cardamom and ginger.",
        price: 160,
        category: "Beverages",
        image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3",
        rating: 4.6
    },
    {
        title: "Coconut Water",
        description: "Hydrating and natural tender coconut water packed with electrolytes.",
        price: 50,
        category: "Beverages",
        image: "https://images.unsplash.com/photo-1525385133512-2f3bdd039054",
        rating: 4.4
    },
    {
        title: "Energy Drink",
        description: "Refreshing energy drink formulated to boost focus and vitality.",
        price: 110,
        category: "Beverages",
        image: "https://images.unsplash.com/photo-1622543925917-763c34d1a86e",
        rating: 4.1
    },
    {
        title: "Almond Milk",
        description: "Unsweetened plant-based dairy alternative made from fresh almonds.",
        price: 210,
        category: "Beverages",
        image: "https://images.unsplash.com/photo-1563636619-e9143da7973b",
        rating: 4.5
    },

    // ================= FOOD GRAINS =================
    {
        title: "Premium Basmati Rice",
        description: "Long grain aromatic basmati rice for delicious meals.",
        price: 650,
        category: "Food Grains",
        image: "https://images.unsplash.com/photo-1586201375761-83865001e31c",
        rating: 4.7
    },
    {
        title: "Whole Wheat Flour",
        description: "High quality whole wheat flour for soft and healthy rotis.",
        price: 280,
        category: "Food Grains",
        image: "https://images.unsplash.com/photo-1509440159596-0249088772ff",
        rating: 4.5
    },
    {
        title: "Toor Dal",
        description: "Premium quality yellow pigeon peas for everyday cooking.",
        price: 160,
        category: "Food Grains",
        image: "https://images.unsplash.com/photo-1585991042777-985d5e4f4f2f",
        rating: 4.4
    },
    {
        title: "Moong Dal",
        description: "Clean and nutritious moong dal suitable for healthy meals.",
        price: 140,
        category: "Food Grains",
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950",
        rating: 4.5
    },
    {
        title: "Chana Dal",
        description: "Fresh and high-quality chana dal for Indian recipes.",
        price: 120,
        category: "Food Grains",
        image: "https://images.unsplash.com/photo-1615485925600-97237c4fc1ec",
        rating: 4.3
    },
    {
        title: "Rolled Oats",
        description: "100% whole grain oats rich in fiber, perfect for healthy breakfasts.",
        price: 190,
        category: "Food Grains",
        image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae",
        rating: 4.6
    },
    {
        title: "Organic Quinoa",
        description: "Gluten-free nutrient-dense white quinoa grains.",
        price: 340,
        category: "Food Grains",
        image: "https://images.unsplash.com/photo-1586201375761-83865001e31c",
        rating: 4.5
    },
    {
        title: "Sona Masoori Rice",
        description: "Lightweight and aromatic medium-grain rice for daily cooking.",
        price: 480,
        category: "Food Grains",
        image: "https://images.unsplash.com/photo-1536304929831-ee1ca9d44906",
        rating: 4.4
    },
    {
        title: "Kabuli Chana (Chickpeas)",
        description: "Large size unpolished chickpeas for curries and hummus.",
        price: 150,
        category: "Food Grains",
        image: "https://images.unsplash.com/photo-1515543237350-b3eea1ec8082",
        rating: 4.6
    },
    {
        title: "Rajma (Red Kidney Beans)",
        description: "Premium quality kidney beans rich in plant protein.",
        price: 170,
        category: "Food Grains",
        image: "https://images.unsplash.com/photo-1551462147-37885abb36f1",
        rating: 4.5
    },
    {
        title: "Poha (Flattened Rice)",
        description: "Thin flattened rice for quick and light Indian breakfast preparation.",
        price: 50,
        category: "Food Grains",
        image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc",
        rating: 4.3
    },
    {
        title: "Sooji (Semolina)",
        description: "Coarse wheat semolina perfect for halwa, upma, and dosa.",
        price: 45,
        category: "Food Grains",
        image: "https://images.unsplash.com/photo-1517433670267-08bbd4be890f",
        rating: 4.4
    },

    // ================= COOKING ESSENTIALS =================
    {
        title: "Sunflower Cooking Oil",
        description: "Light and healthy sunflower oil for everyday cooking.",
        price: 160,
        category: "Cooking Essentials",
        image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5",
        rating: 4.4
    },
    {
        title: "Pure Honey",
        description: "Naturally sweet honey perfect for breakfast and beverages.",
        price: 250,
        category: "Cooking Essentials",
        image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38",
        rating: 4.7
    },
    {
        title: "Iodized Salt",
        description: "High quality iodized salt for everyday cooking.",
        price: 30,
        category: "Cooking Essentials",
        image: "https://images.unsplash.com/photo-1518110925495-5fe2a0c6f5b9",
        rating: 4.2
    },
    {
        title: "Premium Sugar",
        description: "Fine quality sugar suitable for cooking and beverages.",
        price: 55,
        category: "Cooking Essentials",
        image: "https://images.unsplash.com/photo-1581268492170-6d6d0b0a4a9e",
        rating: 4.3
    },
    {
        title: "Black Pepper",
        description: "Aromatic black pepper for adding flavour to your dishes.",
        price: 90,
        category: "Cooking Essentials",
        image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d",
        rating: 4.5
    },
    {
        title: "Mustard Oil",
        description: "Cold-pressed pure mustard oil with strong traditional aroma.",
        price: 180,
        category: "Cooking Essentials",
        image: "https://images.unsplash.com/photo-1620706857370-e1b9770e8bb1",
        rating: 4.6
    },
    {
        title: "Turmeric Powder (Haldi)",
        description: "Vibrant yellow turmeric ground from high-curcumin roots.",
        price: 70,
        category: "Cooking Essentials",
        image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5",
        rating: 4.7
    },
    {
        title: "Red Chili Powder",
        description: "Spicy and vibrant red chili powder for intense culinary color.",
        price: 85,
        category: "Cooking Essentials",
        image: "https://images.unsplash.com/photo-1599940824399-b87987ceb72a",
        rating: 4.4
    },
    {
        title: "Garlic Paste",
        description: "Freshly ground garlic paste for instant flavor in cooking.",
        price: 60,
        category: "Cooking Essentials",
        image: "https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec",
        rating: 4.2
    },
    {
        title: "Extra Virgin Olive Oil",
        description: "Cold-pressed olive oil suited for salads and light cooking.",
        price: 550,
        category: "Cooking Essentials",
        image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5",
        rating: 4.8
    },
    {
        title: "Cumin Seeds (Jeera)",
        description: "Fragrant unground cumin seeds for tempering Indian meals.",
        price: 110,
        category: "Cooking Essentials",
        image: "https://images.unsplash.com/photo-1599940824399-b87987ceb72a",
        rating: 4.5
    },
    {
        title: "Apple Cider Vinegar",
        description: "Raw and unfiltered apple cider vinegar with the 'mother'.",
        price: 320,
        category: "Cooking Essentials",
        image: "https://images.unsplash.com/photo-1568644396922-5c3bfae12521",
        rating: 4.6
    },

    // ================= PERSONAL CARE =================
    {
        title: "Herbal Shampoo",
        description: "Gentle herbal shampoo for clean and healthy-looking hair.",
        price: 180,
        category: "Personal Care",
        image: "https://images.unsplash.com/photo-1556228720-195a672e8a03",
        rating: 4.4
    },
    {
        title: "Bath Soap",
        description: "Refreshing bathing soap with a pleasant fragrance.",
        price: 55,
        category: "Personal Care",
        image: "https://images.unsplash.com/photo-1607006344380-b6775a0824b7",
        rating: 4.3
    },
    {
        title: "Toothpaste",
        description: "Daily dental care toothpaste for fresh breath and clean teeth.",
        price: 95,
        category: "Personal Care",
        image: "https://images.unsplash.com/photo-1559591937-abe1a6f3c9d6",
        rating: 4.5
    },
    {
        title: "Hand Wash",
        description: "Gentle hand wash for everyday hand hygiene.",
        price: 120,
        category: "Personal Care",
        image: "https://images.unsplash.com/photo-1583947215259-38e31be8751f",
        rating: 4.4
    },
    {
        title: "Body Lotion",
        description: "Moisturizing body lotion for soft and hydrated skin.",
        price: 210,
        category: "Personal Care",
        image: "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd",
        rating: 4.5
    },
    {
        title: "Face Wash",
        description: "Deep cleansing face wash infused with neem and tea tree oil.",
        price: 140,
        category: "Personal Care",
        image: "https://images.unsplash.com/photo-1556228720-195a672e8a03",
        rating: 4.6
    },
    {
        title: "Coconut Hair Oil",
        description: "Nourishing 100% pure coconut oil for strong hair growth.",
        price: 130,
        category: "Personal Care",
        image: "https://images.unsplash.com/photo-1608248597262-132d73f4e243",
        rating: 4.7
    },
    {
        title: "Sunscreen SPF 50",
        description: "Broad-spectrum non-greasy sunscreen lotion for daily sun protection.",
        price: 320,
        category: "Personal Care",
        image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908",
        rating: 4.6
    },
    {
        title: "Deodorant Spray",
        description: "Long-lasting freshness body spray for daily active protection.",
        price: 195,
        category: "Personal Care",
        image: "https://images.unsplash.com/photo-1615397349754-cfa2066a298e",
        rating: 4.3
    },
    {
        title: "Soft Toothbrush (Pack of 3)",
        description: "Multi-angle soft bristle toothbrushes for gentle gum care.",
        price: 85,
        category: "Personal Care",
        image: "https://images.unsplash.com/photo-1520013817300-1f4c1cb245ef",
        rating: 4.4
    },
    {
        title: "Conditioner",
        description: "Smooth and silky hair conditioner enriched with argan oil.",
        price: 220,
        category: "Personal Care",
        image: "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d",
        rating: 4.5
    },
    {
        title: "Lip Balm",
        description: "Hydrating berry flavor lip balm for dry and chapped lips.",
        price: 90,
        category: "Personal Care",
        image: "https://images.unsplash.com/photo-1625093742435-6fa192b6fb10",
        rating: 4.4
    },

    // ================= HOUSEHOLD =================
    {
        title: "Dishwashing Liquid",
        description: "Powerful dishwashing liquid for removing grease and stains.",
        price: 110,
        category: "Household",
        image: "https://images.unsplash.com/photo-1583947582886-f40ec95dd752",
        rating: 4.4
    },
    {
        title: "Laundry Detergent",
        description: "Effective detergent powder for clean and fresh clothes.",
        price: 240,
        category: "Household",
        image: "https://images.unsplash.com/photo-1604335399105-a0c585fd81a1",
        rating: 4.5
    },
    {
        title: "Floor Cleaner",
        description: "Fresh fragrance floor cleaner for a hygienic home.",
        price: 150,
        category: "Household",
        image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a",
        rating: 4.3
    },
    {
        title: "Kitchen Tissue Roll",
        description: "Soft and absorbent kitchen tissue rolls for daily use.",
        price: 100,
        category: "Household",
        image: "https://images.unsplash.com/photo-1584556812952-905ffd0c611a",
        rating: 4.2
    },
    {
        title: "Garbage Bags",
        description: "Strong and durable garbage bags for household waste disposal.",
        price: 130,
        category: "Household",
        image: "https://images.unsplash.com/photo-1604187351574-c75ca79f5807",
        rating: 4.3
    },
    {
        title: "Toilet Cleaner",
        description: "Thick disinfectant formula for 99.9% germ removal and deep shine.",
        price: 125,
        category: "Household",
        image: "https://images.unsplash.com/photo-1585421514284-efb74c2b69ba",
        rating: 4.5
    },
    {
        title: "Glass Cleaner Spray",
        description: "Streak-free shine glass and mirror cleaning spray.",
        price: 115,
        category: "Household",
        image: "https://images.unsplash.com/photo-1585421514738-01798e348b17",
        rating: 4.4
    },
    {
        title: "Microfiber Cleaning Cloths",
        description: "Reusable ultra-absorbent lint-free microfiber dust wipes.",
        price: 180,
        category: "Household",
        image: "https://images.unsplash.com/photo-1563453392212-326f5e854473",
        rating: 4.7
    },
    {
        title: "Air Freshener Spray",
        description: "Instant home fragrance spray infused with fresh lavender scent.",
        price: 160,
        category: "Household",
        image: "https://images.unsplash.com/photo-1617897903246-719242758050",
        rating: 4.2
    },
    {
        title: "Mosquito Repellent Liquid",
        description: "Electric plug-in refill for effective protection against mosquitoes.",
        price: 90,
        category: "Household",
        image: "https://images.unsplash.com/photo-1628102491629-778571d893a3",
        rating: 4.3
    },
    {
        title: "Scrub Sponges (Pack of 4)",
        description: "Dual-sided heavy duty scouring scrub sponges for pots and dishes.",
        price: 60,
        category: "Household",
        image: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf",
        rating: 4.4
    },
    {
        title: "Fabric Softener",
        description: "Delivers long-lasting freshness and softness to laundered clothes.",
        price: 210,
        category: "Household",
        image: "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60",
        rating: 4.6
    },

 {
        title: "Mumbai to Goa Flight",
        description: "Book comfortable flights from Mumbai to beautiful Goa.",
        price: 2499,
        category: "Flights",
        image: "https://images.unsplash.com/photo-1542296332-2e4473faf563",
        rating: 4.6
    },
    {
        title: "Delhi to Bengaluru Flight",
        description: "Fast and comfortable flights from Delhi to Bengaluru.",
        price: 3499,
        category: "Flights",
        image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05",
        rating: 4.4
    },
    {
        title: "Mumbai to Delhi Flight",
        description: "Book budget-friendly flights between Mumbai and Delhi.",
        price: 2899,
        category: "Flights",
        image: "https://images.unsplash.com/photo-1517479149777-5f3b1511d5ad",
        rating: 4.5
    },
    {
        title: "Kolkata to Port Blair Flight",
        description: "Direct flight connection to the sunny Andaman islands.",
        price: 4299,
        category: "Flights",
        image: "https://images.unsplash.com/photo-1506015391300-4802dc74de2e",
        rating: 4.7
    },
    {
        title: "Chennai to Hyderabad Flight",
        description: "Quick 1-hour express flight connecting major tech hubs.",
        price: 1999,
        category: "Flights",
        image: "https://images.unsplash.com/photo-1524592714635-d77511a4834d",
        rating: 4.3
    },
    {
        title: "Delhi to Srinagar Flight",
        description: "Scenic aerial route straight into the heart of Kashmir.",
        price: 3899,
        category: "Flights",
        image: "https://images.unsplash.com/photo-1488085061387-422e29b40080",
        rating: 4.8
    },
    {
        title: "Ahmedabad to Mumbai Flight",
        description: "Daily business commuter flight with extra legroom options.",
        price: 2199,
        category: "Flights",
        image: "https://images.unsplash.com/photo-1569154941061-e231b4725ef1",
        rating: 4.2
    },
    {
        title: "Bengaluru to Kochi Flight",
        description: "Short haul nonstop flight to God's Own Country.",
        price: 2299,
        category: "Flights",
        image: "https://images.unsplash.com/photo-1508672019048-805479767382",
        rating: 4.5
    },
    {
        title: "Jaipur to Goa Flight",
        description: "Direct tourist flight connecting heritage city to beaches.",
        price: 4599,
        category: "Flights",
        image: "https://images.unsplash.com/photo-1519074069444-1ba4efe1677a",
        rating: 4.6
    },
    {
        title: "Pune to Delhi Flight",
        description: "Early morning non-stop flights for hassle-free travel.",
        price: 3199,
        category: "Flights",
        image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf",
        rating: 4.4
    },
    {
        title: "Guwahati to Kolkata Flight",
        description: "Rapid flight connection between Eastern hubs.",
        price: 2699,
        category: "Flights",
        image: "https://images.unsplash.com/photo-1464037866556-6812c9d1c72e",
        rating: 4.3
    },
    {
        title: "Delhi to Leh Flight",
        description: "Breathtaking Himalayan aerial view flight to Ladakh.",
        price: 5299,
        category: "Flights",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
        rating: 4.9
    },


    // =========================
    // HOTELS (12 Items)
    // =========================
    {
        title: "Goa Beach Resort",
        description: "Relax at a beautiful beach resort with modern facilities.",
        price: 3999,
        category: "Hotels",
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
        rating: 4.8
    },
    {
        title: "Manali Mountain Hotel",
        description: "Enjoy a peaceful stay surrounded by Himalayan mountains.",
        price: 2999,
        category: "Hotels",
        image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791",
        rating: 4.7
    },
    {
        title: "Jaipur Heritage Hotel",
        description: "Experience royal hospitality in the heart of Jaipur.",
        price: 3499,
        category: "Hotels",
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
        rating: 4.6
    },
    {
        title: "Kerala Luxury Resort",
        description: "Premium resort stay surrounded by nature and backwaters.",
        price: 4499,
        category: "Hotels",
        image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7",
        rating: 4.9
    },
    {
        title: "Udaipur Lake Palace View",
        description: "Luxury stay overlooking Lake Pichola with sunset views.",
        price: 6999,
        category: "Hotels",
        image: "https://images.unsplash.com/photo-1582719508461-905c673771fd",
        rating: 4.9
    },
    {
        title: "Shimla Snow Retreat",
        description: "Cozy pine-wood rooms with scenic balcony views of snow peaks.",
        price: 3299,
        category: "Hotels",
        image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb",
        rating: 4.5
    },
    {
        title: "Ooty Tea Garden Villa",
        description: "Peaceful villa nestled inside lush green tea estates.",
        price: 2799,
        category: "Hotels",
        image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4",
        rating: 4.6
    },
    {
        title: "Munnar Eco Lodge",
        description: "Nature resort surrounded by mist, mountains, and waterfalls.",
        price: 3100,
        category: "Hotels",
        image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d",
        rating: 4.7
    },
    {
        title: "Agra Taj View Suites",
        description: "Boutique hotel with rooftop dining facing the Taj Mahal.",
        price: 4199,
        category: "Hotels",
        image: "https://images.unsplash.com/photo-1590490360182-c33d57733427",
        rating: 4.8
    },
    {
        title: "Rishikesh Riverside Cottage",
        description: "Stay beside the holy Ganges with spa and yoga sessions.",
        price: 2599,
        category: "Hotels",
        image: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c",
        rating: 4.6
    },
    {
        title: "Darjeeling Mount Stay",
        description: "Colonial style stay with Kanchenjunga mountain view.",
        price: 3399,
        category: "Hotels",
        image: "https://images.unsplash.com/photo-1591088398332-8a7791972843",
        rating: 4.4
    },
    {
        title: "Coorg Plantation Resort",
        description: "Serene resort inside private coffee plantations.",
        price: 4899,
        category: "Hotels",
        image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef",
        rating: 4.8
    },


    // =========================
    // TRAINS (12 Items)
    // =========================
    {
        title: "Delhi to Jaipur Train",
        description: "Comfortable train journey from Delhi to Jaipur.",
        price: 799,
        category: "Trains",
        image: "https://images.unsplash.com/photo-1474487548417-781cb71495f3",
        rating: 4.3
    },
    {
        title: "Mumbai to Pune Train",
        description: "Quick and convenient train travel between Mumbai and Pune.",
        price: 499,
        category: "Trains",
        image: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8",
        rating: 4.4
    },
    {
        title: "Delhi to Varanasi Train",
        description: "Comfortable overnight train journey to Varanasi.",
        price: 999,
        category: "Trains",
        image: "https://images.unsplash.com/photo-1531058020387-3be344556be6",
        rating: 4.5
    },
    {
        title: "Bengaluru to Chennai Train",
        description: "Affordable train travel between Bengaluru and Chennai.",
        price: 699,
        category: "Trains",
        image: "https://images.unsplash.com/photo-1519501025264-65ba15a82390",
        rating: 4.2
    },
    {
        title: "Kolkata to Puri Express",
        description: "Direct seaside express train for quick weekend getaways.",
        price: 559,
        category: "Trains",
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
        rating: 4.3
    },
    {
        title: "Mumbai to Goa Vande Bharat",
        description: "High-speed scenic rail journey through Konkan rail routes.",
        price: 1499,
        category: "Trains",
        image: "https://images.unsplash.com/photo-1532105956626-9569c03602f6",
        rating: 4.9
    },
    {
        title: "Ahmedabad to Mumbai Shatabdi",
        description: "Fast AC chair car train with complimentary meals included.",
        price: 1199,
        category: "Trains",
        image: "https://images.unsplash.com/photo-1515165562839-978bbcf1b267",
        rating: 4.6
    },
    {
        title: "Delhi to Dehradun Express",
        description: "Overnight sleeper train connecting capital to mountain foothills.",
        price: 649,
        category: "Trains",
        image: "https://images.unsplash.com/photo-1518684079-3c830dcef090",
        rating: 4.4
    },
    {
        title: "Chennai to Madurai Express",
        description: "Daily superfast express with clean and comfortable coaches.",
        price: 580,
        category: "Trains",
        image: "https://images.unsplash.com/photo-1474487548417-781cb71495f3",
        rating: 4.2
    },
    {
        title: "Amritsar to Delhi Vande Bharat",
        description: "Modern high-speed journey with premium food service.",
        price: 1350,
        category: "Trains",
        image: "https://images.unsplash.com/photo-1532105956626-9569c03602f6",
        rating: 4.8
    },
    {
        title: "Hyderabad to Visakhapatnam Express",
        description: "Comfortable overnight journey connecting Telangana to coast.",
        price: 850,
        category: "Trains",
        image: "https://images.unsplash.com/photo-1531058020387-3be344556be6",
        rating: 4.3
    },
    {
        title: "Kalka to Shimla Toy Train",
        description: "Heritage mountain railway trip through tunnels & valleys.",
        price: 499,
        category: "Trains",
        image: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8",
        rating: 4.9
    },


    // =========================
    // BUSES (12 Items)
    // =========================
    {
        title: "Delhi to Agra Bus",
        description: "Comfortable AC bus service from Delhi to Agra.",
        price: 599,
        category: "Buses",
        image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957",
        rating: 4.2
    },
    {
        title: "Delhi to Jaipur Bus",
        description: "Book affordable AC buses from Delhi to Jaipur.",
        price: 699,
        category: "Buses",
        image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e",
        rating: 4.4
    },
    {
        title: "Mumbai to Goa Bus",
        description: "Premium sleeper bus journey from Mumbai to Goa.",
        price: 1199,
        category: "Buses",
        image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957",
        rating: 4.5
    },
    {
        title: "Bengaluru to Mysore Bus",
        description: "Easy and affordable bus travel to Mysore.",
        price: 499,
        category: "Buses",
        image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e",
        rating: 4.3
    },
    {
        title: "Delhi to Shimla Volvo Bus",
        description: "Overnight luxury Volvo sleeper bus straight into mountains.",
        price: 1299,
        category: "Buses",
        image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957",
        rating: 4.7
    },
    {
        title: "Bengaluru to Goa Sleeper Bus",
        description: "Comfortable overnight Multi-Axle sleeper travel.",
        price: 1399,
        category: "Buses",
        image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e",
        rating: 4.6
    },
    {
        title: "Pune to Hyderabad AC Bus",
        description: "Daily Volvo sleeper service with personal charging point.",
        price: 999,
        category: "Buses",
        image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957",
        rating: 4.3
    },
    {
        title: "Chennai to Pondicherry Bus",
        description: "Scenic ECR route coach with frequent departures.",
        price: 349,
        category: "Buses",
        image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e",
        rating: 4.5
    },
    {
        title: "Delhi to Manali AC Sleeper",
        description: "Premium Volvo coach with blanket and water bottle.",
        price: 1499,
        category: "Buses",
        image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957",
        rating: 4.8
    },
    {
        title: "Ahmedabad to Udaipur Bus",
        description: "Fast highway connection sleeper bus with live tracking.",
        price: 650,
        category: "Buses",
        image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e",
        rating: 4.4
    },
    {
        title: "Kochi to Munnar Mini Bus",
        description: "Comfortable AC mini bus through scenic tea plantations.",
        price: 550,
        category: "Buses",
        image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957",
        rating: 4.6
    },
    {
        title: "Hyderabad to Vijayawada Express",
        description: "Superfast highway Volvo bus service with free Wi-Fi.",
        price: 599,
        category: "Buses",
        image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e",
        rating: 4.2
    },


    // =========================
    // HOLIDAY PACKAGES (12 Items)
    // =========================
    {
        title: "Goa 4 Days Package",
        description: "Complete Goa holiday package with hotel and sightseeing.",
        price: 12999,
        category: "Holiday Packages",
        image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2",
        rating: 4.8
    },
    {
        title: "Manali 5 Days Package",
        description: "Explore Manali with hotel stay and local sightseeing.",
        price: 14999,
        category: "Holiday Packages",
        image: "https://images.unsplash.com/photo-1500534623283-312aade485b7",
        rating: 4.7
    },
    {
        title: "Kerala 6 Days Package",
        description: "Discover Kerala backwaters, beaches and beautiful landscapes.",
        price: 17999,
        category: "Holiday Packages",
        image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944",
        rating: 4.9
    },
    {
        title: "Rajasthan 5 Days Package",
        description: "Explore Jaipur, Jodhpur and Udaipur in one trip.",
        price: 15999,
        category: "Holiday Packages",
        image: "https://images.unsplash.com/photo-1477587458883-47145ed94245",
        rating: 4.8
    },
    {
        title: "Andaman 5 Days Paradise",
        description: "Havelock island, scuba diving, and Cellular Jail tour.",
        price: 24999,
        category: "Holiday Packages",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
        rating: 4.9
    },
    {
        title: "Sikkim & Darjeeling 6 Days",
        description: "Gangtok, Nathula Pass, and tea gardens guided tour.",
        price: 18999,
        category: "Holiday Packages",
        image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa",
        rating: 4.7
    },
    {
        title: "Golden Triangle 4 Days",
        description: "Cover Delhi, Agra, and Jaipur with private cab.",
        price: 13500,
        category: "Holiday Packages",
        image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791",
        rating: 4.6
    },
    {
        title: "Kashmir Paradise 6 Days",
        description: "Srinagar houseboat stay, Gulmarg gondola & Pahalgam.",
        price: 21999,
        category: "Holiday Packages",
        image: "https://images.unsplash.com/photo-1548013146-72479768bada",
        rating: 4.9
    },
    {
        title: "Uttarakhand Hill Tour 5 Days",
        description: "Nainital lake city & Mussoorie waterfalls tour.",
        price: 12499,
        category: "Holiday Packages",
        image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
        rating: 4.5
    },
    {
        title: "Ooty & Kodaikanal 5 Days",
        description: "Relax in South India's finest hill station climate.",
        price: 14200,
        category: "Holiday Packages",
        image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4",
        rating: 4.6
    },
    {
        title: "Spiti Valley Roadtrip 7 Days",
        description: "Offroad expedition to Key Monastery & Chandratal Lake.",
        price: 19999,
        category: "Holiday Packages",
        image: "https://images.unsplash.com/photo-1500534623283-312aade485b7",
        rating: 4.8
    },
    {
        title: "Meghalaya Wonders 5 Days",
        description: "Shillong, Cherrapunji, and Living Root Bridges exploration.",
        price: 16800,
        category: "Holiday Packages",
        image: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57",
        rating: 4.8
    },


    // =========================
    // BEACH DESTINATIONS (12 Items)
    // =========================
    {
        title: "Goa Beach Escape",
        description: "Relax on beautiful beaches and explore Goa nightlife.",
        price: 8999,
        category: "Beach Destinations",
        image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2",
        rating: 4.8
    },
    {
        title: "Andaman Island Trip",
        description: "Explore crystal clear waters and tropical islands.",
        price: 19999,
        category: "Beach Destinations",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
        rating: 4.9
    },
    {
        title: "Kerala Beach Holiday",
        description: "Enjoy peaceful beaches and coastal Kerala.",
        price: 10999,
        category: "Beach Destinations",
        image: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57",
        rating: 4.7
    },
    {
        title: "Lakshadweep Escape",
        description: "Discover beautiful islands and pristine beaches.",
        price: 22999,
        category: "Beach Destinations",
        image: "https://images.unsplash.com/photo-1540202404-a2f29016b523",
        rating: 4.9
    },
    {
        title: "Pondicherry French Colony",
        description: "Relaxed Promenade beach stay with French architectural charm.",
        price: 7499,
        category: "Beach Destinations",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
        rating: 4.6
    },
    {
        title: "Gokarna Om Beach Retreat",
        description: "Serene, non-crowded beaches ideal for yoga and peaceful sunset.",
        price: 6999,
        category: "Beach Destinations",
        image: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57",
        rating: 4.7
    },
    {
        title: "Varkala Cliff Beach Stay",
        description: "Dramatic cliffside beach view with delicious seafood cafes.",
        price: 8499,
        category: "Beach Destinations",
        image: "https://images.unsplash.com/photo-1540202404-a2f29016b523",
        rating: 4.8
    },
    {
        title: "Daman Coast Getaway",
        description: "Quick seaside weekend retreat near Gujarat-Maharashtra.",
        price: 5999,
        category: "Beach Destinations",
        image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2",
        rating: 4.3
    },
    {
        title: "Puri Golden Beach Tour",
        description: "Seaside spiritual retreat on the Eastern Bay of Bengal.",
        price: 6200,
        category: "Beach Destinations",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
        rating: 4.5
    },
    {
        title: "Diuisland Beach Holiday",
        description: "Quiet Portuguese style island beach with calm waters.",
        price: 7800,
        category: "Beach Destinations",
        image: "https://images.unsplash.com/photo-1540202404-a2f29016b523",
        rating: 4.4
    },
    {
        title: "Kovalam Lighthouse Beach",
        description: "Famous crescent-shaped beach with water sport options.",
        price: 9499,
        category: "Beach Destinations",
        image: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57",
        rating: 4.7
    },
    {
        title: "Tarkarli Scuba & Beach",
        description: "Clear water beach experience with water sport activities.",
        price: 8100,
        category: "Beach Destinations",
        image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2",
        rating: 4.6
    },


    // =========================
    // MOUNTAIN DESTINATIONS (12 Items)
    // =========================
    {
        title: "Manali Mountain Escape",
        description: "Experience snow-covered mountains and peaceful valleys.",
        price: 9999,
        category: "Mountain Destinations",
        image: "https://images.unsplash.com/photo-1500534623283-312aade485b7",
        rating: 4.8
    },
    {
        title: "Kashmir Valley Trip",
        description: "Explore the beautiful valleys and mountains of Kashmir.",
        price: 16999,
        category: "Mountain Destinations",
        image: "https://images.unsplash.com/photo-1548013146-72479768bada",
        rating: 4.9
    },
    {
        title: "Shimla Holiday",
        description: "Enjoy pleasant weather and beautiful Himalayan views.",
        price: 8999,
        category: "Mountain Destinations",
        image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
        rating: 4.7
    },
    {
        title: "Ladakh Adventure",
        description: "Experience breathtaking landscapes and mountain roads.",
        price: 18999,
        category: "Mountain Destinations",
        image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa",
        rating: 4.9
    },
    {
        title: "Darjeeling Tea Hills",
        description: "Views of Mount Kanchenjunga and famous tea gardens.",
        price: 10499,
        category: "Mountain Destinations",
        image: "https://images.unsplash.com/photo-1500534623283-312aade485b7",
        rating: 4.7
    },
    {
        title: "Munnar Green Hills",
        description: "Lush green rolling hills and pleasant chilly weather.",
        price: 7999,
        category: "Mountain Destinations",
        image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
        rating: 4.8
    },
    {
        title: "Auli Snow & Skiing",
        description: "India's premier skiing destination with cable car rides.",
        price: 13999,
        category: "Mountain Destinations",
        image: "https://images.unsplash.com/photo-1548013146-72479768bada",
        rating: 4.9
    },
    {
        title: "Coorg Hill Retreat",
        description: "Western Ghats mountain views with coffee aroma.",
        price: 8499,
        category: "Mountain Destinations",
        image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa",
        rating: 4.6
    },
    {
        title: "Nainital Lake & Peaks",
        description: "Sailing on Naini lake surrounded by seven green hills.",
        price: 7899,
        category: "Mountain Destinations",
        image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
        rating: 4.5
    },
    {
        title: "Gangtok Himalayan Experience",
        description: "Scenic monasteries and views of snow-capped peaks.",
        price: 11499,
        category: "Mountain Destinations",
        image: "https://images.unsplash.com/photo-1548013146-72479768bada",
        rating: 4.8
    },
    {
        title: "Dharamshala & Mcleodganj",
        description: "Peaceful pine forests, monasteries, and mountain cafes.",
        price: 8900,
        category: "Mountain Destinations",
        image: "https://images.unsplash.com/photo-1500534623283-312aade485b7",
        rating: 4.7
    },
    {
        title: "Kodaikanal Star Lake",
        description: "Mist-covered cliffs, waterfalls, and pine forest walks.",
        price: 8200,
        category: "Mountain Destinations",
        image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa",
        rating: 4.6
    },


    // =========================
    // INTERNATIONAL TRIPS (12 Items)
    // =========================
    {
        title: "Dubai Holiday",
        description: "Explore Dubai's skyline, desert safari and luxury attractions.",
        price: 39999,
        category: "International Trips",
        image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c",
        rating: 4.8
    },
    {
        title: "Bali Escape",
        description: "Enjoy tropical beaches, temples and beautiful Bali.",
        price: 45999,
        category: "International Trips",
        image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4",
        rating: 4.9
    },
    {
        title: "Singapore Trip",
        description: "Explore modern attractions and beautiful Singapore.",
        price: 49999,
        category: "International Trips",
        image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd",
        rating: 4.8
    },
    {
        title: "Thailand Holiday",
        description: "Discover beaches, islands and vibrant Thai culture.",
        price: 35999,
        category: "International Trips",
        image: "https://images.unsplash.com/photo-1528181304800-259b08848526",
        rating: 4.7
    },
    {
        title: "Maldives Water Villa",
        description: "Luxury overwater bungalow stay with turquoise lagoon view.",
        price: 69999,
        category: "International Trips",
        image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8",
        rating: 4.9
    },
    {
        title: "Vietnam & Ha Long Bay",
        description: "Explore Hanoi, ancient towns, and limestone islands cruise.",
        price: 38999,
        category: "International Trips",
        image: "https://images.unsplash.com/photo-1528181304800-259b08848526",
        rating: 4.8
    },
    {
        title: "Malaysia City & Islands",
        description: "Kuala Lumpur Petronas Towers and Langkawi cable car.",
        price: 34999,
        category: "International Trips",
        image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd",
        rating: 4.6
    },
    {
        title: "Sri Lanka Island Highlights",
        description: "Sigiriya rock fortress, tea gardens, and Bentota beach.",
        price: 29999,
        category: "International Trips",
        image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4",
        rating: 4.7
    },
    {
        title: "Paris & Swiss Wonders",
        description: "Eiffel tower tour combined with Mount Titlis snow trip.",
        price: 119999,
        category: "International Trips",
        image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
        rating: 4.9
    },
    {
        title: "Japan Cherry Blossom Express",
        description: "Tokyo, Kyoto temples, and Bullet train tour.",
        price: 125000,
        category: "International Trips",
        image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e",
        rating: 4.9
    },
    {
        title: "Turkey Cultural Journey",
        description: "Hot air balloon ride over Cappadocia and Istanbul heritage.",
        price: 75999,
        category: "International Trips",
        image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c",
        rating: 4.8
    },
    {
        title: "Nepal Kathmandu & Pokhara",
        description: "Himalayan panoramic views and peaceful Phewa Lake boating.",
        price: 21999,
        category: "International Trips",
        image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa",
        rating: 4.6
    },
  {
        title: "Avengers: Secret Wars",
        description: "An epic superhero adventure packed with action and excitement.",
        price: 250,
        category: "Movies",
        image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba",
        rating: 4.8
    },
    {
        title: "The Last Mission",
        description: "A thrilling action movie filled with suspense and adventure.",
        price: 220,
        category: "Movies",
        image: "https://images.unsplash.com/photo-1485846234645-a62644f84728",
        rating: 4.5
    },
    {
        title: "Love in Paris",
        description: "A romantic story set in the beautiful streets of Paris.",
        price: 199,
        category: "Movies",
        image: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c",
        rating: 4.4
    },
    {
        title: "Dark Horizon",
        description: "A gripping mystery thriller with unexpected twists.",
        price: 280,
        category: "Movies",
        image: "https://images.unsplash.com/photo-1500534623283-312aade485b7",
        rating: 4.7
    },
    {
        title: "Cyber Chronicles",
        description: "A futuristic sci-fi masterpiece exploring artificial intelligence.",
        price: 260,
        category: "Movies",
        image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1",
        rating: 4.6
    },
    {
        title: "Haunted Manor",
        description: "A chilling horror movie that will keep you on the edge of your seat.",
        price: 210,
        category: "Movies",
        image: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5",
        rating: 4.3
    },
    {
        title: "Galaxy Quest",
        description: "An interplanetary adventure with stunning visual effects.",
        price: 290,
        category: "Movies",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
        rating: 4.9
    },
    {
        title: "The Hidden Treasure",
        description: "An exciting treasure hunt across mysterious islands.",
        price: 230,
        category: "Movies",
        image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23",
        rating: 4.5
    },
    {
        title: "Laughter Unlimited",
        description: "A lighthearted family comedy filled with hilarious moments.",
        price: 180,
        category: "Movies",
        image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819",
        rating: 4.2
    },
    {
        title: "Shadow Hunter",
        description: "A fast-paced crime thriller packed with high-stakes action.",
        price: 270,
        category: "Movies",
        image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26",
        rating: 4.6
    },
    {
        title: "Voices of Hope",
        description: "An inspiring documentary based on real-life stories of resilience.",
        price: 150,
        category: "Movies",
        image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba",
        rating: 4.7
    },
    {
        title: "Kingdom of Legends",
        description: "A historical action drama depicting epic ancient battles.",
        price: 300,
        category: "Movies",
        image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23",
        rating: 4.8
    },

    // =========================
    // EVENTS (12)
    // =========================
    {
        title: "Tech Innovation Summit",
        description: "Explore the latest technology trends and innovations.",
        price: 499,
        category: "Events",
        image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678",
        rating: 4.6
    },
    {
        title: "Startup India Meetup",
        description: "Meet entrepreneurs, founders and technology enthusiasts.",
        price: 399,
        category: "Events",
        image: "https://images.unsplash.com/photo-1503428593586-e225b39bddfe",
        rating: 4.5
    },
    {
        title: "Food & Lifestyle Expo",
        description: "Experience food, lifestyle brands and exciting activities.",
        price: 299,
        category: "Events",
        image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30",
        rating: 4.4
    },
    {
        title: "Business Networking Night",
        description: "Connect with professionals and growing businesses.",
        price: 599,
        category: "Events",
        image: "https://images.unsplash.com/photo-1511578314322-379afb476865",
        rating: 4.5
    },
    {
        title: "AI & Future Robotics Expo",
        description: "Discover cutting-edge developments in robotics and AI.",
        price: 699,
        category: "Events",
        image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
        rating: 4.8
    },
    {
        title: "Digital Marketing Conclave",
        description: "Learn growth hacking and brand marketing strategies from leaders.",
        price: 450,
        category: "Events",
        image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b",
        rating: 4.6
    },
    {
        title: "Global Fashion Week",
        description: "A showcase of high fashion, designer collections, and style trends.",
        price: 899,
        category: "Events",
        image: "https://images.unsplash.com/photo-1509631179647-0177331693ae",
        rating: 4.7
    },
    {
        title: "E-Commerce Growth Forum",
        description: "Strategies to scale online retail businesses in modern markets.",
        price: 550,
        category: "Events",
        image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7",
        rating: 4.5
    },
    {
        title: "Photography & Media Fair",
        description: "Hands-on workshops, camera gear demos, and photo exhibitions.",
        price: 349,
        category: "Events",
        image: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d",
        rating: 4.6
    },
    {
        title: "Green Energy & Sustainability Forum",
        description: "Keynotes on clean tech, renewable resources, and eco-solutions.",
        price: 400,
        category: "Events",
        image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9",
        rating: 4.7
    },
    {
        title: "Crypto & Blockchain Expo",
        description: "Explore Web3, decentralized finance, and future blockchain tech.",
        price: 799,
        category: "Events",
        image: "https://images.unsplash.com/photo-1516245834210-c4c142787335",
        rating: 4.4
    },
    {
        title: "Health & Fitness Convention",
        description: "Fitness masterclasses, wellness coaching, and nutrition trends.",
        price: 350,
        category: "Events",
        image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd",
        rating: 4.6
    },

    // =========================
    // PLAYS (12)
    // =========================
    {
        title: "The Great Indian Play",
        description: "A spectacular theatrical performance inspired by Indian stories.",
        price: 699,
        category: "Plays",
        image: "https://images.unsplash.com/photo-1503095396549-807759245b35",
        rating: 4.8
    },
    {
        title: "The Silent Room",
        description: "A dramatic stage performance full of mystery and emotions.",
        price: 599,
        category: "Plays",
        image: "https://images.unsplash.com/photo-1503095396549-807759245b35",
        rating: 4.6
    },
    {
        title: "Romeo & Juliet",
        description: "A classic romantic theatrical performance.",
        price: 799,
        category: "Plays",
        image: "https://images.unsplash.com/photo-1503095396549-807759245b35",
        rating: 4.7
    },
    {
        title: "Comedy Theatre Night",
        description: "Enjoy an entertaining evening filled with laughter.",
        price: 499,
        category: "Plays",
        image: "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b",
        rating: 4.5
    },
    {
        title: "Macbeth Uncut",
        description: "A gripping, modern adaptation of Shakespeare's timeless classic.",
        price: 850,
        category: "Plays",
        image: "https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212",
        rating: 4.9
    },
    {
        title: "Echoes of History",
        description: "An emotional theatrical journey depicting freedom movements.",
        price: 650,
        category: "Plays",
        image: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf",
        rating: 4.7
    },
    {
        title: "The Phantom Monologues",
        description: "Intense solo acts exploring human psychology and hidden secrets.",
        price: 549,
        category: "Plays",
        image: "https://images.unsplash.com/photo-1469488865564-c2de10f69f96",
        rating: 4.6
    },
    {
        title: "Broadway Musical Express",
        description: "High-energy musical dance drama with live orchestral tunes.",
        price: 999,
        category: "Plays",
        image: "https://images.unsplash.com/photo-1514306191717-452ec28c7814",
        rating: 4.9
    },
    {
        title: "Shadows in the Dark",
        description: "A suspenseful thriller play with immersive sound and light design.",
        price: 599,
        category: "Plays",
        image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7",
        rating: 4.5
    },
    {
        title: "The Courtroom Trial",
        description: "A legal drama packed with intense arguments and surprising twists.",
        price: 620,
        category: "Plays",
        image: "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a",
        rating: 4.7
    },
    {
        title: "Folk Tale Chronicles",
        description: "Vibrant regional folk theatre with traditional song and dance.",
        price: 450,
        category: "Plays",
        image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4",
        rating: 4.4
    },
    {
        title: "Beyond the Stage",
        description: "An experimental interactive play where the audience choices matter.",
        price: 750,
        category: "Plays",
        image: "https://images.unsplash.com/photo-1503095396549-807759245b35",
        rating: 4.8
    },

    // =========================
    // SPORTS (12)
    // =========================
    {
        title: "Cricket Championship",
        description: "Watch your favourite teams compete in an exciting cricket match.",
        price: 999,
        category: "Sports",
        image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e",
        rating: 4.9
    },
    {
        title: "Football League Match",
        description: "Experience the excitement of a live football match.",
        price: 799,
        category: "Sports",
        image: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2",
        rating: 4.7
    },
    {
        title: "Basketball Championship",
        description: "Enjoy an action-packed live basketball game.",
        price: 699,
        category: "Sports",
        image: "https://images.unsplash.com/photo-1546519638-68e109498ffc",
        rating: 4.6
    },
    {
        title: "Tennis Open",
        description: "Watch professional tennis players compete live.",
        price: 899,
        category: "Sports",
        image: "https://images.unsplash.com/photo-1622279457486-62dcc4a431d6",
        rating: 4.7
    },
    {
        title: "Badminton Super Series",
        description: "Fast-paced action featuring international badminton stars.",
        price: 599,
        category: "Sports",
        image: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea",
        rating: 4.6
    },
    {
        title: "Pro Kabaddi League",
        description: "High-octane kabaddi action live with electrifying stadium energy.",
        price: 650,
        category: "Sports",
        image: "https://images.unsplash.com/photo-1517649763962-0c6232661c00",
        rating: 4.8
    },
    {
        title: "Formula Racing Grand Prix",
        description: "Feel the speed and adrenaline of elite motorsport racing.",
        price: 1999,
        category: "Sports",
        image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7",
        rating: 4.9
    },
    {
        title: "Table Tennis Championship",
        description: "Relentless rallies and quick reflexes at the national TT event.",
        price: 399,
        category: "Sports",
        image: "https://images.unsplash.com/photo-1534158914592-062992fbe900",
        rating: 4.5
    },
    {
        title: "National Wrestling Clash",
        description: "Intense grappling and power-packed matches on the mat.",
        price: 499,
        category: "Sports",
        image: "https://images.unsplash.com/photo-1517649763962-0c6232661c00",
        rating: 4.6
    },
    {
        title: "Golf Masters Tournament",
        description: "A serene yet competitive day at the championship golf course.",
        price: 1200,
        category: "Sports",
        image: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b",
        rating: 4.7
    },
    {
        title: "Boxing Fight Night",
        description: "Heavy hitting pro boxing bouts under the arena spotlight.",
        price: 850,
        category: "Sports",
        image: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed",
        rating: 4.8
    },
    {
        title: "City Marathon Expo & Race",
        description: "Cheer on thousands running in the ultimate endurance challenge.",
        price: 299,
        category: "Sports",
        image: "https://images.unsplash.com/photo-1452626038306-9aae5e071dd3",
        rating: 4.5
    },

    // =========================
    // CONCERTS (12)
    // =========================
    {
        title: "Arijit Live Concert",
        description: "Enjoy an unforgettable evening of live music and performances.",
        price: 1499,
        category: "Concerts",
        image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a",
        rating: 4.9
    },
    {
        title: "Bollywood Music Night",
        description: "A spectacular night featuring popular Bollywood music.",
        price: 999,
        category: "Concerts",
        image: "https://images.unsplash.com/photo-1506157786151-b8491531f063",
        rating: 4.7
    },
    {
        title: "Rock Music Festival",
        description: "Experience powerful live rock music with amazing performances.",
        price: 1299,
        category: "Concerts",
        image: "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b",
        rating: 4.8
    },
    {
        title: "Indie Music Evening",
        description: "Discover talented independent artists and live performances.",
        price: 699,
        category: "Concerts",
        image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30",
        rating: 4.6
    },
    {
        title: "EDM Dance Festival",
        description: "Non-stop electronic dance beats with top international DJs.",
        price: 1799,
        category: "Concerts",
        image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745",
        rating: 4.9
    },
    {
        title: "Sufi & Classical Night",
        description: "A soulful night of devotional Sufi tunes and traditional melodies.",
        price: 899,
        category: "Concerts",
        image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4",
        rating: 4.8
    },
    {
        title: "Jazz & Blues Unplugged",
        description: "Smooth saxophone solos and cozy acoustics in an intimate setup.",
        price: 1099,
        category: "Concerts",
        image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819",
        rating: 4.7
    },
    {
        title: "Hip Hop Revolution",
        description: "High-voltage rap battles and live performances by top hip-hop icons.",
        price: 1199,
        category: "Concerts",
        image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad",
        rating: 4.7
    },
    {
        title: "Symphony Orchestra Live",
        description: "A breathtaking instrumental performance by a 50-piece orchestra.",
        price: 1399,
        category: "Concerts",
        image: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6",
        rating: 4.9
    },
    {
        title: "Retro 80s Disco Night",
        description: "Groove to nostalgic synth-pop and evergreen 80s dance hits.",
        price: 799,
        category: "Concerts",
        image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30",
        rating: 4.5
    },
    {
        title: "Acoustic Sunset Session",
        description: "Unwind at open-air seaside acoustics by local singer-songwriters.",
        price: 599,
        category: "Concerts",
        image: "https://images.unsplash.com/photo-1445985543468-b42169e5470b",
        rating: 4.6
    },
    {
        title: "Fusion Music Carnival",
        description: "An exciting blend of Western instruments with Indian classical ragas.",
        price: 950,
        category: "Concerts",
        image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a",
        rating: 4.8
    },

    // =========================
    // COMEDY SHOWS (12)
    // =========================
    {
        title: "Comedy Night Live",
        description: "Laugh out loud with some of the best stand-up comedians.",
        price: 599,
        category: "Comedy Shows",
        image: "https://images.unsplash.com/photo-1527224857830-43a7acc85260",
        rating: 4.8
    },
    {
        title: "Stand Up Special",
        description: "An entertaining evening full of jokes and hilarious stories.",
        price: 499,
        category: "Comedy Shows",
        image: "https://images.unsplash.com/photo-1527224857830-43a7acc85260",
        rating: 4.6
    },
    {
        title: "Laugh Factory",
        description: "Enjoy a fun-filled comedy show with talented performers.",
        price: 399,
        category: "Comedy Shows",
        image: "https://images.unsplash.com/photo-1503095396549-807759245b35",
        rating: 4.5
    },
    {
        title: "Comedy Club Special",
        description: "A hilarious night of stand-up comedy and entertainment.",
        price: 549,
        category: "Comedy Shows",
        image: "https://images.unsplash.com/photo-1527224857830-43a7acc85260",
        rating: 4.7
    },
    {
        title: "Improv Mayhem",
        description: "Unscripted, spontaneous, and extremely funny comedy on the spot.",
        price: 450,
        category: "Comedy Shows",
        image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819",
        rating: 4.6
    },
    {
        title: "Roast Battle Arena",
        description: "Top comedians duel in a hilarious roast battle format.",
        price: 699,
        category: "Comedy Shows",
        image: "https://images.unsplash.com/photo-1527224857830-43a7acc85260",
        rating: 4.8
    },
    {
        title: "Open Mic Night",
        description: "Catch rising comedic talents and fresh new jokes.",
        price: 250,
        category: "Comedy Shows",
        image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7",
        rating: 4.3
    },
    {
        title: "Crowd Work Fiesta",
        description: "Comedians interacting directly with audience members for pure laughs.",
        price: 599,
        category: "Comedy Shows",
        image: "https://images.unsplash.com/photo-1527224857830-43a7acc85260",
        rating: 4.7
    },
    {
        title: "Clean Comedy Hour",
        description: "Family-friendly humor suitable for all age groups.",
        price: 350,
        category: "Comedy Shows",
        image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819",
        rating: 4.4
    },
    {
        title: "Musical Comedy Special",
        description: "A funny mix of parody songs, guitar bits, and stand-up comedy.",
        price: 499,
        category: "Comedy Shows",
        image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4",
        rating: 4.6
    },
    {
        title: "Political Satire Night",
        description: "Sharp wit, current affairs commentary, and bold political jokes.",
        price: 550,
        category: "Comedy Shows",
        image: "https://images.unsplash.com/photo-1527224857830-43a7acc85260",
        rating: 4.5
    },
    {
        title: "Midnight Laughs",
        description: "Late-night edgy comedy show for true stand-up enthusiasts.",
        price: 649,
        category: "Comedy Shows",
        image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7",
        rating: 4.8
    },

    // =========================
    // KIDS (12)
    // =========================
    {
        title: "Kids Magic Show",
        description: "A magical and entertaining show specially designed for kids.",
        price: 299,
        category: "Kids",
        image: "https://images.unsplash.com/photo-1531058020387-3be344556be6",
        rating: 4.7
    },
    {
        title: "Kids Carnival",
        description: "Fun games, activities and entertainment for children.",
        price: 399,
        category: "Kids",
        image: "https://images.unsplash.com/photo-1472162072942-cd5147eb3902",
        rating: 4.6
    },
    {
        title: "Cartoon Live Show",
        description: "Meet your favourite cartoon characters in a live stage show.",
        price: 349,
        category: "Kids",
        image: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368",
        rating: 4.5
    },
    {
        title: "Kids Adventure Zone",
        description: "Exciting games and activities for kids and families.",
        price: 499,
        category: "Kids",
        image: "https://images.unsplash.com/photo-1566454419290-57a64afe30ac",
        rating: 4.7
    },
    {
        title: "Puppet Theatre Fantasy",
        description: "A colorful, interactive puppet show telling beloved fairy tales.",
        price: 250,
        category: "Kids",
        image: "https://images.unsplash.com/photo-1503095396549-807759245b35",
        rating: 4.6
    },
    {
        title: "Science & Wonder Workshop",
        description: "Fun experiments, hands-on science tricks, and learning games.",
        price: 450,
        category: "Kids",
        image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d",
        rating: 4.8
    },
    {
        title: "Dinosaur World Experience",
        description: "Life-sized animatronic dinos, digging zones, and adventure trails.",
        price: 599,
        category: "Kids",
        image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23",
        rating: 4.9
    },
    {
        title: "Storytelling & Clay Art",
        description: "Creative story narration accompanied by clay modeling activities.",
        price: 299,
        category: "Kids",
        image: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634",
        rating: 4.5
    },
    {
        title: "Superheroes Parade",
        description: "Meet hero mascots, take photos, and participate in mini quests.",
        price: 399,
        category: "Kids",
        image: "https://images.unsplash.com/photo-1566454419290-57a64afe30ac",
        rating: 4.7
    },
    {
        title: "Bubble & Circus Fiesta",
        description: "Giant soap bubbles, jugglers, acrobats, and cheerful clowns.",
        price: 349,
        category: "Kids",
        image: "https://images.unsplash.com/photo-1531058020387-3be344556be6",
        rating: 4.6
    },
    {
        title: "Junior Cooking Class",
        description: "Flame-free fun baking and dessert decoration workshop for kids.",
        price: 499,
        category: "Kids",
        image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d",
        rating: 4.8
    },
    {
        title: "Lego Building Tournament",
        description: "Creative block-building challenges with exciting prizes.",
        price: 399,
        category: "Kids",
        image: "https://images.unsplash.com/photo-1585366119957-e9730b6d0f60",
        rating: 4.7
    },

    // =========================
    // ACTIVITIES (12)
    // =========================
    {
        title: "Adventure Park",
        description: "Enjoy exciting rides, games and outdoor adventure activities.",
        price: 699,
        category: "Activities",
        image: "https://images.unsplash.com/photo-1530549387789-4c1017266635",
        rating: 4.7
    },
    {
        title: "Water Park",
        description: "Beat the heat with thrilling water rides and activities.",
        price: 799,
        category: "Activities",
        image: "https://images.unsplash.com/photo-1560089000-7433a4ebbd64",
        rating: 4.8
    },
    {
        title: "Escape Room",
        description: "Solve puzzles and complete challenges with your team.",
        price: 599,
        category: "Activities",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
        rating: 4.6
    },
    {
        title: "City Museum Tour",
        description: "Explore history, culture and interesting local exhibits.",
        price: 299,
        category: "Activities",
        image: "https://images.unsplash.com/photo-1564399579883-451a5d44ec08",
        rating: 4.5
    },
    {
        title: "Scuba Diving Experience",
        description: "Discover underwater marine life guided by professional instructors.",
        price: 2499,
        category: "Activities",
        image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5",
        rating: 4.9
    },
    {
        title: "Hot Air Balloon Ride",
        description: "Soar above scenic landscapes during a peaceful sunrise flight.",
        price: 3499,
        category: "Activities",
        image: "https://images.unsplash.com/photo-1507608616759-54f48f0af0ee",
        rating: 4.9
    },
    {
        title: "Paintball Arena Battle",
        description: "Tactical team paintball warfare with modern safety gear.",
        price: 499,
        category: "Activities",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
        rating: 4.6
    },
    {
        title: "Go-Karting Grand Prix",
        description: "High-speed indoor electric go-karting track challenge.",
        price: 750,
        category: "Activities",
        image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7",
        rating: 4.7
    },
    {
        title: "Pottery & Ceramic Workshop",
        description: "Learn clay spinning, wheel throwing, and hand-building ceramics.",
        price: 399,
        category: "Activities",
        image: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261",
        rating: 4.5
    },
    {
        title: "Night Sky Stargazing Camping",
        description: "Overnight camp out under the stars with astronomical telescopes.",
        price: 1199,
        category: "Activities",
        image: "https://images.unsplash.com/photo-1500534623283-312aade485b7",
        rating: 4.8
    },
    {
        title: "Rock Climbing & Rappelling",
        description: "Test your stamina on natural rock faces with expert guidance.",
        price: 899,
        category: "Activities",
        image: "https://images.unsplash.com/photo-1522163182402-834f871fd851",
        rating: 4.7
    },
    {
        title: "Kayaking & Paddleboarding",
        description: "Serene paddle sessions across calm lake waters.",
        price: 650,
        category: "Activities",
        image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5",
        rating: 4.6
    },
];

module.exports = products;
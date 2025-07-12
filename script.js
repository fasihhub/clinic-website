// --- Glasses Data ---
const glassesData = {
    children: [
        { id: 1, name: "Kids' Fun Frames", price: "Rs. 1,500", imageUrl: "https://placehold.co/300x200/ADD8E6/000000?text=Kids+Glasses+1", gender: "children", material: "plastic", frameType: "full-rim", mirror: "no", size: "small", prescription: "distance", color: "blue" },
        { id: 2, name: "Colorful Play", price: "Rs. 1,750", imageUrl: "https://placehold.co/300x200/87CEEB/000000?text=Kids+Glasses+2", gender: "children", material: "plastic", frameType: "full-rim", mirror: "no", size: "medium", prescription: "distance", color: "red" },
        { id: 3, name: "Durable Junior", price: "Rs. 1,600", imageUrl: "https://placehold.co/300x200/6495ED/000000?text=Kids+Glasses+3", gender: "children", material: "acetate", frameType: "full-rim", mirror: "no", size: "small", prescription: "near", color: "green" },
        { id: 4, name: "Sporty Kids", price: "Rs. 1,800", imageUrl: "https://placehold.co/300x200/4682B4/000000?text=Kids+Glasses+4", gender: "children", material: "plastic", frameType: "semi-rimless", mirror: "no", size: "medium", prescription: "progressive", color: "black" },
        { id: 5, name: "Kids Glasses 1", price: "Rs. 1,500", imageUrl: "https://placehold.co/300x200/ADD8E6/000000?text=Kids+Glasses+1", gender: "children", material: "plastic", frameType: "full-rim", mirror: "no", size: "small", prescription: "distance", color: "blue" },
        { id: 6, name: "👧 Children's Eyeglasses", price: "Rs. 1,900", description: "Fun, durable, and colorful eyewear designed to protect young eyes with style!", imageUrl: "https://i.postimg.cc/90BfjhGc/Gemini-Generated-Image-9v7fj89v7fj89v7f.png", gender: "children", material: "plastic", frameType: "full-rim", mirror: "no", size: "medium", prescription: "distance", color: "red" }
    ],
    women: [
        { id: 7, name: "Elegant Cat Eye", price: "Rs. 2,800", imageUrl: "https://placehold.co/300x200/FFB6C1/000000?text=Women+Glasses+1", gender: "women", material: "plastic", frameType: "full-rim", mirror: "no", size: "medium", prescription: "distance", color: "brown" },
        { id: 8, name: "Classic Round", price: "Rs. 2,500", imageUrl: "https://placehold.co/300x200/FF69B4/000000?text=Women+Glasses+2", gender: "women", material: "metal", frameType: "full-rim", mirror: "no", size: "small", prescription: "near", color: "black" },
        { id: 9, name: "Modern Square", price: "Rs. 3,200", imageUrl: "https://placehold.co/300x200/C71585/000000?text=Women+Glasses+3", gender: "women", material: "acetate", frameType: "full-rim", mirror: "no", size: "large", prescription: "bifocals", color: "red" },
        { id: 10, name: "Stylish Aviator", price: "Rs. 3,000", imageUrl: "https://placehold.co/300x200/FF1493/000000?text=Women+Glasses+4", gender: "women", material: "metal", frameType: "rimless", mirror: "yes", size: "medium", prescription: "progressive", color: "gold" },
        { id: 16, name: "Women's Eyeglasses", price: "Rs. 3,500", description: "Stylish eyeglasses for women, combining fashion and clarity.", imageUrl: "https://i.postimg.cc/zBGFKt3X/Gemini-Generated-Image-vlqajvlqajvlqajv-1.png", gender: "women", material: "plastic", frameType: "full-rim", mirror: "no", size: "medium", prescription: "distance", color: "black" }
    ],
    men: [
        { id: 11, name: "Professional Rectangular", price: "Rs. 2,900", imageUrl: "https://placehold.co/300x200/B0C4DE/000000?text=Men+Glasses+1", gender: "men", material: "metal", frameType: "full-rim", mirror: "no", size: "large", prescription: "distance", color: "silver" },
        { id: 12, name: "Sleek Titanium", price: "Rs. 3,500", imageUrl: "https://placehold.co/300x200/778899/000000?text=Men+Glasses+2", gender: "men", material: "titanium", frameType: "rimless", mirror: "no", size: "medium", prescription: "progressive", color: "grey" },
        { id: 13, name: "Casual Wayfarer", price: "Rs. 2,700", imageUrl: "https://placehold.co/300x200/708090/000000?text=Men+Glasses+3", gender: "men", material: "plastic", frameType: "full-rim", mirror: "no", size: "large", prescription: "distance", color: "black" },
        { id: 14, name: "Sporty Wrap-Around", price: "Rs. 3,100", imageUrl: "https://placehold.co/300x200/2F4F4F/000000?text=Men+Glasses+4", gender: "men", material: "plastic", frameType: "semi-rimless", mirror: "yes", size: "extra-large", prescription: "distance", color: "blue" },
        { id: 15, name: "Men Eyeglasses 2", price: "Rs. 2,999", description: "Classic men's eyeglasses for a sophisticated look.", imageUrl: "https://i.postimg.cc/QdT2S13r/Gemini-Generated-Image-jdfx7qjdfx7qjdfx.png", gender: "men", material: "acetate", frameType: "full-rim", mirror: "no", size: "medium", prescription: "near", color: "black" },
        { id: 17, name: "Modern Men's Frames", price: "Rs. 3,200", description: "Lightweight and stylish, perfect for daily wear.", imageUrl: "https://placehold.co/300x200/3b82f6/ffffff?text=Modern+Men's", gender: "men", material: "metal", frameType: "full-rim", mirror: "no", size: "medium", prescription: "distance", color: "silver" },
        { id: 18, name: "Business Look", price: "Rs. 4,500", description: "Premium quality for a sharp professional image.", imageUrl: "https://placehold.co/300x200/3b82f6/ffffff?text=Business+Look", gender: "men", material: "titanium", frameType: "semi-rimless", mirror: "no", size: "large", prescription: "progressive", color: "grey" },
        { id: 19, name: "Outdoor Sport", price: "Rs. 3,800", description: "Durable frames for active lifestyles.", imageUrl: "https://placehold.co/300x200/3b82f6/ffffff?text=Outdoor+Sport", gender: "men", material: "plastic", frameType: "full-rim", mirror: "yes", size: "extra-large", prescription: "distance", color: "blue" },
        { id: 20, name: "Vintage Charm", price: "Rs. 2,600", description: "Retro design with a modern twist.", imageUrl: "https://placehold.co/300x200/3b82f6/ffffff?text=Vintage+Charm", gender: "men", material: "acetate", frameType: "full-rim", mirror: "no", size: "small", prescription: "near", color: "brown" }
    ]
};

// --- DOM Elements ---
const shopByCategoryGrid = document.getElementById('shop-by-category-grid');
const detailedProductPage = document.getElementById('detailed-product-page');
const filteredGlassesDisplay = document.getElementById('filtered-glasses-display');
const noResultsMessage = document.getElementById('no-results-message');

const priceFilter = document.getElementById('price-filter');
const genderFilter = document.getElementById('gender-filter');
const materialFilter = document.getElementById('material-filter');
const frameTypeFilter = document.getElementById('frame-type-filter');
const mirrorOptionFilter = document.getElementById('mirror-option-filter');
const frameSizeFilter = document.getElementById('frame-size-filter');
const prescriptionTypeFilter = document.getElementById('prescription-type-filter');
const applyFiltersButton = document.getElementById('apply-filters');

const aiStyleAdvisorModal = document.getElementById('ai-style-advisor-modal');
const aiQueryInput = document.getElementById('ai-query-input');
const getAiAdviceButton = document.getElementById('get-ai-advice-button');
const aiAdviceLoading = document.getElementById('ai-advice-loading');
const aiAdviceOutput = document.getElementById('ai-advice-output');
const openAiAdvisorButton = document.getElementById('open-ai-advisor'); // Button to open the AI advisor modal

// Blog elements - declared globally
const blogPostsDisplay = document.getElementById('blog-posts-display');
const addBlogPostForm = document.getElementById('add-blog-post-form');
const blogMessage = document.getElementById('blog-message');


let currentCategory = ''; // To keep track of the selected category for the detailed page

// --- Glasses Store Functionality ---

// Function to show the detailed product view for a category
function showDetailedGlassesView(category) {
    currentCategory = category;
    shopByCategoryGrid.classList.add('hidden');
    detailedProductPage.classList.remove('hidden');
    
    // Reset filters to 'all' and then set gender filter to the selected category
    priceFilter.value = 'all';
    genderFilter.value = category; 
    materialFilter.value = 'all';
    frameTypeFilter.value = 'all';
    mirrorOptionFilter.value = 'all';
    frameSizeFilter.value = 'all';
    prescriptionTypeFilter.value = 'all';

    // Uncheck all color checkboxes
    document.querySelectorAll('.color-checkbox').forEach(cb => cb.checked = false);

    applyFilters(); // Apply filters to load products
}

// Function to hide the detailed product view and show categories
function hideDetailedGlassesView() {
    detailedProductPage.classList.add('hidden');
    shopByCategoryGrid.classList.remove('hidden');
    // Reset current category when going back to the main categories
    currentCategory = ''; 
    // Also reset filters on the detailed page to their default 'all' values
    priceFilter.value = 'all';
    genderFilter.value = 'all';
    materialFilter.value = 'all';
    frameTypeFilter.value = 'all';
    mirrorOptionFilter.value = 'all';
    frameSizeFilter.value = 'all';
    prescriptionTypeFilter.value = 'all';
    document.querySelectorAll('.color-checkbox').forEach(cb => cb.checked = false);
}

// Function to apply filters and render products
function applyFilters() {
    const selectedPriceRange = priceFilter.value;
    const selectedColorCheckboxes = Array.from(document.querySelectorAll('.color-checkbox:checked')).map(cb => cb.value);
    const selectedGender = genderFilter.value;
    const selectedMaterial = materialFilter.value;
    const selectedFrameType = frameTypeFilter.value;
    const selectedMirrorOption = mirrorOptionFilter.value;
    const selectedFrameSize = frameSizeFilter.value;
    const selectedPrescriptionType = prescriptionTypeFilter.value;

    let filteredGlasses = [];
    if (currentCategory && glassesData[currentCategory]) {
        filteredGlasses = glassesData[currentCategory];
    } else {
        // If no specific category is selected (e.g., initially or after reset), show all products
        for (const key in glassesData) {
            if (glassesData.hasOwnProperty(key)) {
                filteredGlasses = filteredGlasses.concat(glassesData[key]);
            }
        }
    }


    // Apply filters
    if (selectedPriceRange !== 'all') {
        const [minPrice, maxPrice] = selectedPriceRange.split('-').map(p => parseInt(p));
        filteredGlasses = filteredGlasses.filter(glass => {
            const price = parseInt(glass.price.replace('Rs. ', '').replace(',', ''));
            return (minPrice === 0 || price >= minPrice) && (isNaN(maxPrice) || price <= maxPrice);
        });
    }

    if (selectedColorCheckboxes.length > 0) {
        filteredGlasses = filteredGlasses.filter(glass => glass.color && selectedColorCheckboxes.includes(glass.color.toLowerCase()));
    }

    if (selectedGender !== 'all') {
        filteredGlasses = filteredGlasses.filter(glass => glass.gender && glass.gender.toLowerCase() === selectedGender.toLowerCase());
    }

    if (selectedMaterial !== 'all') {
        filteredGlasses = filteredGlasses.filter(glass => glass.material && glass.material.toLowerCase() === selectedMaterial.toLowerCase());
    }

    if (selectedFrameType !== 'all') {
        filteredGlasses = filteredGlasses.filter(glass => glass.frameType && glass.frameType.toLowerCase() === selectedFrameType.toLowerCase());
    }

    if (selectedMirrorOption !== 'all') {
        filteredGlasses = filteredGlasses.filter(glass => (selectedMirrorOption === 'yes' && glass.mirror === 'yes') || (selectedMirrorOption === 'no' && glass.mirror === 'no'));
    }

    if (selectedFrameSize !== 'all') {
        filteredGlasses = filteredGlasses.filter(glass => glass.size && glass.size.toLowerCase() === selectedFrameSize.toLowerCase());
    }

    if (selectedPrescriptionType !== 'all') {
        filteredGlasses = filteredGlasses.filter(glass => glass.prescription && glass.prescription.toLowerCase() === selectedPrescriptionType.toLowerCase());
    }

    renderFilteredProducts(filteredGlasses);
}

// Function to render the filtered products
function renderFilteredProducts(products) {
    filteredGlassesDisplay.innerHTML = '';
    if (products.length === 0) {
        noResultsMessage.classList.remove('hidden');
    } else {
        noResultsMessage.classList.add('hidden');
        products.forEach(glass => {
            const productCard = `
                <div class="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-2 text-center">
                    <img src="${glass.imageUrl}" alt="${glass.name}" class="rounded-lg mb-4 w-full h-48 object-cover">
                    <h4 class="text-xl font-semibold text-gray-900 mb-2">${glass.name}</h4>
                    <p class="text-blue-600 font-bold text-lg mb-2">${glass.price}</p>
                    ${glass.description ? `<p class="text-gray-600 text-sm mb-4">${glass.description}</p>` : ''}
                    <button class="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition duration-300">Add to Cart</button>
                </div>
            `;
            filteredGlassesDisplay.innerHTML += productCard;
        });
    }
}

// Event listeners for filters
applyFiltersButton.addEventListener('click', applyFilters);
priceFilter.addEventListener('change', applyFilters);
genderFilter.addEventListener('change', applyFilters);
materialFilter.addEventListener('change', applyFilters);
frameTypeFilter.addEventListener('change', applyFilters);
mirrorOptionFilter.addEventListener('change', applyFilters);
frameSizeFilter.addEventListener('change', applyFilters);
prescriptionTypeFilter.addEventListener('change', applyFilters);

// Add event listeners for color checkboxes
document.querySelectorAll('.color-checkbox').forEach(checkbox => {
    checkbox.addEventListener('change', applyFilters);
});


// --- AI Style Advisor Functionality ---
openAiAdvisorButton.addEventListener('click', () => {
    aiStyleAdvisorModal.classList.remove('hidden');
    aiAdviceOutput.classList.add('hidden'); // Hide previous output
    aiAdviceOutput.innerHTML = ''; // Clear previous advice
    aiQueryInput.value = ''; // Clear input field
});

aiStyleAdvisorModal.addEventListener('click', (e) => {
    if (e.target.id === 'ai-style-advisor-modal') {
        aiStyleAdvisorModal.classList.add('hidden');
    }
});

getAiAdviceButton.addEventListener('click', async () => {
    const userQuery = aiQueryInput.value.trim();
    if (!userQuery) {
        alert('Please enter your query for the AI Style Advisor.');
        return;
    }

    aiAdviceLoading.classList.remove('hidden');
    aiAdviceOutput.classList.add('hidden');

    try {
        let chatHistory = [];
        chatHistory.push({ role: "user", parts: [{ text: `User wants advice on glasses. Their query: "${userQuery}". Suggest frame types, colors, and materials. Also suggest if mirror option would be good. Output in a friendly, conversational tone.` }] });
        
        const payload = { contents: chatHistory };
        const apiKey = ""; // If you want to use models other than gemini-2.0-flash or imagen-3.0-generate-002, provide an API key here. Otherwise, leave this as-is.
        const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        const result = await response.json();
        if (result.candidates && result.candidates.length > 0 &&
            result.candidates[0].content && result.candidates[0].content.parts &&
            result.candidates[0].content.parts.length > 0) {
            const aiText = result.candidates[0].content.parts[0].text;
            aiAdviceOutput.innerHTML = aiText;
            aiAdviceOutput.classList.remove('hidden');
        } else {
            aiAdviceOutput.innerHTML = 'Sorry, I could not generate advice. Please try again.';
            aiAdviceOutput.classList.remove('hidden');
        }
    } catch (error) {
        console.error('Error fetching AI advice:', error);
        aiAdviceOutput.innerHTML = 'An error occurred while getting advice. Please try again later.';
        aiAdviceOutput.classList.remove('hidden');
    } finally {
        aiAdviceLoading.classList.add('hidden');
    }
});


// --- Blog Post Management Script ---
function loadBlogPosts() {
    const defaultBlogPosts = [
        { id: 'default2', title: "Understanding Cataract Eye Surgery", content: "A detailed guide to cataract surgery, what to expect, and recovery process...", imageUrl: "https://placehold.co/400x250/cccccc/333333?text=Cataract+Surgery" },
        { id: 'default3', title: "Diabetic Retinopathy: Prevention and Treatment", content: "Insights into managing diabetic retinopathy and protecting your vision...", imageUrl: "https://placehold.co/400x250/cccccc/333333?text=Diabetic+Retinopathy" },
    ];
    let storedPosts = JSON.parse(localStorage.getItem('hasnainEyeCareBlogPosts'));
    if (!storedPosts || storedPosts.length === 0) {
        storedPosts = defaultBlogPosts;
        localStorage.setItem('hasnainEyeCareBlogPosts', JSON.stringify(storedPosts));
    }
    return storedPosts;
}

function renderBlogPosts() {
    const posts = loadBlogPosts();
    if (blogPostsDisplay) { // Check if element exists
        blogPostsDisplay.innerHTML = '';
        if (posts.length === 0) {
            blogPostsDisplay.innerHTML = '<p class="text-center text-gray-600 col-span-full">No blog posts available yet. Be the first to add one!</p>';
            return;
        }
        posts.forEach(post => {
            const blogCard = `
                <div class="bg-blue-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-2">
                    ${post.imageUrl ? `<img src="${post.imageUrl}" onerror="this.onerror=null;this.src='https://placehold.co/400x250/cccccc/333333?text=Image+Not+Found';" alt="${post.title}" class="rounded-lg mb-4 w-full h-48 object-cover">` : ''}
                    <h3 class="text-2xl font-semibold text-gray-900 mb-3">${post.title}</h3>
                    <p class="text-gray-700 mb-4">${post.content.substring(0, 150)}...</p>
                    <button onclick="viewFullBlogPost('${post.id}')" class="text-blue-600 hover:text-blue-800 font-semibold">Read More <i class="fas fa-arrow-right ml-1"></i></button>
                    <button onclick="deleteBlogPost('${post.id}')" class="text-red-600 hover:text-red-800 font-semibold ml-4">Delete <i class="fas fa-trash-alt ml-1"></i></button>
                </div>
            `;
            blogPostsDisplay.innerHTML += blogCard;
        });
    }
}

function viewFullBlogPost(postId) {
    const posts = loadBlogPosts();
    const post = posts.find(p => p.id === postId);
    if (post) {
        const modalContent = `
            <div class="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center p-4 z-50" id="blog-post-modal">
                <div class="bg-white rounded-lg p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto relative">
                    <button class="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl font-bold" onclick="document.getElementById('blog-post-modal').remove()">
                        ×
                    </button>
                    <h3 class="text-3xl font-bold text-gray-900 mb-4">${post.title}</h3>
                    ${post.imageUrl ? `<img src="${post.imageUrl}" onerror="this.onerror=null;this.src='https://placehold.co/600x400/cccccc/333333?text=Image+Not+Found';" alt="${post.title}" class="rounded-lg mb-6 w-full h-auto max-h-96 object-cover">` : ''}
                    <p class="text-gray-700 leading-relaxed">${post.content}</p>
                </div>
            </div>
        `;
        const modalDiv = document.createElement('div');
        modalDiv.id = 'blog-post-modal';
        modalDiv.innerHTML = modalContent;
        document.body.appendChild(modalDiv);
        modalDiv.addEventListener('click', (e) => {
            if (e.target.id === 'blog-post-modal') {
                modalDiv.remove();
            }
        });
    }
}

function deleteBlogPost(postId) {
    let posts = loadBlogPosts();
    const originalLength = posts.length;
    posts = posts.filter(p => p.id !== postId);
    if (posts.length < originalLength) {
        localStorage.setItem('hasnainEyeCareBlogPosts', JSON.stringify(posts));
        renderBlogPosts();
        showTemporaryMessage('Blog post deleted successfully!', 'green');
    } else {
        showTemporaryMessage('Failed to delete blog post.', 'red');
    }
}

addBlogPostForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const title = document.getElementById('blog-title').value;
    const content = document.getElementById('blog-content').value;
    const imageUrl = document.getElementById('blog-image-url').value;
    if (title && content) {
        const newPost = { id: `post-${Date.now()}`, title: title, content: content, imageUrl: imageUrl };
        let posts = loadBlogPosts();
        posts.push(newPost);
        localStorage.setItem('hasnainEyeCareBlogPosts', JSON.stringify(posts));
        renderBlogPosts();
        addBlogPostForm.reset();
        showTemporaryMessage('New blog post added successfully!', 'green');
        window.scrollTo({ top: document.getElementById('blog').offsetTop, behavior: 'smooth' });
    } else {
        showTemporaryMessage('Please fill in both title and content.', 'red');
    }
});

function showTemporaryMessage(message, type) {
    if (blogMessage) { // Check if element exists
        blogMessage.classList.remove('hidden', 'bg-green-100', 'text-green-800', 'border-green-400', 'bg-red-100', 'text-red-800', 'border-red-400');
        blogMessage.classList.add(`bg-${type}-100`, `text-${type}-800`, `border-${type}-400`);
        blogMessage.innerHTML = `<p>${message}</p>`;
        setTimeout(() => {
            blogMessage.classList.add('hidden');
        }, 3000);
    }
}

// --- General Website Functionality ---

// Mobile Navigation Toggle
const menuButton = document.getElementById('menu-button');
const navLinks = document.getElementById('nav-links');

menuButton.addEventListener('click', () => {
    navLinks.classList.toggle('hidden');
    navLinks.classList.toggle('flex');
    navLinks.classList.toggle('flex-col');
});

// Close mobile nav when a link is clicked
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        if (!navLinks.classList.contains('hidden') && window.innerWidth < 768) { // Only close if mobile nav is open
            navLinks.classList.add('hidden');
            navLinks.classList.remove('flex');
            navLinks.classList.remove('flex-col');
        }
    });
});

// Refractive Card Upload Preview (Existing)
const refractiveCardUpload = document.getElementById('refractive-card-upload');
const imagePreview = document.getElementById('image-preview');

refractiveCardUpload.addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            imagePreview.innerHTML = `<img src="${e.target.result}" class="max-w-full h-auto max-h-48 rounded-lg shadow-md" alt="Refractive Card Preview">`;
        }
        reader.readAsDataURL(file);
    } else {
        imagePreview.innerHTML = '';
    }
});

// Handle Form Submission (Existing)
const refractiveCardForm = document.getElementById('refractive-card-form');
const orderMessage = document.getElementById('order-message');

refractiveCardForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default form submission

    const formData = {
        od: {
            sphere: document.getElementById('od-sphere').value,
            cylinder: document.getElementById('od-cylinder').value,
            axis: document.getElementById('od-axis').value,
            add: document.getElementById('od-add').value,
        },
        os: {
            sphere: document.getElementById('os-sphere').value,
            cylinder: document.getElementById('os-cylinder').value,
            axis: document.getElementById('os-axis').value,
            add: document.getElementById('os-add').value,
        },
        customerName: document.getElementById('customer-name').value,
        customerPhone: document.getElementById('customer-phone').value,
        customerAddress: document.getElementById('customer-address').value,
        refractiveCardImage: imagePreview.querySelector('img') ? imagePreview.querySelector('img').src : 'No image uploaded'
    };

    console.log('Order Details:', formData);

    orderMessage.classList.remove('hidden');
    orderMessage.classList.add('bg-green-100', 'text-green-800', 'border', 'border-green-400');
    orderMessage.innerHTML = `
        <p class="font-bold text-lg mb-2">Order Request Submitted Successfully!</p>
        <p class="mb-1">Thank you, <span class="font-semibold">${formData.customerName}</span>. Your details have been received.</p>
        <p class="mb-1">Our team will contact you shortly at <span class="font-semibold">${formData.customerPhone}</span> to confirm your order and guide you through the JazzCash payment process.</p>
        <p class="font-semibold text-sm mt-3">JazzCash Payments: 03084531750</p>
    `;

    refractiveCardForm.reset();
    imagePreview.innerHTML = '';
    window.scrollTo({ top: document.getElementById('glasses-store').offsetTop, behavior: 'smooth' });
});

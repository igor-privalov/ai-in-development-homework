const axios = require('axios');

async function testProductAPI() {
    try {
        // Test 1: Verify server response code
        const response = await axios.get('https://fakestoreapi.com/products');
        console.log('Test 1: Response Status Code');
        console.log(`Expected: 200, Actual: ${response.status}`);
        console.log(response.status === 200 ? '✅ Passed' : '❌ Failed');
        console.log('----------------------------------------');

        // Test 2: Validate product data
        const products = response.data;
        const defects = [];

        products.forEach(product => {
            const productDefects = [];

            // Check title
            if (!product.title || product.title.trim() === '') {
                productDefects.push('Empty title');
            }

            // Check price
            if (product.price < 0) {
                productDefects.push('Negative price');
            }

            // Check rating.rate
            if (product.rating.rate > 5) {
                productDefects.push('Rating exceeds 5');
            }

            if (productDefects.length > 0) {
                defects.push({
                    id: product.id,
                    title: product.title,
                    defects: productDefects
                });
            }
        });

        // Test 2 Results
        console.log('Test 2: Product Data Validation');
        if (defects.length === 0) {
            console.log('✅ All products passed validation');
        } else {
            console.log('❌ Found products with defects:');
            defects.forEach(defect => {
                console.log(`\nProduct ID: ${defect.id}`);
                console.log(`Title: ${defect.title}`);
                console.log('Defects:');
                defect.defects.forEach(d => console.log(`- ${d}`));
            });
        }
        console.log('----------------------------------------');

        // Test 3: Generate list of products with defects
        console.log('Test 3: Products with Defects Summary');
        if (defects.length === 0) {
            console.log('✅ No products with defects found');
        } else {
            console.log(`❌ Found ${defects.length} products with defects:`);
            defects.forEach(defect => {
                console.log(`\nProduct ID: ${defect.id}`);
                console.log(`Title: ${defect.title}`);
                console.log('Defects:');
                defect.defects.forEach(d => console.log(`- ${d}`));
            });
        }

    } catch (error) {
        console.error('Error during API testing:', error.message);
    }
}

// Run the tests
testProductAPI(); 
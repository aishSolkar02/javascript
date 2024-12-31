fetch("http://localhost:8081/products")
.then(data=>data.json())
.then(data=>{
    console.log(data);
    document.write(`<p>number: ${data.page.number}</p>`)
    document.write(`<p>size: ${data.page.size}</p>`)
    document.write(`<p>totalElements: ${data.page.totalElements}</p>`)
    document.write(`<p>totalPages: ${data.page.totalPages}</p>`)



    data["_embedded"]["products"].forEach(product=>{
        document.write(`<h1>${product.productName}</h1>`)
        document.write(`<p>${product._links.self.href}</p>`)
        
    });
   
})

// dont write here
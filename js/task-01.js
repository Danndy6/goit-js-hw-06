const ulLiCount = document.querySelectorAll(".item h2")
console.log(`Number of categories: ${ulLiCount.length}`)

ulLiCount.forEach(ulCategories => 
    console.log(`Category: ${ulCategories.textContent}
Elements: ${ulCategories.nextElementSibling.children.length}`))
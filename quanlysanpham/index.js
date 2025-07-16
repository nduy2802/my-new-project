let products = [
    "Sony Xperia",
    "Samsung Galaxy",
    "Nokia 6",
    "Xiaomi Redmi Note 4",
    "Apple iPhone 6S",
    "Xiaomi Mi 5s Plus",
    "Apple iPhone 8 Plus",
    "Fujitsu F-04E",
    "Oppo A71"
];

function renderProducts() {
    const tableBody = document.querySelector('#productTable tbody');
    const count = document.getElementById("productCount");
    tableBody.innerHTML = "";

    products.forEach((product, index) => {
        const row = document.createElement("tr");

        const nameTd = document.createElement("td");
        nameTd.textContent = product;

        const editTd = document.createElement("td");
        const editBtn = document.createElement("button");
        editBtn.textContent = "Edit";
        editBtn.onclick = () => editProduct(index);
        editTd.className = "action-buttons";
        editTd.appendChild(editBtn);

        const deleteTd = document.createElement("td");
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.onclick = () => deleteProduct(index);
        deleteTd.className = "action-buttons";
        deleteTd.appendChild(deleteBtn);

        row.appendChild(nameTd);
        row.appendChild(editTd);
        row.appendChild(deleteTd);
        tableBody.appendChild(row);
    });

    count.textContent = `${products.length} product${products.length !== 1 ? 's' : ''}`;
}

function addProduct() {
    const input = document.getElementById("productInput");
    const name = input.value.trim();
    if (name) {
        products.push(name);
        input.value = "";
        renderProducts();
    } else {
        alert("Please enter a product name.");
    }
}

function editProduct(index) {
    const newName = prompt("Enter new product name:", products[index]);
    if (newName !== null && newName.trim()) {
        products[index] = newName.trim();
        renderProducts();
    }
}

function deleteProduct(index) {
    if (confirm("Are you sure you want to delete this product?")) {
        products.splice(index, 1);
        renderProducts();
    }
}

// Hiển thị ban đầu
renderProducts();

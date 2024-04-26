document.addEventListener("DOMContentLoaded", function() {
    // Sample data for demonstration
    const pets = [
        { name: "Buddy", species: "Dog", age: 3, breed: "Golden Retriever", adoptionFee: "$200", image: "images/golden_retriever.jpg" },
        { name: "Whiskers", species: "Cat", age: 2, breed: "Siamese", adoptionFee: "$150", image: "images/siamese.jpg" },
        { name: "Fluffy", species: "Rabbit", age: 1, breed: "Holland Lop", adoptionFee: "$100", image: "images/holland_lop.jpg" }
    ];

    // Function to populate pet table
    function populatePetTable() {
        console.log("Populating pet table...");
        const table = document.getElementById("pet-table");

        // Check if table exists
        if (!table) {
            console.error("Pet table not found.");
            return;
        }

        // Clear existing table content
        table.innerHTML = "";

        // Create table header
        const headerRow = table.insertRow();
        const headers = ["Name", "Species", "Age", "Breed", "Adoption Fee", "Image"];
        headers.forEach(headerText => {
            const th = document.createElement("th");
            th.textContent = headerText;
            headerRow.appendChild(th);
        });

        
        pets.forEach(pet => {
            const row = table.insertRow();
            Object.values(pet).forEach((value, index) => {
                const cell = row.insertCell();
                if (index === headers.indexOf("Image")) {
                    const img = document.createElement("img");
                    img.src = value;
                    img.alt = pet.name + " Image";
                    cell.appendChild(img);
                } else {
                    cell.textContent = value;
                }
            });
        });

        console.log("Pet table populated successfully.");
    }

    
    populatePetTable();
});

document.addEventListener('DOMContentLoaded', function() {
    const params = new URLSearchParams(window.location.search);
    const query = params.get('q'); // 'q' adalah parameter untuk query pencarian

    const titleElement = document.getElementById('search-title');
    const container = document.getElementById('search-results-container');
    
    let html = '';
    let found = false;

    // Tampilkan judul pencarian
    titleElement.innerHTML = `Hasil Pencarian untuk: <span>"${query || ''}"</span>`;
    
    if (query) {
        const searchQuery = query.toLowerCase(); // Ubah query ke huruf kecil

        for (const productId in semuaProduk) {
            const produk = semuaProduk[productId];
            const productName = produk.nama.toLowerCase(); // Ubah nama produk ke huruf kecil

            // Cek jika nama produk mengandung query pencarian
            if (productName.includes(searchQuery)) {
                found = true;
                html += `
                    <div class="product-card">
                        <div class="product-image"><img src="${produk.gambar}" alt="${produk.nama}"></div>
                        <div class="product-info">
                            <h3 class="product-title">${produk.nama}</h3>
                            <p class="product-price">${produk.harga}</p>
                            <a href="detail.html?id=${productId}" class="btn-detail">Lihat Detail</a>
                        </div>
                    </div>
                `;
            }
        }
    }

    // Jika tidak ada produk yang ditemukan, tampilkan pesan
    if (!found) {
        container.innerHTML = `<p class="no-results">Maaf, produk tidak ditemukan. Coba kata kunci lain.</p>`;
    } else {
        container.innerHTML = html;
    }

    // CSS tambahan untuk pesan "no results" bisa ditambahkan di layout.css
    // Contoh: .no-results { text-align: center; font-size: 1.2rem; padding: 40px; grid-column: 1 / -1; }
});
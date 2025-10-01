document.addEventListener('DOMContentLoaded', function() {

    // --- MEKANISME UTAMA: AMBIL DATA & TAMPILKAN ---
    const params = new URLSearchParams(window.location.search);
    const productId = params.get('id');
    const produk = semuaProduk[productId];

    // --- Variabel untuk Modal ---
    const orderModal = document.getElementById('orderModal');
    const orderBtn = document.getElementById('orderBtn');
    const closeModalBtn = document.querySelector('.close-modal-btn');
    const orderForm = document.getElementById('orderForm');


    if (produk) {
        // Mengisi semua elemen di halaman
        document.title = `Detail - ${produk.nama}`;
        
        document.getElementById('breadcrumbs').innerHTML = `
            <a href="index.html">Home</a> <i class="fas fa-angle-right"></i>
            <a href="${produk.linkKategori}">${produk.kategori}</a> <i class="fas fa-angle-right"></i>
            <span>${produk.nama}</span>`;

        document.getElementById('mainProductImage').src = produk.gambar;
        document.getElementById('mainProductImage').alt = produk.nama;

        document.getElementById('productTagCategory').textContent = produk.kategori;
        document.getElementById('productName').textContent = produk.nama;
        document.getElementById('productShortDesc').textContent = produk.deskripsiSingkat;
        document.getElementById('productPrice').textContent = produk.harga;
        document.getElementById('productLongDesc').textContent = produk.deskripsiLengkap;
        
        const specTable = document.getElementById('specTable');
        specTable.innerHTML = '';
        for (const key in produk.spesifikasi) {
            const row = `<tr><th>${key}</th><td>${produk.spesifikasi[key]}</td></tr>`;
            specTable.innerHTML += row;
        }
        
        // --- LOGIKA BARU: TAMPILKAN PRODUK SERUPA ---
        tampilkanProdukSerupa(produk.kategori, productId);

        // --- EVENT LISTENERS UNTUK MODAL ---
        orderBtn.addEventListener('click', () => {
            orderModal.classList.add('show');
        });

        closeModalBtn.addEventListener('click', () => {
            orderModal.classList.remove('show');
        });

        window.addEventListener('click', (event) => {
            if (event.target === orderModal) {
                orderModal.classList.remove('show');
            }
        });

        orderForm.addEventListener('submit', function(event) {
            event.preventDefault();

            // Ambil data dari form
            const customerName = document.getElementById('customerName').value;
            const customerAddress = document.getElementById('customerAddress').value;
            const quantity = document.getElementById('quantity').value;

            // Buat pesan WhatsApp
            const message = `Halo, saya mau pesan produk berikut:
-----------------------------------
*Produk:* ${produk.nama}
*Harga:* ${produk.harga}
*Jumlah:* ${quantity}
-----------------------------------
*Nama Pemesan:* ${customerName}
*Alamat Pengiriman:* ${customerAddress}

Mohon konfirmasi ketersediaan dan total biayanya. Terima kasih!`;

            // Redirect ke WhatsApp
            const whatsappURL = `https://wa.me/6281224544541?text=${encodeURIComponent(message)}`;
            window.open(whatsappURL, '_blank');
            
            // Tutup modal setelah submit
            orderModal.classList.remove('show');
        });


    } else {
        // Handle jika produk tidak ditemukan
        document.querySelector('main .container').innerHTML = 
            `<div style="text-align:center; padding: 50px 0;"><h1>Produk Tidak Ditemukan</h1><p>Maaf, produk yang Anda cari tidak ada. Silakan kembali ke <a href="index.html">halaman utama</a>.</p></div>`;
    }


    // --- FUNGSI UNTUK TABS (Desain Baru) ---
    const tabLinks = document.querySelectorAll('.tab-link');
    const tabContents = document.querySelectorAll('.tab-content');

    tabLinks.forEach(link => {
        link.addEventListener('click', () => {
            const tabId = link.getAttribute('data-tab');

            tabLinks.forEach(item => item.classList.remove('active'));
            tabContents.forEach(item => item.classList.remove('active'));

            link.classList.add('active');
            document.getElementById(tabId).classList.add('active');
        });
    });

    // --- FUNGSI BARU: Untuk generate produk serupa ---
    function tampilkanProdukSerupa(kategori, idProdukSaatIni) {
        const container = document.getElementById('relatedProductsContainer');
        
        const produkSerupa = Object.keys(semuaProduk)
            .filter(key => semuaProduk[key].kategori === kategori && key !== idProdukSaatIni)
            .map(key => ({ id: key, ...semuaProduk[key] })); 

        const produkTampil = produkSerupa.slice(0, 3);

        if (produkTampil.length === 0) {
            document.querySelector('.related-products').style.display = 'none';
            return;
        }

        let html = '';
        produkTampil.forEach(p => {
            html += `
                <div class="product-card">
                    <div class="product-image"><img src="${p.gambar}" alt="${p.nama}"></div>
                    <div class="product-info">
                        <h3 class="product-title">${p.nama}</h3>
                        <p class="product-price">${p.harga}</p>
                        <a href="detail.html?id=${p.id}" class="btn-detail">Lihat Detail</a>
                    </div>
                </div>
            `;
        });
        container.innerHTML = html;
    }

});
// Ini adalah "database" produk kita
const semuaProduk = {
    "jbl-flip-6": {
        nama: "JBL Flip 6",
        kategori: "JBL",
        linkKategori: "JBL.html",
        harga: "Rp 1.699.000",
        gambar: "assets/images/PRODJBL.JPG",
        deskripsiSingkat: "Speaker portabel dengan suara bertenaga, baterai 12 jam, tahan air & debu (IP67).",
        deskripsiLengkap: "JBL Flip 6 menghadirkan suara bertenaga dengan desain portabel yang ramping. Cocok untuk dibawa ke pantai, hiking, atau pesta rumah. Dengan daya tahan baterai hingga 12 jam, pesta Anda tidak akan pernah berhenti.",
        spesifikasi: {
            "Daya Tahan Baterai": "Hingga 12 jam",
            "Sertifikasi": "Tahan air & debu IP67",
            "Fitur": "JBL PartyBoost",
            "Dimensi": "178 x 68 x 72 mm",
            "Berat": "0.55 kg"
        }
    },
    "jbl-charge-5": {
        nama: "JBL Charge 5",
        kategori: "JBL",
        linkKategori: "JBL.html",
        harga: "Rp 2.299.000",
        gambar: "assets/images/JBLCHARGE5.jpg",
        deskripsiSingkat: "Speaker portabel dengan bass kuat, baterai 20 jam, dan powerbank built-in.",
        deskripsiLengkap: "Bawa pesta ke mana saja dengan JBL Charge 5. Speaker ini memberikan suara JBL Original Pro yang dahsyat, dilengkapi driver excursion panjang yang dioptimalkan, tweeter terpisah, dan radiator bass ganda. Dengan daya tahan baterai 20 jam dan powerbank internal, Anda bisa terus mengisi daya perangkat tanpa menghentikan musik.",
        spesifikasi: {
            "Daya Tahan Baterai": "Hingga 20 jam",
            "Fitur": "Powerbank built-in, JBL PartyBoost",
            "Sertifikasi": "Tahan air & debu IP67",
            "Waktu Pengisian": "4 jam",
            "Berat": "0.96 kg"
        }
    },
    "jbl-go-3": {
        nama: "JBL Go 3",
        kategori: "JBL",
        linkKategori: "JBL.html",
        harga: "Rp 599.000",
        gambar: "assets/images/JBLGO3.jpg",
        deskripsiSingkat: "Speaker mini ultra-portabel dengan desain stylish, suara powerful, tahan air dan debu.",
        deskripsiLengkap: "Desain ultra-portabel JBL Go 3 sangat cocok dengan gaya terkini. Kain warna-warni dan detail ekspresif membuatnya terlihat sekeren suaranya. Tahan air dan debu dengan sertifikasi IP67 sehingga Anda bisa terus mendengarkan di saat hujan maupun panas.",
        spesifikasi: {
            "Daya Tahan Baterai": "Hingga 5 jam",
            "Sertifikasi": "Tahan air & debu IP67",
            "Konektivitas": "Bluetooth® 5.1",
            "Berat": "0.21 kg"
        }
    },
    "jbl-partybox-encore": {
        nama: "JBL PartyBox Encore",
        kategori: "JBL",
        linkKategori: "JBL.html",
        harga: "Rp 4.400.000",
        gambar: "assets/images/JBLPBENCORE.jpg", // <-- SIAPKAN GAMBAR INI
        deskripsiSingkat: "Speaker pesta portabel dengan 100W RMS, lightshow dinamis, dan termasuk mikrofon wireless.",
        deskripsiLengkap: "JBL PartyBox Encore adalah speaker pesta portabel yang memberikan 10 jam nonstop keseruan. Dengan pegangan yang mudah digenggam dan desain tahan percikan, Anda selalu dapat membawa pesta. Nikmati ketukan dengan Suara JBL Original Pro yang menakjubkan dan bass yang dalam. Sinkronkan pertunjukan cahaya strobo, ring, dan klub untuk pengalaman yang imersif, atau bernyanyi bersama dengan mikrofon nirkabel digital premium dari JBL.",
        spesifikasi: {
            "Power Output": "100W RMS",
            "Daya Tahan Baterai": "Hingga 10 jam",
            "Fitur": "Dynamic Lightshow, 1x Mic Wireless, Tahan Percikan (IPX4)",
            "Konektivitas": "Bluetooth, USB, AUX",
            "Berat": "6.3 kg"
        }
    },
    "sony-srs-xb13": {
        nama: "Sony SRS-XB13",
        kategori: "Sony",
        linkKategori: "sony.html",
        harga: "Rp 899.000",
        gambar: "assets/images/SRSXB13.jpg",
        deskripsiSingkat: "Speaker mini dengan Extra Bass™, tahan air IP67, dan daya tahan baterai hingga 16 jam.",
        deskripsiLengkap: "Sony SRS-XB13 adalah speaker portabel yang tangguh dan ringkas. Dilengkapi dengan tali multiway yang tahan lama, Anda dapat menggantungnya di mana saja. Jangan tertipu dengan ukurannya, dengan teknologi Extra Bass™ dan Sound Diffusion Processor, speaker ini mampu menghasilkan suara yang sangat kuat.",
        spesifikasi: {
            "Fitur": "Extra Bass™, Sound Diffusion Processor",
            "Daya Tahan Baterai": "Hingga 16 jam",
            "Ketahanan": "Tahan air dan debu (IP67)",
            "Konektivitas": "Bluetooth®, Fast Pair",
            "Port": "USB Type-C®"
        }
    },
    "sony-srs-xg300": {
        nama: "Sony SRS-XG300",
        kategori: "Sony",
        linkKategori: "sony.html",
        harga: "Rp 4.299.000",
        gambar: "assets/images/SONYXG300.jpg", // <-- SIAPKAN GAMBAR INI
        deskripsiSingkat: "Speaker nirkabel portabel dengan suara bass bertenaga, lampu ambient, dan baterai 25 jam.",
        deskripsiLengkap: "Bawa pesta ke mana saja dengan speaker nirkabel portabel SRS-XG300. Dengan suara pesta yang kuat dari X-Balanced Speaker, tweeter efisiensi tinggi, dan radiator pasif, speaker ini dibuat untuk menghasilkan suara bass yang dalam dan jernih. Gagang yang dapat ditarik membuatnya mudah dibawa, dan dengan daya tahan baterai 25 jam serta ketahanan air dan debu IP67, Anda dapat berpesta dari siang hingga malam.",
        spesifikasi: {
            "Fitur": "X-Balanced Speaker, Ambient Illumination",
            "Daya Tahan Baterai": "Hingga 25 jam",
            "Ketahanan": "Tahan air dan debu (IP67)",
            "Konektivitas": "Bluetooth®, Party Connect",
            "Fitur Tambahan": "Gagang dapat ditarik"
        }
    },
    "polytron-pas-8e12": {
        nama: "Polytron PAS 8E12",
        kategori: "Polytron",
        linkKategori: "polytron.html",
        harga: "Rp 2.450.000",
        gambar: "assets/images/POLYTRON.jpg",
        deskripsiSingkat: "Speaker aktif dengan suara mantap, koneksi Bluetooth, USB, dan desain modern.",
        deskripsiLengkap: "Nikmati pengalaman audio yang menggelegar dengan Polytron PAS 8E12. Speaker aktif ini dirancang untuk memberikan kualitas suara terbaik untuk musik dan film favorit Anda. Dilengkapi dengan konektivitas lengkap seperti Bluetooth, USB, dan input aux.",
        spesifikasi: {
            "Tipe Speaker": "Active Speaker",
            "Konektivitas": "Bluetooth, USB, Aux In",
            "Fitur": "XBR Woofer, Super Bass",
            "Power Output": "2 x 100 Watt RMS"
        }
    },
    "polytron-pma-9506": {
        nama: "Polytron PMA 9506",
        kategori: "Polytron",
        linkKategori: "polytron.html",
        harga: "Rp 990.000",
        gambar: "assets/images/POLYTRONPMA9506.jpg", // <-- SIAPKAN GAMBAR INI
        deskripsiSingkat: "Speaker multimedia 2.1 channel dengan lampu ambient, Bluetooth, dan remote control.",
        deskripsiLengkap: "Polytron Multimedia Audio seri PMA 9506 adalah pilihan sempurna untuk home entertainment. Dengan teknologi Bazzoke (ekstra bass) yang tertanam di dalamnya, Anda akan menikmati suara bass yang solid. Dilengkapi dengan lampu ambient, koneksi Bluetooth, dan remote control untuk kemudahan pengoperasian dari jarak jauh.",
        spesifikasi: {
            "Tipe Speaker": "Multimedia Speaker 2.1 Channel",
            "Konektivitas": "Bluetooth, USB, SD Card/MMC, Aux In",
            "Fitur": "Bazzoke, Ambient Light, FM Radio",
            "Power Output": "80 Watt RMS",
            "Aksesori": "Remote Control"
        }
    },
    "wilson-audio-sabrinax": {
        nama: "Wilson Audio SabrinaX",
        kategori: "Wilson Audio",
        linkKategori: "wilson audio.html",
        harga: "Rp 250.000.000",
        gambar: "assets/images/WILSON.jpg",
        deskripsiSingkat: "High-end floorstanding speaker dengan kejernihan suara premium untuk audiofil sejati.",
        deskripsiLengkap: "SabrinaX adalah manifestasi dari puluhan tahun pengalaman Wilson Audio dalam menciptakan pengeras suara high-end. Setiap komponen dipilih secara cermat untuk menghasilkan reproduksi suara yang paling akurat dan emosional. Sebuah mahakarya untuk para audiofil sejati.",
        spesifikasi: {
            "Tipe Enclosure": "Rear Ported",
            "Drivers": "1 inch Dome Tweeter, 5.75 inch Midrange, 8 inch Woofer",
            "Respon Frekuensi": "31 Hz – 23 kHz",
            "Bahan": "X-Material Composite"
        }
    }
};
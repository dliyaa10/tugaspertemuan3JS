// Array produk toko
let produkToko = [
    {
        id: 1,
        nama: "Laptop",
        harga: 7000000,
        stok: 5
    },
    {
        id: 2,
        nama: "Mouse",
        harga: 200000,
        stok: 10
    },
    {
        id: 3,
        nama: "Keyboard",
        harga: 350000,
        stok: 7
    }
];

// Fungsi untuk menambahkan produk
function tambahProduk(nama, harga, stok) {
    let idBaru = produkToko.length + 1;

    produkToko.push({
        id: idBaru,
        nama: nama,
        harga: harga,
        stok: stok
    });

    console.log("Produk berhasil ditambahkan.");
}

// Fungsi untuk menghapus produk berdasarkan ID
function hapusProduk(id) {
    produkToko = produkToko.filter(function(produk) {
        return produk.id !== id;
    });

    console.log("Produk dengan ID " + id + " berhasil dihapus.");
}

// Fungsi untuk menampilkan daftar produk
function tampilkanProduk() {
    console.log("=== DAFTAR PRODUK ===");

    produkToko.forEach(function(produk) {
        console.log(
            "ID: " + produk.id +
            " | Nama: " + produk.nama +
            " | Harga: Rp" + produk.harga.toLocaleString("id-ID") +
            " | Stok: " + produk.stok
        );
    });
}

// Menampilkan produk awal
tampilkanProduk();
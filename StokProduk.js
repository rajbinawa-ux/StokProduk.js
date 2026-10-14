
let produk = {
    nama: "Mouse Wireless",
    harga: 150000,
    stok: 3,
    diskon: 10,

    infoProduk: function () {
        return (
            this.nama + "\n" +
            "Harga: Rp" + this.harga + "\n" +
            "Stok tersedia: " + this.stok
        );
    },

    hargaDiskon: function () {
        return this.harga - (this.harga * this.diskon / 100);
    },

    beliProduk: function (jumlah) {
        if (jumlah <= this.stok) {
            this.stok -= jumlah;

            console.log(
                "✓ Pembelian berhasil! Anda membeli " +
                jumlah + " " + this.nama + "."
            );
            console.log("Sisa stok sekarang: " + this.stok);

            if (this.stok === 0) {
                console.log(
                    "Stok produk kini habis, segera restock!"
                );
            }
        } else {
            console.log("⚠ Maaf, stok produk sudah habis!");
        }
    }
};

console.log(produk.infoProduk());
console.log("------------------------------");
console.log("Harga setelah diskon: Rp" + produk.hargaDiskon());
console.log("------------------------------");

produk.beliProduk(1);
console.log("------------------------------");

produk.beliProduk(2);
console.log("------------------------------");

produk.beliProduk(1);
console.log("------------------------------");

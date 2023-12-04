class PegawaiKontrak {
    constructor(nama, umur, gaji, durasi) {
        this.nama = nama;
        this.umur = umur;
        this.gaji = gaji;
        this.durasi = durasi;
    }

    getGajiTotal() {
        return this.gaji * this.durasi;
    }
}

const pengKontrak = new PegawaiKontrak('Helmi Andi', 30, 10000000, 2);

console.log("Isi dari Pegawai Kontrak");
console.log(pengKontrak);
console.log('Durasi Kontrak (Tahun): ' + pengKontrak.durasi);
console.log("Gaji Total: " + pegKonrak.getGajiTotal());

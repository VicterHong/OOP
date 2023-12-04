class Pegawai {
    constructor(nama, umur, gaji, jabatan) {
        this.nama = nama;
        this.umur = umur;
        this.gaji = gaji;
        this.jabatan = jabatan;
    }

    getInfo() {
        console.log(`PegawaiTetap { 
    nama: '${this.nama}', 
    umur: ${this.umur}, 
    gaji: ${this.gaji},
    jabatan: ${this.jabatan}
 }`);
    }

    getPotongan() {
        const potongan = this.gaji > 8000000 ? 0.02 : 0.01;
        return this.gaji * potongan;
    }
}

class PegawaiTetap extends Pegawai {
    constructor(nama, umur, gaji, jabatan) {
        super(nama, umur, gaji);
        this.jabatan = jabatan;
    }

    getInsentif() {
        switch (this.jabatan.toLowerCase()) {
            case 'manager':
                return 5000000;
            case 'assistant manager':
                return 3000000;
            case 'supervisor':
                return 2000000;
            default:
                return 0;
        }
    }

    getGajiTotal() {
        const insentif = this.getInsentif();
        const potongan = this.getPotongan();
        return this.gaji + insentif - potongan;
    }
}
const pegTetap = new PegawaiTetap('Budianto Tanuwijaya', 35, 10000000, 'manager');

console.log("Isi dari Pegawai Tetap");
pegTetap.getInfo();

console.log("Gaji Insentif: " + pegTetap.getInsentif());
console.log("Gaji Total: " + pegTetap.getGajiTotal());

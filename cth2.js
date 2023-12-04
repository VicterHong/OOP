class Pegawai {
    constructor(nama, umur, gaji) {
        this.nama = nama;
        this.umur = umur;
        this.gaji = gaji;
    }

    getInfo() {
        console.log(`Nama: ${this.nama}`);
        console.log(`Umur: ${this.umur}`);
        console.log(`Gaji: ${this.gaji}`);
        console.log(`Jabatan: ${this.jabatan}`);
    }

    getPotongan() {
        const potongan = this.gaji > 8000000 ? 0.02 : 0.01;
        return this.gaji * potongan;
    }
}

class KaryawanTetap extends Pegawai {
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



class PegawaiKontrak extends Pegawai {
    constructor(nama, umur, gaji, durasi, jabatan) {
        super(nama, umur, gaji);
        this.durasi = durasi;
        this.jabatan = jabatan;
    }

    getGajiTotal() {
        const potongan = this.getPotongan();
        return this.gaji - potongan;
    }
    getInfo() {
        super.getInfo(); // Memanggil getInfo dari superclass (Pegawai)
        console.log(`Durasi Kontrak: ${this.durasi} bulan`);
    }
}

class Dosen extends KaryawanTetap {
    constructor({ nama, nomor, gaji, sksMengajar, honorPerSks }) {
        super(nama, 0, gaji, 'Dosen');
        this.nomor = nomor;
        this.sksMengajar = sksMengajar;
        this.honorPerSks = honorPerSks;
    }

    getHonorMengajar() {
        return this.sksMengajar * this.honorPerSks;
    }

    getPotonganHonorMengajar() {
        return 0.01 * this.getHonorMengajar();
    }

    getHonorMengajarBersih() {
        return this.getHonorMengajar() - this.getPotonganHonorMengajar();
    }

    getGajiTotal() {
        const totalGaji = super.getGajiTotal();
        const honorMengajarBersih = this.getHonorMengajarBersih();
        return totalGaji + honorMengajarBersih;
    }
}

// Contoh penggunaan
const karyawan1 = new KaryawanTetap('John Doe', 30, 10000000, 'Manager');
console.log('\n\PEGAWAI');
karyawan1.getInfo();
console.log(`Potongan: ${karyawan1.getPotongan()} `);
console.log(`Insentif: ${karyawan1.getInsentif()} `);
console.log(`Total Gaji: ${karyawan1.getGajiTotal()} `);

const karyawan2 = new PegawaiKontrak('Jane Doe', 25, 5000000, 6, 'magang');
console.log('\n\PEGAWAI KONTRAK');
karyawan2.getInfo();
console.log(`Total Gaji: ${karyawan2.getGajiTotal()} `);

const dosen1 = new Dosen({ nama: 'Prof. Dr. A', nomor: '123', gaji: 15000000, sksMengajar: 3, honorPerSks: 500000 });
console.log('\n\DOSEN');
dosen1.getInfo();
console.log(`Total Gaji: ${dosen1.getGajiTotal()} `);

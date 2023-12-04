class Dosen {
    constructor(data) {
        this.nama = data.nama;
        this.umur = data.umur;
        this.gaji = data.gaji;
        this.sksMengajar = data.sksmengajar;
        this.honorPerSks = data.honorpersks;
    }

    getHonorMengajar() {
        return this.sksMengajar * this.honorPerSks;
    }

    getGajiTotal() {
        return this.gaji + this.getHonorMengajar();
    }
}

const dataDosen = {
    nama: 'Herlambang',
    umur: 40,
    gaji: 5000000,
    sksmengajar: 10,
    honorpersks: 50000
};

const dosen1 = new Dosen(dataDosen);

console.log('Isi dari Data Dosen 1:');
console.log(dosen1);
console.log("Honor Mengajar: " + dosen1.getHonorMengajar());
console.log("Gaji Total: " + dosen1.getGajiTotal());
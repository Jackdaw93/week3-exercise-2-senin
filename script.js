class BangunDatar {
  constructor(sisi, tinggi, lebar, panjang, alas, jari, asli) {
    this.sisi = sisi;
    this.tinggi = tinggi;
    this.lebar = lebar;
    this.panjang = panjang;
    this.alas = alas;
    this.jari = jari;
    this.asli = asli;
  }
  //Persegi
  persegiLuas() {
    let luas = this.sisi * this.sisi;
    return luas;
  }
  persegiKeliling() {
    let Kper = 4 * this.sisi;
    return Kper;
  }

  //Persegi panjang
  persegiPanjangLuas() {
    let lPanjang = this.panjang * this.lebar;
    return lPanjang;
  }
  persegiPanjangKeliling() {
    let KperP = 2 * this.panjang + this.lebar;
    return KperP;
  }

  //Siku-Siku
  segitigaSikuSiku() {
    let Lsikusiku = (1 / 2) * this.alas * this.tinggi;
    return Lsikusiku;
  }
  segitigaKeliling() {
    let Ksikusiku = this.sisi + this.sisi + this.sisi;
    return Ksikusiku;
  }

  //Lingkaran
  lingkaranLuas() {
    let Lling = this.asli * this.jari * this.jari;
    return Lling;
  }
  lingkaranKel() {
    let lingKel = this.asli * this.jari;
    return lingKel;
  }
}

class Volume extends BangunDatar {
  constructor(sisi, panjang, lebar, tinggi, alas) {
    super(sisi, panjang, lebar, tinggi, alas);
  }
  volKubus() {
    let vol1 = this.sisi * this.sisi * this.sisi;
    return vol1;
  }
  luasKubus() {
    let luasK = 6 * this.sisi;
    return luasK;
  }
  kelKubus() {
    let kelKub = 12 * this.sisi;
    return kelKub;
  }
  volBalok() {
    let volBal = this.panjang * this.lebar * this.tinggi;
    return volBal;
  }
  luasBalok() {
    let luasBal =
      2 *
      (this.panjang * this.tinggi +
        this.panjang * this.tinggi +
        this.lebar * this.tinggi);
    return luasBal;
  }
  kelBalok() {
    let kelBal = 4 * (this.panjang + this.lebar + this.tinggi);
    return kelBal;
  }
}

// //Luas Persegi
// const persegi1 = new BangunDatar(3, 3);
// console.log(persegi1.persegiLuas());
// //Keliling Persegi
// console.log(persegi1.persegiKeliling());

// //Luas PersegiPanjang
// const persegiPan1 = new BangunDatar(null, null, 4, 3);
// console.log(persegiPan1.persegiPanjangLuas());
// //Keliling PersegiPanjang
// console.log(persegiPan1.persegiPanjangKeliling());

// //Luas Siku-Siku
// const sikuSiku1 = new BangunDatar(null, null, null, null, 4, null, 3);
// console.log(sikuSiku1.segitigaSikuSiku());
// //Keliling Siku-Siku
// const sikuSiku2 = new BangunDatar(3, 3, 3);
// console.log(sikuSiku2.segitigaKeliling());

// //Luas Lingkaran
// const Lingkaran1 = new BangunDatar(null, null, null, null, null, 4, 4, 3);
// console.log(Lingkaran1.lingkaranLuas());
// //Keliling Lingkaran
// console.log(Lingkaran1.lingkaranKel());

//Volume Kubus
const volKub = new Volume(3, 3, 3);
console.log(volKub.volKubus());
//Luas Kubus
const luasKub = new Volume(3, 3, 3);
console.log(luasKub.luasKubus());
//Keliling Kubus
const kelKub = new Volume(3);
console.log(kelKub.kelKubus());

//Volume Balok
const volBalk = new Volume(null, 3, 3, 3);
console.log(volBalk.volBalok());
//Luas Balok
const luasBalk = new Volume(null, 3, 3, 3);
console.log(luasBalk.luasBalok());
//Keliling Balok
const kelBalk = new Volume(null, 3, 3, 3);
console.log(kelBalk.kelBalok());

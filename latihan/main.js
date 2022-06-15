var angka1 = document.getElementById("angka1");
var angka2 = document.getElementById("angka2");
var hasil = document.getElementById("hasil");

function tambah(){
    hasil.value = Number(angka1.value) + Number(angka2.value)
}

function kurang(){
    hasil.value = Number(angka1.value) - Number(angka2.value)
}

function kali(){
    hasil.value = Number(angka1.value) * Number(angka2.value)
}

function bagi(){
    hasil.value = Number(angka1.value) / Number(angka2.value)
}

function hitungLuasSegitiga() {
    var a = parseFloat(document.getElementById("alas-segitiga").value);
    var t = parseFloat(document.getElementById("tinggi-segitiga").value);
    
    document.getElementById("luas-segitiga").textContent = 0.5 * a * t;

}

function hitungKelilingSegitiga() {
    var sisi1 = parseFloat(document.getElementById("sisi1").value);
    var sisi2 = parseFloat(document.getElementById("sisi2").value);
    var sisi3 = parseFloat(document.getElementById("sisi3").value);
    
    document.getElementById("keliling-segitiga").textContent = sisi1 + sisi2 + sisi3;

}

function hitungLuasJajarGenjang() {
    var a = parseFloat(document.getElementById("alas-jajar-genjang").value);
    var t = parseFloat(document.getElementById("tinggi-jajar-genjang").value);
    
    document.getElementById("luas-jajar-genjang").textContent = a * t;
}

function hitungKelilingJajarGenjang() {
    var a = parseFloat(document.getElementById("alas-jajar-genjang-keliling").value);
    var b = parseFloat(document.getElementById("sisi-miring-jajar-genjang").value);
    
    document.getElementById("keliling-jajar-genjang").textContent = 2 * (a + b);
}

function pilihSegitiga() {
    document.getElementById("segitiga-section").style.display = "flex";
    document.getElementById("jajar-genjang-section").style.display = "none";
}

function pilihJajarGenjang() {
    document.getElementById("segitiga-section").style.display = "none";
    document.getElementById("jajar-genjang-section").style.display = "flex";
}
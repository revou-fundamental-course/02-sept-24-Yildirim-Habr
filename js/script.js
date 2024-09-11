function hitungLuasSegitiga() {
    let input1 = document.getElementById("alas-segitiga").value;
    let input2 = document.getElementById("tinggi-segitiga").value;

    if (input1 == '' || input1 < 0 || input1 > 9 || input2 == '' || input2 < 0 || input2 > 9) {
        alert('Tolong inputnya diisi dengan benar. :D');
    }
    else {
        let a = parseFloat(input1);
        let t = parseFloat(input2);
        document.getElementById("luas-segitiga").textContent = 0.5 * a * t;
    }

}

function hitungKelilingSegitiga() {
    let input1 = document.getElementById("sisi1").value
    let input2 = document.getElementById("sisi2").value
    let input3 = document.getElementById("sisi3").value

    if (input1 == '' || input1 < 0 || input1 > 9 || input2 == '' || input2 < 0 || input2 > 9 || input3 == '' || input3 < 0 || input3 > 9) {
        alert('Tolong inputnya diisi dengan benar. :D');
    }
    else {
        let sisi1 = parseFloat(input1);
        let sisi2 = parseFloat(input2);
        let sisi3 = parseFloat(input3);
        document.getElementById("keliling-segitiga").textContent = sisi1 + sisi2 + sisi3;
    }

}

function hitungLuasJajarGenjang() {
    let input1 = document.getElementById("alas-jajar-genjang").value;
    let input2 = document.getElementById("tinggi-jajar-genjang").value;
    
    if (input1 == '' || input1 < 0 || input1 > 9 || input2 == '' || input2 < 0 || input2 > 9) {
        alert('Tolong inputnya diisi dengan benar. :D');
    }
    else {
        let a = parseFloat(input1);
        let t = parseFloat(input2);        
        document.getElementById("luas-jajar-genjang").textContent = a * t;
    }
}

function hitungKelilingJajarGenjang() {
    let input1 = document.getElementById("alas-jajar-genjang-keliling").value;
    let input2 = document.getElementById("sisi-miring-jajar-genjang").value;
    
    if (input1 == '' || input1 < 0 || input1 > 9 || input2 == '' || input2 < 0 || input2 > 9) {
        alert('Tolong inputnya diisi dengan benar. :D');
    }
    else {
        let a = parseFloat(input1);
        let b = parseFloat(input2);
        document.getElementById("keliling-jajar-genjang").textContent = 2 * (a + b);    
    }
}

function pilihSegitiga() {
    document.getElementById("segitiga-section").style.display = "flex";
    document.getElementById("jajar-genjang-section").style.display = "none";
}

function pilihJajarGenjang() {
    document.getElementById("segitiga-section").style.display = "none";
    document.getElementById("jajar-genjang-section").style.display = "flex";
}

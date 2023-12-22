function procDmg(el){
    let procentDmg = parseFloat(document.getElementById('ProcentDamage').value);
    let damage = parseFloat(document.getElementById('Damage').value);
    let pribav;
    let result;
    let procent2;

    procent2 = procentDmg / 100;
    pribav = procent2 * damage;
    result = pribav + damage;

    document.getElementById('resultProcDmg').innerHTML = result;
}


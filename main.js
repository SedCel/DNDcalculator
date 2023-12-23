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

function procVampir(){
    let prcVamp = parseFloat(document.getElementById('vampirProc').value);
    let dmg = parseFloat(document.getElementById('dmg_2').value);
    let result;
    let prcPereschet;

    prcPereschet = prcVamp / 100;
    result = prcPereschet * dmg;

    document.getElementById('resultVampir').innerHTML = result;

}

function uvorot(){
    let lovkost = parseFloat(document.getElementById('lovkost').value);
    let cubeResult = parseFloat(document.getElementById('cubeResult').value);
    let dopResult;
    let result;

    lovkost = lovkost / 100;
    dopResult = lovkost * cubeResult;
    result = dopResult + cubeResult;

    document.getElementById('uvorotResult').innerHTML = result;
    
   
}
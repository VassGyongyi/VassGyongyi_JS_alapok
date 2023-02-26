var vel_tomb = new Array();
function feltolt(){
    for (var i =0; i < 50; i++){
        var vel = Math.floor(Math.random()*100)+1;
        vel_tomb[i]= vel;
    }
}
function kiir(){
    var kimenet = "";
    for (var i =0; i < vel_tomb.length; i++){
        if (i % 5 == 4){
            kimenet += vel_tomb[i]+"\r\n";
        }
        else{
            kimenet += vel_tomb[i] +" ";
        }
       
    }
    alert(kimenet);
}
function osszeg(){
    var ossz = 0;
    for (var i =0; i < vel_tomb.length; i++){
        ossz += vel_tomb[i];
    }
    alert(`A számok összege: ${ossz}`)
}

function paros(){
    var db = 0;
    for (var i =0; i < vel_tomb.length; i++){
        if (vel_tomb[i]% 2 ==0){
            db += 1;
        }
    }
    if (db != 0){
    alert(`Páros szám ${db} db van benne.`)
    }
    else{
        alert('Nincs közte páros szám.')
    }
}
function harom(){
    var db = 0;
    for (var i =0; i < vel_tomb.length; i++){
        if (vel_tomb[i]% 3 ==0){
            db += 1;
        }
    }
    if (db != 0){
    alert(`Hárommal osztható ${db} db van benne.`)
    }
    else{
        alert('Nincs hárommal osztható.')
    }
}

function egy(){
    var db = 0;
    for (var i =0; i < vel_tomb.length; i++){
        if (vel_tomb[i] == 1){
            db += 1;
        }
    }
    if (db != 0){
        alert(`Egyesek száma: ${db} db`)
        }
    else{
        alert('Nincs egyes közte.')
        }
}
function legnagyobb_szam(){
    var nagy = Math.max.apply(Math, vel_tomb)
    alert(`A legnagyobb szám: ${nagy}`)
}
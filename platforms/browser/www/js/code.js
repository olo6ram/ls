function ajouter() {
    var produit = document.getElementById('prod').value;
    var qte = document.getElementById('qnt').value;
    localStorage.setItem(produit,qte);
    document.getElementById('prod').value="";
    document.getElementById('qnt').value="";
    liste();
}

function modifier() {
    var produit = document.getElementById('prod').value;
    document.getElementById('qnt').value = localStorage.getItem(produit);
    liste();
}

function supprimer() {
    var produit = document.getElementById('prod').value;
    document.getElementById('qnt').value = localStorage.removeItem(produit);
    liste();
}

function clean() {
    localStorage.clear();
    liste();
}

function liste() {
    var key = "";
    var paires = "<tr><td><b>Produit</b></td><td><b>Quantité</b></td></tr><br>";
    for(var cpt=0; cpt<localStorage.length;cpt++){
        key = localStorage.key(cpt);
        paires+="<tr><td>"+key+"</td><td>"+localStorage.getItem(key)+"</td></tr><br>";
    }
    if (paires=="<tr><td><b>Produit</b></td><td><b>Quantité</b></td></tr><br>") {
        paires+="<tr><td>VIDE</td><td>VIDE</td></tr><br>"
    }
    document.getElementById('paires').innerHTML = paires;
}

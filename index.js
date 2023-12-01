let elos = ["Ferro","Bronze","Prata","Ouro","Platina","Ascendente","Imortal","Radiante"]
let heroi = {
    xp:10.001,
    elo:""
}
    if(heroi.xp >= 10.000){
        heroi.elo="Radiante"
    }
    if(heroi.xp < 10.001){
        heroi.elo="imortal"
    }
    if(heroi.xp < 9.001){
        heroi.elo="Ascendente"
    }
    if(heroi.xp < 8.001){
        heroi.elo="Platina"
    }
    if(heroi.xp < 7.001){
        heroi.elo="Ouro"
    }
    if(heroi.xp < 5.001){
        heroi.elo="Prata"
    }
    if(heroi.xp < 2.001){
        heroi.elo="Bronze"
    }
    if(heroi.xp < 1.001){
        heroi.elo="Ferro"
    }
console.log(heroi.elo)
let elos = {Ferro:"Ferro",Bronze:"Bronze",Prata:"Prata",Ouro:"Ouro",Platina:"Platina",Ascendente:"Ascendente",Imortal:"Imortal",Radiante:"Radiante"}
let heroi = {
    xp:10.001,
    elo:""
}
    if(heroi.xp >= 10.000){
        heroi.elo=elos.Radiante
    }
    if(heroi.xp < 10.001){
        heroi.elo=elos.Imortal
    }
    if(heroi.xp < 9.001){
        heroi.elo=elos.Ascendente
    }
    if(heroi.xp < 8.001){
        heroi.elo=elos.Platina
    }
    if(heroi.xp < 7.001){
        heroi.elo=elos.Ouro
    }
    if(heroi.xp < 5.001){
        heroi.elo=elos.Prata
    }
    if(heroi.xp < 2.001){
        heroi.elo=elos.Bronze
    }
    if(heroi.xp < 1.001){
        heroi.elo=elos.Ferro
    }
console.log(heroi.elo)
class Mesa{
    
    constructor(){
        this.bancoDeDados()
        this.em_mesa = {jogador1: [], jogador2:[]}
        this.caveiras = {jogador1: 0, jogador2: 0}
        
       
    }
    bancoDeDados(){
        this.cartas_base = [
            {card_name:"Uma Caveira",card_id:0, card_cv_at:1, card_cv_bs:1, card_img:"", },
            {card_name:"Duas Caveiras",card_id:1, card_cv_at:2, card_cv_bs:2, card_img:"", },
            {card_name:"Três Caveiras",card_id:2, card_cv_at:3, card_cv_bs:3, card_img:"", },
            {card_name:"Quatro Caveiras",card_id:3, card_cv_at:4, card_cv_bs:4, card_img:"", },
            {card_name:"Cinco Caveiras",card_id:4, card_cv_at:5, card_cv_bs:5, card_img:"", },
        ]
    }
    adicionarCartaNaMesa(jogador,card_id){
        if(jogador == 1){
            this.em_mesa.jogador1.push(this.cartas_base[card_id])
        }else if(jogador == 2){
            this.em_mesa.jogador2.push(this.cartas_base[card_id])
        }

    }
    atualizarValores(){
        
        this.caveiras.jogador1 = 0
        for (let x in this.em_mesa.jogador1){
            this.caveiras.jogador1 += this.em_mesa.jogador1[x].card_cv_at
        }

        this.caveiras.jogador2 = 0
        for (let x in this.em_mesa.jogador2){
            this.caveiras.jogador2 += this.em_mesa.jogador2[x].card_cv_at
        }
    }
}
let mesa = new Mesa()

mesa.adicionarCartaNaMesa(1, 2)
mesa.adicionarCartaNaMesa(1, 2)

mesa.adicionarCartaNaMesa(2, 3)
mesa.adicionarCartaNaMesa(2, 1)

console.log(mesa.em_mesa.jogador1)
mesa.atualizarValores()
console.log(mesa.caveiras)
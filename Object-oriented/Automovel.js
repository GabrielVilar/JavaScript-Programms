class Automovel{
    
    constructor(){
        this.placa = '';
        this.modelo = '';
        this.disp = false;
        this.km = 0;
    }

    cadastra(){
        
        console.log("Sistema de locação de veículos")
        
        const readlineSync = require('readline-sync');

        this.placa = readlineSync.question('Digite a placa do veículo: ');
        this.modelo = readlineSync.question('Digite o modelo do veículo: ');
        this.km = parseInt(readlineSync.question('Digite a quilometragem atual do carro: '));

        this.disp = readlineSync.keyInYN("\n veículo se encontra disponível para locação? "
        + "\ncaso esteja digite 'Y' caso Não digite 'N' ");
    }

    mostrar(){
        const formatter = new Intl.NumberFormat('pt-BR');

        console.log("\nINFORMAÇÕES DA LOCAÇÃO");
        console.log("\nDados cadastrais do veículo");
        console.log("Placa: " + this.placa + "     Modelo: " + this.modelo);
        console.log("Quilometragem: " + formatter.format(this.km) + " Km");
          
        if(this.disp){
            console.log("Disponivel para locacao? : SIM");
        }else{
            console.log("Disponivel para locacao? : NAO\n");
        }
    }
}
const aut = new Automovel();
aut.cadastra();
aut.mostrar();
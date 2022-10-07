import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World ';
  }
  getBSM(): string{
    return 'Orientação ao futuro,<br> Responsabilidade Pessoal,<br> Mentalidade de Crescimento,<br> Persistência,' 
    +'Trabalho em Equipe, <br>Atenção aos detalhes, <br>Proatividade,<br> Comunicação';
  }
  getObjetivos(): string{
    return 'Meu objtivo é aprender bem banco de dadoss';
  }
}

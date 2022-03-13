import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss']
})
export class ProdutosComponent implements OnInit {
  viagem = 'são paulo';
  status = 'disponivel';
  produtos = [
    {
      nome:'Cabelo',
      imagem:'../../assets/img/cabelo.jpg',
      descricao:'Na tesoura ou máquina, como o cliente preferir',
      preco:'R$18,00',
    },
    {
      nome:'Barba',
      imagem:'../../assets/img/barba.jpg',
      descricao:'Corte e desenhpo profissional de barba',
      preco:'R$25,00',
    },
    {
      nome:'Cabelo + Barba',
      imagem:'../../assets/img/cabelo+barba.jpg',
      descricao:'Pacote completo de cabelo e barba',
      preco:'R$35,00',
    }
  ]
  constructor() { }

  ngOnInit(): void {

  }

}

import { Injectable } from '@angular/core';
import { Product } from '../../models/product.model';




@Injectable({
  providedIn: 'root'
})
export class ProductsService {  
  
  products: Array<Product> = [
    {
      id: 1,
      name: 'Coca-Cola',
      Value: 5.99,
      quantity: 500,
      inclusionDate: '2021-07-24',
      Validity: '2022-04-12',
      completed: true,
      description:'Refrigerante de cola, 350ml',
      img:"https://d3pt1seq4txask.cloudfront.net/Custom/Content/Products/01/01/0101_refrigerante-coca-cola-lata-350ml-14_m6_637417305699974110.jpg"
      },
      {
      id: 2,
      name: 'Guaraná',
      Value: 5.99,
      quantity: 300,
      inclusionDate: '2021-03-10',
      Validity: '2022-04-12',
      completed: false,
      description:'Refrigerante de guaraná, 350ml ',
      img:"https://static.paodeacucar.com/img/uploads/1/477/19514477.jpg"
      },
      {
      id: 3,
      name: 'Sabonete Dove',
      Value: 1.99,
      quantity: 1000,
      inclusionDate: '2021-07-21',
      Validity: '2021-12-22',
      completed: true,
      description:'Sabonete de beleza, creme hidratante, contendo leite de coco, 90g',
      img:"https://casafiesta.fbitsstatic.net/img/p/sabonete-dove-leite-de-coco-90g-75083/240852.jpg?w=420&h=420&v=no-change&qs=ignore"
      },
      {
      id: 4,
      name: 'Sabonete Dove',
      Value: 1.99,
      quantity: 1000,
      inclusionDate: '2021-07-21',
      Validity: '2021-12-22',
      completed: false,
      description:'Sabonete de beleza antibacteriano, creme hidratante ,90g',
      img:"https://www.bistek.com.br/media/catalog/product/cache/15b2f1f06e1cd470c80b1f3fd7ec8301/1/9/1985140.jpg"
      },
      {
      id: 5,
      name: 'Picanha maturada',
      Value: 49.99,
      quantity: 100,
      inclusionDate: '2021-07-24',
      Validity: '2021-09-24',
      completed: false,
      description:'Carne resfriada de bovino sem osso da Maturatta Friboy ',
      img:"https://io.convertiez.com.br/m/superpaguemenos/shop/products/images/14566/medium/picanha-bovina-maturatta-peca-resfriada-kg_10786.jpg"
      },
      {
      id: 6,
      name: 'Carne Patinho',
      Value: 39.99,
      quantity: 50,
      inclusionDate: '2021-07-24',
      Validity: '2021-09-24',
      completed: true,
      description:'Carne resfriada , parte traseira do boi. Corte magro e com pouca gordura ',
      img:"https://cdn.lojazmart.com/media/catalog/product/cache/1/image/650x/040ec09b1e35df139433887a97daa66f/i/m/images_3__3.jpeg"
      },
      {
      id: 7,
      name: 'Skol',
      Value: 3.99,
      quantity: 5000,
      inclusionDate: '2021-03-06',
      Validity: '2022-01-04',
      completed: false,
      description:'Cerveja Skol tipo Pilsen ',
      img:"https://cf.shopee.com.br/file/6452d3a0ea72749eb8820b034648c1bb"
      },
      {
      id: 8,
      name: 'Brahma',
      Value: 3.89,
      quantity: 5000,
      inclusionDate: '2021-03-06',
      Validity: '2022-01-04',
      completed: true,
      description:'Cerveja Brahma tipo Pilsen',
      img:"https://static.paodeacucar.com/img/uploads/1/263/14304263.jpeg"
      },
      {
      id: 9,
      name: 'Detergente',
      Value: 9.99,
      quantity: 500,
      inclusionDate: '2021-07-24',
      Validity: '2022-07-24',
      completed: true,
      description:'Detergente neutro YPÊ',
      img:"https://http2.mlstatic.com/D_NQ_NP_688259-MLB41976230515_052020-O.jpg"
      },
      {
      id: 10,
      name: 'Bucha de lavar louça',
      Value: 6.99,
      quantity: 10000,
      inclusionDate: '2021-10-20',
      Validity: '2022-10-20',
      completed: false,
      description:'8 Esponjas Multiuso (ESFRE BOM)',
      img:"data:image/jpeg;base64,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"
      },
   ]
 
  constructor() { }
  


  getProducts(){
    return this.products;
  }

  getProductById(id: number) {
    return this.products.find((product) => product.id === id);
  }

  getProductByName(name: string) {
    return this.products.find((product) => product.name === name);
  }

  getProductsByFilterName(name: string) {
    return this.products.filter(
      (product) => product.name.toLocaleUpperCase().search(name.toLocaleUpperCase()) > -1);
  }

  getProductsByFilterId(id: number) {
    const product = this.getProductById(Number(id));
    if(!product) {
      return [];
    }
    return [product];
  }
  

  generateNextId(): number {
    return this.products[(this.products.length - 1)].id + 1;
  }

}

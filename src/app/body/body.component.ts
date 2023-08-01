import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
})
export class BodyComponent implements OnInit {
  categorias: any = [
    { codigo: 0, texto: 'Todos' },
    { codigo: 1, texto: 'Politica' },
    { codigo: 2, texto: 'Educacion' },
    { codigo: 3, texto: 'Seguridad' },
  ];

  temporal: any;

  noticias: any = [
    {
      categoria: { codigo: 1, texto: 'politíca' },
      titulo:
        'Se entiende por imagen la representación visual de algo o alguien, es decir, una figura o ilustración que se asemeja a algo, que refleja la apariencia de algo, ya sea real o imaginario, concreto o abstracto.',
      texto:
        'Las imágenes digitales son fotos electrónicas tomadas de una escena o escaneadas de documentos, fotografías, manuscritos, textos impresos e ilustraciones. Se realiza una muestra de la imagen digital y se confecciona un mapa de ella en forma de cuadrícula de puntos o elementos de la figura (píxeles).',
      imagen:
        'https://img.freepik.com/fotos-premium/ilustracion-galaxia-estrellas-polvo-espacial-universo_564714-240.jpg',
    },
    {
      categoria: { codigo: 1, texto: 'politíca' },
      titulo:
        'Se entiende por imagen la representación visual de algo o alguien, es decir, una figura o ilustración que se asemeja a algo, que refleja la apariencia de algo, ya sea real o imaginario, concreto o abstracto.',
      texto:
        'Las imágenes digitales son fotos electrónicas tomadas de una escena o escaneadas de documentos, fotografías, manuscritos, textos impresos e ilustraciones. Se realiza una muestra de la imagen digital y se confecciona un mapa de ella en forma de cuadrícula de puntos o elementos de la figura (píxeles).',
      imagen:
        'https://img.freepik.com/fotos-premium/ilustracion-galaxia-estrellas-polvo-espacial-universo_564714-240.jpg',
    },
    {
      categoria: { codigo: 2, texto: 'politíca' },
      titulo:
        'Se entiende por imagen la representación visual de algo o alguien, es decir, una figura o ilustración que se asemeja a algo, que refleja la apariencia de algo, ya sea real o imaginario, concreto o abstracto.',
      texto:
        'Las imágenes digitales son fotos electrónicas tomadas de una escena o escaneadas de documentos, fotografías, manuscritos, textos impresos e ilustraciones. Se realiza una muestra de la imagen digital y se confecciona un mapa de ella en forma de cuadrícula de puntos o elementos de la figura (píxeles).',
      imagen:
        'https://img.freepik.com/fotos-premium/ilustracion-galaxia-estrellas-polvo-espacial-universo_564714-240.jpg',
    },
    {
      categoria: { codigo: 3, texto: 'politíca' },
      titulo:
        'a Se entiende por imagen la representación visual de algo o alguien, es decir, una figura o ilustración que se asemeja a algo, que refleja la apariencia de algo, ya sea real o imaginario, concreto o abstracto.',
      texto:
        'Las imágenes digitales son fotos electrónicas tomadas de una escena o escaneadas de documentos, fotografías, manuscritos, textos impresos e ilustraciones. Se realiza una muestra de la imagen digital y se confecciona un mapa de ella en forma de cuadrícula de puntos o elementos de la figura (píxeles).',
      imagen:
        'https://img.freepik.com/fotos-premium/ilustracion-galaxia-estrellas-polvo-espacial-universo_564714-240.jpg',
    }
  ];

  constructor() {
    this.temporal = this.noticias
  }

  ngOnInit(): void {}

  eventoControl(evento:any) {
    if (evento.target.value == 0){
      this.noticias = this.temporal
    } else {
      this.noticias = this.temporal.filter((item:any)=> {
       return item.categoria.codigo == evento.target.value;
      })
    }
  }
}

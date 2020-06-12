import { SearchComponent } from './../search/search/search.component';
import { ShareVpostComponent } from './../v-post/share-vpost/share-vpost.component';
import { SectionStartComponent } from './section-start/section-start.component';
import { AdPurchaseComponent } from './../store/ad-purchase/ad-purchase.component';
import { TalesComponent } from './../tales/tales/tales.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TextComponent } from './text/text.component';
import { GalleryListComponent } from './gallery-list/gallery-list.component';

const routes: Routes = [
  {
    path: 'gallery/:id/:sonLevel/:section',
    component: GalleryListComponent
  },
  {
    path: 'gallery/:id/:sonLevel/:section/:foldername',
    component: GalleryListComponent
  },
  {
    path: 'text/:id/:sonLevel/:section',
    data: {
      title: '',
      breadcrumb: [
        {
          label: 'Inicio',
          url: 'collection/1'
        },
        {
          label: '',
          url: ''
        },
        {
          label: '',
          url: ''
        }
      ]
    },
    component: TextComponent
  },
  {
    path: 'tale/:id/:nombre',
    data: {
      title: 'Estampa',
      breadcrumb: [
        {
          label: 'Estampa: {{nombre}}',
          url: 'tale/:id'
        }
      ]
    },
    component: TalesComponent
  },
  {
    path: 'share-vpost/:id/:sonLevel/:foldername/:section',
    data: {
      title: 'Postal',
      breadcrumb: [
        {
          label:'Inicio',
          url:'collection/1'
        },
        {
          label: 'Postal {{id}} de {{foldername}}',
          url: ''
        }
      ]
    },
    component: ShareVpostComponent
  },
  {
    path: 'store/:id/:foldername/:section',
    data: {
      title: 'Articulo',
      breadcrumb: [
        {
          label: 'Articulo {{id}} de {{foldername}}',
          url: 'store/:id/:foldername/:section'
        }
      ]
    },
    component: AdPurchaseComponent
  },

  {
    path: 'section-start',
    data: {
      title: 'Inicio',
      breadcrumb: [
        {
          label: 'Inicio',
          url: ''
        }
      ]
    },
    component: SectionStartComponent
  },

  {
    path: 'samples/:id',
    data: {
      title: 'Muestras',
      breadcrumb: [
        {
          label: 'Inicio',
          url: 'collection/1'
        }
      ]
    },
    component: SectionStartComponent
  },

  {
    path: 'tales/:id',
    data: {
      title: 'Estampas',
      breadcrumb: [
        {
          label: 'Inicio',
          url: 'collection/1'
        },
        {
          label: 'Estampas',
          url: ''
        }
      ]
    },
    component: SectionStartComponent
  },

  {
    path: 'vpost/:id',
    data: {
      title: 'V-Post',
      breadcrumb: [
        {
          label: 'Inicio',
          url: 'collection/1'
        },
        {
          label: 'V-Post',
          url: ''
        }
      ]
    },
    component: SectionStartComponent
  },
  {
    path: 'collection/:id',
    data: {
      title: 'Inicio',
      breadcrumb: [
        {
          label: 'Inicio',
          url: ''
        }
      ]
    },
    component: SectionStartComponent
  },

  {
    path: 'store/:id',
    data: {
      title: 'Tienda',
      breadcrumb: [
        {
          label: 'Inicio',
          url: 'collection/1'
        },
        {
          label: 'Tienda',
          url: ''
        }
      ]
    },
    component: SectionStartComponent
  },
  {
    path: 'search/:query',
    data: {
      title: 'Busqueda'
    },
    component: SearchComponent
  },
  {
    path: '**',
    data: {
      title: 'Inicio',
      breadcrumb: [
        {
          label: 'Inicio',
          url: ''
        }
      ]
    },
    component: SectionStartComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GenericRoutingModule { }

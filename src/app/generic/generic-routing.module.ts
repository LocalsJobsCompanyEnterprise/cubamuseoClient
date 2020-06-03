import { ShareVpostComponent } from './../v-post/share-vpost/share-vpost.component';
import { ZoomComponent } from './zoom/zoom.component';
import { SectionStartComponent } from './section-start/section-start.component';
import { AdPurchaseComponent } from './../store/ad-purchase/ad-purchase.component';
import { TalesComponent } from './../tales/tales/tales.component';
import { SamplesGalleryComponent } from './../samples/samples-gallery/samples-gallery.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TextComponent } from './text/text.component';
import { CategoryComponent } from './category/category.component';
import { ItemComponent } from './item/item.component';
import { GalleryListComponent } from './gallery-list/gallery-list.component';

const routes: Routes = [
  {
    path: 'gallery/:id/:sonLevel/:section',
    data: {
      title: 'gallery',
      breadcrumb: [
        {
          label: 'Galeria {{section, id}} ',
          url: 'gallery/:id/:sonLevel/:section'
        }
      ]
    },
    component: GalleryListComponent
  },
  {
    path: 'gallery/:id/:sonLevel/:section/:foldername',
    data: {
      title: 'gallery',
      breadcrumb: [
        {
          label: 'Galeria {{section, id}} ',
          url: 'gallery/:id/:sonLevel/:section'
        }
      ]
    },
    component: GalleryListComponent
  },
  {
    path: 'samples-gallery/:id',
    data: {
      title: 'Galeria Estampas',
      breadcrumb: [
        {
          label: 'Galeria estampas {{id}}',
          url: 'samples-gallery/:id'
        }
      ]

    },
    component: SamplesGalleryComponent
  },

  { path: 'zoom/:id', component: ZoomComponent },
  { path: 'item/:id/:section', component: ItemComponent },

  {
    path: 'text/:id/:sonLevel/:section',
    data: {
      title: 'Text',
      breadcrumb: [
        {
          label: '{{section,id}}',
          url: 'text/:id/:sonLevel/:section'

        }
      ]
    },
    component: TextComponent
  },

  {
    path: 'tale/:id',
    data: {
      title: 'Estampa',
      breadcrumb: [
        {
          label: 'Estampa {{id}}',
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
          label: 'Postal {{id}}',
          url: 'share-vpost/:id/:sonLevel/:foldername/:section'
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
          label: 'Articulo {{id}}',
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
          label: 'Inicio ',
          url: 'section-start'
        }
      ]
    },
    component: SectionStartComponent
  },

  {
    path: 'samples/:id',
    data: {
      title: 'Inicio',
      breadcrumb: [
        {
          label: 'Muestras',
          url: 'samples/:id'
        }
      ]
    },
    component: SectionStartComponent
  },

  {
    path: 'tales/:id',
    data: {
      title: 'Inicio',
      breadcrumb: [
        {
          label: 'Estampas',
          url: 'tales/:id'
        }
      ]
    },
    component: SectionStartComponent
  },

  {
    path: 'vpost/:id',
    data: {
      title: 'Inicio',
      breadcrumb: [
        {
          label: 'V-Post',
          url: 'vpost/:id'
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
          label: 'Colecciones',
          url: 'collection/:id'
        }
      ]
    },
    component: SectionStartComponent
  },

  {
    path: 'store/:id',
    data: {
      title: 'Inicio',
      breadcrumb: [
        {
          label: 'Tienda',
          url: 'store/:id'
        }
      ]
    },
    component: SectionStartComponent
  },

  {
    path: '**',
    data: {
      title: 'Inicio',
      breadcrumb: [
        {
          label: 'Colecciones',
          url: 'collection/:id'
        }
      ]
    },
    component: SectionStartComponent
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GenericRoutingModule { }

import './scss/index.scss'

import {Router} from './core/route/Router'

import {HomePage} from './pages/HomePage'
import {AboutPage} from './pages/AboutPage'
import {BlogPage} from './pages/BlogPage'
import {ContactsPage} from './pages/ContactsPage'
import {StorePage} from './pages/StorePage'
import {GalleryPage} from './pages/GalleryPage'
import {NotFound} from './pages/NotFound'

fetch('server/data.json')
    .then(res => res.json())
    .then(data => {
      console.log('index', data);
      new Router('#app', data, {
        home: HomePage,
        about: AboutPage,
        blog: BlogPage,
        contacts: ContactsPage,
        store: StorePage,
        gallery: GalleryPage,
        notFound: NotFound
      })
    })



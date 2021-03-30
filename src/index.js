// import {Header} from '@/components/header/Header'
// import {Promo} from '@/components/promo/Promo'
// import {Tiles} from '@/components/tiles/Tiles'
// import {Bestsellers} from '@/components/bestsellers/Bestsellers'
// import {GetCard} from '@/components/getcard/GetCard'
// import {Posts} from '@/components/posts/Posts'
// import {Footer} from '@/components/footer/Footer'

// import {Home} from '@/components/home/Home'
import {Router} from './core/route/Router'
import {HomePage} from './/pages/HomePage'
import {AboutPage} from './/pages/AboutPage'
import './scss/index.scss'
import {BlogPage} from './/pages/BlogPage'


new Router('#app', {
  home: HomePage,
  about: AboutPage,
  blog: BlogPage,
})

// const app = new Home('#app', {
//   components: [Header, Promo, Tiles, Bestsellers, GetCard, Posts, Footer]
// })

// // console.log(app)

// app.render()

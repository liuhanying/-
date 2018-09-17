import Vue from 'vue'
import Router from 'vue-router'
import HomeBar from '@/components/homeBar/HomeBar'
import MillionMenus from '@/components/millionMenus/MillionMenus'

import HomelyRecipes from '@/components/millionMenus/homelyRecipes/HomelyRecipes'
import LeftNav1 from '@/components/millionMenus/homelyRecipes/leftNav1/LeftNav1'
import LeftNav2 from '@/components/millionMenus/homelyRecipes/leftNav2/LeftNav2'

import ChineseFood from '@/components/millionMenus/ChineseFood/ChineseFood'
import Cf_leftNav1 from '@/components/millionMenus/ChineseFood/cf_leftNav1/Cf_leftNav1'
import Cf_leftNav2 from '@/components/millionMenus/ChineseFood/cf_leftNav2/Cf_leftNav2'

import HealthyDiet from '@/components/healthyDiet/HealthyDiet'
import Health from '@/components/healthyDiet/health/Health'
import People from '@/components/healthyDiet/people/People'

import FoodMenu from '@/components/foodMenu/FoodMenu'

import HomeGallery from '@/components/homeGallery/HomeGallery'

import FoodMania from '@/components/foodMania/FoodMania'

import DiscussionGroup from '@/components/discussionGroup/DiscussionGroup'

import PhonesDownload from '@/components/phonesDownload/PhonesDownload'





Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomeBar',
      component: HomeBar,
      // redirect:'/millionMenus/homelyRecipes/leftNav1'
    },
    {
      path: '/millionMenus',
      name: 'MillionMenus',
      component: MillionMenus,
      redirect: '/millionMenus/homelyRecipes/leftNav1',

      children: [
        {
          path: 'homelyRecipes',
          name: 'HomelyRecipes',
          component: HomelyRecipes,
          redirect: '/millionMenus/homelyRecipes/leftNav1',

          children: [
            {
              path: 'leftNav1',
              name: 'LeftNav1',
              component: LeftNav1,
            },
            {
              path: 'leftNav2',
              name: 'LeftNav2',
              component: LeftNav2,
            }
          ]
        },
        {
          path: 'ChineseFood',
          name: 'ChineseFood',
          component: ChineseFood,
          redirect: '/millionMenus/ChineseFood/cf_leftNav1',

          children: [
            {
              path: 'cf_leftNav1',
              name: 'Cf_leftNav1',
              component: Cf_leftNav1,
            },
            {
              path: 'cf_leftNav2',
              name: 'Cf_leftNav2',
              component: Cf_leftNav2,
            }
          ]
        }
      ]
    },
    {
      path: '/healthyDiet',
      name: 'HealthyDiet',
      component: HealthyDiet,
      redirect: "/healthyDiet/health",

      children: [
        {
          path: 'health',
          name: 'Health',
          component: Health,
        },
        {
          path: 'people',
          name: 'People',
          component: People,
        }
      ]

    },
    {
      path: '/foodMenu',
      name: 'FoodMenu',
      component: FoodMenu
    },
    {
      path: '/homeGallery',
      name: 'HomeGallery',
      component: HomeGallery
    },
    {
      path: '/foodMania',
      name: 'FoodMania',
      component: FoodMania
    },
    {
      path: '/discussionGroup',
      name: 'DiscussionGroup',
      component: DiscussionGroup
    },
    {
      path: '/phonesDownload',
      name: 'PhonesDownload',
      component: PhonesDownload
    }
  ]
})

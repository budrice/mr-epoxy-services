import background_1 from '@/assets/images/backgrounds/epoxy_coating_2.jpg'
import background_2 from '@/assets/images/backgrounds/epoxy_coating_1.jpg'
import background_3 from '@/assets/images/backgrounds/restaurant_1.jpg'
import background_4 from '@/assets/images/backgrounds/mm1.jpg'
import background_5 from '@/assets/images/backgrounds/scrape.jpg'

import article_bg_png from '@/assets/images/paisley2.png'
const dark = '60, 50, 40'
const light = '0, 255, 180'
const store = {
   state: {
      captionbox: {
         style: {
            backgroundColor: `rgba(${dark}, 0.8)`,
            color: `rgb(${light})`
         }
      },
      article: {
         style: {
            color: `rgb(${light})`,
            backgroundImage: `url(${article_bg_png})`,
            backgroundColor: `rgb(${dark})`,
            borderTop: `10px solid rgb(${dark})`,
            borderBottom: `10px solid rgb(${dark})`
         }
      },
      home: {
         style: {
            backgroundImage: `url(${background_1})`,
            padding: '11vh 35px'
         },
         logo: 'mr-epoxy.png',
         intro: ['Epoxy Coatings', 'Diamond Polishing', 'Concrete Surface Preparation', '~ est 1986 ~']
      },
      navcards: [
         {
            id: 1,
            title: 'Epoxy Coatings',
            description: 'Mr. Epoxy\'s installation team is the best in the business with the experience and technical knowledge of epoxys that we supply.',
            imageName: 'cards/pool1.jpg',
            href: '#epoxy_coatings'
         },
         {
            id: 2,
            title: 'Concrete Diamond Polishing',
            description: 'Our crews are masters at their trade and are provided the best tools and materials.',
            imageName: 'cards/polish1.jpg',
            href: '#diamond_polish'
         },
         {
            id: 3,
            title: 'Moisture Mitigation',
            description: 'Mr. Epoxy LLC. technologically-advanced moisture mitigation epoxy is the most effective concrete moisture blocker for concrete',
            imageName: 'cards/m-m1.jpg',
            href: '#moisture'
         },
         {
            id: 4,
            title: 'Concrete Surface Preparation',
            description: 'Shotblasting * Grinding * Scraping * Self Leveling * Expansion Joint Fill * Crack Supression/Repair',
            imageName: 'cards/shot1.jpg',
            href: '#preparation'
         }
      ],
      sections: [
         {
            style: {
               backgroundImage: `url(${background_2})`,
               padding: '100px 35px 35px'
            },
            title: 'Epoxy Coatings',
            id: 'epoxy_coatings',
            galleries: [
               {
                  btn: 'pool_btn',
                  title: 'Pool',
                  gallery: [
                     {
                        key: 1,
                        filename: 'pool_1.jpg',
                        alt: 'pool 1'
                     },
                     {
                        key: 2,
                        filename: 'pool_2.jpg',
                        alt: 'pool 2'
                     },
                     {
                        key: 3,
                        filename: 'pool_3.jpg',
                        alt: 'pool 3'
                     },
                     {
                        key: 4,
                        filename: 'pool_4.jpg',
                        alt: 'pool 4'
                     },
                     {
                        key: 5,
                        filename: 'pool_5.jpg',
                        alt: 'pool 5'
                     },
                     {
                        key: 6,
                        filename: 'pool_6.jpg',
                        alt: 'pool 6'
                     },
                     {
                        key: 7,
                        filename: 'pool_7.jpg',
                        alt: 'pool 7'
                     }
                  ],
               },
               {
                  btn: 'locker_room_btn',
                  title: 'Locker Room',
                  gallery: [
                     {
                        key: 1,
                        filename: 'locker_room_1.jpg',
                        alt: 'locker room epoxy coating 1'
                     },
                     {
                        key: 2,
                        filename: 'locker_room_2.jpg',
                        alt: 'locker room epoxy coating 2'
                     },
                     {
                        key: 3,
                        filename: 'locker_room_3.jpg',
                        alt: 'locker room epoxy coating 3'
                     },
                     {
                        key: 4,
                        filename: 'locker_room_4.jpg',
                        alt: 'locker room epoxy coating 4'
                     },
                     {
                        key: 5,
                        filename: 'locker_room_5.jpg',
                        alt: 'locker room epoxy coating 5'
                     },
                     {
                        key: 6,
                        filename: 'locker_room_6.jpg',
                        alt: 'locker room epoxy coating 6'
                     }
                  ],
               },
               {
                  btn: 'basketball_court_btn',
                  title: 'Basketball Court',
                  gallery: [
                     {
                        key: 1,
                        filename: 'basketball_1.jpg',
                        alt: 'basketball court 1'
                     },
                     {
                        key: 2,
                        filename: 'basketball_2.jpg',
                        alt: 'basketball court 2'
                     },
                     {
                        key: 3,
                        filename: 'basketball_3.jpg',
                        alt: 'basketball court 3'
                     },
                     {
                        key: 4,
                        filename: 'basketball_4.jpg',
                        alt: 'basketball court 4'
                     }
                  ]
               }
            ],
            text: {
               header: 'Epoxy Coatings',
               content: [
                  {
                     paragraph: 'Mr. Epoxy LLC specializes in epoxy flooring installations. Our experts are skilled in epoxy coatings, and they have the proper skills with over 35 years in the business, to turn any floor into a great looking, durable, strong epoxy floor.'
                  },
                  {
                     paragraph: 'Epoxy coatings are extremely strong, durable and easy to maintain. Traditionally, epoxy floors are installed in garages, warehouses, and beautiful for pools and decks. Epoxy\'s high durability also makes it one of the best to handle heavy machinery and oil spills.'
                  },
                  {
                     paragraph: 'Epoxy is a system that is made up of two different components that need to be mixed together at the perfect ratio before installations to ensure the floor is successfully bonded. When these two components are mixed together, they chemically react to form a ridged clear material that is strong and resistant to degradation.'
                  },
                  {
                     paragraph: 'Mr. Epoxy LLC warehouse epoxy flooring is a surface that is made up of multiple layers of epoxy that is applied to the floor to a depth of two millimeters. The thickness and component make up of the resin and hardener, differentiates an actual epoxy floor from just an epoxy coating.'
                  },
                  {
                     paragraph: 'While all epoxy is applied to your existing concrete slab, a thin coat can be added just for appearances sakes, or an entire depth can be added to stabilize the flooring. Epoxy Floor is available in a wide range of colors, textures and finishes. This can make epoxy coating the right choice in applications for appearance, durability and chemical resistance.'
                  },
                  {
                     paragraph: 'Mr. Epoxy LLC has years of experience in the installations of epoxy flooring in commercial facilities which include hospitals, chemical laboratories, parking garages, retail stores, shopping centers, stadiums, treatment plants and more.'
                  }
               ]
            }
         },
         {
            style: {
               backgroundImage: `url(${background_3})`,
               padding: '100px 35px 35px'
            },
            title: 'Concrete Diamond Polish',
            id: 'diamond_polish',
            galleries: [
               {
                  btn: 'restaurant_btn',
                  title: 'Restaurant Polish',
                  gallery: [
                     {
                        key: 1,
                        filename: 'restaurant_1.jpg',
                        alt: 'restaurant concrete polish 1'
                     }
                  ]
               },
               {
                  btn: 'bigbox_btn',
                  title: 'Bigbox Polish',
                  gallery: [
                     {
                        key: 1,
                        filename: 'bigbox_1.jpg',
                        alt: 'bigbox concrete polish 1'
                     }
                  ]
               },
               {
                  btn: 'warehouse_btn',
                  title: 'Warehouse Polish',
                  gallery: [
                     {
                        key: 1,
                        filename: 'warehouse_1.jpg',
                        alt: 'warehouse concrete polish 1'
                     }
                  ]
               }
            ],
            text: {
               header: 'Concrete Diamond Polish',
               content: [
                  {
                     paragraph: 'Concretes rock hard strength combined with the sparkling brilliance and easy maintenance of diamond polishing, has made polished concrete, the #1 flooring choice. Simply put, polishing concrete is similar to sanding wood. Heavy-duty polishing machines equipped with progressively finer grits of diamond-impregnated segments or disks (akin to sandpaper) are used to gradually grind down surfaces to the desired degree of shine and smoothness.'
                  },
                  {
                     paragraph: 'Mr. Epoxy LLC. Polished concrete is  performed by using the very best materials to densify the concrete assuring that the concrete polish will perform  for a maximum number of years with low maintenance. '
                  },
                  {
                     paragraph: 'The process begins with the use of coarse diamond segments bonded in a metallic matrix. These segments are coarse enough to remove minor pits, blemishes, stains, or light coatings from the floor in preparation for final smoothing. Depending on the condition of the concrete, this initial rough grinding is generally a three- to four-step process. With this process we give the floor a smooth profiile.'
                  },
                  {
                     paragraph: 'The next steps involve fine grinding of the concrete surface using diamond abrasives embedded in a plastic or resin matrix. Crews use ever-finger grits of polishing disks (a process called “lapping”) until the floor has the desired sheen. For an extremely high-gloss finish, a final grit of 1500 or finer may be used. Experienced polishing crews know when to switch to the next grit by observing the floor surface and the amount of material being removed.'
                  },
                  {
                     paragraph: 'With over 25 years in the floor care industry, Diamond Polishing Systems knows what it takes to make customers happy. Knowing the limitations of conventional floor care systems made the decision easy for us to feature concrete polishing along with our current line of services'
                  },
                  {
                     paragraph: 'Polished concrete is without a doubt becoming the present and is certainly the future of industrial, commercial, and residential flooring. Incredible gratification comes from producing beautiful long lasting, maintenance free floors that are also very environ- mentally friendly.'
                  }
               ]
            }
         },
         {
            style: {
               backgroundImage: `url(${background_4})`,
               padding: '100px 35px 35px'
            },
            title: 'Concrete Moisture Mitigation',
            id: 'moisture',
            galleries: [
               {
                  btn: 'moisture_problem_btn',
                  title: 'Moisture Problem',
                  gallery: [
                     {
                        key: 1,
                        filename: 'moisture_1.jpg',
                        alt: 'extreme moisture mitigation 1'
                     }
                  ]
               },
               {
                  btn: 'sports_court_moisture_btn',
                  title: 'Sports Court Moisture Mitigation',
                  gallery: [
                     {
                        key: 1,
                        filename: 'moisture_2.jpg',
                        alt: 'sports court moisture mitigation 1'
                     }
                  ]
               },
               {
                  btn: 'facility_moisture_btn',
                  title: 'Facility Moisture Mitigation',
                  gallery: [
                     {
                        key: 1,
                        filename: 'moisture_3.jpg',
                        alt: 'facility moisture mitigation 1'
                     }
                  ]
               }
            ],
            text: {
               header: 'Concrete Moisture Mitigation',
               content: [
                  {
                     paragraph: 'Product and installation warranties void from moisture content, contamination, and emission. The moisture levels are to be maintained before, during, and after installation. Mr. Epoxy LLC identifies and corrects the moisture problems early to ensure a successful installation and maximum long-term value.'
                  },
                  {
                     paragraph: 'To start the process requires testing your slab for moisture content and vapor emissions prior to the installation of any covering products. Moisture can cause adhesive failures, promote mold and mildew growth and, in time, result in product delamination or discoloration.'
                  },
                  {
                     paragraph: 'The universally recognized testing methods for moisture are ASTM F1869 for calcium chloride and ASTM F2170 for relative humidity. These tests measure the moisture emitted and contained within the concrete slab. These tests last between 60-72 hours and require the environment to remain at 75°F (± 10°F) with a relative humidity of 50% (± 10%) for 48 hours prior to and during the test.'
                  },
                  {
                     paragraph: 'It\'s essential to have a fully functioning HVAC system in order for the required environmental conditions to be met before, during, and after the test. In addition to testing for moisture, the surface of your concrete must be pH tested for alkaline salts, which can be brought to the surface of the slab by moisture vapor and lead to flooring adhesive failures.'
                  },
                  {
                     paragraph: 'Mr. Epoxy LLC technologically-advanced moisture mitigation system is the most effective concrete moisture blocker for concrete.  Our moisture mitigation system is a specially formulated epoxy that attaches to concrete substrates with a molecular bond so tight that it blocks all vapor emissions bringing the concrete slab into compliance with all floor covering manufacturers criteria of 25 lbs.'
                  }
               ]
            }
         },
         {
            style: {
               backgroundImage: `url(${background_5})`,
               padding: '100px 35px 35px'
            },
            title: 'Concrete Surface Preparation',
            id: 'preparation',
            galleries: [
               {
                  btn: 'self_level_btn',
                  title: 'Self Level Underlayment',
                  gallery: [
                     {
                        key: 1,
                        filename: 'level_1.jpg',
                        alt: 'self level underlayment 1'
                     },
                     {
                        key: 2,
                        filename: 'level_2.jpg',
                        alt: 'self level underlayment 2'
                     },
                     {
                        key: 3,
                        filename: 'level_3.jpg',
                        alt: 'self level underlayment 3'
                     },
                     {
                        key: 4,
                        filename: 'level_4.jpg',
                        alt: 'self level underlayment 4'
                     }
                  ]
               },
               {
                  btn: 'shot_blasting_btn',
                  title: 'Shotblasting',
                  gallery: [
                     {
                        key: 1,
                        filename: 'blast_1.jpg',
                        alt: 'shotblast 1'
                     },
                     {
                        key: 2,
                        filename: 'blast_2.jpg',
                        alt: 'shotblast 2'
                     },
                     {
                        key: 3,
                        filename: 'blast_3.jpg',
                        alt: 'shotblast 3'
                     }
                  ]
               },
               {
                  btn: 'concrete_repair_btn',
                  title: 'Concrete Repair',
                  gallery: [
                     {
                        key: 1,
                        filename: 'crack_1.jpg',
                        alt: 'crack repair 1'
                     }
                  ]
               }
            ],
            text: {
               header: 'Concrete Surface Preparation',
               content: [
                  {
                     paragraph: 'Proper surface preparation of existing concrete is essential for achieving a successful project including resurfacers, polymer-modified or self-leveling overlays, sealers, coatings, or stains. Since there are many products available for overlays and restoration, it is important you know the surface condition requirements for the specific product you plan to use. Taking steps to correctly prepare the existing concrete surface will save you time and money, and can substantially reduce the possibility of coating failure. '
                  },
                  {
                     paragraph: 'Preparing concrete surfaces for coatings, overlays, stains or repair materials is a time-consuming task that many contractors perform begrudgingly or are tempted to overlook altogether. But if you\'ve ever skipped this essential first step in the process, you undoubtedly learned the hard way how critical it is to the success of the job.'
                  },
                  {
                     paragraph: 'Steel Shotblasting is the preferred method of mechanical preparation that cleans and profiles simultaneously. Shot Blasting strips thin coatings, removes contamination and laitance (soft concrete) to reveal a mechanical profile for improved bonding. This method is achieved by blasting a concrete surface with steel shot (small steel balls) at a high velocity. It is suitable for large and small areas. Shot Blasting delivers high production rates, dust free, dry and cost-effective. Excess shot must be swept-up after blasting and dust is recovered by a powerful dust collection system.'
                  },
                  {
                     paragraph: 'Diamond grinding uses diamond bits to grind the concrete surface. This leaves a very smooth profile-ideal for thin film system applications. Low dust levels are maintained with a powerful hepafilter vacuum . Diamond grinding removes epoxies and urethanes slower than other methods like scrape-away and shot blasting but with a smoother profile.'
                  },
                  {
                     paragraph: 'Mr Epoxy LLC has master installers to level any concrete slab back to flat with a combination of heavy diamond grinding, shotblasting and self leveling underlayment. We use the best equipment and products to complete our projects on time.'
                  }
               ]
            }
         }
      ],
      contact: {
         style: {
            backgroundImage: `url(${background_1})`,
            padding: '18vh 35px'
         },
         pic: { filename: 'bike_2.jpg', alt: 'bike on epoxy' },
         company_name: 'Mr Epoxy LLC',
         link: 'mrepoxyweb@gmail.com',
         address: '6800 Pearson Ln',
         city: 'Westley Chapel',
         state: 'FL',
         zip: '33544',
         name: 'Kerry Francum',
         job_title: 'Owner',
         phone: '813 833-9419',
         quote: 'Mr. Epoxy LLC has years of experience in the installations of epoxy flooring in commercial facilities which include hospitals, chemical laboratories, parking garages, retail stores, shopping centers, stadiums, treatment plants and more.'
      }
   }
}
export default store

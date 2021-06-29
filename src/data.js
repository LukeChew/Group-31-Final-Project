const data  = {
    birds: [
        {//1
            id: 1,
            name: "Acadian Flycatcher",
            species: "Empidonax virescens",
            location: "southern Ontario",
            status: "Endangered",
            date: "2008",
            photo: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/301816971/1800"
        },
        {//2
            id: 2,
            name: "Barn Owl",
            species: "Tyto alba",
            location: "southern Ontario",
            status: "Endangered",
            date: "2008",
            photo: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/297342281/1800"
        },
        {//3
            id: 3,
            name: "Golden eagle",
            species: "Aquila chrysaetos",
            location: "Hudson Bay Lowland in Ontario",
            status: "Endangered",
            date: "2008",
            photo: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/305364081/1800"
        },
        {//4
            id: 4,
            name: "Henslow’s sparrow",
            species: "Ammodramus henslowii",
            location: "south of the Canadian Shield",
            status: "Endangered",
            date: "2008",
            photo: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/171447861/1800"
        },
        {//5
            id: 5,
            name: "King rail",
            species: "Rallus elegans",
            location: "large wetlands bordering Lake St. Clair and along Lakes Erie and Ontario",
            status: "Endangered",
            date: "2008",
            photo: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/303143791/1800"
        },
        {//6
            id: 6,
            name: "Kirtland’s warbler",
            species: "Setophaga kirtlandii",
            location: "southwestern Ontario at Canadian Forces Base Petawawa",
            status: "Endangered",
            date: "2008",
            photo: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/297030851/1800"
        },
        {//7
            id: 7,
            name: "Loggerhead shrike",
            species: "Lanius ludovicianus",
            location: "the Carden Plain north of Lindsay, and the Napanee Limestone Plain",
            status: "Endangered",
            date: "2008",
            photo: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/302339191/1800"
        },
        {//8
            id: 8,
            name: "Northern bobwhite",
            species: "Colinus virginianus",
            location: "southwest corner of Ontario, mostly on Walpole Island",
            status: "Endangered",
            date: "2008",
            photo: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/296736411/1800"
        }
    ],
  
    reptiles: [
        {
            id: 1,
            name: "Blanding's Turtle",
            species: "Emydoidea blandingii",
            location: "Great Lakes-St. Lawrence",
            status: "Threatened",
            date: "2008",
            photo: "https://wildlifepreservation.ca/2016/wp-content/uploads/2011/11/Blandings-Turtle-1.jpg"
        },
        {
            id: 2,
            species: "Blue Racer",
            name:"Coluber constrictor foxii",
            location: "Pelee Island, Lake Erie",
            status: "Endangered",
            date: "2008",
            photo: "https://upload.wikimedia.org/wikipedia/commons/b/bb/Coiledblueracersnake.jpg"
        },
        {
            id: 3,
            name: "Thamnophis butleri",
            species: "Butler's Gardensnake",
            location: "Lower Great Lakes region",
            status: "Endangered",
            date: "2008",
            photo: "https://mnfi.anr.msu.edu/element-images/Thamnophis-butleri-5258.jpg"
        },
        {
            id: 4,
            name: "Plestiodon fasciatus",
            species: "Carolinian Common Five-Linked Skink",
            location: "The Carolinian Zone",
            status: "Endangered",
            date: "2009",
            photo: "https://www.wildrepublic.com/wp-content/uploads/2018/11/491248615-five-lined-skink-lizard-2291-xl-600x404.jpg"
        },
        {
            id: 5,
            name: "Plestiodon fasciatus",
            species: "Southern Shield Common Five-Linked Skink",
            location: "The southern margin of the Canadian Shield",
            status: "Special concern",
            date: "2009",
            photo: "https://www.wildrepublic.com/wp-content/uploads/2018/11/491248615-five-lined-skink-lizard-2291-xl-600x404.jpg"
        },
        {
            id: 6,
            name: "errapene Carolina",
            species: "Eastern Box Turtle",
            location: "No longer occur in the wild in Ontario",
            status: "Extirpated",
            date: "2016",
            photo: "https://www.thesprucepets.com/thmb/kk7nj0491V0t93lGMk8L3P3LIXo=/4223x3167/smart/filters:no_upscale()/eastern-box-turtle-1255428637-55fa40a2986c47f3aeabf8badf175820.jpg"
        },
        {
            id: 7,
            name: "Pantherophis gloydi",
            species: "Carolinian Eastern Foxsnake",
            location: "Southwestern Ontario",
            status: "Endangered",
            date: "2009",
            photo: "https://wildlifepreservation.ca/2016/wp-content/uploads/2016/07/eastern-foxsnake-3.jpg"
        },
        {
            id: 8,
            name: "Pantherophis gloydi",
            species: "Georgian Bay Eastern Foxsnake",
            location: "Eastern Georgian Bay",
            status: "Threatened",
            date: "2009",
            photo: "https://wildlifepreservation.ca/2016/wp-content/uploads/2016/07/eastern-foxsnake-3.jpg"
        },
        {
            id: 9,
            name: "Heterodon platirhinos",
            species: "Eastern Hog-Nosed Snake",
            location: "The Carolinian and Great Lakes-St. Lawrence Regions",
            status: "Threatened",
            date: "2008",
            photo: "https://www.oriannesociety.org/wp-content/uploads/2020/10/Simus-079_web-800x600.jpg"
        },
        {
            id: 10,
            name: "Sternotherus odoratus",
            species: "Eastern Musk Turtle",
            location: "The southern edge of the Canadian Shield",
            status: "Special concern",
            date: "2008",
            photo: "https://ontarioturtle.ca/wp-content/uploads/2017/03/Crowley-Eastern-Musk-Turtle-4-small-e1490378688187.jpg"
        },
        {
            id: 11,
            name: "Thamnophis sauritus",
            species: "Eastern Ribbonsnake",
            location: "The Bruce Peninsula and Georgian Bay",
            status: "Special concern",
            date: "2008",
            photo: "https://upload.wikimedia.org/wikipedia/commons/d/de/EasternRibbonSnake.jpg"
        },
        {
            id: 12,
            name: "Pantherophis spiloides",
            species: "Carolinian Gray Ratsnake",
            location: "Southwestern Ontario",
            status: "Endangered",
            date: "2008",
            photo: "https://upload.wikimedia.org/wikipedia/commons/e/eb/Gray_Ratsnake_%28Pantherophis_spiloides%29_%2843567652625%29_%28cropped%29.jpg"
        },
        {
            id: 13,
            name: "Pantherophis spiloides",
            species: "Frontenac Axis Gray Ratsnake",
            location: "Southeastern Ontario",
            status: "Threatened",
            date: "2008",
            photo: "https://upload.wikimedia.org/wikipedia/commons/e/eb/Gray_Ratsnake_%28Pantherophis_spiloides%29_%2843567652625%29_%28cropped%29.jpg"
        },
        {
            id: 14,
            name: "Nerodia sipedon insularum",
            species: "Lake Erie Watersnake",
            location: "Western Lake Erie, including Pelee Island",
            status: "Special concern",
            date: "2008",
            photo: "https://www.canada.ca/content/dam/eccc/migration/sara/0D263A3B-7942-4094-A8D6-CC339B7076BC/fig00.jpg"
        },
        {
            id: 15,
            name: "Sistrurus catenatus",
            species: "Carolinian Massasauga",
            location: "The Carolinian Zone",
            status: "Endangered",
            date: "2008",
            photo: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Massasauga_rattlesnake_1.jpg"
        },
        {
            id: 16,
            name: "Sistrurus catenatus",
            species: "St. Lawrence Massasauga",
            location: "Great Lakes-St. Lawrence region",
            status: "Threatened",
            date: "2008",
            photo: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Massasauga_rattlesnake_1.jpg"
        },
        {
            id: 17,
            name: "Graptemys geographica",
            species: "Northern Map Turtle",
            location: "The shores of Georgian Bay, Lake St. Clair, Lake Erie, and Lake Ontario",
            status: "Special concern",
            date: "2008",
            photo: "https://ontarioturtle.ca/wp-content/uploads/2017/03/Crowley-Northern-Map-Turtle-1.jpg"
        },
        {
            id: 18,
            name: "Regina septemvittata",
            species: "Queensnake",
            location: "The southwest of Middlesex, Brant, Huron, and Essex counties, and on the Bruce Peninsula",
            status: "Endangered",
            date: "2008",
            photo: "https://files.ontario.ca/684.1.2en-cover.jpg"
        },
        {
            id: 19,
            name: "Chelydra serpentina",
            species: "Snapping Turtle",
            location: "Southern Ontario",
            status: "Special concern",
            date: "2009",
            photo: "http://www.ontarioparks.com/parksblog/wp-content/uploads/2020/05/Fitzroy_SnappingTurtle_.png"
        },
        {
            id: 20,
            name: "Apalone spinifera",
            species: "Spiny Softshell",
            location: "Lake St. Clair, Lake Erie, and western Lake Ontario watersheds",
            status: "Endangered",
            date: "2008",
            photo: "https://ontarioturtle.ca/wp-content/uploads/2017/03/spinysoftshell_turtle-Gillingwater-e1490378729516.jpg"
        },
        {
            id: 21,
            name: "Clemmys guttata",
            species: "Spotted Turtle",
            location: "The north shore of Lake Erie, in the Georgian Bay area, and scattered throughout southern and eastern ON",
            status: "Endangered",
            date: "2015",
            photo: "https://www.thesprucepets.com/thmb/-T6yiQXtdweHJvAawFyKEGcENoo=/2357x1462/filters:fill(auto,1)/GettyImages-557232791-de1370a3d2e84add9fb50ff9a1b524fd.jpg"
        },
        {
            id: 22,
            name: "Crotalus horridus",
            species: "Timber Rattlesnake",
            location: "Used to be found along the Niagara Escarpment",
            status: "Extripated",
            date: "2008",
            photo: "https://upload.wikimedia.org/wikipedia/commons/b/b2/ZollmanTimberRattlesnake.jpg"
        },
        {
            id: 23,
            name: "Glyptemys insculpta",
            species: "Wood Turtle",
            location: "Isolated patches in Ontario",
            status: "Endangered",
            date: "2008",
            photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/WoodTurtle.jpg/1200px-WoodTurtle.jpg"
        }
    ],
  
    insects: [
        {
            id: 1,
            name: "American burying beetle",
            species: "Nicrophorus americanus",
            location: "Used to be found north of lakes Erie and Ontario",
            status: "Extirpated",
            date: "2013",
            photo: "https://s3-us-west-2.amazonaws.com/s3-wagtail.biolgicaldiversity.org/images/AmericanBuryingBeetle_DougBacklund_SDGameFis.max-800x800.jpg"
        },
        {
            id: 2,
            name: "Aweme borer moth",
            species: "Papaipema aweme",
            location: "Grand Bend on Lake Huron and on Manitoulin Island",
            status: "Endangered",
            date: "2008",
            photo: "https://www.canada.ca/content/dam/eccc/migration/sara/3D95A7CA-9888-4701-8A21-754B50C83AEE/fig_00.jpg"
        },
        {
            id: 3,
            name: "Bogbean buckmoth",
            species: "Hemileuca sp. 1",
            location: "isolated sites in southeastern Ontario",
            status: "Endangered",
            date: "2010",
            photo: "https://files.ontario.ca/christian.schmidtagr.gc_.ca_sep09_218.jpg"
        },
        {
            id: 4,
            name: "Eastern persius duskywing",
            species: "Erynnis persius persius",
            location: "Used to be found in southwestern Ontario",
            status: "Extirpated",
            date: "2008",
            photo: "https://www.butterfliesandmoths.org/sites/default/files/bamona_images/5-15-13_persius_duskywing_4035w.jpg"
        },
        {
            id: 5,
            name: "Frosted elfin",
            species: "Callophrys irus",
            location: "Used to be found in near the St. Williams Forestry station in Norfolk County in southern Ontario",
            status: "Extirpated",
            date: "2009",
            photo: "https://guides.nynhp.org/media/i5385.jpg"
        },
        {
            id: 6,
            name: "Gypsy Cuckoo Bumble Bee",
            species: "Bombus bohemicus",
            location: "Pinery Provincial Park",
            status: "Endangered",
            date: "2015",
            photo: "https://www.bumblebeeconservation.org/wp-content/uploads/2017/08/Bbohemicus_male_PG_MikeAnderson_web2-600x451.jpg"
        },
        {
            id: 7,
            name: "Hine’s emerald",
            species: "Somatochlora hineana",
            location: "Minesing wetland in Simcoe County",
            status: "Endangered",
            date: "2012",
            photo: "https://www.biologicaldiversity.org/assets/img/species/invertebrates/HinesEmeraldDragonfly_PaulBurton.jpg"
        },
        {
            id: 8,
            name: "Hoptree Borer",
            species: "Prays atomocella",
            location: "Point Pelee National Park and on Pelee Island",
            status: "Endangered",
            date: "2017",
            photo: "https://www.registrelep-sararegistry.gc.ca/0875AAD4-74E5-4646-829E-807522662CF3/fig00.jpg"
        },
        {
            id: 9,
            name: "Hungerford’s crawling water beetle",
            species: "Brychius hungerfordi",
            location: "three rivers in Bruce County",
            status: "Endangered",
            date: "2012",
            photo: "https://wildlifepreservation.ca/2016/wp-content/uploads/2016/09/hungerfords-crawlling-water-beetle.jpg"
        },
        {
            id: 10,
            name: "Karner Blue",
            species: "Lycaeides Melissa Samuelis",
            location: "Used to be found in southwestern Ontario at Port Franks and St. Williams",
            status: "Extirpated",
            date: "2009",
            photo: "https://goodmorninggloucester.files.wordpress.com/2013/08/male_karner_blue_lg.jpg"
        },
        {
            id: 11,
            name: "Lake Huron Grasshopper",
            species: "Trimerotropis huroniana",
            location: "Pancake Bay on southern Lake Superior, Great Duck Island, Lake Huron and Manitoulin Island along the shores of Lake Huron",
            status: "Threatened",
            date: "2017",
            photo: "https://bugguide.net/images/raw/50O/Q40/50OQ4000E0S020Q0W0R0E0FRE0L020L0I0Z0P0Z0603R7Q3RRQDQ3KYQW0TR7Q3R20R07QJRU0DR60.jpg"
        },
        {
            id: 12,
            name: "Laura’s clubtail",
            species: "Stylurus laurae",
            location: "along Big Creek and Big Otter Creek in the Tillsonburg and Long Point area near Lake Erie",
            status: "Endangered",
            date: "2010",
            photo: "https://objects.liquidweb.services/images/202007/inat_1594947376-5f11356cb536b.jpg"
        },
        {
            id: 13,
            name: "Monarch",
            species: "Danaus plexippus",
            location: "southern Ontario",
            status: "Special Concern",
            date: "2008",
            photo: "https://mma.prnewswire.com/media/901842/Espace_pour_la_vie_Monarch_friendly_city___Montr_al_First_City_i.jpg?p=publish&w=950"
        },
        {
            id: 14,
            name: "Mottled duskywing",
            species: "Erynnis martialis",
            location: "southern Ontario",
            status: "Endangered",
            date: "2014",
            photo: "https://files.ontario.ca/cover-photo_j-linton_marmora_ontario_mottled-duskywing.jpg"
        },
        {
            id: 15,
            name: "Nine-spotted Lady Beetle",
            species: "Coccinella novemnotata",
            location: "southern Ontario",
            status: "Endangered",
            date: "2017",
            photo: "https://val.vtecostudies.org/wp-content/uploads/2020/01/nine-spotted-2-1024x768.jpeg"
        },
        {
            id: 16,
            name: "Northern barrens tiger beetle",
            species: "Cicindela patruela",
            location: "southeast shore of Lake Huron",
            status: "Endangered",
            date: "2010",
            photo: "https://www.canada.ca/content/dam/eccc/migration/sara/BAAFBBE6-785C-44F4-B3D9-86C735C697B5/fig00.gif"
        },
        {
            id: 17,
            name: "Pygmy snaketail",
            species: "Ophiogomphus howei",
            location: "northwestern Ontario",
            status: "Endangered",
            date: "2012",
            photo: "https://files.ontario.ca/sar-2018-pygmy-snaketail-dd.jpg"
        },
        {
            id: 18,
            name: "Rapids clubtail",
            species: "Phanogomphus quadricolor",
            location: "four rivers in southern and eastern Ontario: the Thames, Humber, Credit and Mississippi",
            status: "Endangered",
            date: "2009",
            photo: "https://bugguide.net/images/cache/TH5/HAH/TH5HAH4H3H0LWZXL4ZLL2Z0L2ZLLWZ6HZRNHTHIHGZSLTHIHYHIH1HSLTHXH4ZLLOH8H2ZMHAH4HTHHLVHKLGZZLNZ.jpg"
        },
        {
            id: 19,
            name: "Riverine clubtail",
            species: "Stylurus amnicola",
            location: "Big Creek and Big Otter Creek",
            status: "Endangered",
            date: "2014",
            photo: "https://bugguide.net/images/raw/7QC/RFK/7QCRFKBRZQURSQTRXQCRQQR0QQL090JRP0H0N0H07QQ0N0OR7QR00QS060DRMQFRN0R0KQZ0N0CRE0.jpg"
        },
        {
            id: 20,
            name: "Rusty-patched bumble bee",
            species: "Bombus affinis",
            location: "Pinery Provincial Park",
            status: "Endangered",
            date: "2010",
            photo: "https://greatlakesecho.org/wp-content/uploads/2020/03/417579-461805-Claire-Moore-Feb-19-2020-1025-PM-USFWS-Courtesy-Image-1-336x336.jpg"
        },
        {
            id: 21,
            name: "Transverse lady beetle",
            species: "Coccinella transversoguttata",
            location: "Throughout Ontario",
            status: "Endangered",
            date: "2018",
            photo: "https://files.ontario.ca/transverse-lady-beetle.jpg"
        },
        {
            id: 22,
            name: "West Virginia White",
            species: "Pieris virginiensis",
            location: "central and southern Ontario",
            status: "Special Concern",
            date: "2008",
            photo: "https://wisconsinbutterflies.org/a/species/39005/giant/west-virginia-white.jpg"
        },
        {
            id: 23,
            name: "Yellow-banded Bumble Bee",
            species: "Bombus terricola",
            location: "Mixedwood Plains of southern Ontario to the Hudson Bay Lowlands in the north",
            status: "Special Concern",
            date: "2016",
            photo: "https://bugguide.net/images/cache/K0N/0H0/K0N0H0U0CQXQWRLQNRRQURJKUR3KNRQQJR7QDRW0DRW03RW0Z0SQ3RU0S04000KQZ07QR0P0K0QQH0QQWRFKFQJK1RLQ.jpg"
        }
    ],
  
    fishes: [
          {
              id: 1,
              name: "American Eel",
              species: "Anguilla Rostrata",
              location: "Atlantic Ocean",
              status: "Endangered",
              date: "2013",
              photo: "https://files.ontario.ca/environment-and-energy/species-at-risk/american-eel-01.jpg"
          },
          {
              id: 2,
              name: "Black Redhorse",
              species: "Moxostoma duquesnei",
              location: "Grand River",
              status: "Threatened",
              date: "2008",
              photo: "https://files.ontario.ca/environment-and-energy/species-at-risk/black-redhorse-01.jpg"
          },
          {
              id: 3,
              name: "Blackstripe topminnow",
              species: "Fundulus notatus",
              location: "Sydenham River",
              status: "Special Concern",
              date: "2009",
              photo: "https://files.ontario.ca/environment-and-energy/species-at-risk/blackstripe-topminnow-01.jpg"
          },
          {
              id: 4,
              name: "Bridle shiner",
              species: "Notropis bifrenatus",
              location: "St. Lawrence River",
              status: "Special Concern",
              date: "2008",
              photo: "https://files.ontario.ca/environment-and-energy/species-at-risk/bridle-shiner-01.jpg"
          },
          {
              id: 5,
              name: "Channel darter",
              species: "Percina copelandi",
              location: "Lake Erie",
              status: "Special Concern",
              date: "2008",
              photo: "https://files.ontario.ca/chda_channel_darter.jpg"
          },
          {
              id: 6,
              name: "Cutlip minnow",
              species: "Exoglossum maxillingua",
              location: "southeastern Ontario",
              status: "Threatened",
              date: "2008",
              photo: "https://ncfishes.com/wp-content/uploads/2020/08/Cutlip-Minnow-Exoglossum-maxillingua.jpg"
          },
          {
              id: 7,
              name: "Eastern sand darter",
              species: "Ammocrypta pellucida",
              location: "southwestern Ontario",
              status: "Endangered",
              date: "2008",
              photo: "https://mnfi.anr.msu.edu/element-images/Ammocrypta-pellucida-4162.jpg"
          },
          {
              id: 8,
              name: "Grass pickerel",
              species: "Esox americanus vermiculatus",
              location: "southern Ontario",
              status: "Special Concern",
              date: "2008",
              photo: "https://upload.wikimedia.org/wikipedia/commons/6/60/Esox_americanus_vermiculatus_juvenile.JPG"
          },
          {
              id: 9,
              name: "Gravel chub",
              species: "Erimystax x-punctata",
              location: "Used to be found in southwestern Ontario",
              status: "Extirpated",
              date: "2008",
              photo: "https://wildlife-species.canada.ca/species-risk-registry/images/photos/spp084p1.jpg"
          },
          {
              id: 10,
              name: "Lake chubsucker",
              species: "Erimyzon sucetta",
              location: "southern Ontario",
              status: "Threatened",
              date: "2008",
              photo: "https://www.floridamuseum.ufl.edu/wp-content/uploads/sites/66/2020/02/Plate-61.jpg"
          },
          {
              id: 11,
              name: "Lake Sturgeon (Great Lakes - Upper St. Lawrence populations)",
              species: "Acipenser fulvescens",
              location: "Great Lakes and Upper St. Lawrence River",
              status: "Endangered",
              date: "2008",
              photo: "https://tnacifin.com/sites/default/files/acipenser_fulvescens_lake_sturgeon.jpg"
          },
          {
              id: 12,
              name: "Lake Sturgeon (Saskatchewan - Nelson River populations)",
              species: "Acipenser fulvescens",
              location: "Nelson River",
              status: "Threatened",
              date: "2008",
              photo: "https://py-api.taklimakan.network/media/storage/10314/2019/08/30/image/5d68e7d11b2ba.jpeg"
          },
          {
              id: 13,
              name: "Lake Sturgeon (Southern Hudson Bay - James Bay populations)",
              species: "Acipenser fulvescens",
              location: "Southern Hudson Bay and James Bay",
              status: "Special Concern",
              date: "2008",
              photo: "https://www.frontenacarchbiosphere.ca/sites/frontenacarchbiosphere.ca/files/img/activity/Lake%20Sturgeon%20Aquatarium.jpg"
          },
          {
              id: 14,
              name: "Northern brook lamprey",
              species: "Ichthyomyzon fossor",
              location: "Rivers draining into Lakes Superior, Huron and Erie, and the Ottawa River",
              status: "Special Concern",
              date: "2008",
              photo: "https://live.staticflickr.com/7016/6420479453_7c9b470bb9_b.jpg"
          },
          {
              id: 15,
              name: "Northern madtom",
              species: "Noturus stigmosus",
              location: "Lake St. Clair",
              status: "Endangered",
              date: "2008",
              photo: "https://www.floridamuseum.ufl.edu/wp-content/uploads/sites/59/2017/07/34-N_stigmosus.jpg"
          },
          {
              id: 16,
              name: "Northern Sunfish (Great Lakes - Upper St. Lawrence populations)",
              species: "Lepomis peltastes",
              location: "southern Ontario",
              status: "Special Concern",
              date: "2017",
              photo: "https://upload.wikimedia.org/wikipedia/commons/9/90/Lepomis_megalotis_2.jpg"
          },
          {
              id: 17,
              name: "Paddlefish",
              species: "Polyodon spathula",
              location: "Used to be found in Lake Huron",
              status: "Extirpated",
              date: "2008",
              photo: "https://cdn.britannica.com/20/3320-050-878EBA1B/American-paddlefish.jpg"
          },
          {
              id: 18,
              name: "Pugnose minnow",
              species: "Opsopoeodus emiliae",
              location: "extreme southwestern Ontario",
              status: "Threatened",
              date: "2008",
              photo: "https://tnacifin.com/sites/default/files/opsopoeodus_emiliae_pugnose_minnow.jpg"
          },
          {
              id: 19,
              name: "Pugnose shiner",
              species: "Notropis anogenus",
              location: "southern Ontario",
              status: "Threatened",
              date: "2008",
              photo: "https://mnfi.anr.msu.edu/element-images/Notropis-anogenus-5130.jpg"
          },
          {
              id: 20,
              name: "Redside dace",
              species: "Clinostomus elongatus",
              location: "Great Lakes basin",
              status: "Endangered",
              date: "2009",
              photo: "https://files.ontario.ca/562-1-2-redside-dace.jpg"
          },
          {
              id: 21,
              name: "River Darter (Great Lakes - Upper St. Lawrence populations)",
              species: "Percina shumardi",
              location: "Lake St. Clair",
              status: "Endangered",
              date: "2017",
              photo: "https://www2.illinois.gov/dnr/education/WAImages/WAFRiverDarter-LM.jpg"
          },
          {
              id: 22,
              name: "River redhorse",
              species: "Moxostoma carinatum",
              location: "eastern and southern Ontario",
              status: "Special Concern",
              date: "2016",
              photo: "https://www.nps.gov/miss/learn/nature/images/river_redhorse.jpg?maxwidth=650&autorotate=false"
          },
          {
              id: 23,
              name: "Shortjaw cisco",
              species: "Coregonus zenithicus",
              location: "Great Lakes",
              status: "Threatened",
              date: "2008",
              photo: "https://www.sararegistry.gc.ca/0379EBFF-98DA-405E-A4FB-25B3391107CA/X-200910261504147036.gif"
          },
          {
              id: 24,
              name: "Shortnose cisco",
              species: "Coregonus reighardi",
              location: "Great Lakes",
              status: "Endangered",
              date: "2008",
              photo: "https://files.ontario.ca/shortnose_cisco.jpg"
          },
          {
              id: 25,
              name: "Silver chub",
              species: "Macrhybopsis storeriana",
              location: "Lake Erie and Lake St. Clair",
              status: "Threatened",
              date: "2008",
              photo: "http://fish.aseev.com/thumbnails/001/20201024170109.jpg"
          },
          {
              id: 26,
              name: "Silver lamprey (Great Lakes - Upper St. Lawrence River population)",
              species: "Ichthyomyzon unicuspis",
              location: "St. Lawrence River",
              status: "Special concern",
              date: "2013",
              photo: "https://www.joelsartore.com/wp-content/uploads/stock/FIS039/FIS039-00066-1920x1282.jpg"
          },
          {
              id: 27,
              name: "Silver shiner",
              species: "Notropis photogenis",
              location: "Rivers and Creeks flowing into Lake Ontario",
              status: "Threatened",
              date: "2012",
              photo: "https://upload.wikimedia.org/wikipedia/commons/f/f6/Silvershiner.jpg"
          },
          {
              id: 28,
              name: "Spotted gar",
              species: "Lepisosteus oculatus",
              location: "Lake Erie and East Lake",
              status: "Endangered",
              date: "2008",
              photo: "https://upload.wikimedia.org/wikipedia/commons/f/f7/Lepisosteus_oculatus1.jpg"
          },
          {
              id: 29,
              name: "Spotted sucker",
              species: "Minytrema melanops",
              location: "southwestern Ontario",
              status: "Special Concern",
              date: "2008",
              photo: "https://ncfishes.com/wp-content/uploads/2020/01/Minytrema-melanops.png"
          },
          {
              id: 30,
              name: "Upper Great Lakes kiyi",
              species: "Coregonus kiyi kiyi",
              location: "Lake Superior",
              status: "Special Concern",
              date: "2008",
              photo: "https://www.worldlifeexpectancy.com/images/a/w/b/coregonus-kiyi/coregonus-kiyi.jpg"
          },
          {
              id: 31,
              name: "Warmouth",
              species: "Lepomis gulosus",
              location: "Lake Erie",
              status: "Endangered",
              date: "2008",
              photo: "https://ncfishes.com/wp-content/uploads/2019/12/Lepomis-gulosus.png"
          }
      ],
  
      amphibians: [
        {
            id: 1,
            name: "Allegheny mountain dusky salamander",
            species: "Desmognathus ochrophaeus",
            location: "Southwestern Quebec and the Niagara Gorge in southern Ontario",
            status: "Endangered",
            date: "2008",
            photo: "https://files.ontario.ca/environment-and-energy/species-at-risk/allegheny-mountain-dusky-salamander-01.jpg"
        },
        {
          id: 2,
          name: "Blanchard’s Cricket Frog",
          species: "Acris blanchardi",
          location: "Pelee Island and Point Pelee in southwestern Ontario",
          status: "Extirpated",
          date: "2008",
          photo: "https://files.ontario.ca/environment-and-energy/species-at-risk/blanchards-cricket-frog-01.jpg"
        },
        {
          id: 3,
          name: "Eastern tiger salamander",
          species: "Ambystoma tigrinum",
          location: "Point Pelee",
          status: "Extirpated",
          date: "2008",
          photo: "https://files.ontario.ca/environment-and-energy/species-at-risk/eastern-tiger-salamander-01.jpg"
        },
        {
          id: 4,
          name: "Fowler’s toad",
          species: "Anaxyrus fowleri",
          location: "Rondeau, Long Point and Niagara",
          status: "Endangered",
          date: "2010",
          photo: "https://files.ontario.ca/environment-and-energy/species-at-risk/fowlers-toad-03.jpg"
        },
        {
          id: 5,
          name: "Jefferson salamander",
          species: "Ambystoma jeffersonianum",
          location: "southern Ontario, mainly along the Niagara Escarpment",
          status: "Endangered",
          date: "2011",
          photo: "https://files.ontario.ca/environment-and-energy/species-at-risk/jefferson-salamander-01.jpg"
        },
        {
          id: 6,
          name: "Northern dusky salamander",
          species: "Desmognathus fuscus",
          location: "a small area of the Niagara Peninsula",
          status: "Endangered",
          date: "2008",
          photo: "https://files.ontario.ca/environment-and-energy/species-at-risk/northern-dusky-salamander-01.jpg"
        },
        {
          id: 7,
          name: "Small-mouthed salamander",
          species: "Ambystoma texanum",
          location: "Pelee Island",
          status: "Endangered",
          date: "2009",
          photo: "https://files.ontario.ca/environment-and-energy/species-at-risk/small-mouthed-salamander-01.jpg"
        },
        {
          id: 8,
          name: "Spring Salamander",
          species: "Gyrinophilus porphyriticus",
          location: "no longer in Ontario, now found only in Quebec",
          status: "Extirpated",
          date: "2008",
          photo: "https://files.ontario.ca/environment-and-energy/species-at-risk/spring-salamander-01.jpg"
        },
        {
          id: 9,
          name: "Unisexual Ambystoma (Jefferson salamander dependent population)",
          species: "Ambystoma laterale-(2) jeffersonianum",
          location: "southern Ontario, mainly along the Niagara Escarpment",
          status: "Endangered",
          date: "2017",
          photo: "https://files.ontario.ca/jefferson-dependent-unisexual-ambystoma-joecrowley.jpg"
        },
        {
          id: 10,
          name: "Unisexual Ambystoma (Small-mouthed Salamander dependent population)",
          species: "Ambystoma laterale - texanum",
          location: "Pelee Island ",
          status: "Endangered",
          date: "2017",
          photo: "https://files.ontario.ca/unisexual-ambystoma-small-mouthed-salamander_0_0.jpg"
        }
    ],
  
    mammals: [
          {
              id: 1,
              name: "Algonquin Wolf",
              species: "Canus Lupus Lycaon",
              date: "2008",
              status: "Threatened",
              location: "Great Lakes Region",
              photo: "https://images.thestar.com/KNUcTK1yyqGW71Y_ekUSLp_Cr2c=/1280x1024/smart/filters:cb(1570529943334)/https://www.thestar.com/content/dam/thestar/opinion/commentary/2016/09/27/ontario-action-jeopardize-existence-of-algonquin-wolf/algonquin-wolf.jpg"
          },
          {
              id: 2,
              name: "American Badger",
              species: "T.taxus",
              date: "2008",
              status: "endangered",
              location: "Northwest & Southwest Ontario",
              photo: "http://4.bp.blogspot.com/_xC0p-PBMm7U/SSentDDCwyI/AAAAAAAABqs/HkNNOY6J204/w1200-h630-p-k-no-nu/American+Badger+-+by+wikipedia+endangered+in+Ontario.jpg"
          },
          {
              id: 3,
              name: "Beluga",
              species: "D. Leucas",
              date: "2008",
              status: "special concern",
              location: "Around the Hudson Bay",
              photo: "https://cdn.mos.cms.futurecdn.net/BewJL6fSPTKm4E3LngGyPN.jpg"
          },
          {
              id: 4,
              name: "Caribou",
              species: "R. Tarandus",
              date: "2008",
              status: "Threatened",
              location: "Northern Forest and Eastern Lowlands",
              photo: "https://www.ctvnews.ca/polopoly_fs/1.4961127.1590791543!/httpImage/image.jpg_gen/derivatives/landscape_1020/image.jpg"
          },
          {
              id: 5,
              name: "Easten Mole",
              species: "Scalopus",
              date: "2008",
              status: "Special Concern",
              location: "Extremely Southwest near Windsor",
              photo: "https://upload.wikimedia.org/wikipedia/commons/3/3e/ScalopusAquaticus.jpg"
          },
          {
              id: 6,
              name: "Eastern Small-footed Myotis/Bat",
              species: "Myotis leibii",
              date: "2014",
              status: "Endangered",
              location: "Southern Ontario",
              photo: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Eastern_small-footed_bat.jpg"
          },
          {
              id: 7,
              name: "Gray Fox",
              species: "U. cinereoargenteus",
              date: "2008",
              status: "Threatened",
              location: "West of Lake Superior",
              photo: "https://wxv73zw8wg-flywheel.netdna-ssl.com/wp-content/uploads/2018/12/Gray-Fox-1024x546.jpg"
          },
          {
              id: 8,
              name: "Little Brown Myotis/Bat",
              species: "M. lucifigus",
              date: "2013",
              status: "Endangered",
              location: "Southern Ontario",
              photo: "https://www.gbbr.ca/wp-content/uploads/2019/03/Little-Brown-Myotis-%E2%80%93-Photo-credit-S.Dobbyn.jpg"
          },
          {
              id: 9,
              name: "Mountain Lion (Cougar)",
              species: "P. concolor",
              date: "2008",
              status: "Endangered",
              location: "All of Ontario",
              photo: "https://www.nwf.org/-/media/NEW-WEBSITE/Shared-Folder/Wildlife/Mammals/mammal_mountain-lion_shutterstock_600x300.ashx"
          },
          {
              id: 10,
              name: "Northern Myotis/Bat",
              species: "M. septentrionalis",
              date: "2013",
              status: "Endangered",
              location: "Forested Southern Ontario",
              photo: "https://www.gbbr.ca/wp-content/uploads/2019/03/Northern-Myotis-Photo-credit-S.-Dobbyn.jpg"
          },
          {
              id: 11,
              name: "Polar Bear",
              species: "Ursus Maritimus",
              date: "2009",
              status: "Threatened",
              location: "Sea Ice of Thunder and James Bay",
              photo: "https://c402277.ssl.cf1.rackcdn.com/photos/18694/images/carousel_small/Polar_bear_with_cubs_in_Wapusk_WW266666.jpg?1582733801"
          },
          {
              id: 12,
              name: "Tri-coloured Bat",
              species: "P. Subflavus",
              date: "2016",
              status: "Endangered",
              location: "Southern Ontario",
              photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Tri-colored_bat_%28Perimyotis_subflavus%29_with_WNS_growth.JPG/220px-Tri-colored_bat_%28Perimyotis_subflavus%29_with_WNS_growth.JPG"
          },
          {
              id: 13,
              name: "Wolverine",
              species: "G. gulo",
              date: "2008",
              status: "Threatened",
              location: "Northwest Forested Regions",
              photo: "https://defenders.org/sites/default/files/styles/meta_image/public/2019-04/wolverine_pixabay_header.jpg?itok=NJvvw4zI"
          },
          {
              id: 14,
              name: "Woodland vole",
              species: "Microtus",
              date: "2008",
              status: "Special Concern",
              location: "Extremely South Ontario",
              photo: "https://animaldiversity.org/collections/contributors/phil_myers/ADW_mammals/Rodentia/pinetorum6732/large.jpg"
          }
    ]
  
  }
  
  export default data;
  
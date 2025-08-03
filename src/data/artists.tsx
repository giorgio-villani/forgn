interface Artist {
  name: string
  slug: string
  picture: string
  description: string
  website?: string
  active?: boolean
}

const artists: Artist[] = [
  {
    name: 'Giorgio Villani',
    slug: 'giorgio-villani',
    picture: 'giorgio.webp',
    description:
      'Giorgio is a Houston-based Italian American mixed media artist whose work centers on the integration of technology with organic forms. His installations—featuring TVs, electrical components, and animatronic sculptures—examine the dynamic interaction between digital and natural systems, focusing on how technological mechanisms can simulate or enhance organic processes. Villani frequently collaborates with artists like Bailey Ryherd, Omar Ochoa, Betirri, and Daniel Calderon, merging disciplines to craft innovative, thought-provoking works that challenge conventional boundaries in art and technology.',
    website: 'https://spindletop.digital',
    active: true,
  },
  {
    name: 'Shelley Townsend',
    slug: 'shelley-townsend',
    picture: 'shelley-1.webp',
    description:
      "Shelley, born in Houston, Texas, began her artistic journey in Europe, where her family moved to support her mother's opera career. Living in Paris and Milan for eleven years, she was inspired by Italian sculptor Ernesto Ornati to pursue sculpture. Townsend honed her craft at Loretto Heights College in Denver, Colorado, earning BFA degrees in both Sculpture and Painting. Her career flourished in New York City and later in Connecticut, where she studied under Peter Rubino. Now back in Houston, Townsend has produced a significant body of work and enjoys teaching sculpture, sharing her passion for creating beauty in its most natural form.",
    website: 'https://sculpturestudieswithshelley.info/',
    active: true,
  },
     {
     name: 'Peter Broz',
     slug: 'peter-broz',
     picture: 'broz_self.jpg',
     description:
       "Peter is a two-dimensional artist born and raised in Houston, Texas. Peter attended The High School for Performing and Visual Arts and graduated from University of Houston with a Bachelor of Arts in Studio Painting. He has over 7 years of experience teaching art for several organizations including, including HISD, Art League Houston, The Woods Project and Meive Studio. He has been a resident artist of Box13 ArtSpace since 2020. Peter is also currently represented by Catapult Gallery in Richmond Texas. His most recent work is focused on the sensory aspect of experiencing nature, as well as the primal and instinctual aspects of human nature. Figurative elements, as well as natural and biological references are utilized to suggest a narrative between humans and nature.",
     website: 'https://www.peterbroz.com/',
     active: true,
   },
   {
   name: 'Marnie Shick',
   slug: 'marnie-shick',
   picture: 'marnie-shick.jpg',
   description:
     "Marnie Shick graduated with a B.F.A. in Animation from Savannah College of Art and Design in 2023. She's currently a resident artist at Jersey House Studio, where she's worked on concept art, character designs, storyboards, graphics, voice acting, and more. Marnie creates art primarily in Photoshop and Blender, but also uses traditional media. She's passionate about combining meaningful storytelling with quirky, experimental animation.",
   website: 'https://www.marnieshick.com/',
   active: true,
 },
  { name: 'Anne Billingsley',
    slug: 'anne-billingsley',
    picture: 'anne-1.webp',
    description: 'Anne Billingsley is a highly accomplished professional with a background in geosciences, climate research, and environmental analysis. She holds a Ph.D. in Geosciences from the University of Arizona, specializing in paleoclimate and hominin evolution. Dr. Billingsley has developed expertise across interdisciplinary fields, focusing on environmental and geoscience applications. Her research spans locations such as Kenya, Ethiopia, and the Bahamas, where she analyzed sediment cores, environmental proxies, and used advanced statistical modeling to better understand climate change patterns and their impact on human evolution. In addition to her scientific work, Dr. Billingsley is an avid artist and writer. She earned a degree in Creative Writing from the University of Houston and founded the Heinrich Lagerburger Society in 2002, a community that fosters diverse voices in writing. She blends her scientific research with creative expression, exploring how humans interact with their environment through technology and art.',
    website: 'https://www.theheinrichlagerburgersociety.com/',
    active: true,
  },
  {
    name: 'Bailey Ryherd',
    slug: 'bailey-ryherd',
    picture: 'bailey-1.webp',
    description:
      'Bailey is a versatile artist with over a decade of experience in polymer clay sculptures, digital art, ink drawings, and concept art. Since 2010, she has taken commissions, creating unique and imaginative pieces that showcase her diverse skills and dedication to her craft.',
    website: 'https://linktr.ee/skogsnegl',
    active: true,
  },
  {
    name: 'Olesia Y. Rodionova',
    slug: 'olesia-rodionova',
    picture: 'olesia-1.webp',
    description:
      'Olesia is a versatile artist working in traditional and digital mediums, including watercolor, algorithmic art, blackwork tattooing, and brand conceptualization. An AI enthusiast focused on ethics, she explores the intersection of technology and identity. Originally from Ukraine, she started her U.S. career in 2023 with &quot;Dreaming. POV: you are an android,&quot; a project depicting an android’s perspective in sleep mode. She has since participated in over ten collective shows at Hardy and Nance Studio, the &quot;Don’t Call Me Sweetie&quot; show by Insomnia Gallery, and was published in the fubar.space 2k23 catalogue with a glitch art fashion project.',
    active: true,
  },
  {
    name: 'Daniel Calderon Arenas',
    slug: 'daniel-calderon-arenas',
    picture: 'daniel.webp',
    description:
      'Daniel is an Mexican-born artist and educator from Houston, Texas. Daniel teaches courses on coding and digital processes at the K. G. McGovern College of the Arts and also has his own studio art practice. He currently writes generative art algorithms designed for the blockchain and has been exploring code-base creativity since 2016.',
    website: 'https://linktr.ee/dacaldera',
    active: true,
  },
  {
    name: 'Thomas MacDonald',
    slug: 'thomas-macdonald',
    picture: 'tom-2.webp',
    description:
      'Thomas is a skilled video editor and the owner of Southwest Digital, a full-service digital marketing company in Houston, Texas. He is an alumnus of the University of Texas at Austin and the University of Pennsylvania School of Design. With years of experience in video content creation and editing, Thomas loves helping others learn new skills. He is excited to share his knowledge at Forgn. Join his class to learn how to create amazing videos with easy-to-follow steps!',
    website: 'https://www.southwestdigital.io/',
    active: true,
  },
]

export default artists

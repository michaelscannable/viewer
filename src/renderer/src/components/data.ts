export function getData() {
  const data = [
    {
      product: 'Rumours',
      artist: 'Fleetwood Mac',
      category: 'Soft Rock',
      year: '1977',
      status: 'active',
      available: 12,
      incoming: 45,
      image: 'rumours',
      price: 40,
      sold: 15,
      priceIncrease: 5, // in percentage
      variants: 3,
      variantDetails: [
        {
          title: 'Rumours',
          available: 4,
          format: 'LP, Album, Picture Disc, Reissue',
          label: 'Warner Records',
          cat: 'RPD1 3010',
          country: 'Worldwide',
          year: '2024'
        },
        {
          title: 'Rumours',
          available: 6,
          format: 'Blu-Ray, Album, Reissue, Dolby Atoms',
          label: 'Warner Records',
          cat: 'BA2 3010',
          country: 'Worldwide',
          year: '2024'
        },
        {
          title: 'Rumours',
          available: 2,
          format: 'CD, Album, Reissue, Remastered',
          label: 'Warner Records',
          cat: 'R2 599763',
          country: 'Worldwide',
          year: '2024'
        }
      ]
    },
    {
      product: 'Future Nostalgia',
      artist: 'Dua Lipa',
      category: 'Pop',
      year: '2020',
      status: 'outOfStock',
      available: 0,
      incoming: 0,
      image: 'futurenostalgia',
      price: 29,
      sold: 5,
      priceIncrease: 10,
      variants: 1,
      variantDetails: [
        {
          title: 'Future Nostalgia',
          available: 0,
          format: 'LP, Limited Edition, Magenta',
          label: 'Warner Records',
          cat: '5054197954467',
          country: 'Worldwide',
          year: '2024'
        }
      ]
    },
    {
      product: 'Actually',
      artist: 'Pet Shop Boys',
      category: 'Synth-pop',
      year: '1987',
      status: 'active',
      available: 25,
      incoming: 0,
      image: 'actually',
      price: 25,
      sold: 7,
      priceIncrease: 10,
      variants: 2,
      variantDetails: [
        {
          title: 'Actually',
          available: 13,
          format: 'LP, Album, Reissue, 180 Gram',
          label: 'Parlophone',
          cat: '0190295832612',
          country: 'USA & Europe',
          year: '2018'
        },
        {
          title: 'Actually / Further Listening 1987-1988',
          available: 12,
          format: 'CD, Album, Compilation; All Media, Reissue, Remastered',
          label: 'Warner Records',
          cat: '01902958262222',
          country: 'Europe',
          year: '2018'
        }
      ]
    },
    {
      product: 'Back to Black',
      artist: 'Amy Winehouse',
      category: 'Rhythm & Blues',
      year: '2006',
      status: 'paused',
      available: 3,
      incoming: 19,
      image: 'backtoblack',
      price: 33,
      sold: 39,
      priceIncrease: 5,
      variants: 4,
      variantDetails: [
        {
          title: 'Back to Black',
          available: 1,
          format: 'CD, Album, Enhanced',
          label: 'Island Records Group',
          cat: '171 304-1',
          country: 'UK',
          year: '2006'
        },
        {
          title: 'Back to Black The Album Remixes',
          available: 0,
          format: '2×CD, Promo',
          label: 'Island Records Ltd',
          cat: 'AMYCDPRO15',
          country: 'Europe',
          year: '2007'
        },
        {
          title: 'Back to Black',
          available: 0,
          format: 'LP, Album, Picture Disc, Reissue',
          label: 'Island Records',
          cat: '3579647',
          country: 'Europe',
          year: '2023'
        },
        {
          title: 'Back to Black',
          available: 4,
          format: 'LP, Album, Limited Edition, Reissue, Pink',
          label: 'Republic Records',
          cat: 'B0030246-01 ST01',
          country: 'US',
          year: '2024'
        }
      ]
    },
    {
      product: 'In A Dream',
      artist: 'Troye Sivan',
      category: 'Pop',
      year: '2020',
      status: 'outOfStock',
      available: 0,
      incoming: 0,
      image: 'inadream',
      price: 35,
      sold: 10,
      priceIncrease: 30,
      variants: 2,
      variantDetails: [
        {
          title: 'In A Dream',
          available: 0,
          format: 'CD, EP',
          label: 'Capitol Records',
          cat: 'DR3AM01',
          country: 'US',
          year: '2020'
        },
        {
          title: 'In A Dream',
          available: 0,
          format: 'LP, EP, Blue Mist',
          label: 'EMI',
          cat: 'DR3AM02',
          country: 'Europe',
          year: '2020'
        }
      ]
    },
    {
      product: '21',
      artist: 'Adele',
      category: 'Pop',
      year: '2011',
      status: 'active',
      available: 5,
      incoming: 10,
      image: '21',
      price: 28,
      sold: 4,
      priceIncrease: 12,
      variants: 2,
      variantDetails: [
        {
          title: '21',
          available: 1,
          format: 'LP, Album, Stereo',
          label: 'XL Recordings',
          cat: 'XLLP 520',
          country: 'Europe',
          year: '2011'
        },
        {
          title: '21',
          available: 4,
          format: 'CD, Album, Limited Edition',
          label: 'XL Recordings',
          cat: 'XLLP 520 E',
          country: 'Europe',
          year: '2011'
        }
      ]
    },
    {
      product: 'Anti',
      artist: 'Rihanna',
      category: 'Rhythm & Blues',
      year: '2016',
      status: 'active',
      available: 10,
      incoming: 23,
      image: 'anti',
      price: 29,
      sold: 19,
      priceIncrease: 20,
      variants: 1,
      variantDetails: [
        {
          title: 'Anti',
          available: 10,
          format: '2×LP, Album, Reissue, Red Translucent',
          label: 'Roc Nation',
          cat: 'B0037402-01',
          country: 'US',
          year: '2023'
        }
      ]
    },
    {
      product: 'Hunting High and Low',
      artist: 'a-ha',
      category: 'Synth-pop',
      year: '1985',
      status: 'outOfStock',
      available: 0,
      incoming: 5,
      image: 'huntinghighandlow',
      price: 20,
      sold: 25,
      priceIncrease: 0,
      variants: 1,
      variantDetails: [
        {
          title: 'Hunting High and Low',
          available: 0,
          format: 'LP, Album, Limited Edition, Reissue, Orange',
          label: 'Warner Records',
          cat: '081227827311',
          country: 'UK',
          year: '2023'
        }
      ]
    },
    {
      product: 'Blue',
      artist: 'Joni Mitchell',
      category: 'Rock',
      year: '1971',
      status: 'outOfStock',
      available: 0,
      incoming: 0,
      image: 'blue',
      price: 31,
      sold: 20,
      priceIncrease: 15,
      variants: 1,
      variantDetails: [
        {
          title: 'Blue',
          available: 0,
          format: 'LP, Album, Reissue, Remastered, Stereo, 180 Gram, Gatefold',
          label: 'Reprise Records',
          cat: '603497844173',
          country: 'USA & Europe',
          year: '2022'
        }
      ]
    },
    {
      product: 'The Marshall Mathers',
      artist: 'Eminem',
      category: 'Hip Hop',
      year: '2000',
      status: 'outOfStock',
      available: 0,
      incoming: 5,
      image: 'marshall',
      price: 25,
      sold: 7,
      priceIncrease: 10,
      variants: 1,
      variantDetails: [
        {
          title: 'The Marshall Mathers LP',
          available: 0,
          format: '2×LP, Album, Stereo',
          label: 'Interscope',
          cat: '069490629-1',
          country: 'USA',
          year: '2022'
        }
      ]
    },
    {
      product: 'Discovery',
      artist: 'Daft Punk',
      category: 'Electronic',
      year: '2001',
      status: 'paused',
      available: 7,
      incoming: 0,
      image: 'discovery',
      price: 20,
      sold: 2,
      priceIncrease: 5,
      variants: 3,
      variantDetails: [
        {
          title: 'Discovery',
          available: 7,
          format: '2×LP, Album, Reissue, Gatefold',
          label: 'ADA',
          cat: '0190296617164',
          country: 'Europe',
          year: '2023'
        },
        {
          title: 'Discovery',
          available: 0,
          format: '2×LP, Album, Reissue, Gatefold',
          label: 'ADA',
          cat: '0190296617164',
          country: 'USA & Europe',
          year: '2021'
        },
        {
          title: 'Discovery',
          available: 0,
          format: '2×LP, Album, Reissue',
          label: 'Parlophone',
          cat: '7243 8496061 2',
          country: 'Europe',
          year: '2018'
        }
      ]
    },
    {
      product: 'The Dark Side of the Moon',
      artist: 'Pink Floyd',
      category: 'Rock',
      year: '1973',
      status: 'paused',
      available: 0,
      incoming: 10,
      image: 'darksideofthemoon',
      price: 36,
      sold: 21,
      priceIncrease: 10,
      variants: 2,
      variantDetails: [
        {
          title: 'The Dark Side of the Moon (Master Tape Copy)',
          available: 0,
          format: 'CD, Album, Numbered, Stereo',
          label: 'Sigma',
          cat: 'Sigma 309',
          country: 'Japan',
          year: '2023'
        },
        {
          title: 'The Dark Side of the Moon',
          available: 0,
          format: '2×LP, Album, Reissue, Remastered, 180 Gram',
          label: 'Pink Floyd Records',
          cat: 'PFR50UVLP',
          country: 'Europe',
          year: '2024'
        }
      ]
    },
    {
      product: 'Nevermind',
      artist: 'Nirvana',
      category: 'Rock',
      year: '1991',
      status: 'active',
      available: 21,
      incoming: 0,
      image: 'nevermind',
      price: 28,
      sold: 13,
      priceIncrease: 0,
      variants: 2,
      variantDetails: [
        {
          title: 'Nevermind',
          available: 15,
          format: 'LP, Album, Limited Edition, Reissue, Repress, Silver',
          label: 'DGC',
          cat: 'DGC-24425',
          country: 'USA',
          year: '2023'
        },
        {
          title: 'Nevermind',
          available: 6,
          format: 'LP, Album, Reissue',
          label: 'Sub Pop',
          cat: '0720642442517',
          country: 'Europe',
          year: '2023'
        }
      ]
    },
    {
      product: 'Lemonade',
      artist: 'Beyoncé',
      category: 'Rhythm & Blue',
      year: '2016',
      status: 'active',
      available: 3,
      incoming: 0,
      image: 'lemonade',
      price: 40,
      sold: 6,
      priceIncrease: 0,
      variants: 3,
      variantDetails: [
        {
          title: 'Lemonade',
          available: 1,
          format: '2×LP, Album, Yellow 180 Gram',
          label: 'Parkwood Entertainment',
          cat: '88985446751',
          country: 'Europe',
          year: '2023'
        },
        {
          title: 'Lemonade',
          available: 1,
          format: '2×LP, Album, Yellow, Gatefold',
          label: 'Parkwood Entertainment',
          cat: '88985446751',
          country: 'USA',
          year: '2017'
        },
        {
          title: 'Lemonade',
          available: 1,
          format: 'CD, Album, DVD',
          label: 'Parkwood Entertainment',
          cat: '88985336822',
          country: 'Europe',
          year: '2016'
        }
      ]
    },
    {
      product: 'Thriller',
      artist: 'Michael Jackson',
      category: 'Pop',
      year: '1982',
      status: 'active',
      available: 12,
      incoming: 4,
      image: 'thriller',
      price: 28,
      sold: 4,
      priceIncrease: 4,
      variants: 1,
      variantDetails: [
        {
          title: 'Thriller - 40th Anniversary',
          available: 12,
          format: '2×LP',
          label: 'Epic',
          cat: 'EPCMJTH40',
          country: 'USA & Europe',
          year: '2024'
        }
      ]
    },
    {
      product: 'Lust For Life',
      artist: 'Lana Del Rey',
      category: 'Alt-pop',
      year: '2017',
      status: 'paused',
      available: 2,
      incoming: 18,
      image: 'lustforlife',
      price: 38,
      sold: 43,
      priceIncrease: 12,
      variants: 2,
      variantDetails: [
        {
          title: 'Lust For Life',
          available: 2,
          format: '2×LP, Album, Limited Edition, Reissue, Repress, Clear',
          label: 'Interscope Records',
          cat: '5765501',
          country: 'Worldwide',
          year: '2023'
        },
        {
          title: 'Lust For Life',
          available: 0,
          format: '2×LP, Album, Reissue, Stereo',
          label: 'Polydor',
          cat: '5758996',
          country: 'USA & Europe',
          year: '2017'
        }
      ]
    },
    {
      product: 'Clarity',
      artist: 'Zedd',
      category: 'Electronic',
      year: '2012',
      status: 'active',
      available: 9,
      incoming: 0,
      image: 'clarity',
      price: 25,
      sold: 10,
      priceIncrease: 5,
      variants: 1,
      variantDetails: [
        {
          title: 'Clarity',
          available: 9,
          format: '2×LP, Album, Deluxe Edition, Reissue',
          label: 'Interscope Records',
          cat: 'B0018814-01',
          country: 'USA',
          year: '2023'
        }
      ]
    },
    {
      product: 'Hit Me Hard and Soft',
      artist: 'Billie Eilish',
      category: 'Alt-pop',
      year: '2024',
      status: 'active',
      available: 33,
      incoming: 0,
      image: 'hitmehardandsoft',
      price: 31,
      sold: 23,
      priceIncrease: 0,
      variants: 5,
      variantDetails: [
        {
          title: 'Hit Me Hard and Soft',
          available: 5,
          format: 'LP, Album',
          label: 'Darkroom',
          cat: '602465223651',
          country: 'Worldwide',
          year: '2024'
        },
        {
          title: 'Hit Me Hard and Soft',
          available: 2,
          format: 'CD, Album, Poster Insert',
          label: 'Darkroom',
          cat: '602465568943',
          country: 'Worldwide',
          year: '2024'
        },
        {
          title: 'Hit Me Hard and Soft',
          available: 1,
          format: 'CD, Album, Limited Edition, Signed',
          label: 'Darkroom',
          cat: '602465223671',
          country: 'Worldwide',
          year: '2024'
        },
        {
          title: 'Hit Me Hard and Soft',
          available: 10,
          format: 'LP, Album, White',
          label: 'Darkroom',
          cat: '602465270532',
          country: 'Worldwide',
          year: '2024'
        },
        {
          title: 'Hit Me Hard and Soft',
          available: 7,
          format: 'LP, Album, Blue',
          label: 'Darkroom',
          cat: '602465223612',
          country: 'Worldwide',
          year: '2024'
        }
      ]
    },
    {
      product: 'What Happened To The Heart?',
      artist: 'AURORA',
      category: 'Alt-pop',
      year: '2024',
      status: 'paused',
      available: 5,
      incoming: 0,
      image: 'whathappenedtotheheart',
      price: 25,
      sold: 10,
      priceIncrease: 0,
      variants: 2,
      variantDetails: [
        {
          title: 'What Happened To The Heart?',
          available: 5,
          format: '2×LP, Album, Stereo',
          label: 'Decca',
          cat: '651 5199',
          country: 'Worldwide',
          year: '2024'
        },
        {
          title: 'What Happened To The Heart?',
          available: 0,
          format: '2×LP, Album, Limited Edition, Stereo, Red w/ Blue Splatter',
          label: 'Decca',
          cat: '651 5203',
          country: 'Worldwide',
          year: '2024'
        }
      ]
    },
    {
      product: 'Group Theapy',
      artist: 'Above & Beyond',
      category: 'Trance',
      year: '2021',
      status: 'active',
      available: 2,
      incoming: 2,
      image: 'grouptherapy',
      price: 20,
      sold: 1,
      priceIncrease: 0,
      variants: 1,
      variantDetails: [
        {
          product: 'Group Therapy',
          available: 2,
          format: '2×LP, Album, Reissue, Gatefold',
          label: 'Anjunabeats',
          cat: 'ANJLP024',
          country: 'Europe',
          year: '2021'
        }
      ]
    }
  ]
  return data
}

export const getProductData = () => {
  const data = {
    data: [
      {
        product_variation_id: 6508,
        product_id: 30408,
        status: 'PUBLISHED',
        code: 'BMCLAS3',
        product_variation_name: null,
        product_name: 'AIR SMITH',
        product_group_name: 'Carabiners / Connectors',
        product_data: [
          {
            id: 31604,
            key: 'gate_type__locking_system',
            name: 'Gate Type / Locking System',
            value: {
              value: '3-Matic',
              source_value: '3-Matic'
            },
            unit: '',
            type: 'string',
            availableUnits: null,
            valueForDisplay: '3-Matic'
          },
          {
            id: 31605,
            key: 'web',
            name: 'Web',
            value: {
              value: 'https://sport.beal-planet.com/en/karabiners/1712-air-smith-3-matic.html',
              source_value:
                'https://sport.beal-planet.com/en/karabiners/1712-air-smith-3-matic.html'
            },
            unit: '',
            type: 'url',
            availableUnits: null,
            valueForDisplay:
              'https://sport.beal-planet.com/en/karabiners/1712-air-smith-3-matic.html'
          },
          {
            id: 31598,
            key: 'material',
            name: 'Material',
            value: {
              value: 'Steel',
              source_value: 'Steel'
            },
            unit: '',
            type: 'string',
            availableUnits: null,
            valueForDisplay: 'Steel'
          },
          {
            id: 31597,
            key: 'guarantee',
            name: 'Guarantee',
            value: {
              value: '1',
              source_value: null
            },
            unit: 'years',
            type: 'numeric',
            availableUnits: [
              {
                label: 'Years',
                value: 'years'
              }
            ],
            valueForDisplay: '1'
          },
          {
            id: 31593,
            key: 'image',
            name: 'Image',
            value: [
              {
                s3Key: 'photos/large/bd786cec-001d-449a-ab4a-e3be0255bf69.jpg',
                value: 'bd786cec-001d-449a-ab4a-e3be0255bf69.jpg',
                internalId: 5398,
                source_value: null
              }
            ],
            unit: '',
            type: 'photo',
            availableUnits: null,
            valueForDisplay: 'bd786cec-001d-449a-ab4a-e3be0255bf69.jpg'
          },
          {
            id: 31595,
            key: 'colour',
            name: 'Colour',
            value: {
              value: 'Silver',
              source_value: 'Silver'
            },
            unit: '',
            type: 'string',
            availableUnits: null,
            valueForDisplay: 'Silver'
          },
          {
            id: 31603,
            key: 'gate_actions',
            name: 'Gate Actions',
            value: {
              value: '0',
              source_value: null
            },
            unit: '',
            type: 'numeric',
            availableUnits: null,
            valueForDisplay: '0'
          },
          {
            id: 31594,
            key: 'certifications',
            name: 'Certifications',
            value: [
              {
                value: 'EN 362:2004',
                internalId: 37,
                source_value: null
              },
              {
                value: 'EN 12275:2013',
                internalId: 4,
                source_value: null
              }
            ],
            unit: '',
            type: 'certifications',
            availableUnits: null,
            valueForDisplay: 'EN 12275:2013 B,EN 362:2004 B/A/T'
          },
          {
            id: 31601,
            key: 'mbs_1',
            name: 'MBS (Minor Axis)',
            value: {
              value: '16',
              source_value: 16
            },
            unit: 'kN',
            type: 'numeric',
            availableUnits: [
              {
                label: 'Kilonewtons',
                value: 'kN'
              },
              {
                label: 'Pounds of force',
                value: 'lbf'
              }
            ],
            valueForDisplay: '16'
          },
          {
            id: 31600,
            key: 'mbs',
            name: 'MBS (Major Axis)',
            value: {
              value: '52',
              source_value: 52
            },
            unit: 'kN',
            type: 'numeric',
            availableUnits: [
              {
                label: 'Kilonewtons',
                value: 'kN'
              },
              {
                label: 'Pounds of force',
                value: 'lbf'
              }
            ],
            valueForDisplay: '52'
          },
          {
            id: 31596,
            key: 'weight',
            name: 'Weight',
            value: {
              value: '251',
              source_value: 251
            },
            unit: 'gm',
            type: 'numeric',
            availableUnits: [
              {
                label: 'Kilograms (kg)',
                value: 'kg'
              },
              {
                label: 'Grams (g)',
                value: 'g'
              },
              {
                label: 'Grams per meter (g/m)',
                value: 'g/m'
              },
              {
                label: 'Pounds (lb)',
                value: 'lb'
              },
              {
                label: 'Ounces (oz)',
                value: 'oz'
              }
            ],
            valueForDisplay: '251'
          },
          {
            id: 31602,
            key: 'mbs_1_2',
            name: 'MBS (Gate Open)',
            value: {
              value: '18',
              source_value: 18
            },
            unit: 'kN',
            type: 'numeric',
            availableUnits: [
              {
                label: 'Kilonewtons',
                value: 'kN'
              },
              {
                label: 'Pounds of force',
                value: 'lbf'
              }
            ],
            valueForDisplay: '18'
          },
          {
            id: 31599,
            key: 'instructions',
            name: 'Instructions',
            value: [
              {
                s3Key: 'pdfs/f46cfb4b-271f-4fcf-94a1-5a21fa84cc98.pdf',
                value: 'f46cfb4b-271f-4fcf-94a1-5a21fa84cc98.pdf',
                internalId: 5397,
                sourceName: '',
                source_value: null
              }
            ],
            unit: '',
            type: 'pdf',
            availableUnits: null,
            valueForDisplay: ''
          }
        ]
      },
      {
        product_variation_id: 6508,
        product_id: 30408,
        status: 'PUBLISHED',
        code: 'BMCLAS3',
        product_variation_name: null,
        product_name: 'AIR SMITH',
        product_group_name: 'Carabiners / Connectors',
        product_data: [
          {
            id: 31604,
            key: 'gate_type__locking_system',
            name: 'Gate Type / Locking System',
            value: {
              value: '3-Matic',
              source_value: '3-Matic'
            },
            unit: '',
            type: 'string',
            availableUnits: null,
            valueForDisplay: '3-Matic'
          },
          {
            id: 31605,
            key: 'web',
            name: 'Web',
            value: {
              value: 'https://sport.beal-planet.com/en/karabiners/1712-air-smith-3-matic.html',
              source_value:
                'https://sport.beal-planet.com/en/karabiners/1712-air-smith-3-matic.html'
            },
            unit: '',
            type: 'url',
            availableUnits: null,
            valueForDisplay:
              'https://sport.beal-planet.com/en/karabiners/1712-air-smith-3-matic.html'
          },
          {
            id: 31598,
            key: 'material',
            name: 'Material',
            value: {
              value: 'Steel',
              source_value: 'Steel'
            },
            unit: '',
            type: 'string',
            availableUnits: null,
            valueForDisplay: 'Steel'
          },
          {
            id: 31597,
            key: 'guarantee',
            name: 'Guarantee',
            value: {
              value: '1',
              source_value: null
            },
            unit: 'years',
            type: 'numeric',
            availableUnits: [
              {
                label: 'Years',
                value: 'years'
              }
            ],
            valueForDisplay: '1'
          },
          {
            id: 31593,
            key: 'image',
            name: 'Image',
            value: [
              {
                s3Key: 'photos/large/bd786cec-001d-449a-ab4a-e3be0255bf69.jpg',
                value: 'bd786cec-001d-449a-ab4a-e3be0255bf69.jpg',
                internalId: 5398,
                source_value: null
              }
            ],
            unit: '',
            type: 'photo',
            availableUnits: null,
            valueForDisplay: 'bd786cec-001d-449a-ab4a-e3be0255bf69.jpg'
          },
          {
            id: 31595,
            key: 'colour',
            name: 'Colour',
            value: {
              value: 'Silver',
              source_value: 'Silver'
            },
            unit: '',
            type: 'string',
            availableUnits: null,
            valueForDisplay: 'Silver'
          },
          {
            id: 31603,
            key: 'gate_actions',
            name: 'Gate Actions',
            value: {
              value: '0',
              source_value: null
            },
            unit: '',
            type: 'numeric',
            availableUnits: null,
            valueForDisplay: '0'
          },
          {
            id: 31594,
            key: 'certifications',
            name: 'Certifications',
            value: [
              {
                value: 'EN 362:2004',
                internalId: 37,
                source_value: null
              },
              {
                value: 'EN 12275:2013',
                internalId: 4,
                source_value: null
              }
            ],
            unit: '',
            type: 'certifications',
            availableUnits: null,
            valueForDisplay: 'EN 12275:2013 B,EN 362:2004 B/A/T'
          },
          {
            id: 31601,
            key: 'mbs_1',
            name: 'MBS (Minor Axis)',
            value: {
              value: '16',
              source_value: 16
            },
            unit: 'kN',
            type: 'numeric',
            availableUnits: [
              {
                label: 'Kilonewtons',
                value: 'kN'
              },
              {
                label: 'Pounds of force',
                value: 'lbf'
              }
            ],
            valueForDisplay: '16'
          },
          {
            id: 31600,
            key: 'mbs',
            name: 'MBS (Major Axis)',
            value: {
              value: '52',
              source_value: 52
            },
            unit: 'kN',
            type: 'numeric',
            availableUnits: [
              {
                label: 'Kilonewtons',
                value: 'kN'
              },
              {
                label: 'Pounds of force',
                value: 'lbf'
              }
            ],
            valueForDisplay: '52'
          },
          {
            id: 31596,
            key: 'weight',
            name: 'Weight',
            value: {
              value: '251',
              source_value: 251
            },
            unit: 'gm',
            type: 'numeric',
            availableUnits: [
              {
                label: 'Kilograms (kg)',
                value: 'kg'
              },
              {
                label: 'Grams (g)',
                value: 'g'
              },
              {
                label: 'Grams per meter (g/m)',
                value: 'g/m'
              },
              {
                label: 'Pounds (lb)',
                value: 'lb'
              },
              {
                label: 'Ounces (oz)',
                value: 'oz'
              }
            ],
            valueForDisplay: '251'
          },
          {
            id: 31602,
            key: 'mbs_1_2',
            name: 'MBS (Gate Open)',
            value: {
              value: '18',
              source_value: 18
            },
            unit: 'kN',
            type: 'numeric',
            availableUnits: [
              {
                label: 'Kilonewtons',
                value: 'kN'
              },
              {
                label: 'Pounds of force',
                value: 'lbf'
              }
            ],
            valueForDisplay: '18'
          },
          {
            id: 31599,
            key: 'instructions',
            name: 'Instructions',
            value: [
              {
                s3Key: 'pdfs/f46cfb4b-271f-4fcf-94a1-5a21fa84cc98.pdf',
                value: 'f46cfb4b-271f-4fcf-94a1-5a21fa84cc98.pdf',
                internalId: 5397,
                sourceName: '',
                source_value: null
              }
            ],
            unit: '',
            type: 'pdf',
            availableUnits: null,
            valueForDisplay: ''
          }
        ]
      },
      {
        product_variation_id: 9331,
        product_id: 29513,
        status: 'UNPUBLISHED',
        code: 'BC04.120.P',
        product_variation_name: 'ACCESSORY CORD, 4 mm, Pink',
        product_name: 'ACCESSORY CORD 4 MM',
        product_group_name: 'Ropes - Cord',
        product_data: [
          {
            id: 61291,
            key: 'rated_load',
            name: 'Rated Load',
            value: {
              value: '530 kg',
              string: true,
              source_value: '530 kg'
            },
            unit: 'kg',
            type: 'numeric',
            availableUnits: [
              {
                label: 'Kilograms (kg)',
                value: 'kg'
              },
              {
                label: 'Grams (gm)',
                value: 'g'
              },
              {
                label: 'Pounds (lb)',
                value: 'lb'
              },
              {
                label: 'Ounces (oz)',
                value: 'oz'
              },
              {
                label: 'Kilonewtons (kN)',
                value: 'kN'
              }
            ],
            valueForDisplay: null
          },
          {
            id: 61294,
            key: 'image',
            name: 'Image',
            value: [
              {
                s3Key: 'photos/75154f4e-8c74-4206-bc10-6921f2b9e75c.png',
                value: '75154f4e-8c74-4206-bc10-6921f2b9e75c.png',
                internalId: 10951,
                source_value: '4mm-p.png'
              }
            ],
            unit: '',
            type: 'photo',
            availableUnits: null,
            valueForDisplay: null
          },
          {
            id: 61290,
            key: 'mbs_1_2_3',
            name: 'MBS',
            value: {
              value: '400 kg',
              string: true,
              source_value: '400 kg'
            },
            unit: 'kN',
            type: 'numeric',
            availableUnits: [
              {
                label: 'Kilonewtons',
                value: 'kN'
              },
              {
                label: 'Pounds of force',
                value: 'lbf'
              },
              {
                label: 'Tons',
                value: 't'
              }
            ],
            valueForDisplay: null
          },
          {
            id: 61287,
            key: 'material',
            name: 'Material',
            value: {
              value: 'Polyamide',
              string: true,
              source_value: 'Polyamide'
            },
            unit: '',
            type: 'string',
            availableUnits: null,
            valueForDisplay: 'Polyamide'
          },
          {
            id: 61293,
            key: 'certifications',
            name: 'Certifications',
            value: [
              {
                value: 'EN 564:2014',
                internalId: 43,
                source_value: null
              }
            ],
            unit: '',
            type: 'certifications',
            availableUnits: null,
            valueForDisplay: 'EN 564, UIAA'
          },
          {
            id: 303222,
            key: 'braid_plait_strand',
            name: 'Braid/Plait/Strand',
            value: {
              value: '16'
            },
            unit: '',
            type: 'string',
            availableUnits: null,
            valueForDisplay: '16'
          },
          {
            id: 303223,
            key: 'length',
            name: 'Length',
            value: {
              unit: 'm',
              value: '120'
            },
            unit: 'm',
            type: 'numeric',
            availableUnits: [
              {
                label: 'Millimeters',
                value: 'mm'
              },
              {
                label: 'Centimeters',
                value: 'cm'
              },
              {
                label: 'Meters',
                value: 'm'
              },
              {
                label: 'Feet',
                value: 'ft'
              },
              {
                label: 'Inches',
                value: 'in'
              }
            ],
            valueForDisplay: '120'
          },
          {
            id: 303225,
            key: 'sheath_material',
            name: 'Sheath Material',
            value: {
              value: 'Polyamid (PA)'
            },
            unit: '',
            type: 'string',
            availableUnits: null,
            valueForDisplay: 'Polyamid (PA)'
          },
          {
            id: 61288,
            key: 'colour',
            name: 'Colour',
            value: {
              value: 'Pink',
              string: true,
              source_value: 'Pink'
            },
            unit: '',
            type: 'string',
            availableUnits: null,
            valueForDisplay: 'Pink'
          },
          {
            id: 303221,
            key: 'core_material',
            name: 'Core Material',
            value: {
              value: 'Polyamid (PA)'
            },
            unit: '',
            type: 'string',
            availableUnits: null,
            valueForDisplay: 'Polyamid (PA)'
          },
          {
            id: 61292,
            key: 'manufacturer',
            name: 'Manufacturer',
            value: {
              value: 'BEAL',
              string: true,
              source_value: 'Beal'
            },
            unit: null,
            type: 'string',
            availableUnits: [],
            valueForDisplay: 'BEAL'
          },
          {
            id: 61286,
            key: 'weight_by_length',
            name: 'Weight by Length',
            value: {
              unit: 'g/m',
              value: '10.9',
              source_value: '11 g/m'
            },
            unit: null,
            type: 'numeric',
            availableUnits: [
              {
                label: 'Grams per meter (g/m)',
                value: 'g/m'
              },
              {
                label: 'Pounds per 100 FT',
                value: 'lbs/100ft'
              }
            ],
            valueForDisplay: '10.9'
          },
          {
            id: 359327,
            key: 'notified_body',
            name: 'CE Notified Body',
            value: {
              value: '0598'
            },
            unit: null,
            type: 'string',
            availableUnits: null,
            valueForDisplay: '0598'
          },
          {
            id: 303224,
            key: 'mbs_metric',
            name: 'MBS Metric',
            value: {
              value: '400'
            },
            unit: '',
            type: 'numeric',
            availableUnits: [
              {
                label: 'Kilonewtons (kN)',
                value: 'kN'
              }
            ],
            valueForDisplay: '400'
          },
          {
            id: 61289,
            key: 'diameter',
            name: 'Diameter',
            value: {
              unit: 'mm',
              value: '4',
              source_value: '4 mm'
            },
            unit: 'mm',
            type: 'numeric',
            availableUnits: [
              {
                label: 'Millimeters',
                value: 'mm'
              },
              {
                label: 'Centimeters',
                value: 'cm'
              },
              {
                label: 'Meters',
                value: 'm'
              },
              {
                label: 'Feet',
                value: 'ft'
              },
              {
                label: 'Inches',
                value: 'in'
              }
            ],
            valueForDisplay: '4'
          },
          {
            id: 61295,
            key: 'uploads_1',
            name: 'Uploads',
            value: [
              {
                s3Key: 'pdfs/8f1c6eb3-5f04-47e3-9fa3-1a088d54f722.pdf',
                value: '8f1c6eb3-5f04-47e3-9fa3-1a088d54f722.pdf',
                internalId: 10954,
                sourceName: 'CORDELETTE_NOTICE.pdf',
                source_value: 'CORDELETTE_NOTICE.pdf'
              },
              {
                s3Key: 'pdfs/8b0ea280-71f1-4090-82c5-aad419fa48d8.pdf',
                value: '8b0ea280-71f1-4090-82c5-aad419fa48d8.pdf',
                internalId: 10953,
                sourceName: 'BC04_2020_Declaration_of_Conformity.pdf',
                source_value: 'BC04_2020_Declaration_of_Conformity.pdf'
              },
              {
                s3Key: 'pdfs/452f8d13-38eb-46fd-85f0-7c39cec1edfe.pdf',
                value: '452f8d13-38eb-46fd-85f0-7c39cec1edfe.pdf',
                internalId: 10952,
                sourceName: 'BC04_2021_UIAA-Certification.pdf',
                source_value: 'BC04_2021_UIAA-Certification.pdf'
              }
            ],
            unit: null,
            type: 'pdf',
            availableUnits: [],
            valueForDisplay: null
          }
        ]
      },
      {
        product_variation_id: 9332,
        product_id: 29516,
        status: 'PUBLISHED',
        code: 'BC06.120.O',
        product_variation_name: 'ACCESSORY CORD, 6 mm, Orange',
        product_name: 'ACCESSORY CORD 6 MM',
        product_group_name: 'Ropes - Cord',
        product_data: [
          {
            id: 61297,
            key: 'material',
            name: 'Material',
            value: {
              value: 'Polyamide',
              string: true,
              source_value: 'Polyamide'
            },
            unit: '',
            type: 'string',
            availableUnits: null,
            valueForDisplay: 'Polyamide'
          },
          {
            id: 61300,
            key: 'mbs_1_2_3',
            name: 'MBS',
            value: {
              value: '810 kg',
              string: true,
              source_value: '810 kg'
            },
            unit: 'kN',
            type: 'numeric',
            availableUnits: [
              {
                label: 'Kilonewtons',
                value: 'kN'
              },
              {
                label: 'Pounds of force',
                value: 'lbf'
              },
              {
                label: 'Tons',
                value: 't'
              }
            ],
            valueForDisplay: null
          },
          {
            id: 61301,
            key: 'rated_load',
            name: 'Rated Load',
            value: {
              value: '1200 kg',
              string: true,
              source_value: '1200 kg'
            },
            unit: 'kg',
            type: 'numeric',
            availableUnits: [
              {
                label: 'Kilograms (kg)',
                value: 'kg'
              },
              {
                label: 'Grams (gm)',
                value: 'g'
              },
              {
                label: 'Pounds (lb)',
                value: 'lb'
              },
              {
                label: 'Ounces (oz)',
                value: 'oz'
              },
              {
                label: 'Kilonewtons (kN)',
                value: 'kN'
              }
            ],
            valueForDisplay: null
          },
          {
            id: 61304,
            key: 'image',
            name: 'Image',
            value: [
              {
                s3Key: 'photos/de832710-4a04-4645-9aa8-9c76b3fe51e7.png',
                value: 'de832710-4a04-4645-9aa8-9c76b3fe51e7.png',
                internalId: 10955,
                source_value: '6mm-o.png'
              }
            ],
            unit: '',
            type: 'photo',
            availableUnits: null,
            valueForDisplay: null
          },
          {
            id: 61298,
            key: 'colour',
            name: 'Colour',
            value: {
              value: 'Orange',
              string: true,
              source_value: 'Orange'
            },
            unit: '',
            type: 'string',
            availableUnits: null,
            valueForDisplay: 'Orange'
          },
          {
            id: 61303,
            key: 'certifications',
            name: 'Certifications',
            value: [
              {
                value: 'EN 564:2014',
                internalId: 43,
                source_value: null
              }
            ],
            unit: '',
            type: 'certifications',
            availableUnits: null,
            valueForDisplay: 'EN 564, UIAA'
          },
          {
            id: 303480,
            key: 'mbs_metric',
            name: 'MBS Metric',
            value: {
              value: '810'
            },
            unit: '',
            type: 'numeric',
            availableUnits: [
              {
                label: 'Kilonewtons (kN)',
                value: 'kN'
              }
            ],
            valueForDisplay: '810'
          },
          {
            id: 303478,
            key: 'core_material',
            name: 'Core Material',
            value: {
              value: 'Polyamid (PA)'
            },
            unit: '',
            type: 'string',
            availableUnits: null,
            valueForDisplay: 'Polyamid (PA)'
          },
          {
            id: 61299,
            key: 'diameter',
            name: 'Diameter',
            value: {
              unit: 'mm',
              value: '6',
              source_value: '6 mm'
            },
            unit: 'mm',
            type: 'numeric',
            availableUnits: [
              {
                label: 'Millimeters',
                value: 'mm'
              },
              {
                label: 'Centimeters',
                value: 'cm'
              },
              {
                label: 'Meters',
                value: 'm'
              },
              {
                label: 'Feet',
                value: 'ft'
              },
              {
                label: 'Inches',
                value: 'in'
              }
            ],
            valueForDisplay: '6'
          },
          {
            id: 303477,
            key: 'braid_plait_strand',
            name: 'Braid/Plait/Strand',
            value: {
              value: '16'
            },
            unit: '',
            type: 'string',
            availableUnits: null,
            valueForDisplay: '16'
          },
          {
            id: 303479,
            key: 'length',
            name: 'Length',
            value: {
              unit: 'm',
              value: '120'
            },
            unit: 'm',
            type: 'numeric',
            availableUnits: [
              {
                label: 'Millimeters',
                value: 'mm'
              },
              {
                label: 'Centimeters',
                value: 'cm'
              },
              {
                label: 'Meters',
                value: 'm'
              },
              {
                label: 'Feet',
                value: 'ft'
              },
              {
                label: 'Inches',
                value: 'in'
              }
            ],
            valueForDisplay: '120'
          },
          {
            id: 303481,
            key: 'sheath_material',
            name: 'Sheath Material',
            value: {
              value: 'Polyamid (PA)'
            },
            unit: '',
            type: 'string',
            availableUnits: null,
            valueForDisplay: 'Polyamid (PA)'
          },
          {
            id: 61302,
            key: 'manufacturer',
            name: 'Manufacturer',
            value: {
              value: 'BEAL',
              string: true,
              source_value: 'Beal'
            },
            unit: null,
            type: 'string',
            availableUnits: [],
            valueForDisplay: 'BEAL'
          },
          {
            id: 61305,
            key: 'uploads_1',
            name: 'Uploads',
            value: [
              {
                s3Key: 'pdfs/77a001c9-1c4c-4315-874f-b3404f1396b9.pdf',
                value: '77a001c9-1c4c-4315-874f-b3404f1396b9.pdf',
                internalId: 10958,
                sourceName: 'CORDELETTE_NOTICE.pdf',
                source_value: 'CORDELETTE_NOTICE.pdf'
              },
              {
                s3Key: 'pdfs/114e9d0c-de46-48d5-8874-1cabc202c09c.pdf',
                value: '114e9d0c-de46-48d5-8874-1cabc202c09c.pdf',
                internalId: 10957,
                sourceName: 'BC06_2020_Declaration_of_Conformity.pdf',
                source_value: 'BC06_2020_Declaration_of_Conformity.pdf'
              },
              {
                s3Key: 'pdfs/e5f6a30a-2a4b-4e5a-b8ea-4b0409cb13d0.pdf',
                value: 'e5f6a30a-2a4b-4e5a-b8ea-4b0409cb13d0.pdf',
                internalId: 10956,
                sourceName: 'BC06_2021_UIAA-Certification.pdf',
                source_value: 'BC06_2021_UIAA-Certification.pdf'
              }
            ],
            unit: null,
            type: 'pdf',
            availableUnits: [],
            valueForDisplay: null
          }
        ]
      },
      {
        product_variation_id: 9333,
        product_id: 29517,
        status: 'PUBLISHED',
        code: 'BC08.200.R',
        product_variation_name: 'ACCESSORY CORD, 8 mm, Red',
        product_name: 'ACCESSORY CORD 8 MM',
        product_group_name: 'Ropes - Cord',
        product_data: [
          {
            id: 61307,
            key: 'material',
            name: 'Material',
            value: {
              value: 'Polyamide',
              string: true,
              source_value: 'Polyamide'
            },
            unit: '',
            type: 'string',
            availableUnits: null,
            valueForDisplay: 'Polyamide'
          },
          {
            id: 61310,
            key: 'mbs_1_2_3',
            name: 'MBS',
            value: {
              value: '1530 kg',
              string: true,
              source_value: '1530 kg'
            },
            unit: 'kN',
            type: 'numeric',
            availableUnits: [
              {
                label: 'Kilonewtons',
                value: 'kN'
              },
              {
                label: 'Pounds of force',
                value: 'lbf'
              },
              {
                label: 'Tons',
                value: 't'
              }
            ],
            valueForDisplay: null
          },
          {
            id: 61311,
            key: 'rated_load',
            name: 'Rated Load',
            value: {
              value: '2200 kg',
              string: true,
              source_value: '2200 kg'
            },
            unit: 'kg',
            type: 'numeric',
            availableUnits: [
              {
                label: 'Kilograms (kg)',
                value: 'kg'
              },
              {
                label: 'Grams (gm)',
                value: 'g'
              },
              {
                label: 'Pounds (lb)',
                value: 'lb'
              },
              {
                label: 'Ounces (oz)',
                value: 'oz'
              },
              {
                label: 'Kilonewtons (kN)',
                value: 'kN'
              }
            ],
            valueForDisplay: null
          },
          {
            id: 61314,
            key: 'image',
            name: 'Image',
            value: [
              {
                s3Key: 'photos/0965ade9-dee5-483c-890e-5bdf0ec90e0a.png',
                value: '0965ade9-dee5-483c-890e-5bdf0ec90e0a.png',
                internalId: 10959,
                source_value: '8mm-r.png'
              }
            ],
            unit: '',
            type: 'photo',
            availableUnits: null,
            valueForDisplay: null
          },
          {
            id: 61313,
            key: 'certifications',
            name: 'Certifications',
            value: [
              {
                value: 'EN 564:2014',
                internalId: 43,
                source_value: null
              }
            ],
            unit: '',
            type: 'certifications',
            availableUnits: null,
            valueForDisplay: 'EN 564, UIAA'
          },
          {
            id: 61308,
            key: 'colour',
            name: 'Colour',
            value: {
              value: 'Red',
              string: true,
              source_value: 'Red'
            },
            unit: '',
            type: 'string',
            availableUnits: null,
            valueForDisplay: 'Red'
          },
          {
            id: 303776,
            key: 'core_material',
            name: 'Core Material',
            value: {
              value: 'Polyamid (PA)'
            },
            unit: '',
            type: 'string',
            availableUnits: null,
            valueForDisplay: 'Polyamid (PA)'
          },
          {
            id: 303775,
            key: 'sheath_material',
            name: 'Sheath Material',
            value: {
              value: 'Polyamid (PA)'
            },
            unit: '',
            type: 'string',
            availableUnits: null,
            valueForDisplay: 'Polyamid (PA)'
          },
          {
            id: 303777,
            key: 'length',
            name: 'Length',
            value: {
              unit: 'm',
              value: '200'
            },
            unit: 'm',
            type: 'numeric',
            availableUnits: [
              {
                label: 'Millimeters',
                value: 'mm'
              },
              {
                label: 'Centimeters',
                value: 'cm'
              },
              {
                label: 'Meters',
                value: 'm'
              },
              {
                label: 'Feet',
                value: 'ft'
              },
              {
                label: 'Inches',
                value: 'in'
              }
            ],
            valueForDisplay: '200'
          },
          {
            id: 303773,
            key: 'braid_plait_strand',
            name: 'Braid/Plait/Strand',
            value: {
              value: '32'
            },
            unit: '',
            type: 'string',
            availableUnits: null,
            valueForDisplay: '32'
          },
          {
            id: 303774,
            key: 'mbs_metric',
            name: 'MBS Metric',
            value: {
              value: '1530'
            },
            unit: '',
            type: 'numeric',
            availableUnits: [
              {
                label: 'Kilonewtons (kN)',
                value: 'kN'
              }
            ],
            valueForDisplay: '1530'
          },
          {
            id: 61306,
            key: 'weight',
            name: 'Weight',
            value: {
              value: '41.9',
              string: true,
              source_value: '40 g/m'
            },
            unit: 'gm',
            type: 'numeric',
            availableUnits: [
              {
                label: 'Kilograms (kg)',
                value: 'kg'
              },
              {
                label: 'Grams (g)',
                value: 'g'
              },
              {
                label: 'Grams per meter (g/m)',
                value: 'g/m'
              },
              {
                label: 'Pounds (lb)',
                value: 'lb'
              },
              {
                label: 'Ounces (oz)',
                value: 'oz'
              }
            ],
            valueForDisplay: '41.9'
          },
          {
            id: 61309,
            key: 'diameter',
            name: 'Diameter',
            value: {
              unit: 'mm',
              value: '8',
              source_value: '8 mm'
            },
            unit: 'mm',
            type: 'numeric',
            availableUnits: [
              {
                label: 'Millimeters',
                value: 'mm'
              },
              {
                label: 'Centimeters',
                value: 'cm'
              },
              {
                label: 'Meters',
                value: 'm'
              },
              {
                label: 'Feet',
                value: 'ft'
              },
              {
                label: 'Inches',
                value: 'in'
              }
            ],
            valueForDisplay: '8'
          },
          {
            id: 61312,
            key: 'manufacturer',
            name: 'Manufacturer',
            value: {
              value: 'BEAL',
              string: true,
              source_value: 'Beal'
            },
            unit: null,
            type: 'string',
            availableUnits: [],
            valueForDisplay: 'BEAL'
          },
          {
            id: 61315,
            key: 'uploads_1',
            name: 'Uploads',
            value: [
              {
                s3Key: 'pdfs/ed3602d7-1cd4-4497-87f4-1c6a5e00c822.pdf',
                value: 'ed3602d7-1cd4-4497-87f4-1c6a5e00c822.pdf',
                internalId: 10962,
                sourceName: 'CORDELETTE_NOTICE.pdf',
                source_value: 'CORDELETTE_NOTICE.pdf'
              },
              {
                s3Key: 'pdfs/fd35e999-9314-4536-bc3f-7e23733b5de5.pdf',
                value: 'fd35e999-9314-4536-bc3f-7e23733b5de5.pdf',
                internalId: 10961,
                sourceName: 'BC08_2020_Declaration_of_Conformity.pdf',
                source_value: 'BC08_2020_Declaration_of_Conformity.pdf'
              },
              {
                s3Key: 'pdfs/2bfc2d33-2e60-46f0-8a2c-01517d936a2c.pdf',
                value: '2bfc2d33-2e60-46f0-8a2c-01517d936a2c.pdf',
                internalId: 10960,
                sourceName: 'BC08_2021_UIAA-Certification.pdf',
                source_value: 'BC08_2021_UIAA-Certification.pdf'
              }
            ],
            unit: null,
            type: 'pdf',
            availableUnits: [],
            valueForDisplay: null
          }
        ]
      },
      {
        product_variation_id: 9334,
        product_id: 29511,
        status: 'PUBLISHED',
        code: 'BC02.120.Pk',
        product_variation_name: 'ACCESSORY CORD 2 MM, PINK',
        product_name: 'ACCESSORY CORD 2 MM',
        product_group_name: 'Ropes - Cord',
        product_data: [
          {
            id: 61321,
            key: 'mbs_1_2_3',
            name: 'MBS',
            value: {
              value: '70 kg',
              string: true,
              source_value: '70 kg'
            },
            unit: 'kN',
            type: 'numeric',
            availableUnits: [
              {
                label: 'Kilonewtons',
                value: 'kN'
              },
              {
                label: 'Pounds of force',
                value: 'lbf'
              },
              {
                label: 'Tons',
                value: 't'
              }
            ],
            valueForDisplay: null
          },
          {
            id: 61316,
            key: 'weight',
            name: 'Weight',
            value: {
              value: '2.4 g/m',
              string: true,
              source_value: '2.4 g/m'
            },
            unit: 'gm',
            type: 'numeric',
            availableUnits: [
              {
                label: 'Kilograms (kg)',
                value: 'kg'
              },
              {
                label: 'Grams (g)',
                value: 'g'
              },
              {
                label: 'Grams per meter (g/m)',
                value: 'g/m'
              },
              {
                label: 'Pounds (lb)',
                value: 'lb'
              },
              {
                label: 'Ounces (oz)',
                value: 'oz'
              }
            ],
            valueForDisplay: null
          },
          {
            id: 61318,
            key: 'colour',
            name: 'Colour',
            value: {
              value: 'Pink',
              string: true,
              source_value: 'Pink'
            },
            unit: '',
            type: 'string',
            availableUnits: null,
            valueForDisplay: null
          },
          {
            id: 61317,
            key: 'material',
            name: 'Material',
            value: {
              value: 'Polyamide',
              string: true,
              source_value: 'Polyamide'
            },
            unit: '',
            type: 'string',
            availableUnits: null,
            valueForDisplay: 'Polyamide'
          },
          {
            id: 61319,
            key: 'diameter',
            name: 'Diameter',
            value: {
              unit: 'mm',
              value: '2',
              source_value: '2 mm'
            },
            unit: 'mm',
            type: 'numeric',
            availableUnits: [
              {
                label: 'Millimeters',
                value: 'mm'
              },
              {
                label: 'Centimeters',
                value: 'cm'
              },
              {
                label: 'Meters',
                value: 'm'
              },
              {
                label: 'Feet',
                value: 'ft'
              },
              {
                label: 'Inches',
                value: 'in'
              }
            ],
            valueForDisplay: '2'
          },
          {
            id: 61323,
            key: 'image',
            name: 'Image',
            value: [
              {
                s3Key: 'photos/239c11ac-e50c-48c1-8eeb-c80611c6f502.png',
                value: '239c11ac-e50c-48c1-8eeb-c80611c6f502.png',
                internalId: 10963,
                source_value: '2mm-p.png'
              }
            ],
            unit: '',
            type: 'photo',
            availableUnits: null,
            valueForDisplay: null
          },
          {
            id: 61320,
            key: 'length',
            name: 'Length',
            value: {
              unit: 'm',
              value: '120',
              source_value: '120 m'
            },
            unit: 'm',
            type: 'numeric',
            availableUnits: [
              {
                label: 'Millimeters',
                value: 'mm'
              },
              {
                label: 'Centimeters',
                value: 'cm'
              },
              {
                label: 'Meters',
                value: 'm'
              },
              {
                label: 'Feet',
                value: 'ft'
              },
              {
                label: 'Inches',
                value: 'in'
              }
            ],
            valueForDisplay: '120'
          },
          {
            id: 61322,
            key: 'manufacturer',
            name: 'Manufacturer',
            value: {
              value: 'BEAL',
              string: true,
              source_value: 'Beal'
            },
            unit: null,
            type: 'string',
            availableUnits: [],
            valueForDisplay: 'BEAL'
          }
        ]
      },
      {
        product_variation_id: 9335,
        product_id: 29514,
        status: 'PUBLISHED',
        code: 'BC03.120.A',
        product_variation_name: 'ACCESSORY CORD 3 MM, ANISE',
        product_name: 'ACCESSORY CORD 3 MM',
        product_group_name: 'Ropes - Cord',
        product_data: [
          {
            id: 61329,
            key: 'mbs_1_2_3',
            name: 'MBS',
            value: {
              value: '180 kg',
              string: true,
              source_value: '180 kg'
            },
            unit: 'kN',
            type: 'numeric',
            availableUnits: [
              {
                label: 'Kilonewtons',
                value: 'kN'
              },
              {
                label: 'Pounds of force',
                value: 'lbf'
              },
              {
                label: 'Tons',
                value: 't'
              }
            ],
            valueForDisplay: null
          },
          {
            id: 61331,
            key: 'image',
            name: 'Image',
            value: [
              {
                s3Key: 'photos/eddff2bd-d9d8-4666-a773-cf93f88b75cd.png',
                value: 'eddff2bd-d9d8-4666-a773-cf93f88b75cd.png',
                internalId: 10964,
                source_value: '3mm-a.png'
              }
            ],
            unit: '',
            type: 'photo',
            availableUnits: null,
            valueForDisplay: null
          },
          {
            id: 61325,
            key: 'material',
            name: 'Material',
            value: {
              value: 'Polyamide',
              string: true,
              source_value: 'Polyamide'
            },
            unit: '',
            type: 'string',
            availableUnits: null,
            valueForDisplay: 'Polyamide'
          },
          {
            id: 303179,
            key: 'braid_plait_strand',
            name: 'Braid/Plait/Strand',
            value: {
              value: '16'
            },
            unit: '',
            type: 'string',
            availableUnits: null,
            valueForDisplay: '16'
          },
          {
            id: 303180,
            key: 'mbs_metric',
            name: 'MBS Metric',
            value: {
              value: '180'
            },
            unit: '',
            type: 'numeric',
            availableUnits: [
              {
                label: 'Kilonewtons (kN)',
                value: 'kN'
              }
            ],
            valueForDisplay: '180'
          },
          {
            id: 303177,
            key: 'sheath_material',
            name: 'Sheath Material',
            value: {
              value: 'Polyamid (PA)'
            },
            unit: '',
            type: 'string',
            availableUnits: null,
            valueForDisplay: 'Polyamid (PA)'
          },
          {
            id: 61327,
            key: 'diameter',
            name: 'Diameter',
            value: {
              unit: 'mm',
              value: '3',
              source_value: '3 mm'
            },
            unit: 'mm',
            type: 'numeric',
            availableUnits: [
              {
                label: 'Millimeters',
                value: 'mm'
              },
              {
                label: 'Centimeters',
                value: 'cm'
              },
              {
                label: 'Meters',
                value: 'm'
              },
              {
                label: 'Feet',
                value: 'ft'
              },
              {
                label: 'Inches',
                value: 'in'
              }
            ],
            valueForDisplay: '3'
          },
          {
            id: 61324,
            key: 'weight',
            name: 'Weight',
            value: {
              value: '6.5',
              string: true,
              source_value: '6.5 g/m'
            },
            unit: 'gm',
            type: 'numeric',
            availableUnits: [
              {
                label: 'Kilograms (kg)',
                value: 'kg'
              },
              {
                label: 'Grams (g)',
                value: 'g'
              },
              {
                label: 'Grams per meter (g/m)',
                value: 'g/m'
              },
              {
                label: 'Pounds (lb)',
                value: 'lb'
              },
              {
                label: 'Ounces (oz)',
                value: 'oz'
              }
            ],
            valueForDisplay: '6.5'
          },
          {
            id: 61326,
            key: 'colour',
            name: 'Colour',
            value: {
              value: 'Anis',
              string: true,
              source_value: 'Anise'
            },
            unit: '',
            type: 'string',
            availableUnits: null,
            valueForDisplay: 'Anis'
          },
          {
            id: 61330,
            key: 'manufacturer',
            name: 'Manufacturer',
            value: {
              value: 'BEAL',
              string: true,
              source_value: 'Beal'
            },
            unit: null,
            type: 'string',
            availableUnits: [],
            valueForDisplay: 'BEAL'
          },
          {
            id: 303178,
            key: 'core_material',
            name: 'Core Material',
            value: {
              value: 'Polyamid (PA)'
            },
            unit: '',
            type: 'string',
            availableUnits: null,
            valueForDisplay: 'Polyamid (PA)'
          },
          {
            id: 61328,
            key: 'length',
            name: 'Length',
            value: {
              unit: 'm',
              value: '120',
              source_value: '120 m'
            },
            unit: 'm',
            type: 'numeric',
            availableUnits: [
              {
                label: 'Millimeters',
                value: 'mm'
              },
              {
                label: 'Centimeters',
                value: 'cm'
              },
              {
                label: 'Meters',
                value: 'm'
              },
              {
                label: 'Feet',
                value: 'ft'
              },
              {
                label: 'Inches',
                value: 'in'
              }
            ],
            valueForDisplay: '120'
          }
        ]
      },
      {
        product_variation_id: 9351,
        product_id: 29518,
        status: 'PUBLISHED',
        code: 'BC07.120.O',
        product_variation_name: 'ACCESSORY CORD, 7 mm, Orange',
        product_name: 'ACCESSORY CORD 7 MM',
        product_group_name: 'Ropes - Cord',
        product_data: [
          {
            id: 61458,
            key: 'material',
            name: 'Material',
            value: {
              value: 'Polyamide',
              string: true,
              source_value: 'Polyamide'
            },
            unit: '',
            type: 'string',
            availableUnits: null,
            valueForDisplay: 'Polyamide'
          },
          {
            id: 61461,
            key: 'mbs_1_2_3',
            name: 'MBS',
            value: {
              value: '1170 kg',
              string: true,
              source_value: '1170 kg'
            },
            unit: 'kN',
            type: 'numeric',
            availableUnits: [
              {
                label: 'Kilonewtons',
                value: 'kN'
              },
              {
                label: 'Pounds of force',
                value: 'lbf'
              },
              {
                label: 'Tons',
                value: 't'
              }
            ],
            valueForDisplay: null
          },
          {
            id: 61462,
            key: 'rated_load',
            name: 'Rated Load',
            value: {
              value: '1680 kg',
              string: true,
              source_value: '1680 kg'
            },
            unit: 'kg',
            type: 'numeric',
            availableUnits: [
              {
                label: 'Kilograms (kg)',
                value: 'kg'
              },
              {
                label: 'Grams (gm)',
                value: 'g'
              },
              {
                label: 'Pounds (lb)',
                value: 'lb'
              },
              {
                label: 'Ounces (oz)',
                value: 'oz'
              },
              {
                label: 'Kilonewtons (kN)',
                value: 'kN'
              }
            ],
            valueForDisplay: null
          },
          {
            id: 61465,
            key: 'image',
            name: 'Image',
            value: [
              {
                s3Key: 'photos/2ff3c33f-828c-46bf-9dfd-dd4d1e282e04.png',
                value: '2ff3c33f-828c-46bf-9dfd-dd4d1e282e04.png',
                internalId: 10998,
                source_value: '7mm-or.png'
              }
            ],
            unit: '',
            type: 'photo',
            availableUnits: null,
            valueForDisplay: null
          },
          {
            id: 61457,
            key: 'weight',
            name: 'Weight',
            value: {
              value: '29.9',
              string: true,
              source_value: '31 g/m'
            },
            unit: 'gm',
            type: 'numeric',
            availableUnits: [
              {
                label: 'Kilograms (kg)',
                value: 'kg'
              },
              {
                label: 'Grams (g)',
                value: 'g'
              },
              {
                label: 'Grams per meter (g/m)',
                value: 'g/m'
              },
              {
                label: 'Pounds (lb)',
                value: 'lb'
              },
              {
                label: 'Ounces (oz)',
                value: 'oz'
              }
            ],
            valueForDisplay: '29.9'
          },
          {
            id: 303655,
            key: 'length',
            name: 'Length',
            value: {
              unit: 'm',
              value: '120'
            },
            unit: 'm',
            type: 'numeric',
            availableUnits: [
              {
                label: 'Millimeters',
                value: 'mm'
              },
              {
                label: 'Centimeters',
                value: 'cm'
              },
              {
                label: 'Meters',
                value: 'm'
              },
              {
                label: 'Feet',
                value: 'ft'
              },
              {
                label: 'Inches',
                value: 'in'
              }
            ],
            valueForDisplay: '120'
          },
          {
            id: 303653,
            key: 'braid_plait_strand',
            name: 'Braid/Plait/Strand',
            value: {
              value: '24'
            },
            unit: '',
            type: 'string',
            availableUnits: null,
            valueForDisplay: '24'
          },
          {
            id: 303654,
            key: 'core_material',
            name: 'Core Material',
            value: {
              value: 'Polyamid (PA)'
            },
            unit: '',
            type: 'string',
            availableUnits: null,
            valueForDisplay: 'Polyamid (PA)'
          },
          {
            id: 61463,
            key: 'manufacturer',
            name: 'Manufacturer',
            value: {
              value: 'BEAL',
              string: true,
              source_value: 'Beal'
            },
            unit: null,
            type: 'string',
            availableUnits: [],
            valueForDisplay: 'BEAL'
          },
          {
            id: 61459,
            key: 'colour',
            name: 'Colour',
            value: {
              value: 'Orange',
              string: true,
              source_value: 'Orange'
            },
            unit: '',
            type: 'string',
            availableUnits: null,
            valueForDisplay: 'Orange'
          },
          {
            id: 303657,
            key: 'mbs_metric',
            name: 'MBS Metric',
            value: {
              value: '1170'
            },
            unit: '',
            type: 'numeric',
            availableUnits: [
              {
                label: 'Kilonewtons (kN)',
                value: 'kN'
              }
            ],
            valueForDisplay: '1170'
          },
          {
            id: 303656,
            key: 'sheath_material',
            name: 'Sheath Material',
            value: {
              value: 'Polyamid (PA)'
            },
            unit: '',
            type: 'string',
            availableUnits: null,
            valueForDisplay: 'Polyamid (PA)'
          },
          {
            id: 61460,
            key: 'diameter',
            name: 'Diameter',
            value: {
              unit: 'mm',
              value: '7',
              source_value: '7 mm'
            },
            unit: 'mm',
            type: 'numeric',
            availableUnits: [
              {
                label: 'Millimeters',
                value: 'mm'
              },
              {
                label: 'Centimeters',
                value: 'cm'
              },
              {
                label: 'Meters',
                value: 'm'
              },
              {
                label: 'Feet',
                value: 'ft'
              },
              {
                label: 'Inches',
                value: 'in'
              }
            ],
            valueForDisplay: '7'
          },
          {
            id: 61464,
            key: 'certifications',
            name: 'Certifications',
            value: [
              {
                value: 'EN 564:2014',
                internalId: 43,
                source_value: null
              }
            ],
            unit: '',
            type: 'certifications',
            availableUnits: null,
            valueForDisplay: 'EN 564, UIAA'
          },
          {
            id: 61466,
            key: 'uploads_1',
            name: 'Uploads',
            value: [
              {
                s3Key: 'pdfs/5a2b1652-80c0-4fc9-99db-c80e38510d1d.pdf',
                value: '5a2b1652-80c0-4fc9-99db-c80e38510d1d.pdf',
                internalId: 11001,
                sourceName: 'CORDELETTE_NOTICE.pdf',
                source_value: 'CORDELETTE_NOTICE.pdf'
              },
              {
                s3Key: 'pdfs/2cda0151-396c-4e0a-9671-ce8aae0f850a.pdf',
                value: '2cda0151-396c-4e0a-9671-ce8aae0f850a.pdf',
                internalId: 11000,
                sourceName: 'BC07_2020_Declaration_of_Conformity.pdf',
                source_value: 'BC07_2020_Declaration_of_Conformity.pdf'
              },
              {
                s3Key: 'pdfs/33f830ba-da7e-42cf-be16-fcdd7e5762b7.pdf',
                value: '33f830ba-da7e-42cf-be16-fcdd7e5762b7.pdf',
                internalId: 10999,
                sourceName: 'BC07_2021_UIAA-Certification.pdf',
                source_value: 'BC07_2021_UIAA-Certification.pdf'
              }
            ],
            unit: null,
            type: 'pdf',
            availableUnits: [],
            valueForDisplay: null
          }
        ]
      },
      {
        product_variation_id: 9352,
        product_id: 30422,
        status: 'PUBLISHED',
        code: 'BC05DYN.50',
        product_variation_name: 'DYNEEMA 5mm',
        product_name: 'DYNEEMA 5.5MM',
        product_group_name: 'Ropes - Cord',
        product_data: [
          {
            id: 61468,
            key: 'diameter',
            name: 'Diameter',
            value: {
              unit: 'mm',
              value: '5',
              source_value: '5 mm'
            },
            unit: 'mm',
            type: 'numeric',
            availableUnits: [
              {
                label: 'Millimeters',
                value: 'mm'
              },
              {
                label: 'Centimeters',
                value: 'cm'
              },
              {
                label: 'Meters',
                value: 'm'
              },
              {
                label: 'Feet',
                value: 'ft'
              },
              {
                label: 'Inches',
                value: 'in'
              }
            ],
            valueForDisplay: '5'
          },
          {
            id: 61469,
            key: 'mbs_1_2_3',
            name: 'MBS',
            value: {
              value: '1500',
              string: true,
              source_value: '1500 kg'
            },
            unit: 'kN',
            type: 'numeric',
            availableUnits: [
              {
                label: 'Kilonewtons',
                value: 'kN'
              },
              {
                label: 'Pounds of force',
                value: 'lbf'
              },
              {
                label: 'Tons',
                value: 't'
              }
            ],
            valueForDisplay: '1500'
          },
          {
            id: 61474,
            key: 'image',
            name: 'Image',
            value: [
              {
                s3Key: 'photos/4d287532-acb5-49a3-8522-47e43431ec07.png',
                value: '4d287532-acb5-49a3-8522-47e43431ec07.png',
                internalId: 11002,
                source_value: 'zdsvzdf.png'
              }
            ],
            unit: '',
            type: 'photo',
            availableUnits: null,
            valueForDisplay: null
          },
          {
            id: 61472,
            key: 'manufacturer',
            name: 'Manufacturer',
            value: {
              value: 'BEAL',
              string: true,
              source_value: 'Beal'
            },
            unit: null,
            type: 'string',
            availableUnits: [],
            valueForDisplay: 'BEAL'
          },
          {
            id: 61467,
            key: 'weight',
            name: 'Weight',
            value: {
              value: '15',
              string: true,
              source_value: '23 g/m'
            },
            unit: 'gm',
            type: 'numeric',
            availableUnits: [
              {
                label: 'Kilograms (kg)',
                value: 'kg'
              },
              {
                label: 'Grams (g)',
                value: 'g'
              },
              {
                label: 'Grams per meter (g/m)',
                value: 'g/m'
              },
              {
                label: 'Pounds (lb)',
                value: 'lb'
              },
              {
                label: 'Ounces (oz)',
                value: 'oz'
              }
            ],
            valueForDisplay: '15'
          },
          {
            id: 61473,
            key: 'certifications',
            name: 'Certifications',
            value: [
              {
                value: 'EN 564:2014',
                internalId: 43,
                source_value: null
              }
            ],
            unit: '',
            type: 'certifications',
            availableUnits: null,
            valueForDisplay: 'EN 564'
          },
          {
            id: 61471,
            key: 'core_material',
            name: 'Core Material',
            value: {
              value: 'Dyneema (HPPE)',
              string: true,
              source_value: 'Aramide'
            },
            unit: '',
            type: 'string',
            availableUnits: null,
            valueForDisplay: 'Dyneema (HPPE)'
          },
          {
            id: 303956,
            key: 'braid_plait_strand',
            name: 'Braid/Plait/Strand',
            value: {
              value: '32'
            },
            unit: '',
            type: 'string',
            availableUnits: null,
            valueForDisplay: '32'
          },
          {
            id: 303957,
            key: 'mbs_metric',
            name: 'MBS Metric',
            value: {
              value: '1000'
            },
            unit: '',
            type: 'numeric',
            availableUnits: [
              {
                label: 'Kilonewtons (kN)',
                value: 'kN'
              }
            ],
            valueForDisplay: '1000'
          },
          {
            id: 61470,
            key: 'sheath_material',
            name: 'Sheath Material',
            value: {
              value: 'Dyneema (HPPE)',
              string: true,
              source_value: 'Polyamide'
            },
            unit: '',
            type: 'string',
            availableUnits: null,
            valueForDisplay: 'Dyneema (HPPE)'
          },
          {
            id: 303955,
            key: 'length',
            name: 'Length',
            value: {
              unit: 'm',
              value: '50'
            },
            unit: 'm',
            type: 'numeric',
            availableUnits: [
              {
                label: 'Millimeters',
                value: 'mm'
              },
              {
                label: 'Centimeters',
                value: 'cm'
              },
              {
                label: 'Meters',
                value: 'm'
              },
              {
                label: 'Feet',
                value: 'ft'
              },
              {
                label: 'Inches',
                value: 'in'
              }
            ],
            valueForDisplay: '50'
          },
          {
            id: 323613,
            key: 'material',
            name: 'Material',
            value: {
              value: 'PA/DYN'
            },
            unit: '',
            type: 'string',
            availableUnits: null,
            valueForDisplay: 'PA/DYN'
          },
          {
            id: 323614,
            key: 'icon_uiaa',
            name: 'Icon - UIAA',
            value: {
              value: 'UIAA'
            },
            unit: null,
            type: 'icon',
            availableUnits: [],
            valueForDisplay: 'UIAA'
          },
          {
            id: 323615,
            key: 'rope_label_name',
            name: 'Rope Label Name',
            value: {
              value: 'DYNEEMA'
            },
            unit: null,
            type: 'string',
            availableUnits: [],
            valueForDisplay: 'DYNEEMA'
          },
          {
            id: 61475,
            key: 'uploads_1',
            name: 'Uploads',
            value: [
              {
                s3Key: 'pdfs/3482d5ec-95bd-498a-a48e-9908ac2c3440.pdf',
                value: '3482d5ec-95bd-498a-a48e-9908ac2c3440.pdf',
                internalId: 11004,
                sourceName: 'BC05DYN_2020_Declaration_of_Conformity.pdf',
                source_value: 'BC05DYN_2020_Declaration_of_Conformity.pdf'
              },
              {
                s3Key: 'pdfs/7bd7d941-051d-4a1d-8a91-0064934e3d17.pdf',
                value: '7bd7d941-051d-4a1d-8a91-0064934e3d17.pdf',
                internalId: 11003,
                sourceName: 'BC05DYN_2021_UIAA-Certification.pdf',
                source_value: 'BC05DYN_2021_UIAA-Certification.pdf'
              }
            ],
            unit: null,
            type: 'pdf',
            availableUnits: [],
            valueForDisplay: null
          }
        ]
      },
      {
        product_variation_id: 9448,
        product_id: 29513,
        status: 'PUBLISHED',
        code: 'BC04.120.Y',
        product_variation_name: 'ACCESSORY CORD, 4 mm, Yellow',
        product_name: 'ACCESSORY CORD 4 MM',
        product_group_name: 'Ropes - Cord',
        product_data: [
          {
            id: 62299,
            key: 'material',
            name: 'Material',
            value: {
              value: 'Polyamide',
              string: true,
              source_value: 'Polyamide'
            },
            unit: '',
            type: 'string',
            availableUnits: null,
            valueForDisplay: 'Polyamide'
          },
          {
            id: 62302,
            key: 'mbs_1_2_3',
            name: 'MBS',
            value: {
              value: '400 kg',
              string: true,
              source_value: '400 kg'
            },
            unit: 'kN',
            type: 'numeric',
            availableUnits: [
              {
                label: 'Kilonewtons',
                value: 'kN'
              },
              {
                label: 'Pounds of force',
                value: 'lbf'
              },
              {
                label: 'Tons',
                value: 't'
              }
            ],
            valueForDisplay: null
          },
          {
            id: 62303,
            key: 'rated_load',
            name: 'Rated Load',
            value: {
              value: '530 kg',
              string: true,
              source_value: '530 kg'
            },
            unit: 'kg',
            type: 'numeric',
            availableUnits: [
              {
                label: 'Kilograms (kg)',
                value: 'kg'
              },
              {
                label: 'Grams (gm)',
                value: 'g'
              },
              {
                label: 'Pounds (lb)',
                value: 'lb'
              },
              {
                label: 'Ounces (oz)',
                value: 'oz'
              },
              {
                label: 'Kilonewtons (kN)',
                value: 'kN'
              }
            ],
            valueForDisplay: null
          },
          {
            id: 62306,
            key: 'image',
            name: 'Image',
            value: [
              {
                s3Key: 'photos/aaed29af-5dc3-4d41-ba93-337e199187a6.png',
                value: 'aaed29af-5dc3-4d41-ba93-337e199187a6.png',
                internalId: 11271,
                source_value: '4mm.png'
              }
            ],
            unit: '',
            type: 'photo',
            availableUnits: null,
            valueForDisplay: null
          },
          {
            id: 62301,
            key: 'diameter',
            name: 'Diameter',
            value: {
              unit: 'mm',
              value: '4',
              source_value: '4 mm'
            },
            unit: 'mm',
            type: 'numeric',
            availableUnits: [
              {
                label: 'Millimeters',
                value: 'mm'
              },
              {
                label: 'Centimeters',
                value: 'cm'
              },
              {
                label: 'Meters',
                value: 'm'
              },
              {
                label: 'Feet',
                value: 'ft'
              },
              {
                label: 'Inches',
                value: 'in'
              }
            ],
            valueForDisplay: '4'
          },
          {
            id: 62305,
            key: 'certifications',
            name: 'Certifications',
            value: [
              {
                value: 'EN 564:2014',
                internalId: 43,
                source_value: null
              }
            ],
            unit: '',
            type: 'certifications',
            availableUnits: null,
            valueForDisplay: 'EN 564, UIAA'
          },
          {
            id: 62300,
            key: 'colour',
            name: 'Colour',
            value: {
              value: 'Yellow',
              string: true,
              source_value: 'Yellow'
            },
            unit: '',
            type: 'string',
            availableUnits: null,
            valueForDisplay: 'Yellow'
          },
          {
            id: 62298,
            key: 'weight',
            name: 'Weight',
            value: {
              value: '10.9',
              string: true,
              source_value: '11 g/m'
            },
            unit: 'gm',
            type: 'numeric',
            availableUnits: [
              {
                label: 'Kilograms (kg)',
                value: 'kg'
              },
              {
                label: 'Grams (g)',
                value: 'g'
              },
              {
                label: 'Grams per meter (g/m)',
                value: 'g/m'
              },
              {
                label: 'Pounds (lb)',
                value: 'lb'
              },
              {
                label: 'Ounces (oz)',
                value: 'oz'
              }
            ],
            valueForDisplay: '10.9'
          },
          {
            id: 303285,
            key: 'braid_plait_strand',
            name: 'Braid/Plait/Strand',
            value: {
              value: '16'
            },
            unit: '',
            type: 'string',
            availableUnits: null,
            valueForDisplay: '16'
          },
          {
            id: 303282,
            key: 'length',
            name: 'Length',
            value: {
              unit: 'm',
              value: '120'
            },
            unit: 'm',
            type: 'numeric',
            availableUnits: [
              {
                label: 'Millimeters',
                value: 'mm'
              },
              {
                label: 'Centimeters',
                value: 'cm'
              },
              {
                label: 'Meters',
                value: 'm'
              },
              {
                label: 'Feet',
                value: 'ft'
              },
              {
                label: 'Inches',
                value: 'in'
              }
            ],
            valueForDisplay: '120'
          },
          {
            id: 303284,
            key: 'mbs_metric',
            name: 'MBS Metric',
            value: {
              value: '400'
            },
            unit: '',
            type: 'numeric',
            availableUnits: [
              {
                label: 'Kilonewtons (kN)',
                value: 'kN'
              }
            ],
            valueForDisplay: '400'
          },
          {
            id: 62304,
            key: 'manufacturer',
            name: 'Manufacturer',
            value: {
              value: 'BEAL',
              string: true,
              source_value: 'Beal'
            },
            unit: null,
            type: 'string',
            availableUnits: [],
            valueForDisplay: 'BEAL'
          },
          {
            id: 303283,
            key: 'sheath_material',
            name: 'Sheath Material',
            value: {
              value: 'Polyamid (PA)'
            },
            unit: '',
            type: 'string',
            availableUnits: null,
            valueForDisplay: 'Polyamid (PA)'
          },
          {
            id: 303286,
            key: 'core_material',
            name: 'Core Material',
            value: {
              value: 'Polyamid (PA)'
            },
            unit: '',
            type: 'string',
            availableUnits: null,
            valueForDisplay: 'Polyamid (PA)'
          },
          {
            id: 62307,
            key: 'uploads_1',
            name: 'Uploads',
            value: [
              {
                s3Key: 'pdfs/c6215284-ee9e-4068-b4c1-9357bd7f36cd.pdf',
                value: 'c6215284-ee9e-4068-b4c1-9357bd7f36cd.pdf',
                internalId: 11274,
                sourceName: 'CORDELETTE_NOTICE.pdf',
                source_value: 'CORDELETTE_NOTICE.pdf'
              },
              {
                s3Key: 'pdfs/9b77dde4-4137-47c9-aafd-7302f336b9c6.pdf',
                value: '9b77dde4-4137-47c9-aafd-7302f336b9c6.pdf',
                internalId: 11273,
                sourceName: 'BC04_2020_Declaration_of_Conformity.pdf',
                source_value: 'BC04_2020_Declaration_of_Conformity.pdf'
              },
              {
                s3Key: 'pdfs/a3068467-3301-4e7f-8394-cfa61388da19.pdf',
                value: 'a3068467-3301-4e7f-8394-cfa61388da19.pdf',
                internalId: 11272,
                sourceName: 'BC04_2021_UIAA-Certification.pdf',
                source_value: 'BC04_2021_UIAA-Certification.pdf'
              }
            ],
            unit: null,
            type: 'pdf',
            availableUnits: [],
            valueForDisplay: null
          }
        ]
      },
      {
        product_variation_id: 9449,
        product_id: 29513,
        status: 'PUBLISHED',
        code: 'BC04.120.S',
        product_variation_name: 'ACCESSORY CORD, 4 mm, Shark',
        product_name: 'ACCESSORY CORD 4 MM',
        product_group_name: 'Ropes - Cord',
        product_data: [
          {
            id: 62308,
            key: 'weight',
            name: 'Weight',
            value: {
              value: '10.9',
              string: true,
              source_value: '11 g/m'
            },
            unit: 'gm',
            type: 'numeric',
            availableUnits: [
              {
                label: 'Kilograms (kg)',
                value: 'kg'
              },
              {
                label: 'Grams (g)',
                value: 'g'
              },
              {
                label: 'Grams per meter (g/m)',
                value: 'g/m'
              },
              {
                label: 'Pounds (lb)',
                value: 'lb'
              },
              {
                label: 'Ounces (oz)',
                value: 'oz'
              }
            ],
            valueForDisplay: '10.9'
          },
          {
            id: 62309,
            key: 'material',
            name: 'Material',
            value: {
              value: 'Polyamide',
              string: true,
              source_value: 'Polyamide'
            },
            unit: '',
            type: 'string',
            availableUnits: null,
            valueForDisplay: 'Polyamide'
          },
          {
            id: 62312,
            key: 'mbs_1_2_3',
            name: 'MBS',
            value: {
              value: '400 kg',
              string: true,
              source_value: '400 kg'
            },
            unit: 'kN',
            type: 'numeric',
            availableUnits: [
              {
                label: 'Kilonewtons',
                value: 'kN'
              },
              {
                label: 'Pounds of force',
                value: 'lbf'
              },
              {
                label: 'Tons',
                value: 't'
              }
            ],
            valueForDisplay: null
          },
          {
            id: 62313,
            key: 'rated_load',
            name: 'Rated Load',
            value: {
              value: '530 kg',
              string: true,
              source_value: '530 kg'
            },
            unit: 'kg',
            type: 'numeric',
            availableUnits: [
              {
                label: 'Kilograms (kg)',
                value: 'kg'
              },
              {
                label: 'Grams (gm)',
                value: 'g'
              },
              {
                label: 'Pounds (lb)',
                value: 'lb'
              },
              {
                label: 'Ounces (oz)',
                value: 'oz'
              },
              {
                label: 'Kilonewtons (kN)',
                value: 'kN'
              }
            ],
            valueForDisplay: null
          },
          {
            id: 62311,
            key: 'diameter',
            name: 'Diameter',
            value: {
              unit: 'mm',
              value: '4',
              source_value: '4 mm'
            },
            unit: 'mm',
            type: 'numeric',
            availableUnits: [
              {
                label: 'Millimeters',
                value: 'mm'
              },
              {
                label: 'Centimeters',
                value: 'cm'
              },
              {
                label: 'Meters',
                value: 'm'
              },
              {
                label: 'Feet',
                value: 'ft'
              },
              {
                label: 'Inches',
                value: 'in'
              }
            ],
            valueForDisplay: '4'
          },
          {
            id: 62316,
            key: 'image',
            name: 'Image',
            value: [
              {
                s3Key: 'photos/5ffeea65-0ccc-43a6-82d6-07216a99beb0.png',
                value: '5ffeea65-0ccc-43a6-82d6-07216a99beb0.png',
                internalId: 11275,
                source_value: '4mm-shark.png'
              }
            ],
            unit: '',
            type: 'photo',
            availableUnits: null,
            valueForDisplay: null
          },
          {
            id: 62315,
            key: 'certifications',
            name: 'Certifications',
            value: [
              {
                value: 'EN 564:2014',
                internalId: 43,
                source_value: null
              }
            ],
            unit: '',
            type: 'certifications',
            availableUnits: null,
            valueForDisplay: 'EN 564, UIAA'
          },
          {
            id: 62310,
            key: 'colour',
            name: 'Colour',
            value: {
              value: 'Grey',
              string: true,
              source_value: 'Shark'
            },
            unit: '',
            type: 'string',
            availableUnits: null,
            valueForDisplay: 'Grey'
          },
          {
            id: 303291,
            key: 'length',
            name: 'Length',
            value: {
              unit: 'm',
              value: '120'
            },
            unit: 'm',
            type: 'numeric',
            availableUnits: [
              {
                label: 'Millimeters',
                value: 'mm'
              },
              {
                label: 'Centimeters',
                value: 'cm'
              },
              {
                label: 'Meters',
                value: 'm'
              },
              {
                label: 'Feet',
                value: 'ft'
              },
              {
                label: 'Inches',
                value: 'in'
              }
            ],
            valueForDisplay: '120'
          },
          {
            id: 303287,
            key: 'mbs_metric',
            name: 'MBS Metric',
            value: {
              value: '400'
            },
            unit: '',
            type: 'numeric',
            availableUnits: [
              {
                label: 'Kilonewtons (kN)',
                value: 'kN'
              }
            ],
            valueForDisplay: '400'
          },
          {
            id: 303288,
            key: 'sheath_material',
            name: 'Sheath Material',
            value: {
              value: 'Polyamid (PA)'
            },
            unit: '',
            type: 'string',
            availableUnits: null,
            valueForDisplay: 'Polyamid (PA)'
          },
          {
            id: 62314,
            key: 'manufacturer',
            name: 'Manufacturer',
            value: {
              value: 'BEAL',
              string: true,
              source_value: 'Beal'
            },
            unit: null,
            type: 'string',
            availableUnits: [],
            valueForDisplay: 'BEAL'
          },
          {
            id: 303290,
            key: 'braid_plait_strand',
            name: 'Braid/Plait/Strand',
            value: {
              value: '16'
            },
            unit: '',
            type: 'string',
            availableUnits: null,
            valueForDisplay: '16'
          },
          {
            id: 303289,
            key: 'core_material',
            name: 'Core Material',
            value: {
              value: 'Polyamid (PA)'
            },
            unit: '',
            type: 'string',
            availableUnits: null,
            valueForDisplay: 'Polyamid (PA)'
          },
          {
            id: 62317,
            key: 'uploads_1',
            name: 'Uploads',
            value: [
              {
                s3Key: 'pdfs/b26cecb1-ff80-4323-9753-c91cc33d21bd.pdf',
                value: 'b26cecb1-ff80-4323-9753-c91cc33d21bd.pdf',
                internalId: 11278,
                sourceName: 'CORDELETTE_NOTICE.pdf',
                source_value: 'CORDELETTE_NOTICE.pdf'
              },
              {
                s3Key: 'pdfs/e94bec54-c3fd-4925-a20f-8b87c9c7174b.pdf',
                value: 'e94bec54-c3fd-4925-a20f-8b87c9c7174b.pdf',
                internalId: 11277,
                sourceName: 'BC04_2020_Declaration_of_Conformity.pdf',
                source_value: 'BC04_2020_Declaration_of_Conformity.pdf'
              },
              {
                s3Key: 'pdfs/ffa5b8f8-ba52-4406-8f75-d0066df0d46e.pdf',
                value: 'ffa5b8f8-ba52-4406-8f75-d0066df0d46e.pdf',
                internalId: 11276,
                sourceName: 'BC04_2021_UIAA-Certification.pdf',
                source_value: 'BC04_2021_UIAA-Certification.pdf'
              }
            ],
            unit: null,
            type: 'pdf',
            availableUnits: [],
            valueForDisplay: null
          }
        ]
      },
      {
        product_variation_id: 6508,
        product_id: 30408,
        status: 'PUBLISHED',
        code: 'BMCLAS3',
        product_variation_name: null,
        product_name: 'AIR SMITH',
        product_group_name: 'Carabiners / Connectors',
        product_data: [
          {
            id: 31604,
            key: 'gate_type__locking_system',
            name: 'Gate Type / Locking System',
            value: {
              value: '3-Matic',
              source_value: '3-Matic'
            },
            unit: '',
            type: 'string',
            availableUnits: null,
            valueForDisplay: '3-Matic'
          },
          {
            id: 31605,
            key: 'web',
            name: 'Web',
            value: {
              value: 'https://sport.beal-planet.com/en/karabiners/1712-air-smith-3-matic.html',
              source_value:
                'https://sport.beal-planet.com/en/karabiners/1712-air-smith-3-matic.html'
            },
            unit: '',
            type: 'url',
            availableUnits: null,
            valueForDisplay:
              'https://sport.beal-planet.com/en/karabiners/1712-air-smith-3-matic.html'
          },
          {
            id: 31598,
            key: 'material',
            name: 'Material',
            value: {
              value: 'Steel',
              source_value: 'Steel'
            },
            unit: '',
            type: 'string',
            availableUnits: null,
            valueForDisplay: 'Steel'
          },
          {
            id: 31597,
            key: 'guarantee',
            name: 'Guarantee',
            value: {
              value: '1',
              source_value: null
            },
            unit: 'years',
            type: 'numeric',
            availableUnits: [
              {
                label: 'Years',
                value: 'years'
              }
            ],
            valueForDisplay: '1'
          },
          {
            id: 31593,
            key: 'image',
            name: 'Image',
            value: [
              {
                s3Key: 'photos/large/bd786cec-001d-449a-ab4a-e3be0255bf69.jpg',
                value: 'bd786cec-001d-449a-ab4a-e3be0255bf69.jpg',
                internalId: 5398,
                source_value: null
              }
            ],
            unit: '',
            type: 'photo',
            availableUnits: null,
            valueForDisplay: 'bd786cec-001d-449a-ab4a-e3be0255bf69.jpg'
          },
          {
            id: 31595,
            key: 'colour',
            name: 'Colour',
            value: {
              value: 'Silver',
              source_value: 'Silver'
            },
            unit: '',
            type: 'string',
            availableUnits: null,
            valueForDisplay: 'Silver'
          },
          {
            id: 31603,
            key: 'gate_actions',
            name: 'Gate Actions',
            value: {
              value: '0',
              source_value: null
            },
            unit: '',
            type: 'numeric',
            availableUnits: null,
            valueForDisplay: '0'
          },
          {
            id: 31594,
            key: 'certifications',
            name: 'Certifications',
            value: [
              {
                value: 'EN 362:2004',
                internalId: 37,
                source_value: null
              },
              {
                value: 'EN 12275:2013',
                internalId: 4,
                source_value: null
              }
            ],
            unit: '',
            type: 'certifications',
            availableUnits: null,
            valueForDisplay: 'EN 12275:2013 B,EN 362:2004 B/A/T'
          },
          {
            id: 31601,
            key: 'mbs_1',
            name: 'MBS (Minor Axis)',
            value: {
              value: '16',
              source_value: 16
            },
            unit: 'kN',
            type: 'numeric',
            availableUnits: [
              {
                label: 'Kilonewtons',
                value: 'kN'
              },
              {
                label: 'Pounds of force',
                value: 'lbf'
              }
            ],
            valueForDisplay: '16'
          },
          {
            id: 31600,
            key: 'mbs',
            name: 'MBS (Major Axis)',
            value: {
              value: '52',
              source_value: 52
            },
            unit: 'kN',
            type: 'numeric',
            availableUnits: [
              {
                label: 'Kilonewtons',
                value: 'kN'
              },
              {
                label: 'Pounds of force',
                value: 'lbf'
              }
            ],
            valueForDisplay: '52'
          },
          {
            id: 31596,
            key: 'weight',
            name: 'Weight',
            value: {
              value: '251',
              source_value: 251
            },
            unit: 'gm',
            type: 'numeric',
            availableUnits: [
              {
                label: 'Kilograms (kg)',
                value: 'kg'
              },
              {
                label: 'Grams (g)',
                value: 'g'
              },
              {
                label: 'Grams per meter (g/m)',
                value: 'g/m'
              },
              {
                label: 'Pounds (lb)',
                value: 'lb'
              },
              {
                label: 'Ounces (oz)',
                value: 'oz'
              }
            ],
            valueForDisplay: '251'
          },
          {
            id: 31602,
            key: 'mbs_1_2',
            name: 'MBS (Gate Open)',
            value: {
              value: '18',
              source_value: 18
            },
            unit: 'kN',
            type: 'numeric',
            availableUnits: [
              {
                label: 'Kilonewtons',
                value: 'kN'
              },
              {
                label: 'Pounds of force',
                value: 'lbf'
              }
            ],
            valueForDisplay: '18'
          },
          {
            id: 31599,
            key: 'instructions',
            name: 'Instructions',
            value: [
              {
                s3Key: 'pdfs/f46cfb4b-271f-4fcf-94a1-5a21fa84cc98.pdf',
                value: 'f46cfb4b-271f-4fcf-94a1-5a21fa84cc98.pdf',
                internalId: 5397,
                sourceName: '',
                source_value: null
              }
            ],
            unit: '',
            type: 'pdf',
            availableUnits: null,
            valueForDisplay: ''
          }
        ]
      },
      {
        product_variation_id: 6508,
        product_id: 30408,
        status: 'PUBLISHED',
        code: 'BMCLAS3',
        product_variation_name: null,
        product_name: 'AIR SMITH',
        product_group_name: 'Carabiners / Connectors',
        product_data: [
          {
            id: 31604,
            key: 'gate_type__locking_system',
            name: 'Gate Type / Locking System',
            value: {
              value: '3-Matic',
              source_value: '3-Matic'
            },
            unit: '',
            type: 'string',
            availableUnits: null,
            valueForDisplay: '3-Matic'
          },
          {
            id: 31605,
            key: 'web',
            name: 'Web',
            value: {
              value: 'https://sport.beal-planet.com/en/karabiners/1712-air-smith-3-matic.html',
              source_value:
                'https://sport.beal-planet.com/en/karabiners/1712-air-smith-3-matic.html'
            },
            unit: '',
            type: 'url',
            availableUnits: null,
            valueForDisplay:
              'https://sport.beal-planet.com/en/karabiners/1712-air-smith-3-matic.html'
          },
          {
            id: 31598,
            key: 'material',
            name: 'Material',
            value: {
              value: 'Steel',
              source_value: 'Steel'
            },
            unit: '',
            type: 'string',
            availableUnits: null,
            valueForDisplay: 'Steel'
          },
          {
            id: 31597,
            key: 'guarantee',
            name: 'Guarantee',
            value: {
              value: '1',
              source_value: null
            },
            unit: 'years',
            type: 'numeric',
            availableUnits: [
              {
                label: 'Years',
                value: 'years'
              }
            ],
            valueForDisplay: '1'
          },
          {
            id: 31593,
            key: 'image',
            name: 'Image',
            value: [
              {
                s3Key: 'photos/large/bd786cec-001d-449a-ab4a-e3be0255bf69.jpg',
                value: 'bd786cec-001d-449a-ab4a-e3be0255bf69.jpg',
                internalId: 5398,
                source_value: null
              }
            ],
            unit: '',
            type: 'photo',
            availableUnits: null,
            valueForDisplay: 'bd786cec-001d-449a-ab4a-e3be0255bf69.jpg'
          },
          {
            id: 31595,
            key: 'colour',
            name: 'Colour',
            value: {
              value: 'Silver',
              source_value: 'Silver'
            },
            unit: '',
            type: 'string',
            availableUnits: null,
            valueForDisplay: 'Silver'
          },
          {
            id: 31603,
            key: 'gate_actions',
            name: 'Gate Actions',
            value: {
              value: '0',
              source_value: null
            },
            unit: '',
            type: 'numeric',
            availableUnits: null,
            valueForDisplay: '0'
          },
          {
            id: 31594,
            key: 'certifications',
            name: 'Certifications',
            value: [
              {
                value: 'EN 362:2004',
                internalId: 37,
                source_value: null
              },
              {
                value: 'EN 12275:2013',
                internalId: 4,
                source_value: null
              }
            ],
            unit: '',
            type: 'certifications',
            availableUnits: null,
            valueForDisplay: 'EN 12275:2013 B,EN 362:2004 B/A/T'
          },
          {
            id: 31601,
            key: 'mbs_1',
            name: 'MBS (Minor Axis)',
            value: {
              value: '16',
              source_value: 16
            },
            unit: 'kN',
            type: 'numeric',
            availableUnits: [
              {
                label: 'Kilonewtons',
                value: 'kN'
              },
              {
                label: 'Pounds of force',
                value: 'lbf'
              }
            ],
            valueForDisplay: '16'
          },
          {
            id: 31600,
            key: 'mbs',
            name: 'MBS (Major Axis)',
            value: {
              value: '52',
              source_value: 52
            },
            unit: 'kN',
            type: 'numeric',
            availableUnits: [
              {
                label: 'Kilonewtons',
                value: 'kN'
              },
              {
                label: 'Pounds of force',
                value: 'lbf'
              }
            ],
            valueForDisplay: '52'
          },
          {
            id: 31596,
            key: 'weight',
            name: 'Weight',
            value: {
              value: '251',
              source_value: 251
            },
            unit: 'gm',
            type: 'numeric',
            availableUnits: [
              {
                label: 'Kilograms (kg)',
                value: 'kg'
              },
              {
                label: 'Grams (g)',
                value: 'g'
              },
              {
                label: 'Grams per meter (g/m)',
                value: 'g/m'
              },
              {
                label: 'Pounds (lb)',
                value: 'lb'
              },
              {
                label: 'Ounces (oz)',
                value: 'oz'
              }
            ],
            valueForDisplay: '251'
          },
          {
            id: 31602,
            key: 'mbs_1_2',
            name: 'MBS (Gate Open)',
            value: {
              value: '18',
              source_value: 18
            },
            unit: 'kN',
            type: 'numeric',
            availableUnits: [
              {
                label: 'Kilonewtons',
                value: 'kN'
              },
              {
                label: 'Pounds of force',
                value: 'lbf'
              }
            ],
            valueForDisplay: '18'
          },
          {
            id: 31599,
            key: 'instructions',
            name: 'Instructions',
            value: [
              {
                s3Key: 'pdfs/f46cfb4b-271f-4fcf-94a1-5a21fa84cc98.pdf',
                value: 'f46cfb4b-271f-4fcf-94a1-5a21fa84cc98.pdf',
                internalId: 5397,
                sourceName: '',
                source_value: null
              }
            ],
            unit: '',
            type: 'pdf',
            availableUnits: null,
            valueForDisplay: ''
          }
        ]
      },
      {
        product_variation_id: 9331,
        product_id: 29513,
        status: 'UNPUBLISHED',
        code: 'BC04.120.P',
        product_variation_name: 'ACCESSORY CORD, 4 mm, Pink',
        product_name: 'ACCESSORY CORD 4 MM',
        product_group_name: 'Ropes - Cord',
        product_data: [
          {
            id: 61291,
            key: 'rated_load',
            name: 'Rated Load',
            value: {
              value: '530 kg',
              string: true,
              source_value: '530 kg'
            },
            unit: 'kg',
            type: 'numeric',
            availableUnits: [
              {
                label: 'Kilograms (kg)',
                value: 'kg'
              },
              {
                label: 'Grams (gm)',
                value: 'g'
              },
              {
                label: 'Pounds (lb)',
                value: 'lb'
              },
              {
                label: 'Ounces (oz)',
                value: 'oz'
              },
              {
                label: 'Kilonewtons (kN)',
                value: 'kN'
              }
            ],
            valueForDisplay: null
          },
          {
            id: 61294,
            key: 'image',
            name: 'Image',
            value: [
              {
                s3Key: 'photos/75154f4e-8c74-4206-bc10-6921f2b9e75c.png',
                value: '75154f4e-8c74-4206-bc10-6921f2b9e75c.png',
                internalId: 10951,
                source_value: '4mm-p.png'
              }
            ],
            unit: '',
            type: 'photo',
            availableUnits: null,
            valueForDisplay: null
          },
          {
            id: 61290,
            key: 'mbs_1_2_3',
            name: 'MBS',
            value: {
              value: '400 kg',
              string: true,
              source_value: '400 kg'
            },
            unit: 'kN',
            type: 'numeric',
            availableUnits: [
              {
                label: 'Kilonewtons',
                value: 'kN'
              },
              {
                label: 'Pounds of force',
                value: 'lbf'
              },
              {
                label: 'Tons',
                value: 't'
              }
            ],
            valueForDisplay: null
          },
          {
            id: 61287,
            key: 'material',
            name: 'Material',
            value: {
              value: 'Polyamide',
              string: true,
              source_value: 'Polyamide'
            },
            unit: '',
            type: 'string',
            availableUnits: null,
            valueForDisplay: 'Polyamide'
          },
          {
            id: 61293,
            key: 'certifications',
            name: 'Certifications',
            value: [
              {
                value: 'EN 564:2014',
                internalId: 43,
                source_value: null
              }
            ],
            unit: '',
            type: 'certifications',
            availableUnits: null,
            valueForDisplay: 'EN 564, UIAA'
          },
          {
            id: 303222,
            key: 'braid_plait_strand',
            name: 'Braid/Plait/Strand',
            value: {
              value: '16'
            },
            unit: '',
            type: 'string',
            availableUnits: null,
            valueForDisplay: '16'
          },
          {
            id: 303223,
            key: 'length',
            name: 'Length',
            value: {
              unit: 'm',
              value: '120'
            },
            unit: 'm',
            type: 'numeric',
            availableUnits: [
              {
                label: 'Millimeters',
                value: 'mm'
              },
              {
                label: 'Centimeters',
                value: 'cm'
              },
              {
                label: 'Meters',
                value: 'm'
              },
              {
                label: 'Feet',
                value: 'ft'
              },
              {
                label: 'Inches',
                value: 'in'
              }
            ],
            valueForDisplay: '120'
          },
          {
            id: 303225,
            key: 'sheath_material',
            name: 'Sheath Material',
            value: {
              value: 'Polyamid (PA)'
            },
            unit: '',
            type: 'string',
            availableUnits: null,
            valueForDisplay: 'Polyamid (PA)'
          },
          {
            id: 61288,
            key: 'colour',
            name: 'Colour',
            value: {
              value: 'Pink',
              string: true,
              source_value: 'Pink'
            },
            unit: '',
            type: 'string',
            availableUnits: null,
            valueForDisplay: 'Pink'
          },
          {
            id: 303221,
            key: 'core_material',
            name: 'Core Material',
            value: {
              value: 'Polyamid (PA)'
            },
            unit: '',
            type: 'string',
            availableUnits: null,
            valueForDisplay: 'Polyamid (PA)'
          },
          {
            id: 61292,
            key: 'manufacturer',
            name: 'Manufacturer',
            value: {
              value: 'BEAL',
              string: true,
              source_value: 'Beal'
            },
            unit: null,
            type: 'string',
            availableUnits: [],
            valueForDisplay: 'BEAL'
          },
          {
            id: 61286,
            key: 'weight_by_length',
            name: 'Weight by Length',
            value: {
              unit: 'g/m',
              value: '10.9',
              source_value: '11 g/m'
            },
            unit: null,
            type: 'numeric',
            availableUnits: [
              {
                label: 'Grams per meter (g/m)',
                value: 'g/m'
              },
              {
                label: 'Pounds per 100 FT',
                value: 'lbs/100ft'
              }
            ],
            valueForDisplay: '10.9'
          },
          {
            id: 359327,
            key: 'notified_body',
            name: 'CE Notified Body',
            value: {
              value: '0598'
            },
            unit: null,
            type: 'string',
            availableUnits: null,
            valueForDisplay: '0598'
          },
          {
            id: 303224,
            key: 'mbs_metric',
            name: 'MBS Metric',
            value: {
              value: '400'
            },
            unit: '',
            type: 'numeric',
            availableUnits: [
              {
                label: 'Kilonewtons (kN)',
                value: 'kN'
              }
            ],
            valueForDisplay: '400'
          },
          {
            id: 61289,
            key: 'diameter',
            name: 'Diameter',
            value: {
              unit: 'mm',
              value: '4',
              source_value: '4 mm'
            },
            unit: 'mm',
            type: 'numeric',
            availableUnits: [
              {
                label: 'Millimeters',
                value: 'mm'
              },
              {
                label: 'Centimeters',
                value: 'cm'
              },
              {
                label: 'Meters',
                value: 'm'
              },
              {
                label: 'Feet',
                value: 'ft'
              },
              {
                label: 'Inches',
                value: 'in'
              }
            ],
            valueForDisplay: '4'
          },
          {
            id: 61295,
            key: 'uploads_1',
            name: 'Uploads',
            value: [
              {
                s3Key: 'pdfs/8f1c6eb3-5f04-47e3-9fa3-1a088d54f722.pdf',
                value: '8f1c6eb3-5f04-47e3-9fa3-1a088d54f722.pdf',
                internalId: 10954,
                sourceName: 'CORDELETTE_NOTICE.pdf',
                source_value: 'CORDELETTE_NOTICE.pdf'
              },
              {
                s3Key: 'pdfs/8b0ea280-71f1-4090-82c5-aad419fa48d8.pdf',
                value: '8b0ea280-71f1-4090-82c5-aad419fa48d8.pdf',
                internalId: 10953,
                sourceName: 'BC04_2020_Declaration_of_Conformity.pdf',
                source_value: 'BC04_2020_Declaration_of_Conformity.pdf'
              },
              {
                s3Key: 'pdfs/452f8d13-38eb-46fd-85f0-7c39cec1edfe.pdf',
                value: '452f8d13-38eb-46fd-85f0-7c39cec1edfe.pdf',
                internalId: 10952,
                sourceName: 'BC04_2021_UIAA-Certification.pdf',
                source_value: 'BC04_2021_UIAA-Certification.pdf'
              }
            ],
            unit: null,
            type: 'pdf',
            availableUnits: [],
            valueForDisplay: null
          }
        ]
      },
      {
        product_variation_id: 9332,
        product_id: 29516,
        status: 'PUBLISHED',
        code: 'BC06.120.O',
        product_variation_name: 'ACCESSORY CORD, 6 mm, Orange',
        product_name: 'ACCESSORY CORD 6 MM',
        product_group_name: 'Ropes - Cord',
        product_data: [
          {
            id: 61297,
            key: 'material',
            name: 'Material',
            value: {
              value: 'Polyamide',
              string: true,
              source_value: 'Polyamide'
            },
            unit: '',
            type: 'string',
            availableUnits: null,
            valueForDisplay: 'Polyamide'
          },
          {
            id: 61300,
            key: 'mbs_1_2_3',
            name: 'MBS',
            value: {
              value: '810 kg',
              string: true,
              source_value: '810 kg'
            },
            unit: 'kN',
            type: 'numeric',
            availableUnits: [
              {
                label: 'Kilonewtons',
                value: 'kN'
              },
              {
                label: 'Pounds of force',
                value: 'lbf'
              },
              {
                label: 'Tons',
                value: 't'
              }
            ],
            valueForDisplay: null
          },
          {
            id: 61301,
            key: 'rated_load',
            name: 'Rated Load',
            value: {
              value: '1200 kg',
              string: true,
              source_value: '1200 kg'
            },
            unit: 'kg',
            type: 'numeric',
            availableUnits: [
              {
                label: 'Kilograms (kg)',
                value: 'kg'
              },
              {
                label: 'Grams (gm)',
                value: 'g'
              },
              {
                label: 'Pounds (lb)',
                value: 'lb'
              },
              {
                label: 'Ounces (oz)',
                value: 'oz'
              },
              {
                label: 'Kilonewtons (kN)',
                value: 'kN'
              }
            ],
            valueForDisplay: null
          },
          {
            id: 61304,
            key: 'image',
            name: 'Image',
            value: [
              {
                s3Key: 'photos/de832710-4a04-4645-9aa8-9c76b3fe51e7.png',
                value: 'de832710-4a04-4645-9aa8-9c76b3fe51e7.png',
                internalId: 10955,
                source_value: '6mm-o.png'
              }
            ],
            unit: '',
            type: 'photo',
            availableUnits: null,
            valueForDisplay: null
          },
          {
            id: 61298,
            key: 'colour',
            name: 'Colour',
            value: {
              value: 'Orange',
              string: true,
              source_value: 'Orange'
            },
            unit: '',
            type: 'string',
            availableUnits: null,
            valueForDisplay: 'Orange'
          },
          {
            id: 61303,
            key: 'certifications',
            name: 'Certifications',
            value: [
              {
                value: 'EN 564:2014',
                internalId: 43,
                source_value: null
              }
            ],
            unit: '',
            type: 'certifications',
            availableUnits: null,
            valueForDisplay: 'EN 564, UIAA'
          },
          {
            id: 303480,
            key: 'mbs_metric',
            name: 'MBS Metric',
            value: {
              value: '810'
            },
            unit: '',
            type: 'numeric',
            availableUnits: [
              {
                label: 'Kilonewtons (kN)',
                value: 'kN'
              }
            ],
            valueForDisplay: '810'
          },
          {
            id: 303478,
            key: 'core_material',
            name: 'Core Material',
            value: {
              value: 'Polyamid (PA)'
            },
            unit: '',
            type: 'string',
            availableUnits: null,
            valueForDisplay: 'Polyamid (PA)'
          },
          {
            id: 61299,
            key: 'diameter',
            name: 'Diameter',
            value: {
              unit: 'mm',
              value: '6',
              source_value: '6 mm'
            },
            unit: 'mm',
            type: 'numeric',
            availableUnits: [
              {
                label: 'Millimeters',
                value: 'mm'
              },
              {
                label: 'Centimeters',
                value: 'cm'
              },
              {
                label: 'Meters',
                value: 'm'
              },
              {
                label: 'Feet',
                value: 'ft'
              },
              {
                label: 'Inches',
                value: 'in'
              }
            ],
            valueForDisplay: '6'
          },
          {
            id: 303477,
            key: 'braid_plait_strand',
            name: 'Braid/Plait/Strand',
            value: {
              value: '16'
            },
            unit: '',
            type: 'string',
            availableUnits: null,
            valueForDisplay: '16'
          },
          {
            id: 303479,
            key: 'length',
            name: 'Length',
            value: {
              unit: 'm',
              value: '120'
            },
            unit: 'm',
            type: 'numeric',
            availableUnits: [
              {
                label: 'Millimeters',
                value: 'mm'
              },
              {
                label: 'Centimeters',
                value: 'cm'
              },
              {
                label: 'Meters',
                value: 'm'
              },
              {
                label: 'Feet',
                value: 'ft'
              },
              {
                label: 'Inches',
                value: 'in'
              }
            ],
            valueForDisplay: '120'
          },
          {
            id: 303481,
            key: 'sheath_material',
            name: 'Sheath Material',
            value: {
              value: 'Polyamid (PA)'
            },
            unit: '',
            type: 'string',
            availableUnits: null,
            valueForDisplay: 'Polyamid (PA)'
          },
          {
            id: 61302,
            key: 'manufacturer',
            name: 'Manufacturer',
            value: {
              value: 'BEAL',
              string: true,
              source_value: 'Beal'
            },
            unit: null,
            type: 'string',
            availableUnits: [],
            valueForDisplay: 'BEAL'
          },
          {
            id: 61305,
            key: 'uploads_1',
            name: 'Uploads',
            value: [
              {
                s3Key: 'pdfs/77a001c9-1c4c-4315-874f-b3404f1396b9.pdf',
                value: '77a001c9-1c4c-4315-874f-b3404f1396b9.pdf',
                internalId: 10958,
                sourceName: 'CORDELETTE_NOTICE.pdf',
                source_value: 'CORDELETTE_NOTICE.pdf'
              },
              {
                s3Key: 'pdfs/114e9d0c-de46-48d5-8874-1cabc202c09c.pdf',
                value: '114e9d0c-de46-48d5-8874-1cabc202c09c.pdf',
                internalId: 10957,
                sourceName: 'BC06_2020_Declaration_of_Conformity.pdf',
                source_value: 'BC06_2020_Declaration_of_Conformity.pdf'
              },
              {
                s3Key: 'pdfs/e5f6a30a-2a4b-4e5a-b8ea-4b0409cb13d0.pdf',
                value: 'e5f6a30a-2a4b-4e5a-b8ea-4b0409cb13d0.pdf',
                internalId: 10956,
                sourceName: 'BC06_2021_UIAA-Certification.pdf',
                source_value: 'BC06_2021_UIAA-Certification.pdf'
              }
            ],
            unit: null,
            type: 'pdf',
            availableUnits: [],
            valueForDisplay: null
          }
        ]
      },
      {
        product_variation_id: 9333,
        product_id: 29517,
        status: 'PUBLISHED',
        code: 'BC08.200.R',
        product_variation_name: 'ACCESSORY CORD, 8 mm, Red',
        product_name: 'ACCESSORY CORD 8 MM',
        product_group_name: 'Ropes - Cord',
        product_data: [
          {
            id: 61307,
            key: 'material',
            name: 'Material',
            value: {
              value: 'Polyamide',
              string: true,
              source_value: 'Polyamide'
            },
            unit: '',
            type: 'string',
            availableUnits: null,
            valueForDisplay: 'Polyamide'
          },
          {
            id: 61310,
            key: 'mbs_1_2_3',
            name: 'MBS',
            value: {
              value: '1530 kg',
              string: true,
              source_value: '1530 kg'
            },
            unit: 'kN',
            type: 'numeric',
            availableUnits: [
              {
                label: 'Kilonewtons',
                value: 'kN'
              },
              {
                label: 'Pounds of force',
                value: 'lbf'
              },
              {
                label: 'Tons',
                value: 't'
              }
            ],
            valueForDisplay: null
          },
          {
            id: 61311,
            key: 'rated_load',
            name: 'Rated Load',
            value: {
              value: '2200 kg',
              string: true,
              source_value: '2200 kg'
            },
            unit: 'kg',
            type: 'numeric',
            availableUnits: [
              {
                label: 'Kilograms (kg)',
                value: 'kg'
              },
              {
                label: 'Grams (gm)',
                value: 'g'
              },
              {
                label: 'Pounds (lb)',
                value: 'lb'
              },
              {
                label: 'Ounces (oz)',
                value: 'oz'
              },
              {
                label: 'Kilonewtons (kN)',
                value: 'kN'
              }
            ],
            valueForDisplay: null
          },
          {
            id: 61314,
            key: 'image',
            name: 'Image',
            value: [
              {
                s3Key: 'photos/0965ade9-dee5-483c-890e-5bdf0ec90e0a.png',
                value: '0965ade9-dee5-483c-890e-5bdf0ec90e0a.png',
                internalId: 10959,
                source_value: '8mm-r.png'
              }
            ],
            unit: '',
            type: 'photo',
            availableUnits: null,
            valueForDisplay: null
          },
          {
            id: 61313,
            key: 'certifications',
            name: 'Certifications',
            value: [
              {
                value: 'EN 564:2014',
                internalId: 43,
                source_value: null
              }
            ],
            unit: '',
            type: 'certifications',
            availableUnits: null,
            valueForDisplay: 'EN 564, UIAA'
          },
          {
            id: 61308,
            key: 'colour',
            name: 'Colour',
            value: {
              value: 'Red',
              string: true,
              source_value: 'Red'
            },
            unit: '',
            type: 'string',
            availableUnits: null,
            valueForDisplay: 'Red'
          },
          {
            id: 303776,
            key: 'core_material',
            name: 'Core Material',
            value: {
              value: 'Polyamid (PA)'
            },
            unit: '',
            type: 'string',
            availableUnits: null,
            valueForDisplay: 'Polyamid (PA)'
          },
          {
            id: 303775,
            key: 'sheath_material',
            name: 'Sheath Material',
            value: {
              value: 'Polyamid (PA)'
            },
            unit: '',
            type: 'string',
            availableUnits: null,
            valueForDisplay: 'Polyamid (PA)'
          },
          {
            id: 303777,
            key: 'length',
            name: 'Length',
            value: {
              unit: 'm',
              value: '200'
            },
            unit: 'm',
            type: 'numeric',
            availableUnits: [
              {
                label: 'Millimeters',
                value: 'mm'
              },
              {
                label: 'Centimeters',
                value: 'cm'
              },
              {
                label: 'Meters',
                value: 'm'
              },
              {
                label: 'Feet',
                value: 'ft'
              },
              {
                label: 'Inches',
                value: 'in'
              }
            ],
            valueForDisplay: '200'
          },
          {
            id: 303773,
            key: 'braid_plait_strand',
            name: 'Braid/Plait/Strand',
            value: {
              value: '32'
            },
            unit: '',
            type: 'string',
            availableUnits: null,
            valueForDisplay: '32'
          },
          {
            id: 303774,
            key: 'mbs_metric',
            name: 'MBS Metric',
            value: {
              value: '1530'
            },
            unit: '',
            type: 'numeric',
            availableUnits: [
              {
                label: 'Kilonewtons (kN)',
                value: 'kN'
              }
            ],
            valueForDisplay: '1530'
          },
          {
            id: 61306,
            key: 'weight',
            name: 'Weight',
            value: {
              value: '41.9',
              string: true,
              source_value: '40 g/m'
            },
            unit: 'gm',
            type: 'numeric',
            availableUnits: [
              {
                label: 'Kilograms (kg)',
                value: 'kg'
              },
              {
                label: 'Grams (g)',
                value: 'g'
              },
              {
                label: 'Grams per meter (g/m)',
                value: 'g/m'
              },
              {
                label: 'Pounds (lb)',
                value: 'lb'
              },
              {
                label: 'Ounces (oz)',
                value: 'oz'
              }
            ],
            valueForDisplay: '41.9'
          },
          {
            id: 61309,
            key: 'diameter',
            name: 'Diameter',
            value: {
              unit: 'mm',
              value: '8',
              source_value: '8 mm'
            },
            unit: 'mm',
            type: 'numeric',
            availableUnits: [
              {
                label: 'Millimeters',
                value: 'mm'
              },
              {
                label: 'Centimeters',
                value: 'cm'
              },
              {
                label: 'Meters',
                value: 'm'
              },
              {
                label: 'Feet',
                value: 'ft'
              },
              {
                label: 'Inches',
                value: 'in'
              }
            ],
            valueForDisplay: '8'
          },
          {
            id: 61312,
            key: 'manufacturer',
            name: 'Manufacturer',
            value: {
              value: 'BEAL',
              string: true,
              source_value: 'Beal'
            },
            unit: null,
            type: 'string',
            availableUnits: [],
            valueForDisplay: 'BEAL'
          },
          {
            id: 61315,
            key: 'uploads_1',
            name: 'Uploads',
            value: [
              {
                s3Key: 'pdfs/ed3602d7-1cd4-4497-87f4-1c6a5e00c822.pdf',
                value: 'ed3602d7-1cd4-4497-87f4-1c6a5e00c822.pdf',
                internalId: 10962,
                sourceName: 'CORDELETTE_NOTICE.pdf',
                source_value: 'CORDELETTE_NOTICE.pdf'
              },
              {
                s3Key: 'pdfs/fd35e999-9314-4536-bc3f-7e23733b5de5.pdf',
                value: 'fd35e999-9314-4536-bc3f-7e23733b5de5.pdf',
                internalId: 10961,
                sourceName: 'BC08_2020_Declaration_of_Conformity.pdf',
                source_value: 'BC08_2020_Declaration_of_Conformity.pdf'
              },
              {
                s3Key: 'pdfs/2bfc2d33-2e60-46f0-8a2c-01517d936a2c.pdf',
                value: '2bfc2d33-2e60-46f0-8a2c-01517d936a2c.pdf',
                internalId: 10960,
                sourceName: 'BC08_2021_UIAA-Certification.pdf',
                source_value: 'BC08_2021_UIAA-Certification.pdf'
              }
            ],
            unit: null,
            type: 'pdf',
            availableUnits: [],
            valueForDisplay: null
          }
        ]
      },
      {
        product_variation_id: 9334,
        product_id: 29511,
        status: 'PUBLISHED',
        code: 'BC02.120.Pk',
        product_variation_name: 'ACCESSORY CORD 2 MM, PINK',
        product_name: 'ACCESSORY CORD 2 MM',
        product_group_name: 'Ropes - Cord',
        product_data: [
          {
            id: 61321,
            key: 'mbs_1_2_3',
            name: 'MBS',
            value: {
              value: '70 kg',
              string: true,
              source_value: '70 kg'
            },
            unit: 'kN',
            type: 'numeric',
            availableUnits: [
              {
                label: 'Kilonewtons',
                value: 'kN'
              },
              {
                label: 'Pounds of force',
                value: 'lbf'
              },
              {
                label: 'Tons',
                value: 't'
              }
            ],
            valueForDisplay: null
          },
          {
            id: 61316,
            key: 'weight',
            name: 'Weight',
            value: {
              value: '2.4 g/m',
              string: true,
              source_value: '2.4 g/m'
            },
            unit: 'gm',
            type: 'numeric',
            availableUnits: [
              {
                label: 'Kilograms (kg)',
                value: 'kg'
              },
              {
                label: 'Grams (g)',
                value: 'g'
              },
              {
                label: 'Grams per meter (g/m)',
                value: 'g/m'
              },
              {
                label: 'Pounds (lb)',
                value: 'lb'
              },
              {
                label: 'Ounces (oz)',
                value: 'oz'
              }
            ],
            valueForDisplay: null
          },
          {
            id: 61318,
            key: 'colour',
            name: 'Colour',
            value: {
              value: 'Pink',
              string: true,
              source_value: 'Pink'
            },
            unit: '',
            type: 'string',
            availableUnits: null,
            valueForDisplay: null
          },
          {
            id: 61317,
            key: 'material',
            name: 'Material',
            value: {
              value: 'Polyamide',
              string: true,
              source_value: 'Polyamide'
            },
            unit: '',
            type: 'string',
            availableUnits: null,
            valueForDisplay: 'Polyamide'
          },
          {
            id: 61319,
            key: 'diameter',
            name: 'Diameter',
            value: {
              unit: 'mm',
              value: '2',
              source_value: '2 mm'
            },
            unit: 'mm',
            type: 'numeric',
            availableUnits: [
              {
                label: 'Millimeters',
                value: 'mm'
              },
              {
                label: 'Centimeters',
                value: 'cm'
              },
              {
                label: 'Meters',
                value: 'm'
              },
              {
                label: 'Feet',
                value: 'ft'
              },
              {
                label: 'Inches',
                value: 'in'
              }
            ],
            valueForDisplay: '2'
          },
          {
            id: 61323,
            key: 'image',
            name: 'Image',
            value: [
              {
                s3Key: 'photos/239c11ac-e50c-48c1-8eeb-c80611c6f502.png',
                value: '239c11ac-e50c-48c1-8eeb-c80611c6f502.png',
                internalId: 10963,
                source_value: '2mm-p.png'
              }
            ],
            unit: '',
            type: 'photo',
            availableUnits: null,
            valueForDisplay: null
          },
          {
            id: 61320,
            key: 'length',
            name: 'Length',
            value: {
              unit: 'm',
              value: '120',
              source_value: '120 m'
            },
            unit: 'm',
            type: 'numeric',
            availableUnits: [
              {
                label: 'Millimeters',
                value: 'mm'
              },
              {
                label: 'Centimeters',
                value: 'cm'
              },
              {
                label: 'Meters',
                value: 'm'
              },
              {
                label: 'Feet',
                value: 'ft'
              },
              {
                label: 'Inches',
                value: 'in'
              }
            ],
            valueForDisplay: '120'
          },
          {
            id: 61322,
            key: 'manufacturer',
            name: 'Manufacturer',
            value: {
              value: 'BEAL',
              string: true,
              source_value: 'Beal'
            },
            unit: null,
            type: 'string',
            availableUnits: [],
            valueForDisplay: 'BEAL'
          }
        ]
      },
      {
        product_variation_id: 9335,
        product_id: 29514,
        status: 'PUBLISHED',
        code: 'BC03.120.A',
        product_variation_name: 'ACCESSORY CORD 3 MM, ANISE',
        product_name: 'ACCESSORY CORD 3 MM',
        product_group_name: 'Ropes - Cord',
        product_data: [
          {
            id: 61329,
            key: 'mbs_1_2_3',
            name: 'MBS',
            value: {
              value: '180 kg',
              string: true,
              source_value: '180 kg'
            },
            unit: 'kN',
            type: 'numeric',
            availableUnits: [
              {
                label: 'Kilonewtons',
                value: 'kN'
              },
              {
                label: 'Pounds of force',
                value: 'lbf'
              },
              {
                label: 'Tons',
                value: 't'
              }
            ],
            valueForDisplay: null
          },
          {
            id: 61331,
            key: 'image',
            name: 'Image',
            value: [
              {
                s3Key: 'photos/eddff2bd-d9d8-4666-a773-cf93f88b75cd.png',
                value: 'eddff2bd-d9d8-4666-a773-cf93f88b75cd.png',
                internalId: 10964,
                source_value: '3mm-a.png'
              }
            ],
            unit: '',
            type: 'photo',
            availableUnits: null,
            valueForDisplay: null
          },
          {
            id: 61325,
            key: 'material',
            name: 'Material',
            value: {
              value: 'Polyamide',
              string: true,
              source_value: 'Polyamide'
            },
            unit: '',
            type: 'string',
            availableUnits: null,
            valueForDisplay: 'Polyamide'
          },
          {
            id: 303179,
            key: 'braid_plait_strand',
            name: 'Braid/Plait/Strand',
            value: {
              value: '16'
            },
            unit: '',
            type: 'string',
            availableUnits: null,
            valueForDisplay: '16'
          },
          {
            id: 303180,
            key: 'mbs_metric',
            name: 'MBS Metric',
            value: {
              value: '180'
            },
            unit: '',
            type: 'numeric',
            availableUnits: [
              {
                label: 'Kilonewtons (kN)',
                value: 'kN'
              }
            ],
            valueForDisplay: '180'
          },
          {
            id: 303177,
            key: 'sheath_material',
            name: 'Sheath Material',
            value: {
              value: 'Polyamid (PA)'
            },
            unit: '',
            type: 'string',
            availableUnits: null,
            valueForDisplay: 'Polyamid (PA)'
          },
          {
            id: 61327,
            key: 'diameter',
            name: 'Diameter',
            value: {
              unit: 'mm',
              value: '3',
              source_value: '3 mm'
            },
            unit: 'mm',
            type: 'numeric',
            availableUnits: [
              {
                label: 'Millimeters',
                value: 'mm'
              },
              {
                label: 'Centimeters',
                value: 'cm'
              },
              {
                label: 'Meters',
                value: 'm'
              },
              {
                label: 'Feet',
                value: 'ft'
              },
              {
                label: 'Inches',
                value: 'in'
              }
            ],
            valueForDisplay: '3'
          },
          {
            id: 61324,
            key: 'weight',
            name: 'Weight',
            value: {
              value: '6.5',
              string: true,
              source_value: '6.5 g/m'
            },
            unit: 'gm',
            type: 'numeric',
            availableUnits: [
              {
                label: 'Kilograms (kg)',
                value: 'kg'
              },
              {
                label: 'Grams (g)',
                value: 'g'
              },
              {
                label: 'Grams per meter (g/m)',
                value: 'g/m'
              },
              {
                label: 'Pounds (lb)',
                value: 'lb'
              },
              {
                label: 'Ounces (oz)',
                value: 'oz'
              }
            ],
            valueForDisplay: '6.5'
          },
          {
            id: 61326,
            key: 'colour',
            name: 'Colour',
            value: {
              value: 'Anis',
              string: true,
              source_value: 'Anise'
            },
            unit: '',
            type: 'string',
            availableUnits: null,
            valueForDisplay: 'Anis'
          },
          {
            id: 61330,
            key: 'manufacturer',
            name: 'Manufacturer',
            value: {
              value: 'BEAL',
              string: true,
              source_value: 'Beal'
            },
            unit: null,
            type: 'string',
            availableUnits: [],
            valueForDisplay: 'BEAL'
          },
          {
            id: 303178,
            key: 'core_material',
            name: 'Core Material',
            value: {
              value: 'Polyamid (PA)'
            },
            unit: '',
            type: 'string',
            availableUnits: null,
            valueForDisplay: 'Polyamid (PA)'
          },
          {
            id: 61328,
            key: 'length',
            name: 'Length',
            value: {
              unit: 'm',
              value: '120',
              source_value: '120 m'
            },
            unit: 'm',
            type: 'numeric',
            availableUnits: [
              {
                label: 'Millimeters',
                value: 'mm'
              },
              {
                label: 'Centimeters',
                value: 'cm'
              },
              {
                label: 'Meters',
                value: 'm'
              },
              {
                label: 'Feet',
                value: 'ft'
              },
              {
                label: 'Inches',
                value: 'in'
              }
            ],
            valueForDisplay: '120'
          }
        ]
      },
      {
        product_variation_id: 9351,
        product_id: 29518,
        status: 'PUBLISHED',
        code: 'BC07.120.O',
        product_variation_name: 'ACCESSORY CORD, 7 mm, Orange',
        product_name: 'ACCESSORY CORD 7 MM',
        product_group_name: 'Ropes - Cord',
        product_data: [
          {
            id: 61458,
            key: 'material',
            name: 'Material',
            value: {
              value: 'Polyamide',
              string: true,
              source_value: 'Polyamide'
            },
            unit: '',
            type: 'string',
            availableUnits: null,
            valueForDisplay: 'Polyamide'
          },
          {
            id: 61461,
            key: 'mbs_1_2_3',
            name: 'MBS',
            value: {
              value: '1170 kg',
              string: true,
              source_value: '1170 kg'
            },
            unit: 'kN',
            type: 'numeric',
            availableUnits: [
              {
                label: 'Kilonewtons',
                value: 'kN'
              },
              {
                label: 'Pounds of force',
                value: 'lbf'
              },
              {
                label: 'Tons',
                value: 't'
              }
            ],
            valueForDisplay: null
          },
          {
            id: 61462,
            key: 'rated_load',
            name: 'Rated Load',
            value: {
              value: '1680 kg',
              string: true,
              source_value: '1680 kg'
            },
            unit: 'kg',
            type: 'numeric',
            availableUnits: [
              {
                label: 'Kilograms (kg)',
                value: 'kg'
              },
              {
                label: 'Grams (gm)',
                value: 'g'
              },
              {
                label: 'Pounds (lb)',
                value: 'lb'
              },
              {
                label: 'Ounces (oz)',
                value: 'oz'
              },
              {
                label: 'Kilonewtons (kN)',
                value: 'kN'
              }
            ],
            valueForDisplay: null
          },
          {
            id: 61465,
            key: 'image',
            name: 'Image',
            value: [
              {
                s3Key: 'photos/2ff3c33f-828c-46bf-9dfd-dd4d1e282e04.png',
                value: '2ff3c33f-828c-46bf-9dfd-dd4d1e282e04.png',
                internalId: 10998,
                source_value: '7mm-or.png'
              }
            ],
            unit: '',
            type: 'photo',
            availableUnits: null,
            valueForDisplay: null
          },
          {
            id: 61457,
            key: 'weight',
            name: 'Weight',
            value: {
              value: '29.9',
              string: true,
              source_value: '31 g/m'
            },
            unit: 'gm',
            type: 'numeric',
            availableUnits: [
              {
                label: 'Kilograms (kg)',
                value: 'kg'
              },
              {
                label: 'Grams (g)',
                value: 'g'
              },
              {
                label: 'Grams per meter (g/m)',
                value: 'g/m'
              },
              {
                label: 'Pounds (lb)',
                value: 'lb'
              },
              {
                label: 'Ounces (oz)',
                value: 'oz'
              }
            ],
            valueForDisplay: '29.9'
          },
          {
            id: 303655,
            key: 'length',
            name: 'Length',
            value: {
              unit: 'm',
              value: '120'
            },
            unit: 'm',
            type: 'numeric',
            availableUnits: [
              {
                label: 'Millimeters',
                value: 'mm'
              },
              {
                label: 'Centimeters',
                value: 'cm'
              },
              {
                label: 'Meters',
                value: 'm'
              },
              {
                label: 'Feet',
                value: 'ft'
              },
              {
                label: 'Inches',
                value: 'in'
              }
            ],
            valueForDisplay: '120'
          },
          {
            id: 303653,
            key: 'braid_plait_strand',
            name: 'Braid/Plait/Strand',
            value: {
              value: '24'
            },
            unit: '',
            type: 'string',
            availableUnits: null,
            valueForDisplay: '24'
          },
          {
            id: 303654,
            key: 'core_material',
            name: 'Core Material',
            value: {
              value: 'Polyamid (PA)'
            },
            unit: '',
            type: 'string',
            availableUnits: null,
            valueForDisplay: 'Polyamid (PA)'
          },
          {
            id: 61463,
            key: 'manufacturer',
            name: 'Manufacturer',
            value: {
              value: 'BEAL',
              string: true,
              source_value: 'Beal'
            },
            unit: null,
            type: 'string',
            availableUnits: [],
            valueForDisplay: 'BEAL'
          },
          {
            id: 61459,
            key: 'colour',
            name: 'Colour',
            value: {
              value: 'Orange',
              string: true,
              source_value: 'Orange'
            },
            unit: '',
            type: 'string',
            availableUnits: null,
            valueForDisplay: 'Orange'
          },
          {
            id: 303657,
            key: 'mbs_metric',
            name: 'MBS Metric',
            value: {
              value: '1170'
            },
            unit: '',
            type: 'numeric',
            availableUnits: [
              {
                label: 'Kilonewtons (kN)',
                value: 'kN'
              }
            ],
            valueForDisplay: '1170'
          },
          {
            id: 303656,
            key: 'sheath_material',
            name: 'Sheath Material',
            value: {
              value: 'Polyamid (PA)'
            },
            unit: '',
            type: 'string',
            availableUnits: null,
            valueForDisplay: 'Polyamid (PA)'
          },
          {
            id: 61460,
            key: 'diameter',
            name: 'Diameter',
            value: {
              unit: 'mm',
              value: '7',
              source_value: '7 mm'
            },
            unit: 'mm',
            type: 'numeric',
            availableUnits: [
              {
                label: 'Millimeters',
                value: 'mm'
              },
              {
                label: 'Centimeters',
                value: 'cm'
              },
              {
                label: 'Meters',
                value: 'm'
              },
              {
                label: 'Feet',
                value: 'ft'
              },
              {
                label: 'Inches',
                value: 'in'
              }
            ],
            valueForDisplay: '7'
          },
          {
            id: 61464,
            key: 'certifications',
            name: 'Certifications',
            value: [
              {
                value: 'EN 564:2014',
                internalId: 43,
                source_value: null
              }
            ],
            unit: '',
            type: 'certifications',
            availableUnits: null,
            valueForDisplay: 'EN 564, UIAA'
          },
          {
            id: 61466,
            key: 'uploads_1',
            name: 'Uploads',
            value: [
              {
                s3Key: 'pdfs/5a2b1652-80c0-4fc9-99db-c80e38510d1d.pdf',
                value: '5a2b1652-80c0-4fc9-99db-c80e38510d1d.pdf',
                internalId: 11001,
                sourceName: 'CORDELETTE_NOTICE.pdf',
                source_value: 'CORDELETTE_NOTICE.pdf'
              },
              {
                s3Key: 'pdfs/2cda0151-396c-4e0a-9671-ce8aae0f850a.pdf',
                value: '2cda0151-396c-4e0a-9671-ce8aae0f850a.pdf',
                internalId: 11000,
                sourceName: 'BC07_2020_Declaration_of_Conformity.pdf',
                source_value: 'BC07_2020_Declaration_of_Conformity.pdf'
              },
              {
                s3Key: 'pdfs/33f830ba-da7e-42cf-be16-fcdd7e5762b7.pdf',
                value: '33f830ba-da7e-42cf-be16-fcdd7e5762b7.pdf',
                internalId: 10999,
                sourceName: 'BC07_2021_UIAA-Certification.pdf',
                source_value: 'BC07_2021_UIAA-Certification.pdf'
              }
            ],
            unit: null,
            type: 'pdf',
            availableUnits: [],
            valueForDisplay: null
          }
        ]
      },
      {
        product_variation_id: 9352,
        product_id: 30422,
        status: 'PUBLISHED',
        code: 'BC05DYN.50',
        product_variation_name: 'DYNEEMA 5mm',
        product_name: 'DYNEEMA 5.5MM',
        product_group_name: 'Ropes - Cord',
        product_data: [
          {
            id: 61468,
            key: 'diameter',
            name: 'Diameter',
            value: {
              unit: 'mm',
              value: '5',
              source_value: '5 mm'
            },
            unit: 'mm',
            type: 'numeric',
            availableUnits: [
              {
                label: 'Millimeters',
                value: 'mm'
              },
              {
                label: 'Centimeters',
                value: 'cm'
              },
              {
                label: 'Meters',
                value: 'm'
              },
              {
                label: 'Feet',
                value: 'ft'
              },
              {
                label: 'Inches',
                value: 'in'
              }
            ],
            valueForDisplay: '5'
          },
          {
            id: 61469,
            key: 'mbs_1_2_3',
            name: 'MBS',
            value: {
              value: '1500',
              string: true,
              source_value: '1500 kg'
            },
            unit: 'kN',
            type: 'numeric',
            availableUnits: [
              {
                label: 'Kilonewtons',
                value: 'kN'
              },
              {
                label: 'Pounds of force',
                value: 'lbf'
              },
              {
                label: 'Tons',
                value: 't'
              }
            ],
            valueForDisplay: '1500'
          },
          {
            id: 61474,
            key: 'image',
            name: 'Image',
            value: [
              {
                s3Key: 'photos/4d287532-acb5-49a3-8522-47e43431ec07.png',
                value: '4d287532-acb5-49a3-8522-47e43431ec07.png',
                internalId: 11002,
                source_value: 'zdsvzdf.png'
              }
            ],
            unit: '',
            type: 'photo',
            availableUnits: null,
            valueForDisplay: null
          },
          {
            id: 61472,
            key: 'manufacturer',
            name: 'Manufacturer',
            value: {
              value: 'BEAL',
              string: true,
              source_value: 'Beal'
            },
            unit: null,
            type: 'string',
            availableUnits: [],
            valueForDisplay: 'BEAL'
          },
          {
            id: 61467,
            key: 'weight',
            name: 'Weight',
            value: {
              value: '15',
              string: true,
              source_value: '23 g/m'
            },
            unit: 'gm',
            type: 'numeric',
            availableUnits: [
              {
                label: 'Kilograms (kg)',
                value: 'kg'
              },
              {
                label: 'Grams (g)',
                value: 'g'
              },
              {
                label: 'Grams per meter (g/m)',
                value: 'g/m'
              },
              {
                label: 'Pounds (lb)',
                value: 'lb'
              },
              {
                label: 'Ounces (oz)',
                value: 'oz'
              }
            ],
            valueForDisplay: '15'
          },
          {
            id: 61473,
            key: 'certifications',
            name: 'Certifications',
            value: [
              {
                value: 'EN 564:2014',
                internalId: 43,
                source_value: null
              }
            ],
            unit: '',
            type: 'certifications',
            availableUnits: null,
            valueForDisplay: 'EN 564'
          },
          {
            id: 61471,
            key: 'core_material',
            name: 'Core Material',
            value: {
              value: 'Dyneema (HPPE)',
              string: true,
              source_value: 'Aramide'
            },
            unit: '',
            type: 'string',
            availableUnits: null,
            valueForDisplay: 'Dyneema (HPPE)'
          },
          {
            id: 303956,
            key: 'braid_plait_strand',
            name: 'Braid/Plait/Strand',
            value: {
              value: '32'
            },
            unit: '',
            type: 'string',
            availableUnits: null,
            valueForDisplay: '32'
          },
          {
            id: 303957,
            key: 'mbs_metric',
            name: 'MBS Metric',
            value: {
              value: '1000'
            },
            unit: '',
            type: 'numeric',
            availableUnits: [
              {
                label: 'Kilonewtons (kN)',
                value: 'kN'
              }
            ],
            valueForDisplay: '1000'
          },
          {
            id: 61470,
            key: 'sheath_material',
            name: 'Sheath Material',
            value: {
              value: 'Dyneema (HPPE)',
              string: true,
              source_value: 'Polyamide'
            },
            unit: '',
            type: 'string',
            availableUnits: null,
            valueForDisplay: 'Dyneema (HPPE)'
          },
          {
            id: 303955,
            key: 'length',
            name: 'Length',
            value: {
              unit: 'm',
              value: '50'
            },
            unit: 'm',
            type: 'numeric',
            availableUnits: [
              {
                label: 'Millimeters',
                value: 'mm'
              },
              {
                label: 'Centimeters',
                value: 'cm'
              },
              {
                label: 'Meters',
                value: 'm'
              },
              {
                label: 'Feet',
                value: 'ft'
              },
              {
                label: 'Inches',
                value: 'in'
              }
            ],
            valueForDisplay: '50'
          },
          {
            id: 323613,
            key: 'material',
            name: 'Material',
            value: {
              value: 'PA/DYN'
            },
            unit: '',
            type: 'string',
            availableUnits: null,
            valueForDisplay: 'PA/DYN'
          },
          {
            id: 323614,
            key: 'icon_uiaa',
            name: 'Icon - UIAA',
            value: {
              value: 'UIAA'
            },
            unit: null,
            type: 'icon',
            availableUnits: [],
            valueForDisplay: 'UIAA'
          },
          {
            id: 323615,
            key: 'rope_label_name',
            name: 'Rope Label Name',
            value: {
              value: 'DYNEEMA'
            },
            unit: null,
            type: 'string',
            availableUnits: [],
            valueForDisplay: 'DYNEEMA'
          },
          {
            id: 61475,
            key: 'uploads_1',
            name: 'Uploads',
            value: [
              {
                s3Key: 'pdfs/3482d5ec-95bd-498a-a48e-9908ac2c3440.pdf',
                value: '3482d5ec-95bd-498a-a48e-9908ac2c3440.pdf',
                internalId: 11004,
                sourceName: 'BC05DYN_2020_Declaration_of_Conformity.pdf',
                source_value: 'BC05DYN_2020_Declaration_of_Conformity.pdf'
              },
              {
                s3Key: 'pdfs/7bd7d941-051d-4a1d-8a91-0064934e3d17.pdf',
                value: '7bd7d941-051d-4a1d-8a91-0064934e3d17.pdf',
                internalId: 11003,
                sourceName: 'BC05DYN_2021_UIAA-Certification.pdf',
                source_value: 'BC05DYN_2021_UIAA-Certification.pdf'
              }
            ],
            unit: null,
            type: 'pdf',
            availableUnits: [],
            valueForDisplay: null
          }
        ]
      },
      {
        product_variation_id: 9448,
        product_id: 29513,
        status: 'PUBLISHED',
        code: 'BC04.120.Y',
        product_variation_name: 'ACCESSORY CORD, 4 mm, Yellow',
        product_name: 'ACCESSORY CORD 4 MM',
        product_group_name: 'Ropes - Cord',
        product_data: [
          {
            id: 62299,
            key: 'material',
            name: 'Material',
            value: {
              value: 'Polyamide',
              string: true,
              source_value: 'Polyamide'
            },
            unit: '',
            type: 'string',
            availableUnits: null,
            valueForDisplay: 'Polyamide'
          },
          {
            id: 62302,
            key: 'mbs_1_2_3',
            name: 'MBS',
            value: {
              value: '400 kg',
              string: true,
              source_value: '400 kg'
            },
            unit: 'kN',
            type: 'numeric',
            availableUnits: [
              {
                label: 'Kilonewtons',
                value: 'kN'
              },
              {
                label: 'Pounds of force',
                value: 'lbf'
              },
              {
                label: 'Tons',
                value: 't'
              }
            ],
            valueForDisplay: null
          },
          {
            id: 62303,
            key: 'rated_load',
            name: 'Rated Load',
            value: {
              value: '530 kg',
              string: true,
              source_value: '530 kg'
            },
            unit: 'kg',
            type: 'numeric',
            availableUnits: [
              {
                label: 'Kilograms (kg)',
                value: 'kg'
              },
              {
                label: 'Grams (gm)',
                value: 'g'
              },
              {
                label: 'Pounds (lb)',
                value: 'lb'
              },
              {
                label: 'Ounces (oz)',
                value: 'oz'
              },
              {
                label: 'Kilonewtons (kN)',
                value: 'kN'
              }
            ],
            valueForDisplay: null
          },
          {
            id: 62306,
            key: 'image',
            name: 'Image',
            value: [
              {
                s3Key: 'photos/aaed29af-5dc3-4d41-ba93-337e199187a6.png',
                value: 'aaed29af-5dc3-4d41-ba93-337e199187a6.png',
                internalId: 11271,
                source_value: '4mm.png'
              }
            ],
            unit: '',
            type: 'photo',
            availableUnits: null,
            valueForDisplay: null
          },
          {
            id: 62301,
            key: 'diameter',
            name: 'Diameter',
            value: {
              unit: 'mm',
              value: '4',
              source_value: '4 mm'
            },
            unit: 'mm',
            type: 'numeric',
            availableUnits: [
              {
                label: 'Millimeters',
                value: 'mm'
              },
              {
                label: 'Centimeters',
                value: 'cm'
              },
              {
                label: 'Meters',
                value: 'm'
              },
              {
                label: 'Feet',
                value: 'ft'
              },
              {
                label: 'Inches',
                value: 'in'
              }
            ],
            valueForDisplay: '4'
          },
          {
            id: 62305,
            key: 'certifications',
            name: 'Certifications',
            value: [
              {
                value: 'EN 564:2014',
                internalId: 43,
                source_value: null
              }
            ],
            unit: '',
            type: 'certifications',
            availableUnits: null,
            valueForDisplay: 'EN 564, UIAA'
          },
          {
            id: 62300,
            key: 'colour',
            name: 'Colour',
            value: {
              value: 'Yellow',
              string: true,
              source_value: 'Yellow'
            },
            unit: '',
            type: 'string',
            availableUnits: null,
            valueForDisplay: 'Yellow'
          },
          {
            id: 62298,
            key: 'weight',
            name: 'Weight',
            value: {
              value: '10.9',
              string: true,
              source_value: '11 g/m'
            },
            unit: 'gm',
            type: 'numeric',
            availableUnits: [
              {
                label: 'Kilograms (kg)',
                value: 'kg'
              },
              {
                label: 'Grams (g)',
                value: 'g'
              },
              {
                label: 'Grams per meter (g/m)',
                value: 'g/m'
              },
              {
                label: 'Pounds (lb)',
                value: 'lb'
              },
              {
                label: 'Ounces (oz)',
                value: 'oz'
              }
            ],
            valueForDisplay: '10.9'
          },
          {
            id: 303285,
            key: 'braid_plait_strand',
            name: 'Braid/Plait/Strand',
            value: {
              value: '16'
            },
            unit: '',
            type: 'string',
            availableUnits: null,
            valueForDisplay: '16'
          },
          {
            id: 303282,
            key: 'length',
            name: 'Length',
            value: {
              unit: 'm',
              value: '120'
            },
            unit: 'm',
            type: 'numeric',
            availableUnits: [
              {
                label: 'Millimeters',
                value: 'mm'
              },
              {
                label: 'Centimeters',
                value: 'cm'
              },
              {
                label: 'Meters',
                value: 'm'
              },
              {
                label: 'Feet',
                value: 'ft'
              },
              {
                label: 'Inches',
                value: 'in'
              }
            ],
            valueForDisplay: '120'
          },
          {
            id: 303284,
            key: 'mbs_metric',
            name: 'MBS Metric',
            value: {
              value: '400'
            },
            unit: '',
            type: 'numeric',
            availableUnits: [
              {
                label: 'Kilonewtons (kN)',
                value: 'kN'
              }
            ],
            valueForDisplay: '400'
          },
          {
            id: 62304,
            key: 'manufacturer',
            name: 'Manufacturer',
            value: {
              value: 'BEAL',
              string: true,
              source_value: 'Beal'
            },
            unit: null,
            type: 'string',
            availableUnits: [],
            valueForDisplay: 'BEAL'
          },
          {
            id: 303283,
            key: 'sheath_material',
            name: 'Sheath Material',
            value: {
              value: 'Polyamid (PA)'
            },
            unit: '',
            type: 'string',
            availableUnits: null,
            valueForDisplay: 'Polyamid (PA)'
          },
          {
            id: 303286,
            key: 'core_material',
            name: 'Core Material',
            value: {
              value: 'Polyamid (PA)'
            },
            unit: '',
            type: 'string',
            availableUnits: null,
            valueForDisplay: 'Polyamid (PA)'
          },
          {
            id: 62307,
            key: 'uploads_1',
            name: 'Uploads',
            value: [
              {
                s3Key: 'pdfs/c6215284-ee9e-4068-b4c1-9357bd7f36cd.pdf',
                value: 'c6215284-ee9e-4068-b4c1-9357bd7f36cd.pdf',
                internalId: 11274,
                sourceName: 'CORDELETTE_NOTICE.pdf',
                source_value: 'CORDELETTE_NOTICE.pdf'
              },
              {
                s3Key: 'pdfs/9b77dde4-4137-47c9-aafd-7302f336b9c6.pdf',
                value: '9b77dde4-4137-47c9-aafd-7302f336b9c6.pdf',
                internalId: 11273,
                sourceName: 'BC04_2020_Declaration_of_Conformity.pdf',
                source_value: 'BC04_2020_Declaration_of_Conformity.pdf'
              },
              {
                s3Key: 'pdfs/a3068467-3301-4e7f-8394-cfa61388da19.pdf',
                value: 'a3068467-3301-4e7f-8394-cfa61388da19.pdf',
                internalId: 11272,
                sourceName: 'BC04_2021_UIAA-Certification.pdf',
                source_value: 'BC04_2021_UIAA-Certification.pdf'
              }
            ],
            unit: null,
            type: 'pdf',
            availableUnits: [],
            valueForDisplay: null
          }
        ]
      },
      {
        product_variation_id: 9449,
        product_id: 29513,
        status: 'PUBLISHED',
        code: 'BC04.120.S',
        product_variation_name: 'ACCESSORY CORD, 4 mm, Shark',
        product_name: 'ACCESSORY CORD 4 MM',
        product_group_name: 'Ropes - Cord',
        product_data: [
          {
            id: 62308,
            key: 'weight',
            name: 'Weight',
            value: {
              value: '10.9',
              string: true,
              source_value: '11 g/m'
            },
            unit: 'gm',
            type: 'numeric',
            availableUnits: [
              {
                label: 'Kilograms (kg)',
                value: 'kg'
              },
              {
                label: 'Grams (g)',
                value: 'g'
              },
              {
                label: 'Grams per meter (g/m)',
                value: 'g/m'
              },
              {
                label: 'Pounds (lb)',
                value: 'lb'
              },
              {
                label: 'Ounces (oz)',
                value: 'oz'
              }
            ],
            valueForDisplay: '10.9'
          },
          {
            id: 62309,
            key: 'material',
            name: 'Material',
            value: {
              value: 'Polyamide',
              string: true,
              source_value: 'Polyamide'
            },
            unit: '',
            type: 'string',
            availableUnits: null,
            valueForDisplay: 'Polyamide'
          },
          {
            id: 62312,
            key: 'mbs_1_2_3',
            name: 'MBS',
            value: {
              value: '400 kg',
              string: true,
              source_value: '400 kg'
            },
            unit: 'kN',
            type: 'numeric',
            availableUnits: [
              {
                label: 'Kilonewtons',
                value: 'kN'
              },
              {
                label: 'Pounds of force',
                value: 'lbf'
              },
              {
                label: 'Tons',
                value: 't'
              }
            ],
            valueForDisplay: null
          },
          {
            id: 62313,
            key: 'rated_load',
            name: 'Rated Load',
            value: {
              value: '530 kg',
              string: true,
              source_value: '530 kg'
            },
            unit: 'kg',
            type: 'numeric',
            availableUnits: [
              {
                label: 'Kilograms (kg)',
                value: 'kg'
              },
              {
                label: 'Grams (gm)',
                value: 'g'
              },
              {
                label: 'Pounds (lb)',
                value: 'lb'
              },
              {
                label: 'Ounces (oz)',
                value: 'oz'
              },
              {
                label: 'Kilonewtons (kN)',
                value: 'kN'
              }
            ],
            valueForDisplay: null
          },
          {
            id: 62311,
            key: 'diameter',
            name: 'Diameter',
            value: {
              unit: 'mm',
              value: '4',
              source_value: '4 mm'
            },
            unit: 'mm',
            type: 'numeric',
            availableUnits: [
              {
                label: 'Millimeters',
                value: 'mm'
              },
              {
                label: 'Centimeters',
                value: 'cm'
              },
              {
                label: 'Meters',
                value: 'm'
              },
              {
                label: 'Feet',
                value: 'ft'
              },
              {
                label: 'Inches',
                value: 'in'
              }
            ],
            valueForDisplay: '4'
          },
          {
            id: 62316,
            key: 'image',
            name: 'Image',
            value: [
              {
                s3Key: 'photos/5ffeea65-0ccc-43a6-82d6-07216a99beb0.png',
                value: '5ffeea65-0ccc-43a6-82d6-07216a99beb0.png',
                internalId: 11275,
                source_value: '4mm-shark.png'
              }
            ],
            unit: '',
            type: 'photo',
            availableUnits: null,
            valueForDisplay: null
          },
          {
            id: 62315,
            key: 'certifications',
            name: 'Certifications',
            value: [
              {
                value: 'EN 564:2014',
                internalId: 43,
                source_value: null
              }
            ],
            unit: '',
            type: 'certifications',
            availableUnits: null,
            valueForDisplay: 'EN 564, UIAA'
          },
          {
            id: 62310,
            key: 'colour',
            name: 'Colour',
            value: {
              value: 'Grey',
              string: true,
              source_value: 'Shark'
            },
            unit: '',
            type: 'string',
            availableUnits: null,
            valueForDisplay: 'Grey'
          },
          {
            id: 303291,
            key: 'length',
            name: 'Length',
            value: {
              unit: 'm',
              value: '120'
            },
            unit: 'm',
            type: 'numeric',
            availableUnits: [
              {
                label: 'Millimeters',
                value: 'mm'
              },
              {
                label: 'Centimeters',
                value: 'cm'
              },
              {
                label: 'Meters',
                value: 'm'
              },
              {
                label: 'Feet',
                value: 'ft'
              },
              {
                label: 'Inches',
                value: 'in'
              }
            ],
            valueForDisplay: '120'
          },
          {
            id: 303287,
            key: 'mbs_metric',
            name: 'MBS Metric',
            value: {
              value: '400'
            },
            unit: '',
            type: 'numeric',
            availableUnits: [
              {
                label: 'Kilonewtons (kN)',
                value: 'kN'
              }
            ],
            valueForDisplay: '400'
          },
          {
            id: 303288,
            key: 'sheath_material',
            name: 'Sheath Material',
            value: {
              value: 'Polyamid (PA)'
            },
            unit: '',
            type: 'string',
            availableUnits: null,
            valueForDisplay: 'Polyamid (PA)'
          },
          {
            id: 62314,
            key: 'manufacturer',
            name: 'Manufacturer',
            value: {
              value: 'BEAL',
              string: true,
              source_value: 'Beal'
            },
            unit: null,
            type: 'string',
            availableUnits: [],
            valueForDisplay: 'BEAL'
          },
          {
            id: 303290,
            key: 'braid_plait_strand',
            name: 'Braid/Plait/Strand',
            value: {
              value: '16'
            },
            unit: '',
            type: 'string',
            availableUnits: null,
            valueForDisplay: '16'
          },
          {
            id: 303289,
            key: 'core_material',
            name: 'Core Material',
            value: {
              value: 'Polyamid (PA)'
            },
            unit: '',
            type: 'string',
            availableUnits: null,
            valueForDisplay: 'Polyamid (PA)'
          },
          {
            id: 62317,
            key: 'uploads_1',
            name: 'Uploads',
            value: [
              {
                s3Key: 'pdfs/b26cecb1-ff80-4323-9753-c91cc33d21bd.pdf',
                value: 'b26cecb1-ff80-4323-9753-c91cc33d21bd.pdf',
                internalId: 11278,
                sourceName: 'CORDELETTE_NOTICE.pdf',
                source_value: 'CORDELETTE_NOTICE.pdf'
              },
              {
                s3Key: 'pdfs/e94bec54-c3fd-4925-a20f-8b87c9c7174b.pdf',
                value: 'e94bec54-c3fd-4925-a20f-8b87c9c7174b.pdf',
                internalId: 11277,
                sourceName: 'BC04_2020_Declaration_of_Conformity.pdf',
                source_value: 'BC04_2020_Declaration_of_Conformity.pdf'
              },
              {
                s3Key: 'pdfs/ffa5b8f8-ba52-4406-8f75-d0066df0d46e.pdf',
                value: 'ffa5b8f8-ba52-4406-8f75-d0066df0d46e.pdf',
                internalId: 11276,
                sourceName: 'BC04_2021_UIAA-Certification.pdf',
                source_value: 'BC04_2021_UIAA-Certification.pdf'
              }
            ],
            unit: null,
            type: 'pdf',
            availableUnits: [],
            valueForDisplay: null
          }
        ]
      }
    ],
    pagination: {
      total: 3418,
      page: 1,
      limit: 10,
      totalPages: 342
    }
  }
  return data
}

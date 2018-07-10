var data = [
    {
      name: 'german',
      br: {
        reserve: [
          {
            code: 'ger00pz3b',
            tankname: 'Pz.III B',
            label: 'normal'
          },
          {
            code: 'ger00pz35t',
            tankname: 'Pz.35(t)',
            label: 'normal'
          }
        ],
        '1.0': [
          {
            code: 'ger10pz2c',
            tankname: 'Pz.II C',
            label: 'normal'
          },
          {
            code: 'ger10pz2f',
            tankname: 'Pz.II F',
            label: 'normal'
          },
          {
            code: 'ger10pz2cdak',
            tankname: 'Pz.IIC (DAK)',
            label: 'prem'
          }
        ],
        '1.3': [
          {
            code: 'ger13sdkfz221',
            tankname: 'Sd.Kfz.221',
            label: 'normal'
          },
          {
            code: 'ger13pz4c',
            tankname: 'Pz.IV C',
            label: 'normal'
          },
          {
            code: 'ger13flakpanzer1',
            tankname: 'Flakpanzer I',
            label: 'normal'
          },
          {
            code: 'ger13pz38a',
            tankname: 'Pz.38(t) A',
            label: 'normal'
          },
          {
            code: 'ger13sdkfz140/1',
            tankname: 'Sd.Kfz.140/1',
            label: 'prem'
          },
          {
            code: 'ger13nbfz',
            tankname: 'Nb.Fz',
            label: 'prem'
          }
        ],
        '1.7': [
          {
            code: 'ger17pz3e',
            tankname: 'Pz.III E',
            label: 'normal'
          },
          {
            code: 'ger17panzerjager1',
            tankname: 'Panzerjager I',
            label: 'normal'
          }
        ],
        '2.0': [
          {
            code: 'ger20sturmpanzer2',
            tankname: 'Sturmpanzer II',
            label: 'normal'
          },
          {
            code: 'ger20pz3f',
            tankname: 'Pz.III F',
            label: 'normal'
          },
          {
            code: 'ger20pz3j',
            tankname: 'Pz.III J',
            label: 'normal'
          },
          {
            code: 'ger20pz4e',
            tankname: 'Pz.IV E',
            label: 'normal'
          },
          {
            code: 'ger20gepard',
            tankname: 'Gepard',
            label: 'normal'
          },
          {
            code: 'ger20pz38f',
            tankname: 'Pz.38(t) F',
            label: 'normal'
          }
        ],
        '2.3': [
          {
            code: 'ger23pz3j',
            tankname: 'Pz.III J',
            label: 'normal'
          },
          {
            code: 'ger23stug3a',
            tankname: 'StuG III A',
            label: 'normal'
          },
          {
            code: 'ger23pz4f1',
            tankname: 'Pz.IV F1',
            label: 'normal'
          },
          {
            code: 'ger23pz2h',
            tankname: 'Pz.II H',
            label: 'prem'
          }
        ],
        '2.7': [
          {
            code: 'ger27sdkfz234/2',
            tankname: 'Sd.Kfz.234/2',
            label: 'normal'
          },
          {
            code: 'ger27marder3',
            tankname: 'Marder III',
            label: 'normal'
          }
        ],
        '3.0': [
          {
            code: 'ger30marder3h',
            tankname: 'Marder III H',
            label: 'normal'
          },
          {
            code: 'ger30pz3j1',
            tankname: 'Pz.III J1',
            label: 'normal'
          },
          {
            code: 'ger30sdkfz6/2',
            tankname: 'Sd.Kfz. 6/2',
            label: 'normal'
          },
          {
            code: 'ger30stuh42g',
            tankname: 'StuH 42 G',
            label: 'normal'
          },
          {
            code: 'ger30pz3n',
            tankname: 'Pz.III N',
            label: 'prem'
          },
          {
            code: 'ger30sdkfz234/4',
            tankname: 'Sd.Kfz.234/4',
            label: 'event'
          }
        ],
        '3.3': [
          {
            code: 'ger33pz3l',
            tankname: 'Pz.III L',
            label: 'normal'
          },
          {
            code: 'ger33pz3m',
            tankname: 'Pz.III M',
            label: 'normal'
          },
          {
            code: 'ger33pz4f2',
            tankname: 'Pz.IV F2',
            label: 'normal'
          }
        ],
        '3.7': [
          {
            code: 'ger37stug3f',
            tankname: 'StuG III F',
            label: 'normal'
          },
          {
            code: 'ger37wirbelwind',
            tankname: 'Wirbelwind',
            label: 'normal'
          },
          {
            code: 'ger37panzerwerfer42',
            tankname: 'Panzerwerfer 42',
            label: 'prem'
          }
        ],
        '4.0': [
          {
            code: 'ger4088cmflak37sfl',
            tankname: '8,8 cm Flak 37 Sfl.',
            label: 'normal'
          },
          {
            code: 'ger40pz4g',
            tankname: 'Pz.IV G',
            label: 'normal'
          },
          {
            code: 'ger40pz4j',
            tankname: 'Pz.IV J',
            label: 'normal'
          },
          {
            code: 'ger40stug3g',
            tankname: 'StuG III G',
            label: 'normal'
          },
          {
            code: 'ger40t34747',
            tankname: 'T-34-747(r)',
            label: 'prem'
          },
          {
            code: 'ger40pzbfw4',
            tankname: 'Pz.Bfw.IV',
            label: 'prem'
          },
          {
            code: 'ger40pzkpfwchurchill',
            tankname: 'Pz.Kpfw. Churchill',
            label: 'prem'
          }
        ],
        '4.3': [
          {
            code: 'ger43dickermax',
            tankname: 'Dicker Max',
            label: 'normal'
          },
          {
            code: 'ger43pz4h',
            tankname: 'Pz.IV H',
            label: 'normal'
          },
          {
            code: 'ger43kv2754',
            tankname: 'KV-II 754(r)',
            label: 'prem'
          }
        ],
        '4.7': [
          {
            code: 'ger47ostwind',
            tankname: 'Ostwind',
            label: 'normal'
          },
          {
            code: 'ger47jagdpanzer38',
            tankname: 'Jagdpanzer 38(t)',
            label: 'normal'
          },
          {
            code: 'ger47jagdpanzer4',
            tankname: 'Jagdpanzer IV',
            label: 'normal'
          }
        ],
        '5.0': [
          {
            code: 'ger50brummbar',
            tankname: 'Brummbar',
            label: 'prem'
          },
          {
            code: 'ger50kv1b756',
            tankname: 'KV-IB 756',
            label: 'prem'
          }
        ],
        '5.3': [
          {
            code: 'ger53nashorn',
            tankname: 'Nashorn',
            label: 'normal'
          },
          {
            code: 'ger53stureremil',
            tankname: 'Sturer Emil',
            label: 'normal'
          },
          {
            code: 'ger53panzer4/70',
            tankname: 'Panzer IV/70(V)',
            label: 'normal'
          }
        ],
        '5.7': [
          {
            code: 'ger57waffentrager',
            tankname: 'Waffentrager',
            label: 'normal'
          },
          {
            code: 'ger57tigerh1',
            tankname: 'Tiger H1',
            label: 'normal'
          },
          {
            code: 'ger57tigere',
            tankname: 'Tiger E',
            label: 'normal'
          },
          {
            code: 'ger57pantherd',
            tankname: 'Panther D',
            label: 'normal'
          },
          {
            code: 'ger57pzbfw4p',
            tankname: 'Pz.Bfw.VI (P)',
            label: 'prem'
          }
        ],
        '6.0': [
          {
            code: 'ger60panthera',
            tankname: 'Panther A',
            label: 'normal'
          },
          {
            code: 'ger60pantherg',
            tankname: 'Panther G',
            label: 'normal'
          },
          {
            code: 'ger60pantherf',
            tankname: 'Panther F',
            label: 'normal'
          }
        ],
        '6.3': [
          {
            code: 'ger63tiger2p',
            tankname: 'Tiger II (P)',
            label: 'normal'
          },
          {
            code: 'ger63jagdpanther',
            tankname: 'Jagdpanther',
            label: 'normal'
          },
          {
            code: 'ger63ferdinand',
            tankname: 'Ferdinand',
            label: 'normal'
          },
          {
            code: 'ger63bfwjagdpanther',
            tankname: 'Bfw.Jagdpanther',
            label: 'prem'
          }
        ],
        '6.7': [
          {
            code: 'ger67tiger2h',
            tankname: 'Tiger II (H)',
            label: 'normal'
          },
          {
            code: 'ger67coelian',
            tankname: 'Coelian',
            label: 'normal'
          },
          {
            code: 'ger67tiger2hsla16',
            tankname: 'Tiger II (H) Sla.16',
            label: 'prem'
          },
          {
            code: 'ger67ru251',
            tankname: 'Ru 251',
            label: 'prem'
          }
        ],
        '7.0': [
          {
            code: 'ger70jpz45',
            tankname: 'JPz 4-5',
            label: 'normal'
          },
          {
            code: 'ger70tiger2105cmkwk',
            tankname: 'Tiger II (10.5 cm Kw.K)',
            label: 'normal'
          },
          {
            code: 'ger70kugelblitz',
            tankname: 'Kugelblitz',
            label: 'normal'
          },
          {
            code: 'ger70jagdtiger',
            tankname: 'Jagdtiger',
            label: 'normal'
          },
          {
            code: 'ger70panther2',
            tankname: 'Panther II',
            label: 'normal'
          }
        ],
        '7.3': [
          {
            code: 'ger73mkpzm47',
            tankname: 'mKPz M47',
            label: 'prem'
          }
        ],
        '7.7': [
          {
            code: 'ger77maus',
            tankname: 'Maus',
            label: 'normal'
          },
          {
            code: 'ger77leopard1',
            tankname: 'Leopard I',
            label: 'normal'
          }
        ],
        '8.0': [
          {
            code: 'ger80flakpz1gepard',
            tankname: 'FlakPz I Gepard',
            label: 'normal'
          }
        ],
        '8.3': [
          {
            code: 'ger83rakjpz2',
            tankname: 'RakJPz 2',
            label: 'normal'
          },
          {
            code: 'ger83leoparda1a1',
            tankname: 'Leopard A1A1',
            label: 'normal'
          }
        ],
        '8.7': [
          {
            code: 'ger87begleitpanzer57',
            tankname: 'Begleitpanzer 57',
            label: 'normal'
          }
        ],
        '9.0': [
          {
            code: 'ger90rakjpz2hot',
            tankname: 'RakJPz 2 (HOT)',
            label: 'normal'
          },
          {
            code: 'ger90kpz70',
            tankname: 'KPz-70',
            label: 'normal'
          },
          {
            code: 'ger90leopard2k',
            tankname: 'Leopard 2K',
            label: 'normal'
          }
        ],
        '9.3': [],
        '9.7': [
          {
            code: 'ger97leopard2a4',
            tankname: 'Leopard 2A4',
            label: 'normal'
          }
        ],
        '10.0': []
      }
    }
  ]

function getTankData(id){
}
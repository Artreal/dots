module.exports = {
  sources: [
    { id    : 'wikipedia'
    , name  : 'Wikipedia'
    , notes : ''
    , url   : 'http://en.wikipedia.org'
    }
  , { id    : 'jimmy-wales-wiki'
    , main  : 'wikipedia'
    , name  : 'Wikipedia: Jimmy Wales'
    , notes : ''
    , url   : 'http://en.wikipedia.org/wiki/Jimmy_Wales'
    }
  ]
, people: [
    { id: 'jimmy-wales'
    , name: 'Jimmy Wales'
    , notes: ''
    , member: [
        { org: 'wikimedia-foundation',
          sources: [
            'jimmy-wales-wiki'
          ]
        }
      ]
    }
  ]
, orgs: [
    { id    : 'wikimedia'
    , name  : 'The Wikimedia Foundation'
    , notes : ''
    , hosted: [
        
      ]
    , webs: [
        { name  : 'Official'
        , url   : 'http://www.cfr.org'
        , notes : 'Web design and programming is strangely modern for a big stuffy political organization.'
        }
      , { name : 'Wikipedia.org'
        , url  : 'https://en.wikipedia.org/wiki/Council_on_Foreign_Relations'
        }
      ]
    }
  ]
}
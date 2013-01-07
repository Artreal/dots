module.exports = {
  sources: [
    { id    : 'cfr-official'
    , name  : 'CFR Website'
    , notes : ''
    , url   : 'http://www.cfr.org'
    }
  , { id    : 'wikipedia-cfr-members'
    , main  : 'wikipedia'
    , name  : 'Wikipedia List of CFR Members'
    , notes : ''
    , url   : 'http://en.wikipedia.org/wiki/Members_of_the_Council_on_Foreign_Relations'
    }
  ]
, orgs: [
    { id    : 'cfr'
    , name  : 'Council on Foreign Relations'
    , notes : ''
    
    , sources: [
        'cfr-official'
      ]
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
, events: [
    { id   : 'obama'
    , name : 'Barack Obama'
    , webs : [
        { url   : 'http://www.barackobama.org'
        , name  : 'Official Site'
        }
      ]
    }
  ]
};
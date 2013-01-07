module.exports = {
  sources: [
    { id    : 'obama-official'
    , name  : 'Barack Obama Website'
    , notes : ''
    , webs  : [
        { name  : 'Barack Obama Website'
        , url   : 'http://www.barackobama.org'
        }
      ]
    }
  ]
, people: [
    { id: 'barack-obama'
    , name: 'Barack Obama'
    , notes: ''
    , member: [
        'obama-admin'
      ]
    , sources: [
        'obama-official'
      ]
    }
  ]
, orgs: [
    { id: 'obama-admin'
    , name: 'Obama Administration'
    , webs: [
        
      ]
    }
  ]
};
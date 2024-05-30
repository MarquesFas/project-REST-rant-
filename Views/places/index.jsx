const React = require('react')
const Def = require('../default')

function index (data) {
    return (
      <Def>
          <main>
              <h1>My places</h1>
              <div>
                {data.places.map(place => <p>{place.name}</p>)}
              </div>
          </main>
      </Def>
    )
  }  

module.exports = index


const React = require('react')
const Def = require('../default')

function index (data) {
    return (
      <Def>
          <main>
              <h1>My places</h1>
              <div style={{display: 'flex', justifyContent: 'space-evenly', flexDirection: 'column'}}>
                {data.places.map(place => 
                  <div >
                    {place.name}
                    <a href={`/places/${place.id}/edit`}>Edit</a>
                  </div>
                )}
              </div>

              <button><a href="/places/new">Add a new Place</a></button>
          </main>
      </Def>
    )
  }  

module.exports = index


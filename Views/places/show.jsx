function show (data) {}
    let comments = (
    <h3 className="inactive">
      No comments yet!
    </h3>
  )
  let rating = (
    <h3 className="inactive">
        Not yet rated
    </h3>
  )
  if (data.place.comments.length) {
    let sumRatings = data.place.comments.reduce((tot, c) => {
      return tot + c.stars
    }, 0)
    let averageRating = Math.round(sumRatings / data.place.comments.length)
    let stars = ''
    for (let i = 0; i < averageRating; i++) {
      stars += 'â­ï¸'
    }
    rating = (
      <h3>
        {stars} stars
      </h3>
    )
  }
  
    comments = data.place.comments.map(c => {
      return (
        <div className="border">
          <h2 className="rant">{c.rant ? 'Rant! ðŸ˜¡' : 'Rave! ðŸ˜»'}</h2>
          <h4>{c.content}</h4>
          <h3>
            <stong>- {c.author}</stong>
          </h3>
          <h4>Rating: {c.stars}</h4>
        </div>
      )
    }
)
  return <Def>
      <main>
          <div className="row">
          <div className="col-sm-6">
              <img src={data.place.pic} alt={data.place.name} />
              <h3>
              Located in {data.place.city}, {data.place.state}
              </h3>
          </div>
          <div className="col-sm-6">
              ...
              <h2>
              Description
              </h2>
              <h3>
              {data.place.showEstablished()}
              </h3>
              <h4>
              Serving {data.place.cuisines}
              </h4>
              ...
          </div>
          <hr />
            <h2>Comments</h2>
            {comments}
      </main>
      </Def>
      
    
    
    module.exports = show

    
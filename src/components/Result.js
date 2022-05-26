import React from 'react'


function Result({artists}) {
    let token = window.localStorage.getItem("token")

    const renderArtists = () => {
        
        return artists.map(artist => (
            <div key={artist.id}>
                {artist.images.length ? <img width={"100%"} src={artist.images[0].url} alt=""/> : <div>No Image</div>}
                {artist.name}
            </div>
        ))
    }
  
    return (
        <div className='App-result'>
            {!token ?
               <h2>Merci de vous connecter</h2>
               :
                renderArtists()
            }
            
        </div>
    )
}

export default Result
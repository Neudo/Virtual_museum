// import React, { useState, useEffect } from 'react';
// import {useTexture} from "@react-three/drei";
//
// async function getRandomArtwork(setArtwork, setError, setIsLoading) {
//     let artworkData = null;
//     let imageId = '';
//     let randomId = 0;
//     let errorCount = 0;
//
//     while (!artworkData && errorCount < 10) {
//         randomId = Math.floor(Math.random() * 100000);
//         try {
//             const response = await fetch(`https://api.artic.edu/api/v1/artworks/${randomId}?fields=id,title,image_id,artist_display`);
//             if (response.ok) {
//                 artworkData = await response.json();
//                 imageId = artworkData.data.image_id;
//             } else {
//                 errorCount++;
//             }
//         } catch (error) {
//             errorCount++;
//         }
//     }
//
//     if (artworkData) {
//         setArtwork({
//             ...artworkData.data,
//             imageUrl: `https://www.artic.edu/iiif/2/${imageId}/full/403,/0/default.jpg`
//         });
//         setIsLoading(false);
//     } else {
//         setError(new Error('Impossible de récupérer une œuvre d\'art.'));
//         setIsLoading(false);
//     }
// }
//
// function RandomArtwork() {
//     const [artwork, setArtwork] = useState(null);
//     const [error, setError] = useState(null);
//     const [isLoading, setIsLoading] = useState(true);
//     const [texture, setTexture] = useState(null);
//
//
//
//     return (
//         <>
//             {texture && (
//                 <>
//                     <mesh>
//                         <planeGeometry args={[1, 1]}/>
//                         <meshStandardMaterial map={texture}/>
//                     </mesh>
//                     <div className="artWork">
//                         <h2>{artwork.title}</h2>
//                         <div className="wrapper-img" style={{backgroundImage: `url(${artwork.imageUrl})`}}>
//                         </div>
//                         <p>{artwork.artist_display}</p>
//                     </div>
//
//                     <div className="random-btn" onClick={() => getRandomArtwork(setArtwork, setError, setIsLoading)}>Random artWork</div>
//                 </>
//             )}
//         </>
//     );
// }
//
//
// export default RandomArtwork;

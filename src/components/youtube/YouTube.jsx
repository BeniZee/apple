import React, { useEffect } from 'react'

function YouTube() {
    const [videos,setVideos] = useState([])
    useEffect(() => {
        fetch(
            "https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCE_M8A5yxnLfW0KghEeajjw&maxResults=12&order=date&key=AIzaSyDNhxZQ9QZXs9ohOEmYoLyUbpdMdCtwhSI"

        ).then((res) => res.json())
            .then((data) => {
                const videoData = data.items
                setVideos(videoData)
        })
    })
    console.log(videos);
    
  return (
    <div>YouTube</div>
  )
}

export default YouTube
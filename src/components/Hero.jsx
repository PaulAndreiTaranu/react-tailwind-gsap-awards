import { useRef, useState } from 'react'

const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(1)
    const [hasClicked, setHasClicked] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const [loadedVideos, setLoadedVideos] = useState(0)

    const TOTAL_VIDEOS = 4
    const NEXT_VID_REF = useRef(null)

    const handleMiniVdClick = () => {
        setHasClicked(true)
        setCurrentIndex((prevIndex) => prevIndex + 1)
    }

    return (
        <section className='full-container'>
            <div
                id='video-frame'
                className='relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75'>
                <div>
                    <div className='mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg'>
                        <div onClick={handleMiniVdClick}>MiniVideoPlayer</div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero

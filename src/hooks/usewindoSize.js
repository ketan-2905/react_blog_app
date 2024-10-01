import { useEffect ,useState} from 'react'

const useWindoSize = () => {
    const [windoSize , setWindoSize] = useState({
        width: undefined,
        height: undefined

    })

    useEffect(() => {
        const handleResize = () => {
           setWindoSize({
            width : window.innerWidth,
            height : window.innerHeight
           })
        }

        handleResize()

        window.addEventListener("resize" , handleResize)

        return () => window.removeEventListener("resize" , handleResize)
    },[])
  return windoSize;
}

export default useWindoSize

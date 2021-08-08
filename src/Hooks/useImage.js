
import { useState, useEffect } from "react";

const useImage = ({ urlImg }) => {
    const [img, setImg] = useState();

    useEffect(_ => {
        fetch(urlImg).then(
            res => res.blob()
        ).then((blod) => {
            const imageObjectURL = URL.createObjectURL(blod);
            setImg(imageObjectURL);
            console.log(`This is img ${imageObjectURL}`)
        })
    }, [urlImg])

    return {
        img:img
    }
}


export default useImage;
import { useEffect, useState } from 'react'

import axios from 'axios'

const useApi = () => {
    const [images, setImages] = useState([]);
    const [input, setInput] = useState("");
    const [isActive, setIsActive] = useState(true);

    useEffect(() => {
        const peticion = () => {
            
            if (input !== "") { 
                setIsActive(true);
                // console.log('estoy lleno')
                axios.get (`https://api.unsplash.com/search/photos/?per_page=20&query=${encodeURI(input)}`, {
                    headers: {
                        'Authorization': 'Client-ID HPaCZNsAHJmjxrBKTzVGKzotCkTV8FqZ8IakEE9wa9U'
                    }
                })
                .then((res) => {
                    const imagesData = res.data;
                    
                    if (imagesData.results) {
                        setImages(imagesData.results);
                    }else{
                        setImages(imagesData);
                    }
                    setIsActive(false);
                })
                .catch((error) => {
                    alert('An error has ocurred.')
                })
            }else{
                setIsActive(true);
                // console.log("estoy vacio")
                axios.get ('https://api.unsplash.com/photos?per_page=20', {
                    headers: {
                        'Authorization': 'Client-ID HPaCZNsAHJmjxrBKTzVGKzotCkTV8FqZ8IakEE9wa9U'
                    }
                })
                .then((res) => {
                    const imagesData = res.data;
                    setImages(imagesData);
                    setIsActive(false);
                    // console.log(imagesData)
                })
                .catch((error) => {
                    alert('An error has ocurredd.')
                })
            }
        };
         peticion();

    }, [input]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const text = (e.target[0].value)
        console.log(text)
        setInput(text);
    }

    return [images, isActive, handleSubmit];

};

export default useApi

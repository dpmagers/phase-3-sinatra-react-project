import React, { useEffect } from 'react'
import {useParams} from 'react-router-dom'


function CategoryItems({categoryId}) {
    console.log(categoryId)

    const {id} = useParams() 

    useEffect(() => {
        fetch(`http://localhost:9292/categories/${id}`)
        .then(res => res.json())
        .then(data => console.log(data))
    }, [])


    return (
        <div></div>
    )
}
export default CategoryItems

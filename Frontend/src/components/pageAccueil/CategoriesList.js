import React, {useState, useEffect} from 'react';
import axios from 'axios';

const CategoriesList = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            const {data} = await axios.get('/api/categories');
            setCategories(data);
        }

        fetchCategories();
    },[])
    console.log(categories)


    return (
    <section className="flex [&>*]:border [&>*]:mx-1">
        {
            categories.map(category => {
                return(
                    <div className="">
                        <img src={category.url} className="rounded" alt="category" />
                        <p>{category.name}</p>
                    </div>
                )
            })
        }
    </section>
    )
}

export default CategoriesList
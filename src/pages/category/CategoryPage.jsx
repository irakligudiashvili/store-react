import { useParams } from "react-router-dom"
import Products from "../../components/Products";
import './category.css';

function CategoryPage(){
    const { name } = useParams();
    const validCategories = ['men', 'women', 'jewelery', 'electronics'];

    if(!validCategories.includes(name)){
        return <p>Category Not Found</p>
    }

    return (
        <div className="products-page">
            <Products productType={name} />
        </div>
    )
}

export default CategoryPage
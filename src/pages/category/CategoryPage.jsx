import { useParams } from "react-router-dom"
import Products from "../../components/Products";

function CategoryPage(){
    const { name } = useParams();
    const validCategories = ['men', 'women', 'jewelery', 'electronics'];

    if(!validCategories.includes(name)){
        return <p>Category Not Found</p>
    }

    return (
        <div>
            <Products productType={name} />
        </div>
    )
}

export default CategoryPage
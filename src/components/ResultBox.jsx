import { usePagination } from "../Hooks/usePagination"

export const ResultBox = () => {

    const {items, nextHandlePage, prevHandlePage, currentPage, firstCombinations} = usePagination()

    return (
        <>
            <div className='col-12 border result_box mt-2 rounded '>
                <ol className="listOfItems">
                   {
                    items.map((item, index) => (
                        <li key={index}>{ item }</li>
                    ))
                   }
                </ol>
            </div>

            <nav aria-label="Page navigation ">
                <ul className="pagination mt-2 mb-1">
                    
                    <li className="page-item">
                        <button 
                            className="page-link"
                            onClick={prevHandlePage}
                        >
                            Anterior
                        </button>
                    </li>

                    <li className=" page-link"> {currentPage}</li>
                    
                    <li className="page-item">
                        <button 
                            className="page-link"
                            onClick={nextHandlePage}
                        >
                            Siguiente
                        </button>
                    </li>
                
                </ul>
            </nav>

            <button
                className="btn btn-outline-primary"
                onClick={()=>firstCombinations()}
            >
                crear combinanciones
            </button>
        </>
    )
}
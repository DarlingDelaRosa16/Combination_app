import { useContext } from 'react'
import { NumberContext } from '../context/NumberContext'

export const ContentBox = () => {

    const {numbers, setNumbers} = useContext(NumberContext)

    const removeNumber = (item)=>  {
        setNumbers(numbers.filter(num=> num !== item))
    }

    return (
        <div className='col-12 border content_box mt-2 rounded d-flex p-2'>
            {
                numbers.map(item => (
                    <button 
                        className='btn btn-secondary ms-1'
                        key={item}
                        onClick={()=>removeNumber(item)}
                    > 
                        {item} 
                    </button>
                ))
            }
        </div>
    )
}
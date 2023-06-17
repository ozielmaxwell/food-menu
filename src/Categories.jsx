

const Categories = ({categories,filterItems}) => {
  return (
    <div className="btn-container">
      {categories.map((category)=>{
        return <button type="button" key={category} className="btn" onClick={()=>filterItems(category)} >
            {category}
        </button>
      })}
    </div>
  )
}

export default Categories

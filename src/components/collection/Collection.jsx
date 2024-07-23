import './collection.scss';

const Collection = () => {
  return (
    <div className='collection'>
      <h1>
        SHOP BY COLLECTION
      </h1>
      <div className="collectionItems">
        <div className="collectionItem collectionItem1">
          <div className='collectionButton'>
            WOMENS
          </div>
        </div>
        <div className="collectionItem collectionItem2">
          <div className='collectionButton'>
            MENS
          </div>
        </div>
        <div className="collectionItem collectionItem3">
          <div className='collectionButton'>
            KIDS
          </div>
        </div>
      </div>
    </div>
  )
}

export default Collection
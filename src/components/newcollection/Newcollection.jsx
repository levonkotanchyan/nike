import './newcollection.scss';

const Newcollection = () => {
  return (
    <div className='newcollection'>
        <h1>
            OUR NEW COLLECTION
        </h1>
        <div className="newcollectionItems">
            <div className="newcollectionItem">
                <div className="newColNike"></div>
                <h4>
                    NIKE X SPACE JAME : A NEW LEGACY
                </h4>
                <p>To celebrate the release of Space Jam: A New Legacy, Nike and Converse have joined forces to create an apparel and footwear collection worthy of Bugs Bunny and LeBron.</p>
            </div>
            <div className="newcollectionItem">
                <div className="newColCover"></div>
                <h4>
                Nike Black History Month
                </h4>
                <p>Nike is celebrating Black History Month with a new collection highlighted by customizable Air Force 1 sneakers.</p>
            </div>
        </div>
    </div>
  )
}

export default Newcollection
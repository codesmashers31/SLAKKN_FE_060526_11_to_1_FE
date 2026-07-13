import ProductListing from "./ProductListing"


const DataListing = () => {

    const datas = [
        {name:"React",subject:"Node"},
        {name:"HTML Node",subject:"CSS"},
        {name:"JS Node",subject:"JS"}
    ]

  return (
    <>
    <ProductListing listing = {datas}   />
    </>
  )
}

export default DataListing
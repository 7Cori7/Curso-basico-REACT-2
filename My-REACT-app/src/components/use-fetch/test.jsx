import useFetch from "."

export default function UseFetchTest(){

    const {data, loading, error} = useFetch('https://dummyjson.com/products', {});

    return <div>

        <h1 style={{textAlign:'center'}}>Use Fetch Hook</h1>

        { loading ? <h3 style={{textAlign:'center'}}>Loading...</h3> : null }

        { error !== null ? <h3 style={{textAlign:'center'}}> {error} </h3> : null }

        {
            data && data.products && data.products.length
            ? <div>
                {
                    data.products.map(item => (

                        <p key={item.id} style={{textAlign:'center'}}>{item.title}</p>
                    ))
                }
              </div>
            : null
        }
    </div>
}
const Refresh=({getData})=>{
    return <div className="container">
    <h1>No Tours Left</h1>
    <button onClick={()=>{
        getData()
    }} className="btn">Refresh</button>
    
    </div>
}

export default Refresh
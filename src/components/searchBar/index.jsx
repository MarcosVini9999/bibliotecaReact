function SearchBar(props){
    return(
        <>
            <input value={props.searchTerm} onChange={(e)=>{
                props.setSearchTerm(e.target.value)
                console.log(e)    
            }}></input>
        </>
    )
}
export default SearchBar;
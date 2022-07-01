function SearchButton(props){
    return(
        <>
            <button type="button" onClick={(e)=>props.onButtonClick()}></button>
        </>
    )
}
export default SearchButton;
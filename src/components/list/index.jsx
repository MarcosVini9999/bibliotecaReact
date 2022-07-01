function List({list}){
    return(
        <>
            {list.map((book, index)=>(
                <div key={index} style={{
                    backgroundColor: 'lightblue'
                }}>
                    <p>Autor:{book.author}</p>
                    <p>Título:{book.title}</p>
                    <a href={book.url}>URL</a>
                </div>
            ))}
        </>
    )
}
export default List;
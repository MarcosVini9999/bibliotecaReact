import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
function List({ list }) {
    return (
        <>
            {list.map((book, index) => (
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography>Título: {book.title || "----TÍTULO NÃI INFORMADO----"}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            <div>
                                <p>Autor:{book.author || "----AUTOR NÃO INFORMADO----"}</p>
                                <a href={book.url} target="_blank" rel="noreferrer">LINK</a>
                            </div>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            ))}
        </>
    )
}
export default List;
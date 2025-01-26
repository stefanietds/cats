import {
  Pagination,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TableRow,
} from "@mui/material";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import { tableCellClasses } from "@mui/material/TableCell";

const DataGrid = ({ data }) => {
  console.log("data", data);

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  // const [page, setPage] = useState(1);
  // const rowsPerPage = 2; 

  // const handlePageChange = (event, newPage) => {
  //   setPage(newPage); // Alterando a página ao clicar na paginação
  // };

  // // Calculando os dados a serem exibidos na página atual
  // const startIndex = (page - 1) * rowsPerPage;
  // const selectedRows = data.slice(startIndex, startIndex + rowsPerPage);

  return (
    <div>
      <h1>Data Grid</h1>
      <div>
        {data.length > 0 ? (
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <StyledTableCell>ID</StyledTableCell>
                  <StyledTableCell>Name</StyledTableCell>
                  <StyledTableCell>Color</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((item) => (
                  <StyledTableRow key={item.id}>
                    <StyledTableCell>{item.id}</StyledTableCell>
                    <StyledTableCell>{item.name}</StyledTableCell>
                    <StyledTableCell>
                      {item.colors.map((color, index) => (
                        <div key={index}>{color.cor}</div> 
                      ))}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
              <TableFooter>
              {/* <Stack>
                   <Pagination count={Math.ceil(data.length / rowsPerPage)} page={page} onChange={handlePageChange} /> 
              </Stack> */}
            </TableFooter>
            </Table>
          </TableContainer>
        ) : (
          <p>No data available</p>
        )}
      </div>
    </div>
  );
};

DataGrid.propTypes = {
  data: PropTypes.array.isRequired,
};

export default DataGrid;

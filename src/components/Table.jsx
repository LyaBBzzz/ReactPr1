import { useState } from "react";
import TableBody from "./TableBody";
import TableHead from "./TableHead";
import Filter from "./Filter";

//Состояние для текущей страницы
const Table = (props) => {
  const [numPage, setNumPage] = useState(1);
  const [dataTable, setDataTable] = useState(props.data);

  // Обновление таблицы после фильтра
  const updateDataTable = (filteredData) => {
    setDataTable(filteredData);
    const newTotalPages = Math.ceil(filteredData.length / props.amountRows);
    
    //переходим на последнюю стр
    if (numPage > newTotalPages) {
      setNumPage(newTotalPages > 0 ? newTotalPages : 1);
    }
  };


  const amountRows = props.showPagination ? props.amountRows : dataTable.length;
  //общее количество страниц
  const totalPages = Math.ceil(dataTable.length / props.amountRows);
  //массив номеров страничек
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  const shouldShowPagination = props.showPagination && totalPages > 1;


  // table таблица с данными
  // TableHead заголовок. ключи как названия колонок
  //  <div style={{ marginTop: "10px" }}> ... пагинация
  return (
    <>
      <h4>Фильтры</h4>
      <Filter filtering={updateDataTable} fullData={props.data} />

      <table className="buildings-table">
        <TableHead head={Object.keys(props.data[0])} />
        <TableBody
          body={dataTable}
          amountRows={props.amountRows}
          numPage={props.showPagination ? numPage : 1} //1, если пагинация отключена
          showPagination={props.showPagination}
        />
      </table>


      {shouldShowPagination && (
        <div style={{ marginTop: "10px" }}>
          {pages.map((item) => (
            <span
              key={item}
              onClick={() => setNumPage(item)}
              style={{
                color: numPage === item ? "blue" : "black",
                fontWeight: numPage === item ? "bold" : "normal",
                display: "inline-flex",
                cursor: "pointer",
                userSelect: "none",
                fontSize: 20,
                margin: 6,
              }}
            >
              {item}
            </span>
          ))}
        </div>
      )}
    </>
  );
};

export default Table;

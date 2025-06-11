import TableRow from "./TableRow";

/*
   компонент, для вывода tbody таблицы
   пропсы:
      body - данные для таблицы в виде массива объектов
*/
const TableBody = (props) => {
  // Если пагинация отключена, показываем все строки
  const visibleRows = props.showPagination
    ? props.body.slice(
        (props.numPage - 1) * props.amountRows,
        (props.numPage - 1) * props.amountRows + props.amountRows
      )
    : props.body;

  return (
    <tbody>
      {visibleRows.map((row, idx) => (
        <tr key={idx}>
          <TableRow row={Object.values(row)} />
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;

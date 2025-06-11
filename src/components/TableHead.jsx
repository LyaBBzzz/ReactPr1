import TableRow from "./TableRow";

//компонент, для вывода thead таблицы
const TableHead = (props) => {
  //флаг что это заголовок
  return (
    <thead>
      <tr>
        <TableRow row={props.head} isHead={true} />
      </tr>
    </thead>
  );
};

export default TableHead;

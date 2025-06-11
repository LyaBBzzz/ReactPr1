/*
   компонент, для вывода строки таблицы
   пропсы:
      row - данные для формирования ячеек строки таблицы в виде массива
*/

const TableRow = (props) => {
  //создает ячейки
  const cells = props.row.map((item, index) =>
    props.isHead ? <th key={index}>{item}</th> : <td key={index}>{item}</td>,
  );

  return <>{cells}</>;
};

export default TableRow;

type Props = {
  columns: number;
  rows: number;
}

export function Table({columns, rows}: Props) {

  const rowsArray: unknown[] = [...new Array(rows)];
  const columnsArray: unknown[] = [...new Array(columns)];

  return (
    <table border={1}>
      <tbody>
        {rowsArray.map(() => {
          return (
            <tr>
              {columnsArray.map(() => <td>Cau</td>)}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}



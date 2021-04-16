import ReactDatatable from '@ashvin27/react-datatable';

const Filter = (props) => {
  const generateColumns = (column) => {
    if(column && column.length > 0) {
      const columnsTest = Object.keys(column[0]).map((data) => ({
        key: data,
        text: data.toUpperCase()
      }))
      return columnsTest
    }
  }
  
  const columns = generateColumns(props.dataset)

  const config = {
    page_size: 10,
    length_menu: [10, 20, 30, 40, 50],
    show_filter: true,
    show_pagination: true,
    button: {
        excel: false,
        print: false
    },
    pagination: "advance"
  }

  return (
    <>
      <div className="container">
      {props.dataset && <ReactDatatable
        config={config}
        records={props.dataset}
        columns={columns}
      />}
      </div>
      
    </>
  )
}

export default Filter

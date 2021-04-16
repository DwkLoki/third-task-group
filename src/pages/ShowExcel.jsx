import { useState } from "react"
import XLSX from "xlsx"
import Filter from './Filter'

const ShowExcel = () => {

  const [file, setFile] = useState(null)
  const [dataset, setDataset] = useState(null)

  const filePreview = (e) => {
    const files = e.target.files;
    files && files[0] && setFile(files[0]);

    if (files && files[0]) {
      /* Boilerplate to set up FileReader */
      const reader = new FileReader();
      const rABS = !!reader.readAsBinaryString;

      reader.onload = (e) => {
        // setLoadPreview(true);
        /* Parse data */
        const bstr = e.target.result;
        const wb = XLSX.read(bstr, {
          type: rABS ? "binary" : "array",
          bookVBA: true,
        });

        /* Get first worksheet */
        const wsname = wb.SheetNames[0];
        const ws = wb.Sheets[wsname];

        /* Convert array of arrays */
        const data = XLSX.utils.sheet_to_json(ws);
        console.log(data);

        setTimeout(() => {
          setDataset(data);
          // setLoadPreview(false);
        }, 500);
      };

      if (rABS) {
        reader.readAsBinaryString(files[0]);
      } else {
        reader.readAsArrayBuffer(files[0]);
      }
    }
  };
  
  return (
    <div>
      <h2>Proses Excel Reader</h2>
      <form>
        <input type="file" onChange={filePreview}></input>
      </form>
      <hr />
      <Filter dataset={dataset} />
    </div>
  )
}

export default ShowExcel

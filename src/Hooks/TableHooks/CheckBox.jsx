import { useState, useEffect } from "react";
import { MockData } from "./../../Mock/ListData";

const TableHooks = () => {
  const [selectAll, setSelectAll] = useState(false);
  const [data, setData] = useState([]);

  // set data
  useEffect(() => {
    const data = [...MockData];
    MockData.map((val, key) => {
      data[key].isChecked = false;
    });
    setData(data);
    return () => data();
  }, []);

  // check all table

  /**
   *
   * check all and uncheck all
   */
  const checkAll = async () => {
    setSelectAll(prevVal => !prevVal);
    data.map(val => {

        // check prev value from seelctAll
        if(!selectAll) {
            val.isChecked = true;
        } else {
            val.isChecked = false;
        }
    })
  };

  const checked = async (val, key) => {
    val.isChecked = !val.isChecked 
    data[key] = val;
    setData([...data]);
  };

  // return custom hooks
  return {
    data,
    selectAll,
    checkAll,
    checked
  };
};

export default TableHooks;

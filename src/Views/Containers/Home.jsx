import React, { Fragment, useState, useEffect } from "react";
import TitleHeader from "../Components/Text/Title";
import LargeCard from "../Components/Card/LargeCard";
import DashboardTable from "../Components/DashboardTable/DashboardTable";

const Home = (props) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <Fragment>
      {loading ? (
        ""
      ) : (
        <div id="wrapper">
          {/* 
                component Title Header (Default style)
                property 'fontFamily fontStyle fontWeight fontSize lineHeight color ' 
             */}
          <div className="dash-container">
            <TitleHeader type="page-title">
              Chart and Table Visualization
            </TitleHeader>

            <div className="box-wrapper">
              <LargeCard left="0"></LargeCard>
              <LargeCard right="0"></LargeCard>
            </div>
          </div>

          <div className="table-container">
            <DashboardTable />
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Home;

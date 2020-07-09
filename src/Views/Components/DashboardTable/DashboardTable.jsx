import React, {Fragment} from 'react';
import LabelTable from './LabelTable';
import './DashboardTable.scss'
import Checkbox from '../Checkbox/Checkbox';
import TableHooks from '../../../Hooks/TableHooks/CheckBox';

const DashboardTable = (props) => {


    // custom Hooks
    const {
        data,
        selectAll,
        checkAll,
        checked
    } = TableHooks();


    return (
        <Fragment>
            <div className="dash-table">
                <div className="list-headers body-1" >
                    <div>
                        <Checkbox ml="37px" 
                            click={() => {
                                checkAll();
                            }}  
                            isChecked={selectAll}
                        />
                    </div>
                    <div>
                        <LabelTable title="name" />
                    </div>
                    <div>
                        <LabelTable title="category" />
                    </div>  
                    <div>
                        <LabelTable title="avaibility" />
                    </div>
                    <div>
                        <LabelTable title="arrival" />
                    </div>
                </div>


                <div className="list-body">
                    {
                        data.map((val, key)  => {
                            let  classIndex = parseInt(key) + 1;
                            return (
                            <div className={'body body-'+ classIndex} key={key}>
                                <div>
                                    <Checkbox  
                                        click={() => {checked(val, key)}}
                                        isChecked={val.isChecked} 
                                    />
                                </div>
                                <div>
                                    <LabelTable
                                        fontSize="18px"
                                        lineHeight="16px"
                                        opacity="1"
                                        latterSpacing="0.1px"
                                        title={val.name} 
                                     />
                                </div>
                                <div>
                                    <LabelTable
                                        fontSize="18px"
                                        lineHeight="16px"
                                        opacity="1"
                                        latterSpacing="0.1px"
                                        title={val.category} 
                                    />
                                </div>  
                                <div>
                                    <LabelTable
                                        fontSize="18px"
                                        lineHeight="16px"
                                        opacity="1"
                                        latterSpacing="0.1px"
                                        title={val.avaibility
                                    } />
                                </div>
                                <div>
                                    <LabelTable
                                        fontSize="18px"
                                        lineHeight="16px"
                                        opacity="1"
                                        latterSpacing="0.1px"
                                        title={val.arrival} /
                                    >
                                </div>
                            </div>
                            );
                        })
                    }
                </div>
            </div>
        </Fragment>
    )
}

export default DashboardTable;
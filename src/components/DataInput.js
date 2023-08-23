/**
 * @Author: Your name
 * @Date:   2023-04-26 16:42:42
 * @Last Modified by:   Your name
 * @Last Modified time: 2023-08-23 08:24:03
 */
import React from 'react'; 
import '../styles/styles.css';

const DataInput = (props) => {

    const handleChange = (e) => {
        props.onDataInputChange(e.target);
    }

    return(
        <form className="component">
            <div className="sub-component">
                <div className="title">Zero Corrections: </div>
                    <div className="inputs">
                        <label htmlFor='zcXInput'>X coordinate: </label>
                        <input id='zcXInput' name='zcX' type='number' value={props.zcX} onChange={handleChange}/>
                        <label htmlFor='zcYInput'>Y coordinate: </label>
                        <input id='zcYInput' name='zcY' type='number' value={props.zcY} onChange={handleChange}/>
                    </div>
                <div className="title">G93: </div>
                    <div className="inputs">
                        <label htmlFor='g93XInput'>G93 X coordinate: </label>
                        <input id='g93XInput' name='g93X' type='number' value={props.g93X} onChange={handleChange}/>
                        <label htmlFor='g93YInput'>G93 Y coordinate: </label>
                        <input id='g93YInput' name='g93Y' type='number' value={props.g93Y} onChange={handleChange}/>
                    </div>
                <div className="title">Drill Diameter: </div>
                    <div className="inputs">
                        <label htmlFor='drillDiaInput'>Drill Diameter: </label>
                        <input id='drillDiaInput' name='drillDia' type='number' value={props.drillDia} onChange={handleChange}/>
                    </div>
            </div>
            <div className="sub-component">
                <div className="title">Spacings: </div>
                    <div className="inputs">
                        <label htmlFor='dist_1Input'>First 4 holes: </label>
                        <input id='dist_1Input' name='dist_1' type='number' value={props.dist_1} onChange={handleChange}/>
                        <label htmlFor='dist_2Input'>Step and Repeat - 10 x 10 grid: </label>
                        <input id='dist_2Input' name='dist_2' type='number' value={props.dist_2} onChange={handleChange}/>
                        <label htmlFor='dist_3Input'>Step and Repeat - 100 x 100 grid: </label>
                        <input id='dist_3Input' name='dist_3' type='number' value={props.dist_3} onChange={handleChange}/>
                    </div>
                <div className="title">Rows and Columns: </div>
                    <div className="inputs">
                        <label htmlFor='rowInput'>Rows: </label>
                        <input id='rowInput' name='row' type='number' value={props.row} onChange={handleChange}/>
                        <label htmlFor='columnInput'>Columns: </label>
                        <input id='columnInput' name='column' type='number' value={props.column} onChange={handleChange}/>
                    </div>
                <div className="title">Step and Repeats: </div>
                    <div className="inputs">
                        <label htmlFor='SRRowInput'>Rows: </label>
                        <input id='SRRowInput' name='SRRow' type='number' value={props.SRRow} onChange={handleChange}/>
                        <label htmlFor='SRRowDistInput'>Row Distance: </label>
                        <input id='SRRowDistInput' name='SRRowDist' type='number' value={props.SRRowDist} onChange={handleChange}/>
                        <label htmlFor='SRColumnInput'>Columns: </label>
                        <input id='SRColumnInput' name='SRColumn' type='number' value={props.SRColumn} onChange={handleChange}/>
                        <label htmlFor='SRColDistInput'>Column Distance: </label>
                        <input id='SRColDistInput' name='SRColDist' type='number' value={props.SRColDist} onChange={handleChange}/>
                    </div>
            </div>
        </form>
    );
}

export default DataInput;
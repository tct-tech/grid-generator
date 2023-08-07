import React, { useState } from 'react';
import DataInput from './DataInput';
import '../styles/styles.css';
import FileSaver from 'file-saver';

const Content = () => {
    const [zcX, setZcX] = useState('');
    const [zcY, setZcY] = useState('');
    const [g93X, setG93X] = useState('');
    const [g93Y, setG93Y] = useState('');
    const [drillDia, setDrillDia] = useState('');
    const [dist_1, setDist_1] = useState('');
    const [dist_2, setDist_2] = useState('');
    const [dist_3, setDist_3] = useState('');
    const [row, setRow] = useState('');
    const [column, setColumn] = useState('');
    const [fileName, setFileName] = useState('');

    const handleChange = (input) => {
        switch (input.name){
            case "zcX":
                setZcX(input.value);
                break;
            case "zcY":
                setZcY(input.value);
                break;
            case "g93X":
                setG93X(input.value);
                break;
            case "g93Y":
                setG93Y(input.value);
                break;
            case "drillDia":
                setDrillDia(input.value);
                break;
            case "dist_1":
                setDist_1(input.value);
                break;
            case "dist_2":
                setDist_2(input.value);
                break;
            case "dist_3":
                setDist_3(input.value);
                break;
            case "row":
                setRow(input.value);
                break;
            case "column":
                setColumn(input.value);
                break;
            default:
                console.log('input err');
        }
    }

    const handleFileNameChange = (input) => {
        setFileName(input.target.value);
    }

    const handleClick = (e) => {
        e.preventDefault();
        if(!zcX || !zcY || !g93X || !g93Y || !drillDia || !dist_1 || !dist_2 || !dist_3 || !row || !column){
            alert('Missing parameters, all fields are required');
            return;
        }
        let content = 
            'include("simple.js");' + 
            `for(r=0;r<${row};r++){` +
            `for(c=0;c<${column}; c++){` +
            'for(i=0;i<5;i++){' +
            'for(j=0;j<5;j++){' +
            `addCircle(${dist_2}*j+c*${dist_3}+${Number(zcX)+Number(g93X)},${dist_2}*i+r*${dist_3}+${Number(zcY)+Number(g93Y)},${drillDia/2});` +
            `addCircle(${dist_2}*j+c*${dist_3}+${Number(dist_1)+Number(zcX)+Number(g93X)},${dist_2}*i+r*${dist_3}+${Number(dist_1)+Number(zcY)+Number(g93Y)},${drillDia/2});` +
            `addCircle(${dist_2}*j+c*${dist_3}+${Number(dist_1)+Number(zcX)+Number(g93X)},${dist_2}*i+r*${dist_3}+${Number(zcY)+Number(g93Y)},${drillDia/2});` +
            `addCircle(${dist_2}*j+c*${dist_3}+${Number(zcX)+Number(g93X)},${dist_2}*i+r*${dist_3}+${Number(dist_1)+Number(zcY)+Number(g93Y)},${drillDia/2});` +
            '}}}}';
        let blob = new Blob([content], {
            type: "text/plain;charset=utf-8"
        });

        console.log(fileName);
        let saveFileName = fileName ? fileName + '.js' : 'program.js'
        
        FileSaver.saveAs(blob, saveFileName);
    }

    return(
        <div className='content'>
            <DataInput
                onDataInputChange={handleChange}
                zcX={zcX}
                zcY={zcY}
                g93X={g93X}
                g93Y={g93Y}
                drillDia={drillDia}
                dist_1={dist_1}
                dist_2={dist_2}
                dist_3={dist_3}
                row={row}
                column={column}
            />
            <input className='fileName' name='fileName' type='text' placeholder={'-- Input File Name Here --'} onChange={handleFileNameChange}/>
            <button type='submit' onClick={handleClick}>Generate Program</button>
        </div>
    );
}

export default Content;
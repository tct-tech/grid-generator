/**
 * @Author: Your name
 * @Date:   2023-04-26 16:42:42
 * @Last Modified by:   Your name
 * @Last Modified time: 2023-12-06 08:48:20
 */
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
    const [numX, setNumX] = useState('');
    const [numY, setNumY] = useState('');
    const [row, setRow] = useState('');
    const [column, setColumn] = useState('');
    const [fileName, setFileName] = useState('');
    const [entry, setEntry] = useState('');
    const [exit, setExit] = useState('');

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
            case "numX":
                setNumX(input.value);
                break;
            case "numY":
                setNumY(input.value);
                break;
            case "row":
                setRow(input.value);
                break;
            case "column":
                setColumn(input.value);
                break;
            case "entryExit":
                if(input.value === 'entry'){
                    setEntry('entry');
                    setExit('');
                    break;
                }else{
                    setExit('exit');
                    setEntry('');
                    break;
                }
            default:
                console.log('input err');
        }
    }

    const handleFileNameChange = (input) => {
        setFileName(input.target.value);
    }

    const handleClick = (e) => {
        e.preventDefault();
        if((!zcX || !zcY || !g93X || !g93Y || !drillDia || !dist_1 || !dist_2 || !dist_3 || !numX || !numY || !row || !column ) || (!entry && !exit)){
            alert('Missing parameters, all fields are required');
            return;
        }

        if(numX % 2 !== 0 || numY % 2 !== 0){
            alert('Base Pattern X and Y needs to be even number!');
            return;
        }

        if(entry){
            // console.log('ENTRY (Version1)');
            let content = 
            'include("simple.js");' + 
            `for(r=0;r<${row};r++){` +
            `for(c=0;c<${column}; c++){` +
            `for(i=0;i<${numY/2};i++){` +
            `for(j=0;j<${numX/2};j++){` +
            `addCircle(${2*dist_1}*j+c*${dist_3}+(${Number(zcX)+Number(g93X)}),${2*dist_1}*i+r*${dist_2}+${Number(zcY)+Number(g93Y)},${drillDia/2});` +
            `addCircle(${2*dist_1}*j+c*${dist_3}+(${Number(dist_1)+Number(zcX)+Number(g93X)}),${2*dist_1}*i+r*${dist_2}+${Number(dist_1)+Number(zcY)+Number(g93Y)},${drillDia/2});` +
            `addCircle(${2*dist_1}*j+c*${dist_3}+(${Number(dist_1)+Number(zcX)+Number(g93X)}),${2*dist_1}*i+r*${dist_2}+${Number(zcY)+Number(g93Y)},${drillDia/2});` +
            `addCircle(${2*dist_1}*j+c*${dist_3}+(${Number(zcX)+Number(g93X)}),${2*dist_1}*i+r*${dist_2}+${Number(dist_1)+Number(zcY)+Number(g93Y)},${drillDia/2});` +
            '}}}}';
            let blob = new Blob([content], {
                type: "text/plain;charset=utf-8"
            });

            let saveFileName = fileName ? fileName + '.js' : 'program.js'
           
            FileSaver.saveAs(blob, saveFileName);
        }else{
            // console.log('EXIT (Version4)');
            let content = 
            'include("simple.js");' + 
            `for(r=0;r<${row};r++){` +
            `for(c=0;c<${column}; c++){` +
            `for(i=0;i<${numY/2};i++){` +
            `for(j=0;j<${numX/2};j++){` +
            `addCircle(-${2*dist_1}*j-c*${dist_3}-(${Number(zcX)+Number(g93X)}),${2*dist_1}*i+r*${dist_2}+${Number(zcY)+Number(g93Y)},${drillDia/2});` +
            `addCircle(-${2*dist_1}*j-c*${dist_3}-(${Number(dist_1)+Number(zcX)+Number(g93X)}),${2*dist_1}*i+r*${dist_2}+${Number(dist_1)+Number(zcY)+Number(g93Y)},${drillDia/2});` +
            `addCircle(-${2*dist_1}*j-c*${dist_3}-(${Number(dist_1)+Number(zcX)+Number(g93X)}),${2*dist_1}*i+r*${dist_2}+${Number(zcY)+Number(g93Y)},${drillDia/2});` +
            `addCircle(-${2*dist_1}*j-c*${dist_3}-(${Number(zcX)+Number(g93X)}),${2*dist_1}*i+r*${dist_2}+${Number(dist_1)+Number(zcY)+Number(g93Y)},${drillDia/2});` +
            '}}}}';
            let blob = new Blob([content], {
                type: "text/plain;charset=utf-8"
            });

            let saveFileName = fileName ? fileName + '.js' : 'program.js'
           
            FileSaver.saveAs(blob, saveFileName);
        }
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
                numX={numX}
                numY={numY}
                row={row}
                column={column}
                entry={entry}
                exit={exit}
            />
            <input className='fileName' name='fileName' type='text' placeholder={'-- Input File Name Here --'} onChange={handleFileNameChange}/>
            <button type='submit' onClick={handleClick}>Generate Program</button>
        </div>
    );
}

export default Content;


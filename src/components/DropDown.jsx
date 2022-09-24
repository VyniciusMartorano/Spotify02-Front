import React from "react"



function Dropdown({IdforSelectLabel, data, optionValue, optionLabel, onChange}) {
    const options = data.map(
        item => {
            return <option key={item[optionValue]} value={item[optionValue]}>{item[optionLabel]}</option>
        }
    )

    return (
        <select onChange={(e) => {
            onChange(e.target.value)
            }} className="dropdown"  id={IdforSelectLabel}>
            {options}
        </select>
    )
}


export default Dropdown
import React, { useState } from "react";

export const List = () => {

    const [item, setItem] = useState([]);
    // const randomId = () => Math.floor(Math.random()*9999999)

    const handleChange = (e) => {

        if (e.key === 'Enter' && e.target.value != "") {
            console.log(e.target.value);
            setItem([...item, e.target.value]);

        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submit")
    }

    const handleDelete = (index) => {
        let updatedList = item.filter((object,i) => i !== index);
        setItem(updatedList);
    };

    console.log(item);

    // useEffect(() => {
    //     if (item.length == 0){
    //         setItem(id: randomId())
    //     }
    // }, [item]);

    return (
        <div className="card pag1">
            <form onSubmit={handleSubmit} className="m-2">
                    <input type="text" onKeyDown={handleChange} className="form-control border-0"/>
            </form>
            <ul className="list-group list-group-flush text-dark">
                {item.map((item, index) => 
                <div className="d-flex justify-content-between text-center m-2">
                    <li key={index} className="list-group-item border-0">{item}</li>
                    <button type="button" className="btn link-danger fs-5 fw-lighter" aria-label="Close" onClick={e => handleDelete(item.index)}>X</button>
                </div>)}
                    {/* Need to find how to howver on button effect and how to delete items without affecting others */}

            </ul>
            <div className="p-3 text-secondary fst-italic">
                {item.length} <span className="vw-100">item left</span>
            </div>
        </div>
    );
} 
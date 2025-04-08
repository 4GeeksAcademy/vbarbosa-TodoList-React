import React, { useId, useState } from "react";

export const List = () => {

    const id = Math.floor(Math.random(useId())*999999);
    const [list, setList] = useState([]);
    const [hidden, setHidden] = useState(false);

    const handleChange = (e) => {

        if (e.key === 'Enter' && e.target.value != "") {
            setList([{id: id, item: e.target.value}, ...list]);
        };
    }
    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const handleDelete = (id) => {
        let updatedList = list.filter((el) => el.id !== id);
        setList(updatedList);
    };

    console.log(list);

    return (
        <div className="card pag1">

            <form onSubmit={handleSubmit} className="m-2">
                    <input type="text" value={list.item} placeholder="What needs to be done?" onKeyDown={handleChange} className="form-control border-0"/>
            </form>

            <ul className="list-group list-group-flush text-dark">
                {list.map((el, id) => 

                <div className="d-flex justify-content-between text-center m-2"
                onMouseOver={() => setHidden(false)} 
                onMouseOut={() => setHidden(true)}>
                    <div >
                        <li key={el.id} className="list-group-item border-0">{el.item}</li>
                    </div>

                    {hidden ? null : <button type="button" className="btn link-danger fs-5 fw-lighter" onClick={() => handleDelete(el.id)}>X</button>}

                </div>)}
                    {/* Need to find how to howver on button effect and how to delete items without affecting others */}

            </ul>

            <div className="p-3 text-secondary fst-italic">
                {list.length <= 0 ? "No hay tareas, añadir tareas" : list.length + " item left"}<span className="vw-100"></span>
            </div>

        </div>
    );
} 
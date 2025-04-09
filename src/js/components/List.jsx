import React, { useId, useState } from "react";

export const List = () => {

    const id = Math.floor(Math.random(useId())*999);
    const [list, setList] = useState([])
    const [hidden, setHidden] = useState(false);

    const handleChange = (e) => {

        if (e.key === 'Enter' && e.target.value != "") {
            setList([{id: id, item: e.target.value}, ...list]);
        };
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const handleDelete = (id) => {
        let updatedList = list.filter((el) => el.id !== id);
        setList(updatedList);
    };

    console.log(list);

    return (

        <div className="shadow">
            <ul className="card list-group list-group-flush">
                <li className="list-group-item">
                    <form onSubmit={handleSubmit} className="p-2">
                        <input type="text" value={list.item} placeholder="What needs to be done?" onKeyDown={handleChange} className="form-control border-0 fs-5"/>
                    </form>
                </li>

                {list.map((el, id) => <div className="justify-content-center" onMouseEnter={()=> setHidden(false)} onMouseLeave={()=> setHidden(true)}>
                    <li key={id} className="list-group-item justify-content-between d-flex w-100">
                        {el.item}
                        {hidden ?  null : <button type="button" className="btn text-danger" onClick={() => handleDelete(el.id)}>X</button> }
                    </li>
                </div>)}

            </ul>
            <div className=" card-footer p-3 footer1 text-secondary fst-italic">
                {list.length <= 0 ? "No hay tareas, añadir tareas" : list.length + " item left"}
            </div>
        </div>
    );
} 
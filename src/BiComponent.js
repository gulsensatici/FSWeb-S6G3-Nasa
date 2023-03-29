import React from "react";
export default function BiComponent(props) {
    const { data,dateChange, currentDate} = props;
    function dateChangeHandler(e) {
        console.log(e.target.value);
        dateChange(e.target.value)
    }
    if (!data) return <h3>Yükleniyor...</h3>;
    return (
        <div>
            <p> {data.date} </p>
            <label htmlFor="apodDate">apodDate:</label>
            <input 
            onChange={(e)=> dateChangeHandler(e)}
            type="date"
            value={currentDate}
            name="apodDate"
            ></input>
            {data.media_type === "image"&& (
                < img src={data.hdurl}  alt={data.title}/>
            )}
            <p>{data.service_version}</p>
            <p>{data.title}</p>
            <p>{data.explanation}</p>
        </div>
    );
}
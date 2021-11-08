import React from 'react';
import { useForm } from 'react-hook-form';
import './AddPackage.css';

const AddPackage = () => {
    // Using Hook Form
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        fetch(`http://localhost:5000/package`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('A New Package Has Been Added Successfully!!');
                    reset();
                }
            })
    }
    return (
        <div className="add-service">
            <h2>Please Add a Service</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("packageName", { required: true, maxLength: 20 })} placeholder="packageName" />
                <textarea {...register("description")} placeholder="Description" />
                <input type="text" {...register("price")} placeholder="price" />
                <input type="text" {...register("location")} placeholder="location" />
                <input type="text" {...register("duration")} placeholder="duration" />
                <input {...register("imgUrl")} placeholder="imgUrl" />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddPackage;
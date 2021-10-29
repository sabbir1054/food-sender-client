import React from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import useAuth from '../../Hooks/useAuth';
import PageBanner from '../PageBanner/PageBanner';

const AddNew = () => {
    const { user } = useAuth();
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();
    const onSubmit = (data) => console.log(data);
    return (
      <div>
        <PageBanner text="Add Your New Food Here"></PageBanner>
        <Container className="text-center py-5">
          <h3 className="text-center text-dark">Provide Your Product Info</h3>
          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                className="w-75 my-3 py-2"
                placeholder="Enter Your Food Name"
                {...register("title")}
              />{" "}
              <br />
              <input
                className="w-75 my-3 py-2"
                placeholder="Enter Your Food Description"
                {...register("description")}
              />{" "}
              <br />
              <input
                className="w-75 my-3 py-2"
                placeholder="Enter Your Food Image Link"
                {...register("imgUrl")}
              />{" "}
              <br />
                        <input
                            type='number'
                className="w-75 my-3 py-2"
                placeholder="Enter Your Food Price"
                {...register("price")}
              />{" "} <br />
              <input
                type="submit"
                value="Add Your Food"
                className="btn btn-warning py-2 px-4 mb-3"
              />
            </form>
          </div>
        </Container>
      </div>
    );
};

export default AddNew;  
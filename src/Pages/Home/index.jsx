import Layout from "../../Layout"
import Card from '../../Components/Card'

//Hooks
import { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get('https://api.escuelajs.co/api/v1/products');
        setData(result.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);


  return (
    <Layout>
      Home
      <div className='grid grid-cols-4 gap-4 w-full max-w-screen-lg'>
        {data.map(item => (
          <Card key={item.id} data={item}/>
        ))}
      </div>
    </Layout>
  )
}

export default Home


/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';


const Read = () => {
  const [books, setBooks] = useState([])

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setBooks(data))
  }, [])

  console.log(books.author);
  const data = [
    {
      name: "The Hitchhiker's Guide to the Galaxy",
      uv: 192
    },
    {
      name: "Pride and Prejudice",
      uv: 224
    },
    {
      name: "To Kill a Mockingbird",
      uv: 324
    },
    {
      name: "The Lord of the Rings",
      uv:1136
    },
    {
      name: "The Catcher in the Rye",
      uv:224
    },
    {
      name: "Pride and Prejudice",
      uv:224
    }
  ]

  const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
    Z`;
  };
  
  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;
  
    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  return (
    <div>
      <BarChart
      width={1300}
      height={400}
      data={data}
      margin={{
        top: 40,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name"  />
      <YAxis dataKey= "uv" />
      <Bar dataKey="uv" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % 20]} />
        ))}
      </Bar>
    </BarChart>
    </div>
  )
}

export default Read

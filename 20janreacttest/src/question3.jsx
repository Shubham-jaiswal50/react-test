const Question3 = () => {
    const array = [
      {
        name: "shubham",
        rollno: 1234,
        city: "bhopal",
        gender: "male",
      },
      {
        name: "rahul",
        rollno: 1235,
        city: "bhopal",
        gender: "male",
      },
      {
        name: "simran",
        rollno: 1236,
        city: "indore",
        gender: "female",
      },
    ];
  
    const ans = array.map((key, index) => (
      <tr key={index}>
        <td>{key.name}</td>
        <td>{key.rollno}</td>
        <td>{key.city}</td>
        <td>{key.gender}</td>
      </tr>
    ));
  
    return (
      <>
        <table border="2px" cellPadding="3px">
          <thead>
            <tr>
              <th>Name</th>
              <th>Roll</th>
              <th>City</th>
              <th>Gender</th>
            </tr>
          </thead>
          <tbody>{ans}</tbody>
        </table>
      </>
    );
  };
  
  export default Question3;
  
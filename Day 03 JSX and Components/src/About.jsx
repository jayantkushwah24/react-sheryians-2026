function About(props) {
  console.log(props);
  
  return (
    <>
      <h1>Hy I am {props.name}.</h1>
      <h1>I am {props.age} years old.</h1>
      <h1>I am from {props.city}.</h1>
      {props.children}
    </>
  );
}
export default About;

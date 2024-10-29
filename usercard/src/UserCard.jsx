import PropTypes from "prop-types"
const userData=[
    {
        name:"RamaSwamy" ,
        city:"Chennai",
        description:"Front-end Developer",
        skills:["UI / UX","Frontend Development","HTML","CSS","JavaScript","React","Node"],
        online:true,
        profile:"public/img1.jpg"
    },
    {
        name:"KandhaSwamy" ,
        city:"Villupuram",
        description:"Fullstack Developer",
        skills:["UI / UX","Frontend Development","HTML","CSS","JavaScript","React","Node"],
        online:true,
        profile:"public/img2.jpg"
    },
    {
        name:"KuppuSwamy" ,
        city:"Madurai",
        description:"Back-end Developer",
        skills:["UI / UX","Frontend Development","HTML","CSS","JavaScript","React","Node"],
        online:false,
        profile:"public/img3.jpg"
    },
];

function User(props) {
    return <div className="card-container">
        <span className={props.online ? "pro online" : "pro offline"}>{props.online ?"ONLINE" :"OFFLINE"}</span>
        <img src={props.profile} className="img" alt="user" />
        <h3>{props.name}</h3>
        <h3>{props.city}</h3>
        <p>{props.description}</p>
        <div className="buttons">
            <button className="primary">Message</button>
            <button className="primary outline">Following</button>
        </div>
        <div className="skills">
            <h6>Skills</h6>
            <ul>
               {props.skills.map((skill,index)=>(
                <li key={index}>{skill}</li>
               ))}
            </ul>
        </div>
    </div>
}

export const UserCard = () => {
  return <>
  {userData.map((user,index)=>(
    <User key={index}
    name={user.name}
    city={user.city}
    description={user.description}
    online={user.online}
    profile={user.profile}
    skills={user.skills}
    
    />
  ))}
  </>
}

{/* <User name="James" city="New York"
  description="Front-end Developer"
  skills={["UI / UX","Frontend Development","HTML","CSS","JavaScript","React","Node"]}
  online={false} profile="public/img2.jpg"
  />  */}

  User.propTypes={
    name:PropTypes.string.isRequired,
    city:PropTypes.string.isRequired,
    description:PropTypes.string.isRequired,
    skills:PropTypes.arrayOf(PropTypes.string).isRequired,
    online:PropTypes.bool.isRequired,
    profile:PropTypes.string.isRequired,
  }
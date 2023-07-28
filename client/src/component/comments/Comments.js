import "./Comments.css";
const Comments = () => {
  const comment = [
    {
      id: 1,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
      name: "bala",
      userId: 1,
      profilePicture:
        "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    },
    {
      id: 2,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
      name: "sanjana",
      userId: 2,
      profilePicture:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBvcnRyYWl0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    },
  ];
  return (
    <div className="comments">
      {comment.map((cmd) => (
        <div className="user">
          <img src={cmd.profilePicture} alt="person" />
          <div className="cmd-person-detail">
            <span>{cmd.name}</span>
            <p>{cmd.desc}</p>
          </div>
          <div className="date">1 hour ago</div>
        </div>
      ))}
    </div>
  );
};
export default Comments;

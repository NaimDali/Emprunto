export default function UserCard({ user }) {
  const uppercase = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };
  return (
    <div className="clearfix">
      <div className="row">
        <div className="col-md-4 animated fadeIn" key={user.id}>
          <div className="card">
            <div className="card-body">
              <div className="avatar">
                <img src={user.picture} className="card-img-top" alt="" />
              </div>
              <h5 className="card-title">
                {uppercase(user.name.first) + " " + uppercase(user.name.last)}
              </h5>
              <p className="card-text">
                {user.location.city + ", " + uppercase(user.location.state)}
                <br />
                <span className="phone">{user.phone}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

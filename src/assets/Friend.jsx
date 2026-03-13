export default function Friend({ friend }) {
  return (
    // Ei outer 'div' ta thaktei hobe
    <div className="user-card"> 
      <div className="card-header">
        <h3>Name: {friend.name}</h3>
        <span>Username: {friend.username}</span>
      </div>

      <div className="card-body">
        {/* 'friendr' spelling thik kora hoyeche */}
        <p><strong>Email:</strong> {friend.email}</p> 
        <p><strong>City:</strong> {friend.address?.city}</p>
        <p><strong>Zip:</strong> {friend.address?.zipcode}</p>
      </div>
    </div>
  );
}
import Header from "../components/base/Header";

export default function Profile() {
  return (
    <div className="content-container">
      <Header />
      <h1>Profile Page</h1>
      <p>This is profile page</p>
      <p>Fullname : Nunung Ali Maulana</p>
      <p>Email : {localStorage.getItem()}</p>
    </div>
  );
}

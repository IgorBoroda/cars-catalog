import { useAuth } from "../../hooks/useAuth";

const Header = () => {
  const { user, setUser } = useAuth(); // ✅ useContext

  return (
    <div> {/* Обертка для корректного возврата JSX */}
      {user ? (
        <>
          <h2 className="text-xl m-2">Welcome, {user.name}!</h2>
          <button
            className="bg-[#f3f0f0] text-black mx-2 p-1 rounded-md"
            onClick={() => setUser(null)}
          >
            Logout
          </button>
        </>
      ) : (
        <button
          className="bg-[#fff] text-black p-1 mx-2 rounded-md"
          onClick={() => setUser({ name: "Igor" })}
        >
          Login
        </button>
      )}
    </div>
  );
};

export default Header;

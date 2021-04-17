import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import { selectUser } from "./features/userSlice";
import { auth } from "./firebase";
import Login from "./Login";
import { login, logout } from "./features/userSlice";

function App() {
	const dispatch = useDispatch();
	const user = useSelector(selectUser);

	useEffect(() => {
		auth.onAuthStateChanged((authUser) => {
			if (authUser) {
				dispatch(
					login({
						uid: authUser.uid,
						photo: authUser.photoURL,
						email: authUser.email,
						displayName: authUser.displayName,
					})
				);
			} else {
				dispatch(logout());
			}
		});
	}, [dispatch]);
	return (
		<div className="app">
			{user ? (
				<React.Fragment>
					<Sidebar />
					<Chat />
				</React.Fragment>
			) : (
				<Login />
			)}
		</div>
	);
}

export default App;

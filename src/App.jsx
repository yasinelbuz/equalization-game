import Settings from "./components/Settings";
import Matrix from "./components/Matrix";
import { useGlobal } from "./features/GlobalContext";
import ModalCom from "./components/ModalCom";

function App() {
	const { isOpen } = useGlobal();

	return (
		<div className="flex h-full">
			{isOpen && <Settings />}
			<Matrix />
			<ModalCom />
		</div>
	);
}

export default App;

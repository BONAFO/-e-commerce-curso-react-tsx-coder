import NavBar from "@/components/navBar/NavBar";
import ItemListContainer from "@/containers/page";

export default function Page(): React.ReactElement {
  return (
    <>
      <NavBar />
      <ItemListContainer />
    </>
  );
}

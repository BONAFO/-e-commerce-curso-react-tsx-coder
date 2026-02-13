import NavBar from "@/components/navBar/NavBar";
import ItemListContainer from "@/containers/PageContainer";

export default function Page(): React.ReactElement {
  return (
    <>
      <NavBar />
      <ItemListContainer />
    </>
  );
}

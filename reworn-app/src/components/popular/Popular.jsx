import SectionTitle from "../SectionTitle";
import Card from "../Card";
import redTshirt from "../../assets/clothes/redTshirt-Photoroom.jpg";
import whiteBlueShirt from "../../assets/clothes/whiteBlueShirt-Photoroom.jpg";
import jacket from "../../assets/clothes/jacket-Photoroom.jpg";
import mantle from "../../assets/clothes/mantle-Photoroom.jpg";

function Popular() {
  return (
    <section id="latest" className="px-1 md:px-24 h-auto">
      <SectionTitle title="Rrobat e javës" />
      <div className="grid grid-cols-4 gap-10 h-auto place-items-center">
        <Card
          image={redTshirt}
          alt="Girl 1"
          descr="Lorem ipsum dolor sit amet."
        />
        <Card image={jacket} alt="Girl 2" descr="Lorem ipsum dolor sit amet." />
        <Card
          image={whiteBlueShirt}
          alt="Girl 3"
          descr="Lorem ipsum dolor sit amet."
        />
        <Card image={mantle} alt="Girl 4" descr="Lorem ipsum dolor sit amet." />
      </div>
    </section>
  );
}

export default Popular;

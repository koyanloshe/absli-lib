import Image from "next/image";

import { H1, H3 } from "../../../components/atoms/Heading";
import { P } from "../../../components/atoms/Paragraph";
import Pattern from "../assets/pattern.png";

const ColorPalettePage = () => {
  return (
    <div className="container-fluid">
      <div className="row my-5">
        <div className="col-md-5">
          <H1 className="" fontWeight="bold">
            Colours
          </H1>
        </div>
        <div className="col-md-7">
          <P>
            Colours evoke emotions, convey messages, and
            establish a unique and memorable brand presence.
            This section provides an overview of the
            significance of each Colour in our palette and
            how they contribute to the overall brand
            experience. Consistent use of these Colours will
            ensure a recognizable visual identity.
          </P>
        </div>
        <hr className="my-5" />
      </div>
      <div className="row my-5">
        <div className="col-md-12">
          <Image
            alt="Pattern"
            className="w-100 mt-1 mb-5"
            src={Pattern}
          />
        </div>
      </div>
      <div className="row my-5 pb-5">
        <div className="col-md-5">
          <H3 fontWeight="bold">Getting colours right</H3>
        </div>
        <div className="col-md-7">
          <P>
            Colours in UI design can speak in ways that are
            every bit as powerful as copy. They not only
            affect how your design looks, but can go as far
            as to elicit emotion and reflect the personality
            of your brand. While Colour can be subjective,
            it's clear that good Colours can attract and
            convert users. Bad Colours, on the other hand,
            can turn away users and even make designs
            inaccessible and unusable.
          </P>
        </div>
      </div>
      <div className="row my-5 py-5">
        <div className="col-md-5">
          <div className="row">
            <H3 className="mb-4" fontWeight="bold">
              Primary Brand Colours
            </H3>
          </div>
          <div className="row">
            <div className="col-md-6 h-100">
              <div
                className="card p-2"
                style={{ backgroundColor: "#fff" }}
              >
                <P className="lead mb-0">White</P>
                <P>#fff</P>
              </div>
            </div>
            <div className="col-md-6 h-100">
              <div
                className="card p-2"
                style={{ backgroundColor: "#C7222A" }}
              >
                <P className="lead mb-0">Capital Red</P>
                <P>#C7222A</P>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-7">
          <P>
            Our primary Colours are the foundational
            elements of ABC’s visual identity. These hues
            embody the core essence of our brand,
            representing strength, reliability, and
            innovation. This colour palette is used across
            all the interactive elements such as CTA’s,
            links, inputs, selected states, etc. These brand
            Colours are the main Colours that make up the
            majority of the Colours used in the design
            system and components.
          </P>
        </div>
      </div>
    </div>
  );
};

export default ColorPalettePage;

import { H3 } from "@/packages/components/atoms/Heading";
import { P } from "@/packages/components/atoms/Paragraph";

const Typography = () => (
  <div className="container-fluid">
    {/*

        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet">

        */}
    <div className="row mt-2">
      <div className="col-md-10 offset-md-1">
        {/* Display headings */}
        {/* <H1 className="display-1">Display 1</H1>
        <H1 className="display-2">Display 2</H1>
        <H1 className="display-3">Display 3</H1>
        <H1 className="display-4">Display 4</H1>
        <H1 className="display-5">Display 5</H1>
        <H1 className="display-6">Display 6</H1> */}

        {/* Headings */}
        {/* <H1 className="tc-red-500" />
        <H2>h2. Bootstrap heading</H2>
        <H3>h3. Bootstrap heading</H3>
        <H4>h4. Bootstrap heading</H4>
        <H5>h5. Bootstrap heading</H5>
        <H6>h6. Bootstrap heading</H6> */}

        {/* Para-based headings */}
        <P className="h1 fw-medium">
          h1. Bootstrap heading
        </P>
        <P className="h2 fw-medium">
          h2. Bootstrap heading
        </P>
        <P className="h3 fw-medium">
          h3. Bootstrap heading
        </P>
        <P className="h4 fw-medium">
          h4. Bootstrap heading
        </P>
        <P className="h5 fw-medium">
          h5. Bootstrap heading
        </P>
        <P className="h6 fw-medium">
          h6. Bootstrap heading
        </P>
        <P className="">Bootstrap para</P>

        {/* Font size */}
        <P className="fs-1">.fs-1 text</P>
        <P className="fs-2">.fs-2 text</P>
        <P className="fs-3">.fs-3 text</P>

        {/* para alignment */}
        <P className="text-start">
          Start aligned text on all viewport sizes.
        </P>
        <P className="text-center">
          Center aligned text on all viewport sizes.
        </P>
        <P className="text-end">
          End aligned text on all viewport sizes.
        </P>

        <P className="text-sm-end">
          End aligned text on viewports sized SM (small) or
          wider.
        </P>
        <P className="text-md-end">
          End aligned text on viewports sized MD (medium) or
          wider.
        </P>
        <P className="text-lg-end">
          End aligned text on viewports sized LG (large) or
          wider.
        </P>
        <P className="text-xl-end">
          End aligned text on viewports sized XL (extra
          large) or wider.
        </P>
        <P className="text-xxl-end">
          End aligned text on viewports sized XXL (extra
          extra large) or wider.
        </P>

        {/* Text wrap */}
        <div
          className="badge text-bg-primary text-wrap"
          // style="width: 6rem;"
        >
          This text should wrap.
        </div>

        {/* Text overflow */}
        <div
          className="text-nowrap bg-body-secondary border"
          // style="width: 8rem;"
        >
          This text should overflow the parent.
        </div>

        {/* Word break */}
        <P className="text-break">
          mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm
        </P>

        {/* Text transform */}
        <P className="text-lowercase">Lowercased text.</P>
        <P className="text-uppercase">Uppercased text.</P>
        <P className="text-capitalize">CapiTaliZed text.</P>

        {/* Font weights & italics */}
        <P className="fw-bold">Bold text.</P>
        <P className="fw-bolder">
          Bolder weight text (relative to the parent
          element).
        </P>
        <P className="fw-semibold">Semibold weight text.</P>
        <P className="fw-medium">Medium weight text.</P>
        <P className="fw-normal">Normal weight text.</P>
        <P className="fw-light">Light weight text.</P>
        <P className="fw-lighter">
          Lighter weight text (relative to the parent
          element).
        </P>
        <P className="fst-italic">Italic text.</P>
        <P className="fst-normal">
          Text with normal font style
        </P>

        {/* Line heights */}
        <P className="lh-1">
          This is a long paragraph written to show how the
          line-height of an element is affected by our
          utilities. Classes are applied to the element
          itself or sometimes the parent element. These
          classes can be customized as needed with our
          utility API.
        </P>
        <P className="lh-sm">
          This is a long paragraph written to show how the
          line-height of an element is affected by our
          utilities. Classes are applied to the element
          itself or sometimes the parent element. These
          classes can be customized as needed with our
          utility API.
        </P>
        <P className="lh-base">
          This is a long paragraph written to show how the
          line-height of an element is affected by our
          utilities. Classes are applied to the element
          itself or sometimes the parent element. These
          classes can be customized as needed with our
          utility API.
        </P>
        <P className="lh-lg">
          This is a long paragraph written to show how the
          line-height of an element is affected by our
          utilities. Classes are applied to the element
          itself or sometimes the parent element. These
          classes can be customized as needed with our
          utility API.
        </P>

        {/* Monospace */}
        <P className="font-monospace">
          This is in monospace
        </P>

        {/* Reset color */}
        <P className="text-body-secondary">
          Secondary body text with a{" "}
          <a className="text-reset" href="#">
            reset link
          </a>
          .
        </P>

        {/* Text decoration  */}
        <P className="text-decoration-underline">
          This text has a line underneath it.
        </P>
        <P className="text-decoration-line-through">
          This text has a line going through it.
        </P>
        <a className="text-decoration-none" href="#">
          This link has its text decoration removed
        </a>

        {/* Fancy Heading */}
        <H3>
          Fancy display heading
          <small className="text-body-secondary">
            With faded secondary text
          </small>
        </H3>

        {/* Lead */}
        <P className="lead">
          This is a lead paragraph. It stands out from
          regular paragraphs.
        </P>

        {/* Inline Text elements */}
        <P>
          You can use the mark tag to <mark>highlight</mark>{" "}
          text.
        </P>
        <P>
          <del>
            This line of text is meant to be treated as
            deleted text.
          </del>
        </P>
        <P>
          <s>
            This line of text is meant to be treated as no
            longer accurate.
          </s>
        </P>
        <P>
          <ins>
            This line of text is meant to be treated as an
            addition to the document.
          </ins>
        </P>
        <P>
          <u>
            This line of text will render as underlined.
          </u>
        </P>
        <P>
          <small>
            This line of text is meant to be treated as fine
            print.
          </small>
        </P>
        <P>
          <strong>This line rendered as bold text.</strong>
        </P>
        <P>
          <em>This line rendered as italicized text.</em>
        </P>

        {/* Abbreviations */}

        <P>
          <abbr title="attribute">attr</abbr>
        </P>
        <P>
          <abbr
            className="initialism"
            title="HyperText Markup Language"
          >
            HTML
          </abbr>
        </P>

        {/* Blockquotes */}
        <blockquote className="blockquote">
          <P>
            A well-known quote, contained in a blockquote
            element.
          </P>
        </blockquote>

        {/* Naming a source */}
        <figure>
          <blockquote className="blockquote">
            <P>
              A well-known quote, contained in a blockquote
              element.
            </P>
          </blockquote>
          <figcaption className="blockquote-footer">
            Someone famous in{" "}
            <cite title="Source Title">Source Title</cite>
          </figcaption>
        </figure>

        {/* Aligning quotes */}
        <figure className="text-center">
          <blockquote className="blockquote">
            <P>
              A well-known quote, contained in a blockquote
              element.
            </P>
          </blockquote>
          <figcaption className="blockquote-footer">
            Someone famous in{" "}
            <cite title="Source Title">Source Title</cite>
          </figcaption>
        </figure>
        <figure className="text-end">
          <blockquote className="blockquote">
            <P>
              A well-known quote, contained in a blockquote
              element.
            </P>
          </blockquote>
          <figcaption className="blockquote-footer">
            Someone famous in{" "}
            <cite title="Source Title">Source Title</cite>
          </figcaption>
        </figure>

        {/* Lists */}
        <ul className="list-unstyled">
          <li>This is a list.</li>
          <li>It appears completely unstyled.</li>
          <li>Structurally, it's still a list.</li>
          <li>
            However, this style only applies to immediate
            child elements.
          </li>
          <li>
            Nested lists:
            <ul>
              <li>are unaffected by this style</li>
              <li>will still show a bullet</li>
              <li>and have appropriate left margin</li>
            </ul>
          </li>
          <li>
            This may still come in handy in some situations.
          </li>
        </ul>

        {/* Inline Lists */}
        <ul className="list-inline">
          <li className="list-inline-item">
            This is a list item.
          </li>
          <li className="list-inline-item">
            And another one.
          </li>
          <li className="list-inline-item">
            But they're displayed inline.
          </li>
        </ul>

        {/* Description list alignment */}
        <dl className="row">
          <dt className="col-sm-3">Description lists</dt>
          <dd className="col-sm-9">
            A description list is perfect for defining
            terms.
          </dd>

          <dt className="col-sm-3">Term</dt>
          <dd className="col-sm-9">
            <P>Definition for the term.</P>
            <P>
              And some more placeholder definition text.
            </P>
          </dd>

          <dt className="col-sm-3">Another term</dt>
          <dd className="col-sm-9">
            This definition is short, so no extra paragraphs
            or anything.
          </dd>

          <dt className="col-sm-3 text-truncate">
            Truncated term is truncated
          </dt>
          <dd className="col-sm-9">
            This can be useful when space is tight. Adds an
            ellipsis at the end.
          </dd>

          <dt className="col-sm-3">Nesting</dt>
          <dd className="col-sm-9">
            <dl className="row">
              <dt className="col-sm-4">
                Nested definition list
              </dt>
              <dd className="col-sm-8">
                I heard you like definition lists. Let me
                put a definition list inside your definition
                list.
              </dd>
            </dl>
          </dd>
        </dl>
      </div>
    </div>
  </div>
);

export default Typography;

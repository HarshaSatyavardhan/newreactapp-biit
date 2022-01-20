import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { default as FormData } from "form-data";
import Navbar from "../../components/Navbar";
import tw from "tailwind-styled-components";
import Editor from "../../components/Editor";
import Editortwo from "../../components/Editortwo";

const FirstProject = () => {
  const [solutestate, setSoluteState] = useState("");
  const [solventstate, setSolventState] = useState("");
  const [fetchData, setFetchData] = useState("");
  const [arrayData, setArrayData] = useState([]);
  const [showeditorone, setShoweditorone] = React.useState(false);
  const [showeditortwo, setShoweditortwo] = React.useState(false);

  const [Error, setError] = useState(null);

  var num = arrayData.map(function (subarray) {
    return subarray;
  });
  // states to keep track of check box
  console.log(solutestate);

  // const data1 = { solute: solutestate, solvent: solutestate };
  // console.log(data1);

  const onSubmit = (e) => {
    e.preventDefault(); // <-- prevent the default form action

    const formData = new FormData();
    formData.set("solute", solutestate); // <-- local component state
    formData.set("solvent", solventstate); // <-- local component state
    console.log({ solutestate, solventstate });

    fetch("https://flask-api-test1.herokuapp.com/predict", {
      method: "post",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        setFetchData(result.result.predictions);
        setArrayData(result.result.interaction_map);
      })
      .catch((err) => {
        setError(err.error);
        console.log(err);
      });
  };

  // border border-solid font-bold uppercase text-xs px-4 py-2 mr-1 mb-1

  function Row(props) {
    return (
      <tr className="row">
        {props.cols.map((item, i) => {
          return (
            <td
              className="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-gray-600 whitespace-no-wrap bg-white border border-gray-200 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none"
              key={i}
            >
              {item.toFixed(2)}
            </td>
          );
        })}
      </tr>
    );
  }

  return (
    <div>
      <Navbar transparent />
      <Header style={{ minHeight: "75vh" }}>
        <HeaderImage
          style={{
            backgroundImage:
              "url('https://res.cloudinary.com/practicaldev/image/fetch/s--aY8jKbxD--/c_imagga_scale,f_auto,fl_progressive,h_420,q_66,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/gfuvtuiovsav5i6313fs.gif')",
          }}
        >
          <span
            id="blackOverlay"
            className="w-full h-full absolute opacity-75 bg-black"
          ></span>
        </HeaderImage>

        {/* Projects edit here */}
      </Header>
      <section className="relative py-16 bg-gray-300">
        <div className="container mx-auto px-4">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
            <div className="px-6">
              <div className=" px-4 mt-6">
                <h3 className="text-2xl font-semibold leading-normal text-gray-800 ">
                  Abstract
                </h3>
              </div>
              <div className="mt-5 py-5 border-t border-gray-300 ">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-9/12 px-4">
                    <p className="flex mb-1 text-lg leading-relaxed text-gray-800 text-justify">
                      Solubility of drug molecules is related to pharmacokinetic
                      properties such as absorption and distribution, which
                      affects the amount of drug that is available in the body
                      for its action. Computational or experimental evaluation
                      of solvation free energies of drug-like molecules/solute
                      that quantify solubilities is an arduous task and hence
                      development of reliable computationally tractable models
                      is sought after in drug discovery tasks in pharmaceutical
                      industry. Here, we report a novel method based on graph
                      neural network to predict solvation free energies.
                      Previous studies considered only the solute for solvation
                      free energy prediction and ignored the nature of the
                      solvent, limiting their practical applicability. The
                      proposed model is an end-to-end framework comprising three
                      phases namely, message passing, interaction and prediction
                      phases. In the first phase, message passing neural network
                      was used to compute inter-atomic interaction within both
                      solute and solvent molecules represented as molecular
                      graphs. In the interaction phase, features from the
                      preceding step is used to calculate a solute-solvent
                      interaction map, since the solvation free energy depends
                      on how (un)favorable the solute and solvent molecules
                      interact with each other. The calculated interaction map
                      that captures the solute-solvent interactions along with
                      the features from the message passing phase is used to
                      predict the solvation free energies in the final phase.
                      The model predicts solvation free energies involving a
                      large number of solvents with high accuracy. We also show
                      that the interaction map captures the electronic and
                      steric factors that govern the solubility of drug-like
                      molecules and hence is chemically interpretable.
                    </p>
                  </div>
                </div>
              </div>

              <div className=" px-4 mt-6">
                <h3 className="text-2xl font-semibold leading-normal text-gray-800 ">
                  Methodology
                </h3>
              </div>
              <div className="mt-5 py-5 border-t border-gray-300 ">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-9/12 px-4">
                    <p className="flex mb-1 text-lg leading-relaxed text-gray-800 text-justify">
                      Architecture of CIGIN Model : Two examples one each for
                      solvent (NCCO) and solute (OCC) are used as a test case.
                      In this work, we encode molecules as graphs, where atoms
                      constitute the nodes and bonds the edges. The nodes and
                      the edges are characterized by a set of features. The
                      model proposed in this work named as the CIGIN model,
                      which stands for Chemically Interpretable Graph
                      Interaction Network, can be broken down into three phases
                      - message passing phase, interaction phase and prediction
                      phase.
                    </p>
                    <div className="flex justify-center">
                      <img
                        src={require("../../public/images/01.jpg").default}
                      />
                    </div>
                  </div>
                </div>

                <div className=" px-4 mt-6">
                  <h3 className="text-2xl font-semibold leading-normal text-gray-800 ">
                    Result
                  </h3>
                </div>

                <div className="flex flex-row mt-5 py-5 border-t border-gray-300 ">
                  <div className="flex flex-wrap flex-1  justify-center">
                    <div className="w-full lg:w-9/12 px-4">
                      <p className="flex mb-1 text-lg leading-relaxed text-gray-800 text-justify">
                        Plot of predicted (averaged over the five independent
                        10-fold cross validation runs) versus experimental
                        solvation free energies. Predictions with error less
                        than 1 kcal/mol lied between the two red lines.
                      </p>
                      <div className="flex justify-center">
                        <img
                          src={require("../../public/images/02.jpg").default}
                          width="400"
                          height="300"
                        />
                      </div>
                      <p className="flex mb-1 text-lg leading-relaxed text-gray-800 text-justify">
                        Interaction between the oxygen of water (solvent) and
                        atoms of primary (ethylamine), secondary (diethylamine)
                        and tertiary amines (triethylamine). The fractional
                        interaction of each atom were obtained and were
                        normalized (min-max) across the three solutes. The
                        predicted hydration free energy values are also given.
                      </p>
                      <div className="flex justify-center">
                        <img
                          src={require("../../public/images/04.jpg").default}
                        />
                      </div>
                      <p className="flex mb-1 text-lg leading-relaxed text-gray-800 text-justify">
                        Predicted values of the solvation free energies of
                        methanol in four different solvents with varying
                        polarities (). The contribution of the interaction of C
                        and O atoms of methanol with the each of these solvents
                        were calculated and the min-max normalized values of the
                        fractional interactions are given.
                      </p>
                      <div className="flex justify-center">
                        <img
                          src={require("../../public/images/06.jpg").default}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap flex-1 justify-center">
                    <div className="w-full lg:w-9/12 px-4">
                      <p className="flex mb-1 text-lg leading-relaxed text-gray-800 text-justify">
                        Plot of predicted (averaged over the five independent
                        10-fold cross validation runs) versus experimental
                        solvation free energies. Predictions with error less
                        than 1 kcal/mol lied between the two red lines.
                      </p>
                      <div className="flex justify-center">
                        <img
                          src={require("../../public/images/03.jpg").default}
                        />
                      </div>

                      <p className="flex mb-1 text-lg leading-relaxed text-gray-800 text-justify">
                        The structures of ortho- and para-nitrophenols showing
                        the possibility of intramolecular hydrogen bond only in
                        the ortho isomer along with the predicted hydration free
                        energies.
                      </p>
                      <div className="flex justify-center">
                        <img
                          src={require("../../public/images/05.jpg").default}
                          width="500"
                          height="300"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className=" px-4 mt-6">
                  <h3 className="text-2xl font-semibold leading-normal text-gray-800 ">
                    Discussion
                  </h3>
                </div>
                <div className="mt-5 py-5 border-t border-gray-300 ">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4">
                      <p className="flex mb-1 text-lg leading-relaxed text-gray-800 text-justify">
                        Solvation free energy as a property has widespread
                        applications in diverse fields of science and
                        technology. The current manuscript reports a novel
                        method based on graph interaction network for predicting
                        solvation free energies involving drug-like/small
                        organic molecules and generic organic solvents. We have
                        demonstrated the robustness of this method by validating
                        it by using different datasets and solvent holdout
                        tests. Interaction maps calculated for each
                        solvent-solute pair is demonstrated to reveal essential
                        molecular/atomic level details of the
                        inter/intramolecular interactions making the model
                        chemically interpretable. Given that this model
                        accurately captures interaction between solute and
                        solvent molecules, it is possible to extend this
                        approach to chemical and biological problems that
                        involve interactions between two molecular systems. For
                        example, the interaction map used here may be extended
                        to quantify rug-receptor interactions, which can be used
                        for computer enabled identification of new chemical
                        entities that bind to disease relevant protein targets,
                        a key exercise in pharmaceutical industry. Such a model
                        can also be used in lead optimization in drug design,
                        where the molecule is modified to maximize certain
                        contributions in the interaction map to enhance the
                        binding of a drug to a biological receptor.
                      </p>
                    </div>
                  </div>
                </div>

                <div className=" px-4 mt-6">
                  <h3 className="text-2xl font-semibold leading-normal text-gray-800 ">
                    Codes
                  </h3>
                </div>
                <div className="mt-5 py-5 border-t border-gray-300 ">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4">
                      <p className="flex mb-1 text-lg leading-relaxed text-gray-800 text-justify">
                        All Codes are available{" "}
                        <div className="hover:text-red-100">
                          <a href="https://github.com/devalab/CIGIN">here</a>
                        </div>
                      </p>
                    </div>
                  </div>
                </div>

                <div className=" px-4 mt-6">
                  <h3 className="text-2xl font-semibold leading-normal text-gray-800 ">
                    System
                  </h3>
                </div>
                <div className="mt-5 py-5 border-t border-gray-300 ">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4">
                      <p className="flex mb-1 text-lg leading-relaxed text-gray-800 text-justify">
                        Instructions : Please type the name of the Solute and
                        Solvent molecule to predict the Pharmacokinetic
                        Properties of the Drug-Like Molecules.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-row gap-6">
                  {showeditorone && <Editor {...{ setSoluteState }} />}

                  {showeditortwo && <Editortwo {...{ setSolventState }} />}
                </div>
                <form noValidate onSubmit={onSubmit}>
                  <div className="mt-8 space-y-6">
                    <button
                      className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShoweditorone((value) => !value)}
                    >
                      Solute
                    </button>
                    <button
                      className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShoweditortwo((value) => !value)}
                    >
                      Solvent
                    </button>
                    <input
                      className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                      placeholder="SOLUTE"
                      onChange={(e) => setSoluteState(e.target.value)}
                      value={solutestate}
                    />
                    <input
                      className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                      placeholder="SOLVENT"
                      onChange={(e) => setSolventState(e.target.value)} // <-- use correct state updater
                      value={solventstate}
                    />
                    <button
                      className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 active:bg-blue-700 disabled:opacity-50"
                      type="submit"
                    >
                      SUBMIT
                    </button>
                    <input
                      className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                      type="text"
                      readOnly
                      value={fetchData + " " + "Kcal/mol"}
                      name="OUTPUT"
                    />
                  </div>
                </form>

                <div className="flex justify-center mt-6">
                  <table className="table">
                    {arrayData.map((row, i) => {
                      return <Row key={i} cols={row} />;
                    })}
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FirstProject;

const Header = tw.div`
relative pt-16 pb-32 flex content-center items-center justify-center
`;

const HeaderImage = tw.div`
absolute top-0 w-full h-full bg-center bg-cover
`;

const HeaderText = tw.div`
container relative mx-auto
`;

const HeaderText_one = tw.div`
items-center flex flex-wrap
`;

const HeaderText_two = tw.div`
w-full lg:w-6/12 px-4 ml-auto mr-auto text-center
`;

const HeaderTextMain = tw.div`
text-white font-semibold text-5xl
`;

const HeaderTextMain_child = tw.p`
mt-4 text-lg text-gray-300
`;

const Aboutus = tw.h1`
w-full lg:w-6/12 px-4 ml-auto mr-auto text-center mb-4 font-semibold text-2xl

`;

const AboutusText = tw.p`
text-lg leading-relaxed m-4 text-gray-600
`;

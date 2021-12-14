import React, { useEffect, useState } from "react";
import {
  Document,
  Page,
  View,
  Text,
  Link,
  Font,
  StyleSheet,
  PDFViewer,
  Image,
  PDFDownloadLink,
  BlobProvider,
} from "@react-pdf/renderer";
import { getPublicFile } from "../../api/files";

const styles = StyleSheet.create({
  title: {
    margin: 20,
    fontSize: 25,
    textAlign: "center",
    backgroundColor: "#e4e4e4",
    textTransform: "uppercase",
    fontFamily: "Oswald",
  },
  body: {
    flexGrow: 1,
  },
  row: {
    flexGrow: 1,
    flexDirection: "row",
  },
  block: {
    flexGrow: 1,
  },
  text: {
    width: "60%",
    margin: 10,
    fontFamily: "Oswald",
    textAlign: "justify",
  },
  fill1: {
    width: "40%",
    backgroundColor: "#e14427",
  },
  fill2: {
    flexGrow: 2,
    backgroundColor: "#e6672d",
  },
  fill3: {
    flexGrow: 2,
    backgroundColor: "#e78632",
  },
  fill4: {
    flexGrow: 2,
    backgroundColor: "#e29e37",
  },
});

Font.register({
  family: "Oswald",
  src: "https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf",
});

const Doc1 = ({ done }) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const foo = async () => {
      const d = await new Promise((res, rej) => {
        setTimeout(() => {
          res({ player: { name: "Bob" } });
        }, 3000);
      });
      setData(d);
      setTimeout(() => {
        done();
      }, 1000);
    };
    foo();
  }, []);
  if (data === null) {
    return null;
  }
  return (
    <Document>
      <Page size="A4">
        <Image
          src={
            "https://storage.googleapis.com/ab3-dev-test.appspot.com/gallery/information-results/1/a-d418b7ce-8dcd-4db7-8acd-4e375918ffe3.jpg?GoogleAccessId=ab3-dev-test%40ab3-dev-test.iam.gserviceaccount.com&Expires=1636992725&Signature=1puB53iCpibdZT3BaoreCqE5TYvc13X2hEPZN%2B21PYAzT7i48PiEux6zTFcB%2B2JhVEzMVO2yX9%2BuK0tx5thGBCmXWsjM0YAxRy0wnwMuuh134ShNRpl%2BzrWpoBaOFUX3alNaZ4bxLwuDQOM0SlSshm39wbdWsxuFVXad95zFanDmrm7M%2BuwhcNtXOr42gTtim7iQK5hu4QS4bgT%2BBsfMF3dRLZeiBu0Q%2Btsl%2BHN9UfxPhgxNqcqTTca8orf2kL1hbRisTJREmTZfixfih71xRyW3hFo8SpFJMF2pFOSCkTSxaxstpKw9aMEu9M5RMCavMj7hL%2F31H%2FBgFDtqCYvFpg%3D%3D"
          }
        />
        <Link
          style={styles.title}
          src="https://es.wikipedia.org/wiki/Lorem_ipsum"
        >
          Lorem Ipsum
        </Link>
        <View style={styles.body}>
          <View style={styles.row}>
            <Text style={styles.text}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum.
            </Text>
            <View style={styles.fill1} />
          </View>
          <View style={styles.row}>
            <View style={styles.fill2} />
            <Text style={styles.text}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum.
            </Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.text}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum.
            </Text>
            <View style={styles.fill3} />
          </View>
        </View>
      </Page>
    </Document>
  );
};

export const PdfDocument1 = () => {
  const [isClicked, setClicked] = useState(false);
  const [isFinished, setFinished] = useState(false);
  const makeFileRequest = async (url) => {
    try {
      const data = await getPublicFile(url);
    } catch (err) {
      console.log("err fetch file", err);
    }
  };

  useEffect(() => {
    if (isFinished) {
      const elem = document.getElementById("some");
      elem.children[0].click();
    }
  }, [isFinished]);
  return (
    <div>
      <button
        onClick={() =>
          makeFileRequest(
            "https://storage.googleapis.com/ab3-dev-test.appspot.com/gallery/information-results/1/a-d418b7ce-8dcd-4db7-8acd-4e375918ffe3.jpg?GoogleAccessId=ab3-dev-test%40ab3-dev-test.iam.gserviceaccount.com&Expires=1636989144&Signature=dVRnTXMA9DhKVaxZLVy03JgVx0hPE0YCPZyPmLqxWzQ0XH33CyO67%2FpBg0XxD5ZP%2FkClJjlCkQVcszjAfP9lCOpGfonw9DL1VJaLcW9%2FkkDolLFT1DCReGnsUkzWr%2FRTo7BUqRs%2BogtDPTs2IjaYPAnvLy%2Fdp2PrhXI0pAD2Midx8namd%2FP8R1exrY3DyZMRxRFv%2Bi1nWKTn1PkmhHPfSUAJHVZ%2Bb1t%2BSgnhu7hMEl%2BfeM5H5KXpRtJgFaovn%2FA41j8ANXpEId3ylla7w5rX9tL3%2Bfkwp04xV107mKcbo30QhCF6q55LkBc8H3dV3nKpDO31ns%2FDqwAgCXCZEj6GwA%3D%3D"
          )
        }
      >
        RequestFor File
      </button>
      <button onClick={() => setClicked(true)}>Get Player</button>
      {isClicked ? (
        <div id={"some"}>
          <PDFDownloadLink
            document={<Doc1 done={() => setFinished(true)} />}
            fileName="fee_acceptance.pdf"
          >
            {({ blob, url, loading, error }) => {
              return null;
            }}
          </PDFDownloadLink>
        </div>
      ) : null}
    </div>
  );
};

import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import Box from "reusecore/src/elements/Box";
import Image from "reusecore/src/elements/Image";
import Heading from "reusecore/src/elements/Heading";
import FeatureBlock from "common/src/components/FeatureBlock";
import Container from "common/src/components/UI/Container";
import { TrustedWrapper } from "./trustedProof.style";
import ScalableImage from "common/src/assets/image/social-7.svg";

const TrustedHistory = ({
  row,
  col,
  title,
  description,
  sectionSubTitle,
  cardArea,
  featureTitleStyle,
  featureDescriptionStyle
}) => {
  const Data = useStaticQuery(graphql`
    query {
      cryptoJson {
        PROOFS_FEATURE {
          title
          des
          image {
            publicURL
          }
        }
      }
    }
  `);

  return (
    <TrustedWrapper id="trusted">
      <Container noGutter mobileGutter>
        <Box className="row" {...row}>
          <Box className="colleft" {...col} style={{ flexDirection: "column" }}>
            <FeatureBlock
              title={<Heading content="Kikr Social football" {...title} />}
              description="Every saturdays, mondays and wednesdays"
              additionalContent="Bibs, Water, Organiser and Fun included"
            />
          </Box>

          <Box className="colright" {...col} {...cardArea}>
            <Image
              src={ScalableImage}
              className="ScalableImage"
              alt="Scalable Section Image"
            />
          </Box>
        </Box>
      </Container>
    </TrustedWrapper>
  );
};

// Transactions style props
TrustedHistory.propTypes = {
  sectionHeader: PropTypes.object,
  sectionTitle: PropTypes.object,
  sectionSubTitle: PropTypes.object,
  row: PropTypes.object,
  col: PropTypes.object,
  featureTitleStyle: PropTypes.object,
  featureDescriptionStyle: PropTypes.object
};

// Trusted default style
TrustedHistory.defaultProps = {
  // Trusted section row default style
  row: {
    flexBox: true,
    flexWrap: "wrap",
    ml: "-15px",
    mr: "-15px"
  },
  // Trusted section col default style
  col: {
    pr: "15px",
    pl: "15px",
    width: [1, 1 / 2, 1 / 2, 1 / 2, 1 / 2],
    flexBox: true,
    alignSelf: "center"
  },

  // Trusted section title default style
  title: {
    fontSize: ["24px", "26px", "30px", "36px", "40px"],
    lineHeight: ["30px", "32px", "40px", "50px", "55px"],
    fontWeight: "700",
    color: "#32325d",
    letterSpacing: "-0.010em",
    mb: "20px",
    maxWidth: ["100%", "100%", "100%", "100%", "415px"]
  },
  // Trusted section description default style
  description: {
    fontSize: "16px",
    fontWeight: "400",
    color: "#525f7f",
    lineHeight: "28px",
    mb: ["25px", "25px", "30px", "30px", "45px"],
    maxWidth: ["100%", "100%", "100%", "100%", "430px"]
  },
  sectionSubTitle: {
    as: "span",
    fontSize: ["16px", "16px", "18px", "20px", "20px"],
    fontFamily: "Poppins",
    fontWeight: "600",
    lineHeight: "27px",
    color: "#525f7f"
  },
  // Button default style
  btnStyle: {
    minWidth: "156px",
    fontSize: "14px",
    fontWeight: "500"
  },
  featureTitleStyle: {
    fontSize: ["18px", "18px", "20px", "20px", "20px"],
    lineHeight: ["1", "1", "1", "1", "1"],
    fontWeight: "500",
    color: "#32325d",
    letterSpacing: "-0.010em",
    mb: "10px"
  },
  // Trusted section description default style
  featureDescriptionStyle: {
    fontSize: "16px",
    fontWeight: "400",
    color: "#525f7f",
    lineHeight: "27px"
  }
};

export default TrustedHistory;

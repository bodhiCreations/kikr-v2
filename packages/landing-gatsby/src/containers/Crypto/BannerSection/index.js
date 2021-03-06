import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Box from "reusecore/src/elements/Box";
import Text from "reusecore/src/elements/Text";
import Heading from "reusecore/src/elements/Heading";
import Button from "reusecore/src/elements/Button";
import Image from "reusecore/src/elements/Image";
import FeatureBlock from "common/src/components/FeatureBlock";
import Container from "common/src/components/UI/Container";
import Particles from "../../Agency/Particle";
import { Icon } from "react-icons-kit";
import { socialTwitter } from "react-icons-kit/ionicons/socialTwitter";
import { facebook2 } from "react-icons-kit/icomoon/facebook2";
import { instagram } from "react-icons-kit/icomoon/instagram";
import { whatsapp } from "react-icons-kit/icomoon/whatsapp";
import BannerBG from "common/src/assets/image/crypto/white_bg1.svg";
import BannerWrapper, { BgImageWrapper } from "./bannerSection.style";

const BannerSection = ({
  row,
  col,
  title,
  btnStyle,
  description,
  outlineBtnStyle
}) => {
  const ButtonGroup = () => (
    <Fragment>
      <a href="https://wa.me/+971507121314">
        <Button
          title="+971507121314"
          iconPosition="left"
          icon={<Icon icon={whatsapp} />}
          {...btnStyle}
        />
      </a>
    </Fragment>
  );
  const ShareButtonGroup = () => (
    <Fragment>
      <a href="https://www.instagram.com/kikr.fit">
        <Button
          title="Follow on Instagram"
          variant="textButton"
          iconPosition="left"
          icon={<Icon icon={instagram} />}
          {...outlineBtnStyle}
          className="btnWithoutColor"
        />
      </a>
      <a href="https://www.facebook.com/kikr.fit/">
        <Button
          title="Follow on Facebook"
          variant="textButton"
          iconPosition="left"
          icon={<Icon icon={facebook2} />}
          {...outlineBtnStyle}
          className="btnWithoutColor"
        />
      </a>
    </Fragment>
  );
  return (
    <BannerWrapper id="banner_section">
      <Particles />
      <BgImageWrapper>
        <Image src={BannerBG} alt="banner background" />
      </BgImageWrapper>
      <Container>
        <Box className="row" {...row}>
          <Box className="col" {...col}>
            <FeatureBlock
              title={<Heading content="Play in Dubai" {...title} />}
              description={
                <Text
                  content="Welcome to the fastest growing community of social and competitive football in Dubai. We empower local communities to be fit, make new playpals and have fun at the best football fields for the most affordable rates."
                  {...description}
                />
              }
              button={<ButtonGroup />}
            />
            <FeatureBlock button={<ShareButtonGroup />} />
          </Box>
        </Box>
      </Container>
    </BannerWrapper>
  );
};

BannerSection.propTypes = {
  title: PropTypes.object,
  btnStyle: PropTypes.object,
  description: PropTypes.object,
  contentStyle: PropTypes.object,
  discountText: PropTypes.object,
  discountAmount: PropTypes.object,
  outlineBtnStyle: PropTypes.object
};

BannerSection.defaultProps = {
  row: {
    flexBox: true,
    flexWrap: "wrap",
    ml: "-15px",
    mr: "-15px",
    alignItems: "center"
  },
  col: {
    pr: "15px",
    pl: "15px",
    width: ["100%", "100%", "100%", "60%", "65%"]
  },
  title: {
    fontSize: ["26px", "34px", "42px", "42px", "47px"],
    fontWeight: "700",
    color: "#fff",
    letterSpacing: "-0.025em",
    mb: ["20px", "25px"],
    lineHeight: "1.31"
  },
  description: {
    fontSize: ["14px", "16px", "18px", "18px", "20px"],
    color: "#fff",
    lineHeight: "30px",
    mb: "0",
    maxWidth: "550px"
  },
  btnStyle: {
    minWidth: ["120px", "156px"],
    fontSize: "15px",
    fontWeight: "700",
    borderRadius: "6px"
  },
  outlineBtnStyle: {
    minWidth: ["130px", "156px"],
    fontSize: "16px",
    fontWeight: "700",
    color: "#fff",
    p: "5px 10px"
  }
};

export default BannerSection;

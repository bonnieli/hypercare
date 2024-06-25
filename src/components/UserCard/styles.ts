const defaultStyles = {
  root: {
    borderRadius: 4,
    overflow: "hidden",
    width: 300,
    m: 2,
    boxShadow: 4,
  },
  header: {
    width: "100%",
    overflow: "hidden",
    backgroundColor: "white",
  },
  headerContent: {
    backgroundColor: "primary.main",
    borderRadius: "16px 16px 0 16px",
    overflow: "hidden",
    p: 2,
    display: "flex",
    justifyContent: "center",
  },
  avatar: {
    borderRadius: "50%",
    border: "2px solid white",
    p: "1px",
    overflow: "hidden",
    width: 60,
    height: 60,
    img: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },
  },
  description: {
    backgroundColor: "primary.main",
    width: "100%",
  },
  descriptionContent: {
    backgroundColor: "white",
    borderRadius: "0 16px 0 0 ",
    p: 2,
    textAlign: "center",
  },
};

export default defaultStyles;

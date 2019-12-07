import * as zoid from "zoid/dist/zoid.frameworks";

let CheckoutComponent = zoid.create({
  tag: "checkout-component",
  dimensions: {
    width: "500px",
    height: "500px"
  },
  url: ({ props }) => {
    return {
      demo: "http://localhost:3000",
      production: "https://my-site.com/login",
      test: "mock://www.my-site.com/base/test/windows/login/index.htm"
    }[props.env];
  },
  defaultContext: "popup",
  props: {
    env: {
      type: "string",
      default: () => "production"
    },

    prefilledEmail: {
      type: "string"
    }
  }
});

export default CheckoutComponent;

import React from "react";
import { ServicesStyle } from "./styles";
import { Flex, Grid } from "../Box/styles";

const Services = () => {
  const service = [
    {
      name: "DISCOVER",
      preview:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam beatae blanditiis repellat necessitatibus porro repudiandae voluptas provident assumenda mollitia? Expedita maiores consequatur perferendis veritatis quae, omnis similique optio quo velit.",
    },
    {
      name: "DEVELOP",
      preview:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam beatae blanditiis repellat necessitatibus porro repudiandae voluptas provident assumenda mollitia? Expedita maiores consequatur perferendis veritatis quae, omnis similique optio quo velit.",
    },
    {
      name: "DEPLOY",
      preview:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam beatae blanditiis repellat necessitatibus porro repudiandae voluptas provident assumenda mollitia? Expedita maiores consequatur perferendis veritatis quae, omnis similique optio quo velit.",
    },
  ];
  return (
    <ServicesStyle>
      <Grid gridCol="1fr 1fr 1fr" className="container" gap="50px">
        {service.map(({ name, preview }, index) => (
          <Flex flexDir="column" alignItems="flex-start">
            <h1>0{+index}</h1>
            <h2>{name}</h2>
            <p>{preview}</p>
          </Flex>
        ))}
      </Grid>
    </ServicesStyle>
  );
};
export default Services;

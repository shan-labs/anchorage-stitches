import React, { ReactNode } from "react";
import { Container } from "@chakra-ui/react";
import useMobile from "src/hooks/useMobile";
import SingleLayout from "./Single";

interface ICenteredLayoutProps {
  children?: ReactNode;
}

const CenteredLayout = ({ children }: ICenteredLayoutProps) => {
  const mobilep = useMobile();

  const fromTop = mobilep ? `20%` : `10%`;

  return (
    <SingleLayout>
      <Container position="relative" mt={fromTop}>
        {children}
      </Container>
    </SingleLayout>
  );
};
export default CenteredLayout;

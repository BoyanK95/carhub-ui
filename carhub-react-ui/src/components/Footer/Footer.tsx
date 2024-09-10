import React from "react";
import { Button } from "../ui/button";

const Footer = () => {
  return (
    <footer className="mt-8 flex justify-center">
      <Button variant="outline" className="mx-1">
        Previous
      </Button>
      <Button variant="outline" className="mx-1">
        1
      </Button>
      <Button variant="outline" className="mx-1">
        2
      </Button>
      <Button variant="outline" className="mx-1">
        3
      </Button>
      <Button variant="outline" className="mx-1">
        Next
      </Button>
    </footer>
  );
};

export default Footer;

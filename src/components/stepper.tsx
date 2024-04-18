import * as React from "react";
// import styled from "styled-components";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

import { styled } from "@mui/system";
import { Button } from "@mui/material";

const StepperWrapper = styled("div")({
  backgroundColor: "var(--Backgrounds-Background-3rd, #e6eaea)",
  display: "flex",
  flexDirection: "row",
  gap: "10px",
  justifyContent: "space-between",
  padding: "32px",

  "@media (max-width: 991px)": {
    padding: "20px",
  },
});

const RouteActionsContainer = styled("div")({
  display: "flex",
  gap: "10px",
  justifyContent: "flex-end",
});

const RouteActionButton = styled(Button)({
  backgroundColor: "transparent",
  borderColor: "rgba(0, 63, 45, 1)",
  borderRadius: "4px",
  borderStyle: "solid",
  borderWidth: "1px",
  color: "var(--primary-green-primary-main, #003f2d)",
  cursor: "pointer",
  display: "flex",
  flexDirection: "column",
  fontFamily: "Calibre-R, sans-serif",
  fontSize: "16px",
  fontWeight: 500,
  justifyContent: "center",
  lineHeight: "100%",
  padding: "5px 16px",
  textAlign: "center",
  whiteSpace: "nowrap",
  height: "16px",

  "@media (max-width: 991px)": {
    padding: "2px 20px",
    whiteSpace: "initial",
  },
});

const StepIcon = styled("div")(({ active }: { active?: boolean }) => ({
  alignItems: "center",
  backgroundColor: active
    ? "var(--primary-green-primary-main, #003f2d)"
    : "var(--Text-Dark-Text-Dark-2nd, rgba(26, 26, 26, 0.6))",
  borderRadius: "50%",
  color: "var(--Text-Light-Text-Light, #fff)",
  display: "flex",
  fontSize: "12px",
  height: "24px",
  justifyContent: "center",
  width: "24px",
}));

function MyComponent() {
  const [activeStep, setActiveStep] = React.useState(0);

  const steps = [
    { label: "Select Inspections" },
    { label: "Enter Route Details" },
    { label: "Customise Route" },
  ];

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleCancel = () => {
    setActiveStep(0);
  };

  return (
    <StepperWrapper>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
              StepIconComponent={({ active }) => (
                <StepIcon active={active}>{index + 1}</StepIcon>
              )}
            >
              {step.label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
      <RouteActionsContainer>
        <RouteActionButton onClick={handleCancel}>
          Cancel Route
        </RouteActionButton>
        <RouteActionButton
          onClick={activeStep === steps.length - 1 ? handleCancel : handleNext}
        >
          {activeStep === steps.length - 1 ? "Finish" : "Next"}
        </RouteActionButton>
      </RouteActionsContainer>
    </StepperWrapper>
  );
}

export default MyComponent;

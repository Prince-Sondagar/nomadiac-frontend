import styled from "styled-components";

export const PanelJoinWrap = styled.div`
  .MuiContainer-root {
    max-width: 1310px;
  }
  .progressBar {
    position: relative;
    p {
      position: absolute;
      top: 0;
      left: 0;
      text-align: center;
      font-size: 14px;
      font-weight: 600;
      color: #fff;
    }
  }
  button.btnNextStep {
    background-color: #edbb5f;
    color: #fff;
    font-weight: bold;
    min-width: 80px;
    font-size: 16px;
    margin: 32px 0;
  }
`;

export const FourPanel = styled.div`
  .faqBox {
    box-shadow: 0px 1px 10px #ddd;
    border-radius: 4px;
    p {
      text-shadow: rgb(0 0 0 / 15%) 0 0 1px;
      font-size: 18px;
      color: #494949;
      margin-bottom: 12px;
    }
    p.MuiFormHelperText-root.Mui-error {
      color: #d32f2f;
      font-size: 14px;
    }
    span.MuiTypography-root {
      color: #616161;
      word-break: break-all;
    }
    .MuiFormControl-root {
      .MuiFormGroup-root {
        display: block;
      }
      .MuiFormControlLabel-root {
        padding: 7px 10px;
        width: 100%;
        align-items: flex-start;
        .MuiRadio-root,
        .MuiCheckbox-root {
          padding: 0 9px;
        }
      }
    }
    .textfieldControl.MuiFormControl-root {
      padding: 7px 0px;
    }
    .MuiAutocomplete-root{
      .MuiInputBase-root{
        height: auto;
      }
    }
    .MuiInputBase-root {
      height: 38px;
      color: #848484;
      &:hover {
        .MuiOutlinedInput-notchedOutline {
          border-color: #0000003b !important;
        }
      }
    }
    .MuiInputBase-root.Mui-focused {
      .MuiOutlinedInput-notchedOutline {
        border-color: #edbb5f !important;
      }
    }
  }
  .text-field{
    .MuiFormControl-root{
      height: 100%;
      margin: 0px;
      margin-bottom: 15px;
    }
    .MuiTextField-root{
      .MuiInputBase-root{
        height: auto;
      }
    }
    .MuiFormHelperText-root{
      margin-bottom: 0px;
    }
  }
  .grid-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2px;
    width: 100%;
  }

  @media (max-width: 600px) {
    .grid-container {
      display: grid;
      grid-template-columns: repeat(1, 1fr); 
      gap: 2px; 
    }
`;

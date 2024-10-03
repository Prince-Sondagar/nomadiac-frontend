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
  button.btnValidate {
    margin: 20px 0 0 0;
  }
  .resendOtp {
    button {
      margin-top: 0;
    }
    p {
      margin-bottom: 0 !important;
    }
  }
`;

export const FaqWrap = styled.div`
  padding-top: 20px;
  .faqBox {
    box-shadow: 0px 1px 10px #ddd;
    border-radius: 4px;
    p {
      color: #616161;
      text-shadow: rgb(0 0 0 / 15%) 0 0 1px;
      margin-bottom: 10px;
      a {
        text-decoration: none;
      }
    }
    span.MuiTypography-root {
      color: #616161;
    }
    .countryFlag {
      padding: 0 15px;
      height: 36px;
      background-color: #fff2db;
      border: 1px solid #edbb5f;
      margin-right: -1px;
      border-right: 0;
      border-radius: 4px;
      span {
        font-size: 24px !important;
        line-height: 21px !important;
      }
      h6 {
        color: #757575;
        font-size: 14px;
      }
    }
    .profile-radioInput{
      .MuiFormGroup-root{
        @media screen and (max-width: 453px){
          flex-direction: column;
        }
      }
    }
  }
  .formWrap {
    .profile-txtField{
      .MuiInputBase-root{
        height: initial;
      }
    }
    p {
      font-size: 18px;
      color: #494949;
      margin-bottom: 20px;
    }
    p.Mui-error {
      color: #d32f2f !important;
      margin: 4px 0 0 0 !important;
      font-size: 14px !important;
    }
    p.MuiFormHelperText-root {
      margin-bottom: 0;
    }
    p.errResend {
      font-size: 14px;
      margin: 3px 0 0 0;
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
    }
    p.errMess {
      font-size: 14px;
      margin: 3px 0 0 0;
      color: #d32f2f;
    }
    h5 {
      color: #616161;
      font-size: 16px;
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
`;

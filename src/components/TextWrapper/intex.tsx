import styled from 'styled-components';

export const Wrapper = styled.div`
  div, p {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    paddingLeft:40px;
    font-size: 100%;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    vertical-align: baseline;
    background: transparent;
  }

  :focus {
    outline: 0;
  }

  p {
    padding-bottom: 1em;
  }

  p:not(.has-background):last-of-type {
    padding-bottom: 0;
  }

  * {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }

  .et_pb_module.et_pb_text_align_left {
    text-align: left;
  }

  .et_pb_module {
    position: relative;
    background-size: cover;
    background-position: 50%;
    background-repeat: no-repeat;
    -webkit-animation-timing-function: linear;
    animation-timing-function: linear;
    -webkit-animation-duration: 0.2s;
    animation-duration: 0.2s;
  }

  @media (min-width: 981px) {
    .et_pb_section div.et_pb_row .et_pb_column .et_pb_module:last-child {
      margin-bottom: 0;
    }
  }

  @media (max-width: 980px) {
    .et_pb_column .et_pb_module {
      margin-bottom: 30px;
    }

    .et_pb_row .et_pb_column .et_pb_module:last-child {
      margin-bottom: 0;
    }
  }

  @media (min-width: 981px) {
    .et_pb_gutters3 .et_pb_column_1_2 .et_pb_module {
      margin-bottom: 5.82%;
    }
  }

  @media (min-width: 981px) {
    .et_pb_gutters4 .et_pb_column_1_2 .et_pb_module,
    .et_pb_gutters4.et_pb_row .et_pb_column_1_2 .et_pb_module {
      margin-bottom: 8.696%;
    }
  }

  .et_pb_text {
    word-wrap: break-word;
  }

  .et_pb_text > :last-child {
    padding-bottom: 0;
  }

  .et_pb_text_inner {
    position: relative;
  }

  .et_pb_text_1 {
    line-height: 2em;
    font-family: 'Poppins', Helvetica, Arial, Lucida, sans-serif;
    font-size: 16px;
    letter-spacing: 1px;
    line-height: 2em;
    max-width: 550px;
  }
`;
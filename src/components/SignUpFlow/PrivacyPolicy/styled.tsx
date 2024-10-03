
import styled from 'styled-components';

export const PanelJoinWrap = styled.div`
    .MuiContainer-root{
        max-width: 1310px;
    }
    .progressBar{
        position: relative;
        p{
            position: absolute;
            top: 0;
            left: 0;
            text-align: center;
            font-size: 14px;
            font-weight: 600;
            color: #fff;
        }
    }
    button.btnNextStep{
        background-color: #EDBB5F;
        color: #fff;
        font-weight: bold;
        min-width: 80px;
        font-size: 16px;
        margin: 32px 0;
    }
    button.Mui-disabled{
        background-color: #0000001f;
        color: #00000042;
    }
`;

export const FaqWrap = styled.div`
    padding-top: 20px;
    .faqBox{
        box-shadow: 0px 1px 10px #ddd;
        border-radius: 4px;
        p{
            color: #616161;
            text-shadow: rgb(0 0 0 / 15%) 0 0 1px;
            margin-bottom: 10px;
            a{
                text-decoration: none;
            }
        }
        span.MuiTypography-root{
            color: #616161;
        }
    }
`;

